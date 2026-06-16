import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import blogPosts from "@/lib/blog-posts";

export const metadata = {
  title: 'Laundry Tips & Guides | Spinzo Blog',
  description: 'Expert laundry tips, fabric care guides, and insights from Bangalore\'s fastest laundry service. Learn how to care for your clothes and save time on laundry.',
};

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 mb-4 font-display">
            Laundry Tips & Guides
          </h1>
          <p className="text-lg text-zinc-600 mb-12 max-w-2xl">
            Expert advice on fabric care, laundry tips, and everything you need to know about professional laundry services in Bangalore.
          </p>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <time className="text-sm text-purple-600 font-medium">{post.date}</time>
                <Link href={`/blog/${post.slug}`} className="block mt-1">
                  <h2 className="text-xl md:text-2xl font-bold text-zinc-900 hover:text-purple-600 transition-colors font-display">
                    {post.title}
                  </h2>
                </Link>
                <p className="mt-3 text-zinc-600 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block mt-4 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
