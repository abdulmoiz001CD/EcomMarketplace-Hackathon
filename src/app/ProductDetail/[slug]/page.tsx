// import { notFound } from 'next/navigation';
// import { useDispatch } from 'react-redux';  
// import { addtoCart } from '@/app/Shop/Redux/CartSlice';
// import { client } from "@/sanity/lib/client";

// interface productType {
//   _id: string;
//    name: string;
//   description: string;
//   image: {
//     asset: {
//       _ref: string;
//       _type: string;
//       url: string;
//     };
//   };
//   price:string;
//   discountPercentage?:number;
//   stockLevel:number;
//   category:string
// }




// async function getProductDetail(slug: string): Promise<productType | null> {
//   try {
//     const data = await client.fetch(
//       `*[_type == "product" && _id == $slug][0] {
//        _id,
//        name,
//       description,
      
//         image {
//           asset-> {
//             _ref,
//             _type,
//             url
//           }
//         },
//        price,
//      discountPercentage,
//      stockLevel,
//      category,
//       }`,
//       { slug }
//     );

//     return data;
//   } catch (error) {
//     console.error('Error fetching blog:', error);
//     return null;
//   }
// }





// export async function generateStaticParams() {
//   try {
//     const query = `*[_type == "product"] {
//       "slug": _id
//     }`;
//     const blogs = await client.fetch(query);
    
//     // Add error checking and filtering
//     return blogs
//       .filter((blog: { slug: string }) => blog.slug) // Filter out any null slugs
//       .map((blog: { slug: string }) => ({
//         slug: blog.slug,
//       }));
//   } catch (error) {
//     console.error('Error generating static params:', error);
//     return []; // Return empty array if there's an error
//   }
// }










// const ProductDetailPage = async({ params }: { params: { slug: string } }) => {
 
//   const dispatch = useDispatch();

//   const handleAddToCart = () => {
//       const item = {
//          product
//       };
//       console.log('Dispatching item:', item); // Debug log
//       dispatch(addtoCart(item));
//   };
   
 
 
 
 
//   const product = await getProductDetail(params.slug);
//   if (!product) {
//     notFound();
//   }
//     return(

//       <div className="w-full max-w-6xl mx-auto p-4">
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//         <div className="p-6">
//           <div className="flex flex-col md:flex-row gap-8">
//             {/* Product Image - Left Side */}
//             <div className="w-full md:w-1/2">
//               <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-100">
//                 <img
//                   src={product.image.asset.url}
//                   alt={product.name}
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//             </div>
  
//             {/* Product Details - Right Side */}
//             <div className="w-full md:w-1/2 flex flex-col gap-4">
//               <div className="space-y-2">
//                 <h1 className="text-2xl font-bold tracking-tight text-gray-900">
//                   {product.name}
//                 </h1>
                
//                 <div className="flex items-center gap-2">
//                   <span className="text-3xl font-bold text-gray-900">
//                     ${product.price}
//                   </span>
//                   {product.stockLevel > 0 ? (
//                     <span className="px-2 py-1 text-sm rounded-full bg-green-100 text-green-800">
//                       In Stock ({product.stockLevel})
//                     </span>
//                   ) : (
//                     <span className="px-2 py-1 text-sm rounded-full bg-red-100 text-red-800">
//                       Out of Stock
//                     </span>
//                   )}
//                 </div>
//               </div>
  
//               <p className="text-gray-600 leading-relaxed">
//                 {product.description}
//               </p>
  
//               <div className="mt-4">
//                 <button  onClick={handleAddToCart}
//                   className={`w-full md:w-auto px-8 py-3 rounded-lg font-medium ${
//                     product.stockLevel === 0
//                       ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                       : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
//                   }`}
//                   disabled={product.stockLevel === 0}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
 
// );
// }


// export default ProductDetailPage;









import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import ProductDetailPage from '@/app/ProductDetail/ProductDetailPage';

interface productType {
  _id: string;
  name: string;
  description: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
      url: string;
    };
  };
  price: string;
  discountPercentage?: number;
  stockLevel: number;
  category: string;
}

async function getProductDetail(slug: string): Promise<productType | null> {
  try {
    const data = await client.fetch(
      `*[_type == "product" && _id == $slug][0] {
       _id,
       name,
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