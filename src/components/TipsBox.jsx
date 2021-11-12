import greg from "assets/img/greg.png";
import tips from "assets/tips/tips.json"

export default function TipsBox({tab}) {
  return (
    <div className="tips-box">
      <div className="text">
        <p>
         {tips.[tab]}
        </p>
      </div>
      <div className="circle">
        <img src={greg} alt="icn" />
      </div>
    </div>
  );
}
