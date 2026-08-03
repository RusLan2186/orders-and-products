import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { orders as initialOrders } from "../mockData";
import type { Order } from "../types";
import { fetchOrders } from "../api/mockApi";

interface OrdersState {
  items: Order[];
  loading: boolean;
  error: string | null;
}

const initialState: OrdersState = {
  items: initialOrders,
  loading: false,
  error: null,
};

export const loadOrders = createAsyncThunk("orders/loadOrders", async () => {
  return await fetchOrders();
});

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    removeOrder: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((o) => o.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(loadOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to load orders";
      });
  },
});

export const { removeOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
