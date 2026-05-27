// Relational Orders Database
import { products } from './products';

export const recentOrders = [
  {
    id: 6548,
    customer: "Joseph Wheeler",
    status: "Pending",
    productId: 1 
  },
  {
    id: 6548,
    customer: "Joseph Wheeler",
    status: "Completed",
    productId: 2
  },
  {
    id: 6548,
    customer: "Joseph Wheeler",
    status: "Pending",
    productId: 3
  },
  {
    id: 6548,
    customer: "Joseph Wheeler",
    status: "Pending",
    productId: 4
  },
  {
    id: 6548,
    customer: "Joseph Wheeler",
    status: "Completed",
    productId: 5
  }
];

// Helper to resolve relational order items
export const getResolvedRecentOrders = () => {
  return recentOrders.map(order => {
    const productItem = products.find(p => p.id === order.productId);
    return {
      ...order,
      productName: productItem ? productItem.name : "Unknown Product",
      total: productItem ? productItem.price : "$0.00"
    };
  });
};
