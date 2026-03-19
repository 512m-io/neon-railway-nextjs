import Link from "next/link";

const transactions = [
  {
    id: 1,
    name: "Netflix",
    category: "Entertainment",
    amount: -15.99,
    date: "2026-03-19",
    status: "completed",
    icon: "🎬",
    description: "Monthly subscription",
  },
  {
    id: 2,
    name: "Salary Deposit",
    category: "Income",
    amount: 5200.0,
    date: "2026-03-18",
    status: "completed",
    icon: "💼",
    description: "March 2026 payroll",
  },
  {
    id: 3,
    name: "Whole Foods",
    category: "Groceries",
    amount: -87.43,
    date: "2026-03-17",
    status: "completed",
    icon: "🛒",
    description: "Grocery shopping",
  },
  {
    id: 4,
    name: "Dividend Payment",
    category: "Investment",
    amount: 124.5,
    date: "2026-03-16",
    status: "completed",
    icon: "📈",
    description: "Q1 dividend — AAPL",
  },
  {
    id: 5,
    name: "Electric Bill",
    category: "Utilities",
    amount: -92.0,
    date: "2026-03-15",
    status: "completed",
    icon: "⚡",
    description: "Power & light March",
  },
  {
    id: 6,
    name: "Amazon",
    category: "Shopping",
    amount: -134.99,
    date: "2026-03-14",
    status: "completed",
    icon: "📦",
    description: "Online purchase",
  },
  {
    id: 7,
    name: "Rent Payment",
    category: "Housing",
    amount: -1800.0,
    date: "2026-03-01",
    status: "completed",
    icon: "🏠",
    description: "March 2026 rent",
  },
  {
    id: 8,
    name: "Freelance Income",
    category: "Income",
    amount: 750.0,
    date: "2026-02-28",
    status: "completed",
    icon: "💡",
    description: "Design project payment",
  },
  {
    id: 9,
    name: "Gym Membership",
    category: "Health",
    amount: -45.0,
    date: "2026-02-27",
    status: "completed",
    icon: "🏋️",
    description: "Monthly membership",
  },
  {
    id: 10,
    name: "Spotify",
    category: "Entertainment",
    amount: -9.99,
    date: "2026-02-26",
    status: "completed",
    icon: "🎵",
    description: "Premium subscription",
  },
  {
    id: 11,
    name: "Gas Station",
    category: "Transport",
    amount: -58.4,
    date: "2026-02-25",
    status: "completed",
    icon: "⛽",
    description: "Shell — fuel",
  },
  {
    id: 12,
    name: "Interest Earned",
    category: "Investment",
    amount: 18.72,
    date: "2026-02-24",
    status: "completed",
    icon: "💹",
    description: "High-yield savings",
  },
  {
    id: 13,
    name: "Restaurant",
    category: "Food & Drink",
    amount: -62.5,
    date: "2026-02-22",
    status: "completed",
    icon: "🍽️",
    description: "Dinner with friends",
  },
  {
    id: 14,
    name: "Transfer to Savings",
    category: "Transfer",
    amount: -500.0,
    date: "2026-02-20",
    status: "completed",
    icon: "💸",
    description: "Monthly savings goal",
  },
  {
    id: 15,
    name: "Internet Bill",
    category: "Utilities",
    amount: -79.99,
    date: "2026-02-18",
    status: "completed",
    icon: "🌐",
    description: "Fiber internet — Feb",
  },
];

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatAmount(amount: number) {
  const abs = Math.abs(amount).toFixed(2);
  return (amount >= 0 ? "+" : "-") + "$" + abs;
}

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
    { href: "/dashboard", label: "Overview", icon: "📊", active: false },
    { href: "/transactions", label: "Transactions", icon: "💳", active: true },
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

export default function TransactionsPage() {
  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);
  const expenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);
  const net = income - expenses;

  return (
    <div className="flex min-h-screen bg-[#0d1117]">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-[#30363d]">
          <div className="md:hidden">
            <Logo />
          </div>
          <div className="hidden md:block">
            <h2 className="text-white font-semibold text-lg">Transactions</h2>
            <p className="text-[#8b949e] text-sm">
              Your complete transaction history
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 text-sm px-4 py-2 bg-[#21262d] border border-[#30363d] text-[#8b949e] rounded-lg hover:text-white transition-colors">
              <span>📥</span>
              <span className="hidden sm:inline">Export</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00d4aa] to-[#3b82f6] flex items-center justify-center text-white text-xs font-bold">
              JD
            </div>
          </div>
        </div>

        <main className="flex-1 p-4 md:p-6 space-y-6 overflow-auto">
          {/* Summary cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-[#8b949e] text-sm mb-1">Total Income</p>
              <p className="text-2xl font-bold text-[#00d4aa]">
                +${income.toFixed(2)}
              </p>
            </div>
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-[#8b949e] text-sm mb-1">Total Expenses</p>
              <p className="text-2xl font-bold text-red-400">
                -${expenses.toFixed(2)}
              </p>
            </div>
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-[#8b949e] text-sm mb-1">Net Cash Flow</p>
              <p
                className={`text-2xl font-bold ${net >= 0 ? "text-[#00d4aa]" : "text-red-400"}`}
              >
                {net >= 0 ? "+" : "-"}${Math.abs(net).toFixed(2)}
              </p>
            </div>
          </div>

          {/* Filter bar */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Search transactions..."
              className="flex-1 bg-[#161b22] border border-[#30363d] text-white text-sm px-4 py-2.5 rounded-lg placeholder-[#8b949e] focus:outline-none focus:border-[#00d4aa] transition-colors"
            />
            <select className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-[#00d4aa] transition-colors">
              <option>All Categories</option>
              {Array.from(new Set(transactions.map((t) => t.category)))
                .sort()
                .map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
            </select>
            <select className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-[#00d4aa] transition-colors">
              <option>Last 30 days</option>
              <option>Last 3 months</option>
              <option>Last 6 months</option>
              <option>This year</option>
            </select>
          </div>

          {/* Transactions table */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden">
            <div className="hidden sm:grid grid-cols-[auto_1fr_auto_auto_auto] gap-4 px-6 py-3 border-b border-[#30363d] text-xs text-[#8b949e] uppercase tracking-wider">
              <span className="w-10" />
              <span>Transaction</span>
              <span>Date</span>
              <span>Status</span>
              <span className="text-right">Amount</span>
            </div>
            <div className="divide-y divide-[#21262d]">
              {transactions.map((t) => (
                <div
                  key={t.id}
                  className="flex items-center gap-4 px-6 py-4 hover:bg-[#21262d] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#21262d] group-hover:bg-[#2d333b] flex items-center justify-center text-lg flex-shrink-0">
                    {t.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium truncate">
                      {t.name}
                    </p>
                    <p className="text-[#8b949e] text-xs">{t.description}</p>
                    <span className="inline-block sm:hidden text-xs text-[#8b949e] mt-0.5">
                      {t.category} · {formatDate(t.date)}
                    </span>
                  </div>
                  <div className="hidden sm:block text-sm text-[#8b949e] whitespace-nowrap">
                    {formatDate(t.date)}
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-xs px-2 py-1 rounded-full bg-[#00d4aa]/10 text-[#00d4aa] border border-[#00d4aa]/20">
                      {t.status}
                    </span>
                  </div>
                  <div
                    className={`text-sm font-semibold whitespace-nowrap ${t.amount >= 0 ? "text-[#00d4aa]" : "text-white"}`}
                  >
                    {formatAmount(t.amount)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
