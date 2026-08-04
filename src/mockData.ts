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

  {
    id: 4,
    serialNumber: 12345674,
    isNew: true,
    photo: monitor,
    title: 'Samsung ViewFinity S8 32" Monitor',
    type: "Monitor",
    specification: "32-inch 4K UHD, HDR600",
    guarantee: {
      start: "2025-01-12 00:00:00",
      end: "2028-01-12 00:00:00",
    },
    price: [
      { value: 699, symbol: "USD", isDefault: false },
      { value: 28900, symbol: "UAH", isDefault: true },
    ],
    order: 3,
    date: "2026-04-11 15:20:00",
  },
  {
    id: 5,
    serialNumber: 12345675,
    isNew: false,
    photo: keyboard,
    title: "Keychron K8 Pro Keyboard",
    type: "Keyboard",
    specification: "Wireless, Mechanical, RGB",
    guarantee: {
      start: "2024-03-18 00:00:00",
      end: "2027-03-18 00:00:00",
    },
    price: [
      { value: 139, symbol: "USD", isDefault: false },
      { value: 5750, symbol: "UAH", isDefault: true },
    ],
    order: 4,
    date: "2026-03-08 11:10:00",
  },
  {
    id: 6,
    serialNumber: 12345676,
    isNew: true,
    photo: laptop,
    title: "Lenovo ThinkPad X1 Carbon Gen 12",
    type: "Laptop",
    specification: "14-inch, 32GB RAM, 1TB SSD",
    guarantee: {
      start: "2025-04-05 00:00:00",
      end: "2028-04-05 00:00:00",
    },
    price: [
      { value: 1999, symbol: "USD", isDefault: false },
      { value: 82800, symbol: "UAH", isDefault: true },
    ],
    order: 2,
    date: "2026-02-15 16:40:00",
  },
  {
    id: 7,
    serialNumber: 12345677,
    isNew: false,
    photo: monitor,
    title: 'LG UltraFine 27" Monitor',
    type: "Monitor",
    specification: "27-inch IPS, USB-C",
    guarantee: {
      start: "2023-09-22 00:00:00",
      end: "2026-09-22 00:00:00",
    },
    price: [
      { value: 479, symbol: "USD", isDefault: false },
      { value: 19900, symbol: "UAH", isDefault: true },
    ],
    order: 5,
    date: "2026-01-30 13:55:00",
  },
  {
    id: 8,
    serialNumber: 12345678,
    isNew: true,
    photo: keyboard,
    title: "Logitech G Pro X Keyboard",
    type: "Keyboard",
    specification: "Mechanical, RGB, USB",
    guarantee: {
      start: "2025-05-10 00:00:00",
      end: "2028-05-10 00:00:00",
    },
    price: [
      { value: 149, symbol: "USD", isDefault: false },
      { value: 6150, symbol: "UAH", isDefault: true },
    ],
    order: 3,
    date: "2025-12-18 10:00:00",
  },
  {
    id: 9,
    serialNumber: 12345679,
    isNew: false,
    photo: laptop,
    title: "Dell XPS 15 Laptop",
    type: "Laptop",
    specification: "15.6-inch OLED, 32GB RAM",
    guarantee: {
      start: "2024-07-01 00:00:00",
      end: "2027-07-01 00:00:00",
    },
    price: [
      { value: 2199, symbol: "USD", isDefault: false },
      { value: 91100, symbol: "UAH", isDefault: true },
    ],
    order: 4,
    date: "2025-11-05 17:25:00",
  },
  {
    id: 10,
    serialNumber: 12345680,
    isNew: true,
    photo: monitor,
    title: "ASUS ProArt Display PA279CRV",
    type: "Monitor",
    specification: "27-inch 4K IPS, USB-C",
    guarantee: {
      start: "2025-06-18 00:00:00",
      end: "2028-06-18 00:00:00",
    },
    price: [
      { value: 629, symbol: "USD", isDefault: false },
      { value: 26000, symbol: "UAH", isDefault: true },
    ],
    order: 2,
    date: "2025-10-12 09:15:00",
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
  {
    id: 3,
    title: "Monitor Upgrade",
    date: "2018-02-15 09:30:00",
    description: "desc",
  },
  {
    id: 4,
    title: "Developer Workstations",
    date: "2019-06-18 15:45:00",
    description: "desc",
  },
  {
    id: 5,
    title: "Office Expansion",
    date: "2020-11-03 13:20:00",
    description: "desc",
  },

];
