import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — 512M",
  description: "A little bit about me, what I do, and what I'm building.",
};

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
            className="text-sm text-white transition-colors"
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0d1117]">
      <NavBar />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-[#161b22] border border-[#30363d] rounded-full px-4 py-2 text-sm text-[#00d4aa] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00d4aa]" />
            About me
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Hey, I&apos;m <span className="gradient-text">512M</span>
          </h1>
          <p className="text-[#8b949e] text-lg leading-relaxed max-w-2xl">
            I&apos;m a developer and builder who loves creating things for the
            web. I write about software, tools, and the craft of building — and
            occasionally ship projects that scratch my own itches.
          </p>
        </div>

        {/* Bio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6">
              <h2 className="text-white font-semibold text-lg mb-4">
                What I do
              </h2>
              <div className="space-y-3 text-[#8b949e] text-sm leading-relaxed">
                <p>
                  I spend most of my time building web applications — full-stack
                  projects that solve real problems. My go-to stack these days
                  is Next.js, TypeScript, and Postgres (usually via Neon).
                </p>
                <p>
                  When I&apos;m not coding, I&apos;m writing. I try to document
                  what I learn, the mistakes I make, and the tools that change
                  how I think about building software.
                </p>
                <p>
                  I believe in shipping early, iterating often, and keeping
                  things simple until they need to be complex.
                </p>
              </div>
            </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6">
              <h2 className="text-white font-semibold text-lg mb-4">
                Current stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "TypeScript",
                  "React",
                  "Postgres",
                  "Neon",
                  "Tailwind CSS",
                  "Railway",
                  "Vercel",
                  "Node.js",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-full bg-[#00d4aa]/10 text-[#00d4aa] border border-[#00d4aa]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6">
              <h2 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                Links
              </h2>
              <ul className="space-y-3">
                {[
                  { label: "GitHub", href: "https://github.com" },
                  { label: "Twitter / X", href: "https://x.com" },
                  { label: "Email", href: "mailto:hello@512m.io" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-between text-sm text-[#8b949e] hover:text-white transition-colors group"
                    >
                      <span>{link.label}</span>
                      <span className="text-[#30363d] group-hover:text-[#00d4aa] transition-colors">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6">
              <h2 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                Now
              </h2>
              <p className="text-[#8b949e] text-sm leading-relaxed">
                Building in public, writing more, and exploring what&apos;s
                possible with serverless Postgres at the edge.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#00d4aa]/10 to-[#3b82f6]/10 border border-[#00d4aa]/20 rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Want to read what I write?
          </h2>
          <p className="text-[#8b949e] mb-6">
            Head over to the blog for articles about development, tools, and
            ideas.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-[#00d4aa] hover:bg-[#00b894] text-[#0d1117] font-semibold px-8 py-3 rounded-xl transition-all duration-200 hover:scale-105"
          >
            Go to Blog →
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
