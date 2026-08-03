import { orders } from '../mockData';
import { products } from '../mockData';
import type { Order, Product } from '../types';

const DELAY = 600; 

export const fetchOrders = (): Promise<Order[]> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(orders), DELAY);
  });

export const fetchProducts = (): Promise<Product[]> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(products), DELAY);
  });