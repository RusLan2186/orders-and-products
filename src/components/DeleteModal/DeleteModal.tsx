import './DeleteModal.scss';

interface DeleteModalProps {
  title: string;
  subtitle?: string;
  photo?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const DeleteModal = ({ title, subtitle, photo, onConfirm, onCancel }: DeleteModalProps) => {
  return (
    <div className="delete-modal-overlay" onClick={onCancel}>
      <div className="delete-modal" onClick={(e) => e.stopPropagation()}>
        <button className="delete-modal__close" onClick={onCancel}>
          ✕
        </button>
        <p className="delete-modal__question">Are you sure you want to delete this item?</p>
        <div className="delete-modal__item">
          {photo && <img className="delete-modal__photo" src={photo} alt={title} />}
          <div className="delete-modal__info">
            <div className="delete-modal__title">{title}</div>
            {subtitle && <div className="delete-modal__subtitle">{subtitle}</div>}
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
      </div>
    </div>
  );
};