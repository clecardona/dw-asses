import upload from "assets/icns/upload.png";

export default function ButtonPlus({ children, onClick }) {
  return (
    <button type="button" className="btn-plus" onClick={onClick}>
      <img src={upload} alt="" />
      <h3>{children}</h3>
    </button>
  );
}
