import { useAppSelector } from "../../../store/hooks";
import { selectOrderTitleById } from "../../../store/selectors";
import {
  formatDateShort,
  formatDateLong,
  formatPrice,
} from "../../../utils/formatters";
import type { Product } from "../../../types";
import "./ProductRow.scss";

interface ProductRowProps {
  product: Product;
  onDelete: () => void;
}

export const ProductRow = ({ product, onDelete }: ProductRowProps) => {
  const orderTitle = useAppSelector((state) =>
    selectOrderTitleById(state, product.order),
  );
  const usdPrice = product.price.find((p) => p.symbol === "USD");
  const uahPrice = product.price.find((p) => p.symbol === "UAH");

  return (
    <div className="product-row">
      <div
        className={`product-row__status-dot ${product.isNew ? "product-row__status-dot--available" : "product-row__status-dot--repair"}`}
      />
      <img
        className="product-row__photo"
        src={product.photo}
        alt={product.title}
      />
      <div className="product-row__info">
        <div className="product-row__title">{product.title}</div>
        <div className="product-row__serial">SN-{product.serialNumber}</div>
      </div>
      <div
        className={`product-row__state ${product.isNew ? "product-row__state--available" : "product-row__state--repair"}`}
      >
        {product.isNew ? "Available" : "In Repair"}
      </div>
      <div className="product-row__guarantee">
        <span>from {formatDateShort(product.guarantee.start)}</span>
        <span>to {formatDateShort(product.guarantee.end)}</span>
      </div>
      <div className="product-row__type">{product.type}</div>
      <div className="product-row__prices">
        {usdPrice && (
          <span className="product-row__price-usd">
            ${formatPrice(usdPrice.value)}
          </span>
        )}
        {uahPrice && (
          <span className="product-row__price-uah">
            {formatPrice(uahPrice.value)} UAH
          </span>
        )}
      </div>
      <div className="product-row__order-title">{orderTitle}</div>
      <div className="product-row__date">{formatDateLong(product.date)}</div>
      <button className="product-row__delete" onClick={onDelete}>
        🗑
      </button>
    </div>
  );
};
