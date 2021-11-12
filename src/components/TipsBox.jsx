import greg from "assets/img/greg.png";

export default function TipsBox() {
  return (
    <div className="tips-box">
      <div className="text">
        <p>
          Should we start with your CV or Resume? You can choose a template from
          the selection below!
        </p>
      </div>
      <div className="circle">
        <img src={greg} alt="icn" />
      </div>
    </div>
  );
}
