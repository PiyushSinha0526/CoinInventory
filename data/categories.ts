type CategoryType = "INCOME" | "EXPENSE";

export interface Category {
  id: string;
  name: string;
  type: CategoryType;
  color: string;
  icon: string;
  subcategories?: string[];
}

export const defaultCategories: Category[] = [
  {
    id: "job-income",
    name: "Job Earnings",
    type: "INCOME",
    color: "#10b981",
    icon: "BriefcaseOutline",
  },
  {
    id: "contract-work",
    name: "Contract Payments",
    type: "INCOME",
    color: "#0ea5e9",
    icon: "DocumentText",
  },
  {
    id: "stock-dividends",
    name: "Stock Dividends",
    type: "INCOME",
    color: "#6366f1",
    icon: "LineChart",
  },
  {
    id: "side-hustle",
    name: "Side Hustle",
    type: "INCOME",
    color: "#d97706",
    icon: "RocketLaunch",
  },
  {
    id: "property-rental",
    name: "Property Income",
    type: "INCOME",
    color: "#9333ea",
    icon: "HomeOutline",
  },
  {
    id: "misc-income",
    name: "Miscellaneous Income",
    type: "INCOME",
    color: "#6b7280",
    icon: "DotsCircleHorizontal",
  },

  {
    id: "living-expenses",
    name: "Living Costs",
    type: "EXPENSE",
    color: "#ef4444",
    icon: "HomeModernOutline",
    subcategories: ["Rent", "Utilities", "Repairs", "Furnishing"],
  },
  {
    id: "commuting",
    name: "Commuting",
    type: "EXPENSE",
    color: "#f97316",
    icon: "CarOutline",
    subcategories: ["Fuel", "Taxis", "Public Transport", "Car Maintenance"],
  },
  {
    id: "daily-essentials",
    name: "Daily Essentials",
    type: "EXPENSE",
    color: "#84cc16",
    icon: "Basket",
  },
  {
    id: "home-services",
    name: "Home Services",
    type: "EXPENSE",
    color: "#0ea5e9",
    icon: "Hammer",
    subcategories: ["Cleaning", "Repairs", "Electricity", "Internet"],
  },
  {
    id: "recreation",
    name: "Recreation",
    type: "EXPENSE",
    color: "#8b5cf6",
    icon: "Ticket",
    subcategories: ["Concerts", "Amusement Parks", "Streaming", "Sports"],
  },
  {
    id: "eating-out",
    name: "Eating Out",
    type: "EXPENSE",
    color: "#f43f5e",
    icon: "Restaurant",
  },
  {
    id: "luxury-shopping",
    name: "Luxury Shopping",
    type: "EXPENSE",
    color: "#ec4899",
    icon: "BagOutline",
    subcategories: ["Jewelry", "Gadgets", "Designer Wear"],
  },
  {
    id: "medical-needs",
    name: "Medical Needs",
    type: "EXPENSE",
    color: "#14b8a6",
    icon: "MedicalBag",
    subcategories: ["Doctors", "Therapy", "Medications", "Tests"],
  },
  {
    id: "learning-expenses",
    name: "Learning Expenses",
    type: "EXPENSE",
    color: "#4f46e5",
    icon: "BooksOutline",
    subcategories: ["Workshops", "Subscriptions", "Materials"],
  },
  {
    id: "self-improvement",
    name: "Self-Improvement",
    type: "EXPENSE",
    color: "#db2777",
    icon: "SpaOutline",
    subcategories: ["Fitness Classes", "Skincare", "Wellness Retreats"],
  },
  {
    id: "vacation-plans",
    name: "Vacation Plans",
    type: "EXPENSE",
    color: "#0284c7",
    icon: "BeachUmbrella",
  },
  {
    id: "financial-safety",
    name: "Financial Safety",
    type: "EXPENSE",
    color: "#475569",
    icon: "LockShield",
    subcategories: ["Emergency Fund", "Savings", "Policies"],
  },
  {
    id: "charity-giving",
    name: "Charity & Gifts",
    type: "EXPENSE",
    color: "#facc15",
    icon: "GiftOutline",
  },
  {
    id: "subscription-fees",
    name: "Subscription Fees",
    type: "EXPENSE",
    color: "#c026d3",
    icon: "CreditCard",
    subcategories: ["Software", "Media", "Memberships"],
  },
  {
    id: "unexpected-costs",
    name: "Unexpected Costs",
    type: "EXPENSE",
    color: "#94a3b8",
    icon: "ExclamationCircle",
  },
];

export const categoryColors: Record<string, string> = defaultCategories.reduce(
  (acc, category) => {
    acc[category.id] = category.color;
    return acc;
  },
  {} as Record<string, string>
);
