import Link from "next/link";

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
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm text-[#8b949e] hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-sm text-[#8b949e] hover:text-white transition-colors"
          >
            Pricing
          </a>
          <a
            href="#about"
            className="text-sm text-[#8b949e] hover:text-white transition-colors"
          >
            About
          </a>
          <Link
            href="/dashboard"
            className="text-sm text-[#8b949e] hover:text-white transition-colors"
          >
            Dashboard
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="hidden sm:block text-sm text-[#8b949e] hover:text-white transition-colors px-4 py-2"
          >
            Sign In
          </Link>
          <Link
            href="/dashboard"
            className="text-sm bg-[#00d4aa] hover:bg-[#00b894] text-[#0d1117] font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Get Started
          </Link>
        </div>
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

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-[#161b22] border border-[#30363d] rounded-full px-4 py-2 text-sm text-[#00d4aa] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse" />
          Now live — Real-time financial intelligence
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold text-white leading-tight mb-6">
          Banking for the
          <br />
          <span className="gradient-text">next generation</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#8b949e] max-w-2xl mx-auto mb-12 leading-relaxed">
          512M combines cutting-edge AI with seamless banking to help you track,
          grow, and protect your wealth — all in one intelligent platform.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto bg-[#00d4aa] hover:bg-[#00b894] text-[#0d1117] font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#00d4aa]/25"
          >
            Open Free Account
          </Link>
          <Link
            href="/transactions"
            className="w-full sm:w-auto bg-[#161b22] hover:bg-[#1c2128] border border-[#30363d] text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105"
          >
            View Demo →
          </Link>
        </div>

        {/* Hero dashboard preview */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 shadow-2xl shadow-black/50 float-animation">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-[#8b949e] text-sm">Total Portfolio Value</p>
                <p className="text-3xl font-bold text-white">
                  $512,000{" "}
                  <span className="text-sm font-normal text-[#00d4aa]">
                    ↑ 8.4%
                  </span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-[#8b949e] text-sm">Monthly Growth</p>
                <p className="text-xl font-bold text-[#00d4aa]">+$18,432</p>
              </div>
            </div>
            {/* Mini chart bars */}
            <div className="flex items-end gap-2 h-24">
              {[40, 60, 45, 70, 55, 80, 65, 90, 75, 85, 70, 95].map(
                (h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t"
                    style={{
                      height: `${h}%`,
                      background:
                        i === 11
                          ? "linear-gradient(to top, #00d4aa, #3b82f6)"
                          : "#30363d",
                    }}
                  />
                )
              )}
            </div>
            <div className="flex justify-between text-xs text-[#8b949e] mt-2">
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: "$2.1B+", label: "Assets managed" },
    { value: "500K+", label: "Active users" },
    { value: "99.99%", label: "Uptime SLA" },
    { value: "180+", label: "Countries served" },
  ];

  return (
    <section className="border-y border-[#30363d] bg-[#161b22]/50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center stat-animate">
              <p className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                {s.value}
              </p>
              <p className="text-[#8b949e] text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: "📊",
      title: "Real-time Analytics",
      description:
        "Track your portfolio performance with live market data, AI-powered insights, and customizable dashboards.",
    },
    {
      icon: "🔒",
      title: "Bank-grade Security",
      description:
        "256-bit encryption, biometric authentication, and fraud detection powered by machine learning.",
    },
    {
      icon: "💸",
      title: "Instant Transfers",
      description:
        "Send and receive money globally in seconds with zero hidden fees and the best exchange rates.",
    },
    {
      icon: "🤖",
      title: "AI Financial Advisor",
      description:
        "Get personalized investment recommendations and spending insights from your intelligent money coach.",
    },
    {
      icon: "📱",
      title: "Seamless Payments",
      description:
        "Pay anyone, anywhere with virtual cards, crypto wallets, and contactless payment solutions.",
    },
    {
      icon: "📈",
      title: "Smart Investing",
      description:
        "Access stocks, ETFs, crypto, and alternative investments with fractional shares from $1.",
    },
  ];

  return (
    <section id="features" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Everything you need to
            <br />
            <span className="gradient-text">master your money</span>
          </h2>
          <p className="text-[#8b949e] text-lg max-w-xl mx-auto">
            One platform. Unlimited possibilities. Built for those who take
            their finances seriously.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 card-hover"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {f.title}
              </h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      description: "Perfect for getting started",
      features: [
        "1 bank account",
        "Basic analytics",
        "Mobile app",
        "Standard support",
        "Up to $10K transfers/mo",
      ],
      cta: "Start Free",
      highlighted: false,
    },
    {
      name: "Growth",
      price: "$12",
      period: "/mo",
      description: "For serious money managers",
      features: [
        "5 bank accounts",
        "Advanced analytics + AI",
        "Virtual cards",
        "Priority support",
        "Unlimited transfers",
        "Crypto wallet",
        "Tax reports",
      ],
      cta: "Start 30-day Trial",
      highlighted: true,
    },
    {
      name: "Business",
      price: "$49",
      period: "/mo",
      description: "Built for growing businesses",
      features: [
        "Unlimited accounts",
        "Team management",
        "API access",
        "Dedicated support",
        "Custom integrations",
        "Advanced compliance",
        "White-label options",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#161b22]/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Simple, transparent{" "}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-[#8b949e] text-lg">
            No hidden fees. No surprises. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 card-hover ${
                p.highlighted
                  ? "bg-gradient-to-b from-[#00d4aa]/10 to-[#3b82f6]/10 border-2 border-[#00d4aa]/50 relative"
                  : "bg-[#161b22] border border-[#30363d]"
              }`}
            >
              {p.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00d4aa] text-[#0d1117] text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {p.name}
                </h3>
                <p className="text-[#8b949e] text-sm mb-4">{p.description}</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-white">
                    {p.price}
                  </span>
                  <span className="text-[#8b949e] mb-1">{p.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span className="text-[#00d4aa]">✓</span>
                    <span className="text-[#8b949e]">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/dashboard"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 ${
                  p.highlighted
                    ? "bg-[#00d4aa] text-[#0d1117] hover:bg-[#00b894]"
                    : "bg-[#21262d] text-white hover:bg-[#30363d] border border-[#30363d]"
                }`}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-[#00d4aa]/10 to-[#3b82f6]/10 border border-[#00d4aa]/20 rounded-3xl p-12 glow-pulse">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Ready to take control
            <br />
            of your <span className="gradient-text">financial future?</span>
          </h2>
          <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
            Join 500,000+ people who trust 512M with their money. Open your
            account in under 2 minutes — no paperwork required.
          </p>
          <Link
            href="/dashboard"
            className="inline-block bg-[#00d4aa] hover:bg-[#00b894] text-[#0d1117] font-bold px-10 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-[#00d4aa]/30"
          >
            Open Free Account →
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      id="about"
      className="border-t border-[#30363d] bg-[#161b22]/50 py-12"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="text-[#8b949e] text-sm mt-3 leading-relaxed">
              Modern financial intelligence for everyone. Built on trust,
              powered by technology.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-2">
              {["Features", "Pricing", "Security", "API"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#8b949e] text-sm hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2">
              {["About", "Blog", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#8b949e] text-sm hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-2">
              {["Privacy", "Terms", "Cookies", "Licenses"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#8b949e] text-sm hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-[#30363d] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8b949e] text-sm">
            © 2026 512M Financial Technologies, Inc. All rights reserved.
          </p>
          <p className="text-[#8b949e] text-sm">
            FDIC Insured · SOC 2 Type II · ISO 27001
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1117]">
      <NavBar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
