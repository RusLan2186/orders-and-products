import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "./ordersSlice";
import productsReducer from "./productsSlice";
import searchReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
    products: productsReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
