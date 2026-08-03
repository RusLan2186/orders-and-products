import type { RootState } from './store';

export const selectProductsByOrderId = (state: RootState, orderId: number) =>
  state.products.items.filter((p) => p.order === orderId);