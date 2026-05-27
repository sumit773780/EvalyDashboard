// Core Dashboard Metrics Database

export const statsMetrics = {
  salesCost: {
    title: "Total Sales & Costs",
    subtitle: "Last 7 Days",
    value: "$350K",
    secondaryValue: "$235K",
    changeText: "+ 8.56K vs last 7 days",
    isUp: true,
    salesSeries: [31, 40, 28, 51, 42, 109, 100],
    costSeries: [11, 32, 45, 32, 34, 52, 41]
  },
  sessions: {
    title: "Sessions",
    subtitle: "Last 7 days",
    value: "16.5K",
    changeText: "- 3% vs last 7 days",
    isUp: false,
    series: [50, 40, 48, 30, 35, 20, 25]
  },
  orders: {
    title: "Total Orders",
    subtitle: "Last 7 days",
    value: "25.7K",
    changeText: "+ 8% vs last 7 days",
    isUp: true,
    series: [20, 25, 22, 35, 28, 30, 45]
  },
  profit: {
    title: "Total Profit",
    subtitle: "Last 7 days",
    value: "50K",
    changeText: "+ 12% vs last 7 days",
    isUp: true,
    series: [30, 35, 33, 40, 38, 42, 50]
  },
  discount: {
    title: "Discounted Amount",
    subtitle: "Last 7 days",
    value: "12K",
    changeText: "- 2% vs last 7 days",
    isUp: false,
    series: [40, 30, 38, 20, 25, 12, 18]
  },
  reports: {
    title: "Reports",
    subtitle: "Last 7 Days",
    stats: [
      { label: "Customers", value: "24k" },
      { label: "Total Products", value: "3.5k" },
      { label: "Revenue", value: "250k" }
    ],
    revenueSeries: [25, 20, 32, 28, 45, 38, 48, 35, 42, 50, 40, 48, 38, 45]
  },
  activeUsers: {
    title: "Users in last 30 minutes",
    value: "16.5K",
    subtitle: "Users per minute",
    series: [
      25, 45, 35, 55, 30, 40, 20, 35, 42, 38, 22, 60, 45, 55, 30,
      48, 52, 28, 40, 35, 70, 45, 50, 35, 55, 40, 38, 58, 42, 50
    ]
  },
  topCategory: {
    title: "Top Selling Category",
    subtitle: "Total 10.4k Visitors",
    categories: [
      { name: "Fashion", value: "4,567", percentText: "Per Day", color: "#0F60FF" },
      { name: "Electronics", value: "3,167", percentText: "Per Day", color: "#0ea5e9" },
      { name: "Make up", value: "1,845", percentText: "Per Day", color: "#1EB564" }
    ]
  }
};
