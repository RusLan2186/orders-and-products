import { OrderRow } from "../OrderRow/OrderRow";
import type { Order } from "../../../types";
import "./OrdersList.scss";

interface OrdersListProps {
  orders: Order[];
  selectedOrderId: number | null;
  onSelectOrder: (id: number) => void;
  onDeleteOrder: (id: number) => void;
}

export const OrdersList = ({
  orders,
  selectedOrderId,
  onSelectOrder,
  onDeleteOrder,
}: OrdersListProps) => {
  const isCompact = selectedOrderId !== null;

  return (
    <div className={`orders-list ${isCompact ? "orders-list--compact" : ""}`}>
      {orders.length > 0 ? (
        orders.map((order) => (
          <OrderRow
            key={order.id}
            order={order}
            isSelected={selectedOrderId === order.id}
            isCompact={isCompact}
            onSelect={() => onSelectOrder(order.id)}
            onDelete={() => onDeleteOrder(order.id)}
          />
        ))
      ) : (
        <p className="empty">No orders found.</p>
      )}
    </div>
  );
};
