import remove from "assets/icns/remove.png";

export default function ButtonRemove({ children, onClick }) {
  return (
    <button type="button" className="btn-remove" onClick={onClick}>
      <img src={remove} alt="" />
      <h3>{children}</h3>
    </button>
  );
}
