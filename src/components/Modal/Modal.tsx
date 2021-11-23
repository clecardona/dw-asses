//NPM Packages
import reactDom from "react-dom";
import { FC } from "react";

//Local Files
import cross from "assets/icns/cross.png";

interface IProps {
  open: boolean;
  onClose(): void;
  element: any;
}

const Modal: FC<IProps> = ({ open, onClose, element }) => {
  if (!open) return null;
  return reactDom.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose} />

      <div className="modal">
        <button className="btn-close" onClick={onClose}>
          <img alt="close" src={cross} />
        </button>
        <h1>{element}</h1>
      </div>
    </>, //@ts-ignore
    document.getElementById("modal")
  );
};
export default Modal;
