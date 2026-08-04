import { motion } from "framer-motion";
import "./DeleteModal.scss";

interface DeleteModalProps {
  title: string;
  subtitle?: string;
  photo?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const DeleteModal = ({
  title,
  subtitle,
  photo,
  onConfirm,
  onCancel,
}: DeleteModalProps) => {
  return (
    <motion.div
      className="delete-modal-overlay"
      onClick={onCancel}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        className="delete-modal"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 8 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <button className="delete-modal__close" onClick={onCancel}>
          ✕
        </button>
        <p className="delete-modal__question">
          Are you sure you want to delete this item?
        </p>
        <div className="delete-modal__item">
          {photo && (
            <img className="delete-modal__photo" src={photo} alt={title} />
          )}
          <div className="delete-modal__info">
            <div className="delete-modal__title">{title}</div>
            {subtitle && (
              <div className="delete-modal__subtitle">{subtitle}</div>
            )}
          </div>
        </div>
        <div className="delete-modal__actions">
          <button className="delete-modal__cancel" onClick={onCancel}>
            Cancel
          </button>
          <button className="delete-modal__confirm" onClick={onConfirm}>
            🗑 Delete
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
