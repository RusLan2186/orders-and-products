import type { Order, Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    serialNumber: 12345671,
    isNew: true,
    photo: "https://via.placeholder.com/60",
    title: "Gigabyte Technology X58-USB3 (Socket 1366)",
    type: "Monitors",
    specification: "Specification 1",
    guarantee: { start: "2017-04-06 00:00:00", end: "2025-08-06 00:00:00" },
    price: [
      { value: 2500, symbol: "USD", isDefault: false },
      { value: 250000.5, symbol: "UAH", isDefault: true },
    ],
    order: 1,
    date: "2017-09-06 12:09:33",
  },
  {
    id: 2,
    serialNumber: 12345672,
    isNew: false,
    photo: "https://via.placeholder.com/60",
    title: "Gigabyte Technology X58-USB3 (Socket 1366)",
    type: "Keyboards",
    specification: "Specification 2",
    guarantee: { start: "2017-04-06 00:00:00", end: "2025-08-06 00:00:00" },
    price: [
      { value: 100, symbol: "USD", isDefault: false },
      { value: 2600, symbol: "UAH", isDefault: true },
    ],
    order: 1,
    date: "2017-09-06 12:09:33",
  },
  {
    id: 3,
    serialNumber: 12345673,
    isNew: true,
    photo: "https://via.placeholder.com/60",
    title: "Gigabyte Technology X58-USB3 (Socket 1366)",
    type: "Monitors",
    specification: "Specification 3",
    guarantee: { start: "2017-04-06 00:00:00", end: "2025-08-06 00:00:00" },
    price: [
      { value: 50, symbol: "USD", isDefault: false },
      { value: 1350, symbol: "UAH", isDefault: true },
    ],
    order: 2,
    date: "2017-06-06 12:09:33",
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
