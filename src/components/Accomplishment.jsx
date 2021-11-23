import { useState } from "react";
import Modal from "./Modal/Modal";

export default function Accomplishment({
  item,
  formSection,
  itemIndex,
  register,
  errors,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="list-item" onClick={() => setOpen(true)}>
        <h4>{item}</h4>
        <h3 className="btn-edit">Edit</h3>
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        element={item}
        formSection={formSection}
        itemIndex={itemIndex}
        register={register}
        errors={errors}
      />
    </>
  );
}
