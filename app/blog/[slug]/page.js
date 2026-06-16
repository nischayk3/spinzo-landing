import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import blogPosts from "@/lib/blog-posts";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-28 pb-20">
        <article className="max-w-3xl mx-auto px-6 md:px-8">
          <Link href="/blog" className="text-sm text-purple-600 hover:text-purple-700 font-medium mb-6 inline-block">
            ← Back to Blog
          </Link>

          <time className="text-sm text-purple-600 font-medium">{post.date}</time>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-zinc-900 mt-2 mb-6 font-display">
            {post.title}
          </h1>

          <div
            className="prose prose-lg max-w-none prose-headings:text-zinc-900 prose-p:text-zinc-700 prose-a:text-purple-600 prose-ul:text-zinc-700 prose-li:text-zinc-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-700"
            >
              ← Read More Articles
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
