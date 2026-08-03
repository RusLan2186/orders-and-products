import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { loadOrders } from '../store/ordersSlice';

export const OrdersPage = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.orders);

  useEffect(() => {
    dispatch(loadOrders());
  }, [dispatch]);

  if (loading) return <div>Loading orders...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Orders</h1>
      <ul>
        {items.map((o) => (
          <li key={o.id}>{o.title}</li>
        ))}
      </ul>
    </div>
  );
};