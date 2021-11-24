import { useState } from "react";
import Modal from "../../Modal/Modal";
import FormModal from "components/Modal/FormModal";

export default function Mapper({
  item,
  formSection,
  itemIndex,
  register,
  errors,
  form,
  setForm,
}) {
  const [open, setOpen] = useState(false);

  const formOpts = {
    element: item,
    register,
    form,
    setForm,
    itemIndex,
  };

  return (
    <>
      <button className="list-item" onClick={() => setOpen(true)}>
        <h4>{item}</h4>
        <h3 className="btn-edit">Edit</h3>
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <FormModal formOpts={formOpts} />
      </Modal>
    </>
  );
}
