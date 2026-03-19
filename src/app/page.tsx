import Link from "next/link";

const recentPosts = [
  {
    slug: "building-with-neon-and-railway",
    title: "Building with Neon & Railway",
    date: "March 15, 2026",
    excerpt:
      "A hands-on look at deploying a Next.js app with a serverless Postgres database on Railway — from zero to production in minutes.",
    tags: ["Next.js", "Postgres", "Railway"],
  },
  {
    slug: "why-i-moved-to-typescript",
    title: "Why I Moved Everything to TypeScript",
    date: "February 28, 2026",
    excerpt:
      "After years of plain JavaScript, I finally committed to TypeScript across all my projects. Here's what changed and what I learned.",
    tags: ["TypeScript", "Developer Experience"],
  },
  {
    slug: "the-tools-i-use-in-2026",
    title: "The Tools I Use in 2026",
    date: "January 10, 2026",
    excerpt:
      "My current dev setup: editors, terminals, CLIs, and the opinionated stack I reach for when starting something new.",
    tags: ["Tooling", "Productivity"],
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
            className="text-sm text-[#8b949e] hover:text-white transition-colors"
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

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #30363d 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4aa]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-[#161b22] border border-[#30363d] rounded-full px-4 py-2 text-sm text-[#00d4aa] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse" />
          Developer · Builder · Writer
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold text-white leading-tight mb-6">
          Hi, I&apos;m{" "}
          <span className="gradient-text">512M</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#8b949e] max-w-2xl mx-auto mb-12 leading-relaxed">
          I build things for the web. This is my corner of the internet — a
          place to share projects, ideas, and writing about software, tools, and
          the craft of building.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/blog"
            className="w-full sm:w-auto bg-[#00d4aa] hover:bg-[#00b894] text-[#0d1117] font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#00d4aa]/25"
          >
            Read the Blog
          </Link>
          <Link
            href="/about"
            className="w-full sm:w-auto bg-[#161b22] hover:bg-[#1c2128] border border-[#30363d] text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105"
          >
            About Me →
          </Link>
        </div>
      </div>
    </section>
  );
}

function RecentPostsSection() {
  return (
    <section className="py-24 bg-[#161b22]/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-white">Recent Posts</h2>
          <Link
            href="/blog"
            className="text-sm text-[#00d4aa] hover:underline"
          >
            All posts →
          </Link>
        </div>

        <div className="space-y-6">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-[#161b22] border border-[#30363d] rounded-2xl p-6 card-hover group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <h3 className="text-white font-semibold text-lg group-hover:text-[#00d4aa] transition-colors">
                  {post.title}
                </h3>
                <span className="text-[#8b949e] text-sm whitespace-nowrap">
                  {post.date}
                </span>
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
      </div>
    </section>
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

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1117]">
      <NavBar />
      <HeroSection />
      <RecentPostsSection />
      <Footer />
    </div>
  );
}
