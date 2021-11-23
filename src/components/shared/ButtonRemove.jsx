import remove from "assets/icns/remove.png";

export default function ButtonRemove({ onClick }) {
  return (
    <div className="remove" onClick={onClick}>
      <h3>Remove section</h3>
      <button type="button" className="btn-remove" onClick={onClick}>
        <img src={remove} alt="" />
      </button>
    </div>
  );
}
