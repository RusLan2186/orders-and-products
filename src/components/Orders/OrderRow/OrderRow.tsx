import { useAppSelector } from "../../../store/hooks";
import { selectOrderSummary } from "../../../store/selectors";
import {
  formatDateShort,
  formatDateLong,
  formatPrice,
} from "../../../utils/formatters";
import type { Order } from "../../../types";
import "./OrderRow.scss";
import { motion } from "framer-motion";

interface OrderRowProps {
  order: Order;
  isSelected: boolean;
  isCompact: boolean;
  onSelect: () => void;
  onDelete: () => void;
}

export const OrderRow = ({
  order,
  isSelected,
  isCompact,
  onSelect,
  onDelete,
}: OrderRowProps) => {
  const summary = useAppSelector((state) =>
    selectOrderSummary(state, order.id),
  );

  return (
    <motion.div
      layout
      transition={{ duration: 0.25 }}
      className={`order-row ${isSelected ? "order-row--selected" : ""} ${isCompact ? "order-row--compact" : ""}`}
      onClick={onSelect}
    >
      {!isCompact && <div className="order-row__title">{order.title}</div>}

      <div className="order-row__count">
        <span className="order-row__count-value">{summary.count}</span>
        <span className="order-row__count-label">Products</span>
      </div>

      <div className="order-row__dates">
        <span className="order-row__date-short">
          {formatDateShort(order.date)}
        </span>
        <span className="order-row__date-long">
          {formatDateLong(order.date)}
        </span>
      </div>

      {!isCompact && (
        <div className="order-row__sums">
          <span className="order-row__sum-usd">
            ${formatPrice(summary.totalUSD)}
          </span>
          <span className="order-row__sum-uah">
            {formatPrice(summary.totalUAH)} UAH
          </span>
        </div>
      )}

      {!isCompact && (
        <button
          className="order-row__delete"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          🗑
        </button>
      )}

      {isCompact && isSelected && <div className="order-row__arrow">›</div>}
    </motion.div>
  );
};
