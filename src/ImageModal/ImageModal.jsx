import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onClose, image }) {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>Author: {image.user.name}</p>
      <p>Likes: {image.likes}</p>
    </Modal>
  );
}
