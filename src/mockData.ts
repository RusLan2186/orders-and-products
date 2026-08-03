import type { Order, Product } from "./types";
import monitor from "./assets/monitor.png";
import keyboard from "./assets/keyboard.avif";
import laptop from "./assets/laptop.png";

export const products: Product[] = [
  {
    id: 1,
    serialNumber: 12345671,
    isNew: true,
    photo: monitor,
    title: 'Dell UltraSharp U2723QE 27" 4K Monitor',
    type: "Monitor",
    specification: "27-inch IPS, 3840×2160, USB-C",
    guarantee: {
      start: "2024-01-15 00:00:00",
      end: "2027-01-15 00:00:00",
    },
    price: [
      { value: 549, symbol: "USD", isDefault: false },
      { value: 22800, symbol: "UAH", isDefault: true },
    ],
    order: 1,
    date: "2026-07-15 10:30:00",
  },
  {
    id: 2,
    serialNumber: 12345672,
    isNew: false,
    photo: keyboard,
    title: "Logitech MX Keys S Keyboard",
    type: "Keyboard",
    specification: "Wireless, Backlit, Bluetooth",
    guarantee: {
      start: "2023-05-20 00:00:00",
      end: "2026-05-20 00:00:00",
    },
    price: [
      { value: 119, symbol: "USD", isDefault: false },
      { value: 4950, symbol: "UAH", isDefault: true },
    ],
    order: 2,
    date: "2026-06-22 14:15:00",
  },
  {
    id: 3,
    serialNumber: 12345673,
    isNew: true,
    photo: laptop,
    title: "Apple MacBook Air M3 13-inch",
    type: "Laptop",
    specification: "13.6-inch, 16GB RAM, 512GB SSD",
    guarantee: {
      start: "2025-02-10 00:00:00",
      end: "2028-02-10 00:00:00",
    },
    price: [
      { value: 1499, symbol: "USD", isDefault: false },
      { value: 62200, symbol: "UAH", isDefault: true },
    ],
    order: 1,
    date: "2026-05-10 09:45:00",
  },
];

export const orders: Order[] = [
  {
    id: 1,
    title: "Office Equipment Delivery",
    date: "2017-04-06 12:09:33",
    description: "desc",
  },
  {
    id: 2,
    title: "Electronics Restock",
    date: "2017-09-06 12:09:33",
    description: "desc",
  },
];
