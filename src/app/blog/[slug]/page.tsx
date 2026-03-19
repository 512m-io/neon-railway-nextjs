import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts } from "../page";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — 512M`,
    description: post.excerpt,
  };
}

const postContent: Record<string, string[]> = {
  "building-with-neon-and-railway": [
    "Getting a full-stack web app running in production used to mean a weekend of yak-shaving: provisioning servers, configuring databases, setting up CI, and debugging environment mismatches. These days, it can genuinely be done in an afternoon.",
    "In this post I'll walk through how I set up a Next.js app backed by a serverless Postgres database (Neon) and deployed to Railway. No DevOps degree required.",
    "Neon is a serverless Postgres provider that scales to zero when not in use — which means zero cost for projects that aren't under constant load. The connection string looks exactly like any other Postgres URL, so it works seamlessly with libraries like `@neondatabase/serverless` or any standard Postgres client.",
    "Railway is a deployment platform that makes it dead simple to deploy Next.js apps. Connect your GitHub repo, set a few environment variables, and you're live. The free tier is generous enough for side projects.",
    "The combination is surprisingly powerful. You get a proper relational database with full SQL, a modern React framework with server-side rendering and API routes, and a deployment pipeline that handles everything from SSL certificates to zero-downtime deploys.",
    "The main thing I'd recommend: use the `@neondatabase/serverless` driver rather than `pg` directly. It's optimised for serverless environments where connections are short-lived, so you avoid the connection pool exhaustion issues that can bite you with traditional Postgres drivers in serverless contexts.",
  ],
  "why-i-moved-to-typescript": [
    "I resisted TypeScript for years. My reasoning at the time: it adds boilerplate, slows you down, and the type errors often feel like fighting the compiler rather than building the product.",
    "I was wrong. Or rather, I was right about the early friction but wrong about the long-term tradeoff.",
    "The turning point was maintaining a six-month-old JavaScript codebase. Every change required archaeology: what does this function return? What shape is this API response? What does `data` look like by the time it gets here? TypeScript doesn't eliminate those questions — it answers them automatically.",
    "The things I was worried about turned out to be non-issues. Type inference means you rarely need to annotate everything explicitly. The compiler errors that once felt like fighting the compiler now feel like catching bugs before they ship.",
    "The ecosystem has also caught up significantly. Nearly every major library ships its own types now. The DefinitelyTyped ecosystem fills most gaps. Editor tooling — especially in VS Code — is dramatically better with TypeScript than without.",
    "My advice for making the switch: don't try to go from zero to fully strict overnight. Start with `strict: false`, enable `noImplicitAny`, and gradually tighten the settings as you go. The migration is much less painful than a big-bang rewrite.",
  ],
  "the-tools-i-use-in-2026": [
    "A few people have asked about my development setup, so here's a current snapshot of the tools I reach for daily.",
    "**Editor**: VS Code, with the minimal set of extensions: ESLint, Prettier, GitLens, and the GitHub Copilot integration. I've tried Cursor and enjoyed it, but I keep coming back to VS Code for its stability and extension ecosystem.",
    "**Terminal**: kitty on macOS. Fast, GPU-accelerated, and the tiling features mean I rarely need a separate window manager. zsh with Oh My Zsh, but keeping the plugins minimal so startup time stays fast.",
    "**Version control**: Git, obviously. I use the CLI for most things and VS Code's Source Control panel for reviewing diffs. GitHub for hosting and PR workflows.",
    "**Deployment**: Railway for most things. Vercel for Next.js projects where I need edge functions. Both have generous free tiers and the developer experience is excellent.",
    "**Database**: Neon for serverless Postgres. PlanetScale (MySQL) when I need the branch-based workflow for schema changes. SQLite via Turso for read-heavy projects that don't need the full Postgres feature set.",
    "**Local dev**: Docker for any services I need locally (Redis, Postgres when testing migrations). I avoid running databases locally for actual development — connecting to a Neon dev branch is fast enough and avoids the 'works on my machine' problem.",
    "The broader principle: I try to keep the stack boring and the tooling minimal. Every added tool is a thing to update, debug, and maintain. The fewer moving parts, the more time I spend on the actual problem.",
  ],
  "thinking-about-edge-databases": [
    "There's a pattern I keep seeing in modern infrastructure discussions: move computation closer to the user. CDNs have done this for static assets for decades. Edge functions extend it to dynamic logic. Now the question is: what about data?",
    "The fundamental tension is that databases are stateful and databases benefit from centralisation. A single primary makes consistency guarantees tractable. Distribute the data and you immediately face the CAP theorem's uncomfortable tradeoffs.",
    "But 'edge database' can mean different things. It might mean read replicas in multiple regions — you can read from the nearest replica but writes still go to a central primary. It might mean a fully distributed database with conflict resolution. Or it might mean something more pragmatic: a caching layer that keeps frequently-read data close to users.",
    "For most applications, the honest answer is that edge databases are premature optimisation. A well-indexed Postgres instance in `us-east-1` is fast enough for the vast majority of web applications. The bottleneck is usually application code, N+1 queries, or missing indexes — not geographic latency.",
    "That said, the space is moving quickly. Neon's HTTP driver already works in edge environments. Turso's embedded SQLite brings the database to the edge in a novel way. And the big cloud providers are all investing in globally distributed offerings.",
    "My current take: optimise for simplicity first. Single-region Postgres. Use a CDN for static assets. Add caching at the application layer where needed. Only reach for distributed database solutions when you have concrete evidence that geography is your bottleneck.",
  ],
  "lessons-from-shipping-side-projects": [
    "I've shipped probably a dozen side projects over the years. Most of them are dead. A few are still running. Here's what I've learned.",
    "**Finish the first version, no matter how rough.** The biggest mistake I made early on was gold-plating projects that never shipped. A rough thing that's live is infinitely more useful than a polished thing that isn't. The feedback you get from real users is worth more than any amount of internal iteration.",
    "**Pick a stack you already know.** Side projects have a limited energy budget. Spending that budget learning a new language or framework means less budget for the actual problem. Save the exploration for when you're not also trying to ship something.",
    "**Scope down until it's almost embarrassingly simple.** Whatever you think the MVP is, cut it in half. Then cut it in half again. The goal is to validate the core idea as cheaply as possible. Features can always be added; initial scope rarely gets cut.",
    "**Don't build what you won't use.** The side projects that survive are the ones solving a problem I actually have. Projects built for imagined users tend to die because there's no feedback loop keeping them alive.",
    "**Let it die if it's dying.** I spent too long trying to resuscitate projects that had run their course. Maintenance is expensive. Sometimes the right move is to take the thing offline, write up what you learned, and move on.",
    "The meta-lesson: side projects are a long game. The skills, patterns, and relationships you accumulate across many projects compound. Any individual project succeeding or failing matters less than staying in the game.",
  ],
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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const paragraphs = postContent[slug] ?? [post.excerpt];

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <NavBar />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[#8b949e] hover:text-white transition-colors mb-12"
        >
          ← Back to Blog
        </Link>

        {/* Post header */}
        <article>
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-[#00d4aa]/10 text-[#00d4aa] border border-[#00d4aa]/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-[#8b949e] text-sm">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>
          </header>

          {/* Post content */}
          <div className="space-y-6">
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-[#8b949e] text-base leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>
        </article>

        {/* Next posts */}
        <div className="mt-16 pt-12 border-t border-[#30363d]">
          <h2 className="text-white font-semibold text-lg mb-6">
            More posts
          </h2>
          <div className="space-y-4">
            {posts
              .filter((p) => p.slug !== slug)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="flex items-center justify-between bg-[#161b22] border border-[#30363d] rounded-xl p-4 card-hover group"
                >
                  <span className="text-white text-sm font-medium group-hover:text-[#00d4aa] transition-colors">
                    {p.title}
                  </span>
                  <span className="text-[#8b949e] text-xs whitespace-nowrap ml-4">
                    {p.date}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
