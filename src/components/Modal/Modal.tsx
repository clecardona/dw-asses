//@ts-nocheck
//NPM Packages
import reactDom from "react-dom";
import { FC } from "react";
import greg from "assets/icns/greg.png";
import { useForm } from "react-hook-form";

//Local Files
import cross from "assets/icns/cross.png";
import FormInput from "components/FormInput";

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
}) => {
  const { handleSubmit } = useForm();

  function onSubmit(data) {
    setForm({ ...form, education: data });
  }

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
          <form onSubmit={handleSubmit(onSubmit)} id="formModal">
            <label>
              <h3>Edit element selected </h3>
              <textarea
                rows="12"
                cols="100"
                value={element}
                defaultValue={element}
                {...register("item-modif", {})}
              />
            </label>
            <input type="submit" className="hidden" id="submit-form" />
            <label htmlFor="submit-form" className="btn btn-blue save">
              Save
            </label>
          </form>
        </div>
      </div>
    </>, //@ts-ignore
    document.getElementById("modal")
  );
};
export default Modal;
