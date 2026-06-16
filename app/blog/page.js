import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import blogPosts from "@/lib/blog-posts";

export const metadata = {
  title: 'Laundry Tips & Guides | Spinzo Blog | Bangalore Laundry Service',
  description: 'Expert laundry tips, fabric care guides, and insights about laundry services in South Bangalore. Learn about wash and fold, dry cleaning, steam ironing, and more.',
};

const categoryColors = {
  'Guides': 'bg-blue-50 text-blue-700 border-blue-100',
  'Tips': 'bg-emerald-50 text-emerald-700 border-emerald-100',
  'How It Works': 'bg-amber-50 text-amber-700 border-amber-100',
  'Services': 'bg-purple-50 text-purple-700 border-purple-100',
  'Local Guide': 'bg-rose-50 text-rose-700 border-rose-100',
};

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-14">
            <span className="text-sm font-bold uppercase tracking-widest text-[#8B5CF6] mb-3 block font-sans">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 mb-4 font-display">
              Laundry Tips & Guides
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Expert advice on fabric care, laundry tips, and everything you need to know about
              professional laundry services in Bangalore. From wash and fold to dry cleaning,
              we cover it all.
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-14">
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl border border-purple-100/50 p-8 md:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${categoryColors[blogPosts[0].category] || 'bg-gray-50 text-gray-700 border-gray-200'}`}>
                  {blogPosts[0].category}
                </span>
                <span className="text-sm text-zinc-400">{blogPosts[0].date}</span>
                <span className="text-sm text-zinc-400">·</span>
                <span className="text-sm text-zinc-400">{blogPosts[0].readTime}</span>
              </div>
              <Link href={`/blog/${blogPosts[0].slug}`} className="block group">
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 group-hover:text-[#8B5CF6] transition-colors font-display mb-3">
                  {blogPosts[0].title}
                </h2>
                <p className="text-zinc-600 leading-relaxed max-w-2xl">
                  {blogPosts[0].excerpt}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-[#8B5CF6] group-hover:gap-2 transition-all">
                  Read article →
                </span>
              </Link>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mb-10">
            <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">Browse by Topic</h3>
            <div className="flex flex-wrap gap-2">
              {['All', ...new Set(blogPosts.map(p => p.category))].map((cat) => (
                <span
                  key={cat}
                  className="text-xs font-semibold px-4 py-2 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:border-purple-300 hover:text-purple-600 transition-colors cursor-pointer"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-zinc-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${categoryColors[post.category] || 'bg-gray-50 text-gray-700 border-gray-200'}`}>
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-zinc-900 group-hover:text-[#8B5CF6] transition-colors font-display leading-snug mb-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-zinc-500 leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-zinc-400">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty state never shows since we have posts */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
