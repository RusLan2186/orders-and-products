import type { RootState } from './store';

export const selectProductsByOrderId = (state: RootState, orderId: number) =>
  state.products.items.filter((p) => p.order === orderId);

export const selectOrderSummary = (state: RootState, orderId: number) => {
  const products = selectProductsByOrderId(state, orderId);
  const count = products.length;

  const totalUSD = products.reduce((sum, p) => {
    const price = p.price.find((pr) => pr.symbol === 'USD');
    return sum + (price?.value ?? 0);
  }, 0);

  const totalUAH = products.reduce((sum, p) => {
    const price = p.price.find((pr) => pr.symbol === 'UAH');
    return sum + (price?.value ?? 0);
  }, 0);

  return { count, totalUSD, totalUAH };
};

export const selectOrderTitleById = (state: RootState, orderId: number) => {
  const order = state.orders.items.find((o) => o.id === orderId);
  return order?.title ?? '—';
};

export const selectProductTypes = (state: RootState) => {
  const types = state.products.items.map((p) => p.type);
  return Array.from(new Set(types));
};