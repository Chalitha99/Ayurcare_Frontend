/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [
  //   "./src/**/*.{js,jsx,ts,tsx}",
  // ],

  content: [
    "./src/pages/Inventory/Dashboard.jsx",
      "./src/pages/Inventory/NewProduct.jsx",
      "./src/pages/Inventory/Product.jsx",
      "./src/Components/shared/Layout.jsx",
    "./src/Components/shared/SidebarInventory.jsx",
    "./src/Components/shared/inventory_components/AvailableProducts.jsx",
    "./src/Components/shared/inventory_components/DashboardStatsGrid.jsx",
    "./src/Components/shared/inventory_components/LowStockProducts.jsx",
    "./src/Components/shared/inventory_components/ProductCategoryPieChart.jsx",
    "./src/Components/shared/inventory_components/RestockModal.jsx",
    "./src/Components/shared/inventory_components/UpdateChart.jsx"

  ],

  theme: {
    extend: {},
  },
  plugins: [],
}