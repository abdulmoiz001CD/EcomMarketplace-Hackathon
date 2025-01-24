import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import ProductDetailPage from '@/app/ProductDetail/ProductDetailPage';
import { SanityProduct } from '@/app/types';

async function getProductDetail(slug: string): Promise<SanityProduct | null> {
  try {
    const data = await client.fetch(
      `*[_type == "product" && _id == $slug][0] {
       _id,
       name,
       title,
       description,
       image {
         asset-> {
           _ref,
           _type,
           url
         }
       },
       price,
       discountPercentage,
       stockLevel,
       category,
      }`,
      { slug }
    );

    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const query = `*[_type == "product"] {
      "slug": _id
    }`;
    const products = await client.fetch(query);

    return products
      .filter((product: { slug: string }) => product.slug)
      .map((product: { slug: string }) => ({
        slug: product.slug,
      }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const product = await getProductDetail(params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} />;
}



































// import { notFound } from 'next/navigation';
// import { client } from '@/sanity/lib/client';
// import ProductDetailPage from '@/app/ProductDetail/ProductDetailPage';
// import { SanityProduct } from '@/app/types';
// import { NextPage } from 'next';

// interface PageProp{
//   Params:{
//     slug:string;
//   }

// }

// // Fetch product details based on the slug
// async function getProductDetail(slug: string): Promise<SanityProduct | null> {
//   try {
//     const data = await client.fetch(
//       *[_type == "product" && _id == $slug][0] {
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
//       },
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
//     const query = *[_type == "product"] {
//       "slug": _id
//     };
//     const products = await client.fetch(query);

//     return products
//       .filter((product: { slug: string }) => product.slug)
//       .map((product: { slug: string }) => ({
//         slug: product.slug,
//       }));
//   } catch (error) {
//     console.error('Error generating static params:', error);
//     return [];
//   }
// }

// // Page component
// export default async function Page({ params }: { params: { slug: string } }) {
//   // Await the product data
//   const product = await getProductDetail(params.slug);

//   // If no product is found, render a 404 page
//   if (!product) {
//     notFound();
//   }

//   // Render the product detail page
//   return <ProductDetailPage product={product} />;
// }