import { useAppSelector } from "../../../store/hooks";
import { selectProductsByOrderId } from "../../../store/selectors";
import type { Order } from "../../../types";
import "./OrderDetails.scss";

interface OrderDetailsProps {
  order: Order;
  onClose: () => void;
  onDeleteProduct: (id: number) => void;
}

export const OrderDetails = ({
  order,
  onClose,
  onDeleteProduct,
}: OrderDetailsProps) => {
  const products = useAppSelector((state) =>
    selectProductsByOrderId(state, order.id),
  );

  return (
    <div className="order-details">
      <button className="order-details__close" onClick={onClose}>
        ✕
      </button>
      <h2 className="order-details__title">{order.title}</h2>
      <div className="order-details__list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="order-details__item">
              <div className="order-details__inner">
                <img
                  className="order-details__photo"
                  src={product.photo}
                  alt={product.title}
                />

                <div className="order-details__info">
                  <div className="order-details__product-title">
                    {product.title}
                  </div>

                  <div className="order-details__serial">
                    SN-{product.serialNumber}
                  </div>
                </div>
              </div>

              <div className="order-details__status">
                {product.isNew ? "New" : "Used"}
              </div>

              <button
                onClick={() => onDeleteProduct(product.id)}
                className="order-details__delete"
              >
                🗑
              </button>
            </div>
          ))
        ) : (
          <p className="empty">
            No products found for this order.
          </p>
        )}
      </div>
    </div>
  );
};
