import tipIcon from "assets/icns/tip.png";
import Modal from "components/Modal/Modal";
import { useState } from "react";
export default function Tip({ data }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className="btn-tip" onClick={() => setOpen(true)}>
        <img src={tipIcon} alt="" />
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <h4 className="tip">{data}</h4>
      </Modal>
    </>
  );
}
