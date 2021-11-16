import upload from "assets/icns/upload.png";

export default function ButtonPlus({ children }) {
  return (
    <button type="button" className="btn-plus" onClick={() => alert(children)}>
      <img src={upload} alt="" />
      <h3>{children}</h3>
    </button>
  );
}
