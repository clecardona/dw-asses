import remove from "assets/icns/remove.png";

export default function ButtonRemove({ onClick }) {
  return (
    <button type="button" className="btn-remove" onClick={onClick}>
      <img src={remove} alt="" />
    </button>
  );
}
