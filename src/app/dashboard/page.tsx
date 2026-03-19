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

function Sidebar() {
  const navItems = [
    { href: "/dashboard", label: "Overview", icon: "📊", active: true },
    { href: "/transactions", label: "Transactions", icon: "💳", active: false },
    { href: "#", label: "Investments", icon: "📈", active: false },
    { href: "#", label: "Cards", icon: "💰", active: false },
    { href: "#", label: "Analytics", icon: "🔍", active: false },
    { href: "#", label: "Settings", icon: "⚙️", active: false },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 min-h-screen bg-[#161b22] border-r border-[#30363d] p-6">
      <div className="mb-8">
        <Logo />
      </div>
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
              item.active
                ? "bg-[#00d4aa]/10 text-[#00d4aa] border border-[#00d4aa]/20"
                : "text-[#8b949e] hover:text-white hover:bg-[#21262d]"
            }`}
          >
            <span>{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="border-t border-[#30363d] pt-4">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00d4aa] to-[#3b82f6] flex items-center justify-center text-white text-xs font-bold">
            JD
          </div>
          <div>
            <p className="text-white text-sm font-medium">Jane Doe</p>
            <p className="text-[#8b949e] text-xs">Growth Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

function TopBar() {
  return (
    <div className="flex items-center justify-between p-4 md:p-6 border-b border-[#30363d]">
      <div className="md:hidden">
        <Logo />
      </div>
      <div className="hidden md:block">
        <h2 className="text-white font-semibold text-lg">Overview</h2>
        <p className="text-[#8b949e] text-sm">
          Welcome back, Jane. Here&apos;s your financial snapshot.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#21262d] border border-[#30363d] text-[#8b949e] hover:text-white text-sm">
          🔔
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00d4aa] to-[#3b82f6] flex items-center justify-center text-white text-xs font-bold">
          JD
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  change,
  positive,
  icon,
}: {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: string;
}) {
  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 card-hover">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[#8b949e] text-sm">{label}</span>
        <span className="text-xl">{icon}</span>
      </div>
      <p className="text-2xl font-bold text-white mb-1">{value}</p>
      <p className={`text-sm ${positive ? "text-[#00d4aa]" : "text-red-400"}`}>
        {change} vs last month
      </p>
    </div>
  );
}

function PortfolioChart() {
  const data = [65, 72, 68, 80, 75, 85, 82, 90, 87, 92, 88, 95];
  const months = [
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
  ];

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-white font-semibold">Portfolio Performance</h3>
          <p className="text-[#8b949e] text-sm">Last 12 months</p>
        </div>
        <div className="flex gap-2">
          {["1M", "3M", "6M", "1Y"].map((period) => (
            <button
              key={period}
              className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${
                period === "1Y"
                  ? "bg-[#00d4aa]/10 text-[#00d4aa] border border-[#00d4aa]/30"
                  : "text-[#8b949e] hover:text-white bg-[#21262d]"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-end gap-2 h-40">
        {data.map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t transition-all duration-500"
              style={{
                height: `${h}%`,
                background:
                  i === data.length - 1
                    ? "linear-gradient(to top, #00d4aa, #3b82f6)"
                    : i >= data.length - 3
                      ? "rgba(0,212,170,0.5)"
                      : "#21262d",
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between text-xs text-[#8b949e] mt-2">
        {months.map((m) => (
          <span key={m} className="flex-1 text-center">
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

function RecentTransactions() {
  const transactions = [
    {
      id: 1,
      name: "Netflix",
      category: "Entertainment",
      amount: "-$15.99",
      date: "Today",
      positive: false,
      icon: "🎬",
    },
    {
      id: 2,
      name: "Salary Deposit",
      category: "Income",
      amount: "+$5,200.00",
      date: "Yesterday",
      positive: true,
      icon: "💼",
    },
    {
      id: 3,
      name: "Whole Foods",
      category: "Groceries",
      amount: "-$87.43",
      date: "Mar 17",
      positive: false,
      icon: "🛒",
    },
    {
      id: 4,
      name: "Dividend Payment",
      category: "Investment",
      amount: "+$124.50",
      date: "Mar 16",
      positive: true,
      icon: "📈",
    },
    {
      id: 5,
      name: "Electric Bill",
      category: "Utilities",
      amount: "-$92.00",
      date: "Mar 15",
      positive: false,
      icon: "⚡",
    },
  ];

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-semibold">Recent Transactions</h3>
        <Link
          href="/transactions"
          className="text-[#00d4aa] text-sm hover:underline"
        >
          View all →
        </Link>
      </div>
      <div className="space-y-3">
        {transactions.map((t) => (
          <div
            key={t.id}
            className="flex items-center justify-between py-2 border-b border-[#21262d] last:border-0"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#21262d] flex items-center justify-center text-lg">
                {t.icon}
              </div>
              <div>
                <p className="text-white text-sm font-medium">{t.name}</p>
                <p className="text-[#8b949e] text-xs">{t.category}</p>
              </div>
            </div>
            <div className="text-right">
              <p
                className={`text-sm font-semibold ${t.positive ? "text-[#00d4aa]" : "text-white"}`}
              >
                {t.amount}
              </p>
              <p className="text-[#8b949e] text-xs">{t.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AccountCards() {
  const accounts = [
    {
      type: "Checking",
      balance: "$8,234.56",
      number: "**** 4821",
      color: "from-[#00d4aa] to-[#3b82f6]",
    },
    {
      type: "Savings",
      balance: "$42,100.00",
      number: "**** 7391",
      color: "from-[#3b82f6] to-[#8b5cf6]",
    },
    {
      type: "Investment",
      balance: "$461,665.44",
      number: "**** 2058",
      color: "from-[#f59e0b] to-[#ef4444]",
    },
  ];

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
      <h3 className="text-white font-semibold mb-4">Your Accounts</h3>
      <div className="space-y-3">
        {accounts.map((acc) => (
          <div
            key={acc.type}
            className="flex items-center justify-between p-4 rounded-xl bg-[#21262d] hover:bg-[#2d333b] transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${acc.color} flex items-center justify-center text-white text-xs font-bold`}
              >
                {acc.type[0]}
              </div>
              <div>
                <p className="text-white text-sm font-medium">{acc.type}</p>
                <p className="text-[#8b949e] text-xs font-mono">{acc.number}</p>
              </div>
            </div>
            <p className="text-white font-semibold text-sm">{acc.balance}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SpendingBreakdown() {
  const categories = [
    { name: "Housing", amount: "$1,800", pct: 36, color: "#3b82f6" },
    { name: "Food", amount: "$620", pct: 12, color: "#00d4aa" },
    { name: "Transport", amount: "$350", pct: 7, color: "#f59e0b" },
    { name: "Entertainment", amount: "$180", pct: 4, color: "#8b5cf6" },
    { name: "Savings", amount: "$1,000", pct: 20, color: "#10b981" },
    { name: "Other", amount: "$250", pct: 5, color: "#6b7280" },
  ];

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
      <h3 className="text-white font-semibold mb-4">Spending Breakdown</h3>
      <div className="flex gap-2 mb-4 h-3 rounded-full overflow-hidden">
        {categories.map((c) => (
          <div
            key={c.name}
            style={{ width: `${c.pct}%`, backgroundColor: c.color }}
          />
        ))}
      </div>
      <div className="space-y-2">
        {categories.map((c) => (
          <div key={c.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: c.color }}
              />
              <span className="text-[#8b949e] text-sm">{c.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#8b949e] text-xs">{c.pct}%</span>
              <span className="text-white text-sm font-medium">{c.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#0d1117]">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />
        <main className="flex-1 p-4 md:p-6 space-y-6 overflow-auto">
          {/* Quick stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              label="Total Balance"
              value="$512,000"
              change="↑ 8.4%"
              positive={true}
              icon="💰"
            />
            <StatCard
              label="Monthly Income"
              value="$5,200"
              change="↑ 3.2%"
              positive={true}
              icon="💼"
            />
            <StatCard
              label="Monthly Spend"
              value="$4,200"
              change="↓ 5.1%"
              positive={true}
              icon="💳"
            />
            <StatCard
              label="Net Savings"
              value="$1,000"
              change="↑ 12.5%"
              positive={true}
              icon="📈"
            />
          </div>

          {/* Chart + Accounts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <PortfolioChart />
            </div>
            <AccountCards />
          </div>

          {/* Transactions + Spending */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <RecentTransactions />
            </div>
            <SpendingBreakdown />
          </div>
        </main>
      </div>
    </div>
  );
}
