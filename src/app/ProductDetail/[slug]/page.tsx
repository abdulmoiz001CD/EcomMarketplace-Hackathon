// import { notFound } from 'next/navigation';
// import { client } from '@/sanity/lib/client';
// import ProductDetailPage from '@/app/ProductDetail/ProductDetailPage';





// // Fetch product details from Sanity
// async function getProductDetail(slug: string): Promise<any | null> {
//   try {
//     const data = await client.fetch(
//       `*[_type == "product" && _id == $slug][0] {
//        _id,
//        name,
//        title,
//        description,
//        image {
//          asset-> {
//            _ref,
//            _type,
//            url
//          }
//        },
//        price,
//        discountPercentage,
//        stockLevel,
//        category,
//       }`,
//       { slug }
//     );
//     return data;
//   } catch (error) {
//     console.error('Error fetching product:', error);
//     return null;
//   }
// }

// // Generate static paths for all products
// export async function generateStaticParams() {
//   try {
//     const query = `*[_type == "product"] {
//       "slug": _id
//     }`;
//     const products = await client.fetch(query);

//     return products.map((product: { slug: string }) => ({
//       slug: product.slug,
//     }));
//   } catch (error) {
//     console.error('Error generating static params:', error);
//     return [];
//   }
// }

// // Correctly type the Page component props
// // 
// export default async function page({ params }: { params: { slug: string } }) { 

//   const { slug } = params;

//   const product = await getProductDetail(slug);

//   if (!product) {
//     notFound();
//   }

//   return <ProductDetailPage product={product} />;
// }



// Import necessary modules
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import ProductDetailPage from '@/app/ProductDetail/ProductDetailPage';


// Fetch product details from Sanity
async function getProductDetail(slug: string): Promise<any| null> {
  try {
    const data = await client.fetch(
      `*[_type == "product" && _id == $slug][0] {
        _id,
        name,
        title,
        description,
        image {
          asset-> {
            url
          }
        },
        price,
        discountPercentage,
        stockLevel,
        category
      }`,
      { slug }
    );
    return data || null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

// Generate static paths for all products
export async function generateStaticParams() {
  const query = `*[_type == "product"] { "slug": _id }`;
  const products = await client.fetch(query);

  return products.map((product: { slug: string }) => ({
    slug: product.slug,
  }));
}

// Page component
export default async function ProductPage({ params }: { params:Promise<{slug:string}>}) {
  const { slug } = await params;

  // Fetch product details
  const product = await getProductDetail(slug);

  // Handle not found
  if (!product) {
    notFound();
  }

  // Render the product detail page
  return <ProductDetailPage product={product} />;


}
