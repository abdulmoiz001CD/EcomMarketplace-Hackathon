import Image from "next/image"
import { PortableText } from '@portabletext/react';
import { urlFor } from "@/sanity/lib/client";

export type Blogs = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  author:string;
  mainImage: {
    asset: {
      _ref: string;
      _type: string;
      url: string;
    };
  };
  publishedAt: string;
  body: Array<any>;  
  excerpt: string;
  
}



interface BlogDetailPageProps {
  post: Blogs;
}

 const BlogPost: React.FC<BlogDetailPageProps> = ({ post })=> {
  console.log("Post Data:", post);
  console.log("Image URL:", post?.mainImage?.asset?.url);
  const imageUrl = post?.mainImage ? urlFor(post.mainImage) : null;
  
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64">


{imageUrl && (
          <div className="relative h-64 w-[95%] mx-auto mt-4">
            <Image
              src={imageUrl}
              alt={post.title}
              width={60}
              height={100}
              className="w-full object-center"
              quality={85}
              priority
            />
          </div>
        )}


        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
        
        <div className="prose prose-lg text-gray-700">
        <PortableText value={post.body} />
            </div>

          <div className="mt-6 flex items-center">
            <p className="font-semibold">{post.author}</p>
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-500">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}



export default BlogPost;