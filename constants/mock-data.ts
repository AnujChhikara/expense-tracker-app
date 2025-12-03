export const USER_DATA = {
  name: "Craig Bradley",
  profileImage: "https://i.pravatar.cc/150?img=3",
  monthlyBudget: 1850,
  leftToSpend: 786,
  currency: "$",
  lastExpense: {
    icon: "coffee",
    amount: 82.50,
  },
};

export const BUDGET_DATA = [
  { value: 786, color: "#A3D3CF" }, // Left to spend
  { value: 300, color: "#F2D492" }, // Spent 1
  { value: 400, color: "#D4B2D8" }, // Spent 2
  // This is just for the visual chart if we were to build it precisely
];

export const EXPENSE_CATEGORIES = [
  {
    id: "1",
    name: "Travel & transport",
    total: 350,
    icon: "car.fill", // SF Symbol name style, will adapt
    iconColor: "#000",
    iconBackgroundColor: "#E0B6FF",
    items: [
      {
        id: "1-1",
        name: "Car insurance",
        amount: 350,
        left: 205,
        progress: 0.4, // Visual progress
        color: "#E0B6FF",
      },
    ],
  },
  {
    id: "2",
    name: "Utility bills",
    total: 640,
    icon: "doc.text.fill",
    iconColor: "#000",
    iconBackgroundColor: "#C4F5E9",
    items: [
      {
        id: "2-1",
        name: "Subscriptions",
        amount: 160,
        left: 115,
        progress: 0.3,
        color: "#C4F5E9",
      },
      {
        id: "2-2",
        name: "House rent",
        amount: 480,
        left: 140,
        progress: 0.7,
        color: "#C4F5E9", // Using same color family
      },
    ],
  },
];


