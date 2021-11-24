//@ts-nocheck
//NPM Packages
import reactDom from "react-dom";
import { FC } from "react";

//Local Files
import greg from "assets/icns/greg.png";
import cross from "assets/icns/cross.png";

interface IProps {
  open: boolean;
  onClose(): void;
  element: any;
  itemIndex: any;
}

const Modal: FC<IProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return reactDom.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose} />

      <div className="modal">
        <button className="btn-close" onClick={onClose}>
          <img alt="close" src={cross} />
        </button>
        <div className="greg">
          <img src={greg} alt="" />
        </div>
        <div className="content">{children}</div>
      </div>
    </>, //@ts-ignore
    document.getElementById("modal")
  );
};
export default Modal;
