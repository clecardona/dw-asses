import plus from "assets/icns/plus.png";

export default function ButtonAddMore({ children, onClick }) {
  return (
    <button type="button" className="btn-addmore" onClick={onClick}>
      <img src={plus} alt="" />
      <h3>{children}</h3>
    </button>
  );
}
