import { useState } from "react";
import Modal from "./Modal/Modal";

export default function Accomplishment({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="list-item" onClick={() => setOpen(true)}>
        <h4>{item}</h4>
        <h3 className="btn-edit">Edit</h3>
      </button>
      <Modal open={open} onClose={() => setOpen(false)} element={item} />
    </>
  );
}
