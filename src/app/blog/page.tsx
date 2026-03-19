import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — 512M",
  description: "Writing about software, tools, and the craft of building.",
};

export const posts = [
  {
    slug: "building-with-neon-and-railway",
    title: "Building with Neon & Railway",
    date: "March 15, 2026",
    excerpt:
      "A hands-on look at deploying a Next.js app with a serverless Postgres database on Railway — from zero to production in minutes.",
    tags: ["Next.js", "Postgres", "Railway"],
    readingTime: "5 min read",
  },
  {
    slug: "why-i-moved-to-typescript",
    title: "Why I Moved Everything to TypeScript",
    date: "February 28, 2026",
    excerpt:
      "After years of plain JavaScript, I finally committed to TypeScript across all my projects. Here's what changed and what I learned.",
    tags: ["TypeScript", "Developer Experience"],
    readingTime: "7 min read",
  },
  {
    slug: "the-tools-i-use-in-2026",
    title: "The Tools I Use in 2026",
    date: "January 10, 2026",
    excerpt:
      "My current dev setup: editors, terminals, CLIs, and the opinionated stack I reach for when starting something new.",
    tags: ["Tooling", "Productivity"],
    readingTime: "6 min read",
  },
  {
    slug: "thinking-about-edge-databases",
    title: "Thinking About Edge Databases",
    date: "December 5, 2025",
    excerpt:
      "What does it mean to run a database at the edge? I explore the tradeoffs of latency, consistency, and developer experience.",
    tags: ["Databases", "Architecture"],
    readingTime: "8 min read",
  },
  {
    slug: "lessons-from-shipping-side-projects",
    title: "Lessons from Shipping Side Projects",
    date: "November 18, 2025",
    excerpt:
      "Five things I've learned from building and launching side projects over the years — what worked, what didn't, and what I'd do differently.",
    tags: ["Building", "Lessons"],
    readingTime: "9 min read",
  },
];

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4aa] to-[#3b82f6] flex items-center justify-center text-white font-bold text-sm">
        5
      </div>
      <span className="text-xl font-bold text-white tracking-tight">512M</span>
    </div>
  );
}

function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#30363d] bg-[#0d1117]/80 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm text-[#8b949e] hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-sm text-white transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-sm text-[#8b949e] hover:text-white transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#30363d] bg-[#161b22]/50 py-10">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Logo />
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-[#8b949e] text-sm hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-[#8b949e] text-sm hover:text-white transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-[#8b949e] text-sm hover:text-white transition-colors"
          >
            About
          </Link>
        </nav>
        <p className="text-[#8b949e] text-sm">© 2026 512M</p>
      </div>
    </footer>
  );
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0d1117]">
      <NavBar />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-[#161b22] border border-[#30363d] rounded-full px-4 py-2 text-sm text-[#00d4aa] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00d4aa]" />
            Writing
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-[#8b949e] text-lg leading-relaxed max-w-2xl">
            Thoughts on software, tools, and the craft of building things for
            the web.
          </p>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-[#161b22] border border-[#30363d] rounded-2xl p-6 card-hover group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <h2 className="text-white font-semibold text-xl group-hover:text-[#00d4aa] transition-colors">
                  {post.title}
                </h2>
                <div className="flex items-center gap-3 text-[#8b949e] text-sm whitespace-nowrap">
                  <span>{post.readingTime}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                </div>
              </div>
              <p className="text-[#8b949e] text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-[#00d4aa]/10 text-[#00d4aa] border border-[#00d4aa]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
