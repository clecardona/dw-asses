//@ts-nocheck
//NPM Packages
import reactDom from "react-dom";
import { FC } from "react";
import greg from "assets/icns/greg.png";
import { useForm } from "react-hook-form";

//Local Files
import cross from "assets/icns/cross.png";
import FormInput from "components/FormInput";
import FormModal from "./FormModal";

interface IProps {
  open: boolean;
  onClose(): void;
  element: any;
  itemIndex: any;
}

const Modal: FC<IProps> = ({
  open,
  onClose,
  element,
  formSection,
  itemIndex,
  register,
  errors,
  form,
  setForm,
}) => {
  const formOpts = {
    element,
    register,
    form,
    setForm,
    itemIndex,
  };

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
        <div className="content">
          <FormModal formOpts={formOpts} />
        </div>
      </div>
    </>, //@ts-ignore
    document.getElementById("modal")
  );
};
export default Modal;
