const STORAGE_KEYS = {
  SEARCH_QUERY: "products-and-orders: search-query",
  PRODUCT_TYPE_FILTER: "products-and-orders: product-type-filter",
} as const;

export const getStoredValue = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

export const setStoredValue = (key: string, value: string): void => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // localStorage недоступен (приватный режим и т.п.) — тихо игнорируем
  }
};

export { STORAGE_KEYS };
