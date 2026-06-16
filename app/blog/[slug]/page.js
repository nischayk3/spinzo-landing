import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlogContent } from "@/components/BlogContent";
import blogPosts from "@/lib/blog-posts";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | Spinzo Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  };
}

const categoryColors = {
  'Guides': 'bg-blue-50 text-blue-700 border-blue-100',
  'Tips': 'bg-emerald-50 text-emerald-700 border-emerald-100',
  'How It Works': 'bg-amber-50 text-amber-700 border-amber-100',
  'Services': 'bg-purple-50 text-purple-700 border-purple-100',
  'Local Guide': 'bg-rose-50 text-rose-700 border-rose-100',
};

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug && p.category === post.category)
    .slice(0, 3);
  const randomRelated = blogPosts
    .filter(p => p.slug !== slug && p.category !== post.category)
    .slice(0, Math.max(0, 3 - relatedPosts.length));
  const displayRelated = [...relatedPosts, ...randomRelated].slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { '@type': 'Organization', name: 'Spinzo' },
          })
        }}
      />
      <Navbar />
      <main className="flex-1">
        {/* Article Header */}
        <section className="pt-32 pb-12 md:pb-16 bg-gradient-to-b from-purple-50/50 via-white to-white border-b border-zinc-100">
          <div className="max-w-3xl mx-auto px-6 md:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-[#8B5CF6] transition-colors mb-6"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className={`text-[11px] font-bold px-3 py-1.5 rounded-full border ${categoryColors[post.category] || 'bg-gray-50 text-gray-700 border-gray-200'}`}>
                {post.category}
              </span>
              <span className="text-sm text-zinc-400">{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-300" />
              <span className="text-sm text-zinc-400">{post.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-zinc-900 mb-5 font-display leading-tight">
              {post.title}
            </h1>

            <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl">
              {post.excerpt}
            </p>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-14 md:py-20">
          <div className="max-w-3xl mx-auto px-6 md:px-8">
            <BlogContent blocks={post.blocks} />
          </div>
        </article>

        {/* Related Posts */}
        {displayRelated.length > 0 && displayRelated[0] && (
          <section className="py-16 bg-zinc-50/80 border-t border-zinc-100">
            <div className="max-w-6xl mx-auto px-6 md:px-8">
              <h2 className="text-2xl font-bold text-zinc-900 mb-8 font-display">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {displayRelated.filter(Boolean).map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group bg-white rounded-2xl border border-zinc-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full border ${categoryColors[rp.category] || 'bg-gray-50 text-gray-700 border-gray-200'}`}>
                        {rp.category}
                      </span>
                      <span className="text-xs text-zinc-400">{rp.readTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-zinc-900 group-hover:text-[#8B5CF6] transition-colors font-display leading-snug mb-2">
                      {rp.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">
                      {rp.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-2xl font-bold text-zinc-900 mb-3 font-display">
              Ready to Try Spinzo?
            </h2>
            <p className="text-zinc-500 mb-8 max-w-xl mx-auto">
              Download the Spinzo app for free and get your first pickup in 30 minutes.
              Fresh clothes delivered within hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.nischayk3.Spinit"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-800 transition-all text-sm"
              >
                Download App
              </a>
              <Link
                href="/"
                className="px-6 py-3 bg-white text-zinc-900 rounded-full font-semibold border border-zinc-200 hover:border-purple-300 transition-all text-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
