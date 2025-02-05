import { client } from '@/sanity/lib/client'
import { Blogs } from '@/app/Blogs/BlogPage/Blog'
import { notFound } from 'next/navigation'
import BlogDetailPage from '../Template'

interface Props {
  post: Blogs
}

// 1. Generate Static Paths dynamically for the App Directory
export async function generateStaticParams() {
  const query = `*[_type == "post"] { "slug": slug.current }`; // Ensure slug is correct

  const products = await client.fetch(query);

  return products.map((product: { slug: string }) => ({
    slug: product.slug, // Return slug directly
  }));
}

// 2. Fetching Post Data
async function getProductDetail(slug: string): Promise<any | null> {
  try {
    const data = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        title,
        slug,
        author,
        mainImage,
        publishedAt,
        body,
        excerpt,
      }`,
      { slug }
    );
    return data || null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

// 3. Static Props Fetching for Dynamic Pages
export default async function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  // Fetch product details based on the slug
  const product = await getProductDetail(slug);

  // Handle not found
  if (!product) {
    notFound();
  }

  // Return the product detail page with the fetched data
  return <BlogDetailPage post={product} />;
}
