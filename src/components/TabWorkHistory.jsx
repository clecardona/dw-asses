//NPM Packages
//Local imports
import TipsBox from "./TipsBox";
import bag from "assets/icns/bag.png";

//Local imports
export default function TabWorkHistory() {
  return (
    <>
      <TipsBox tab="history" />
      <section>
        <h1>
          Work History <img src={bag} alt="" />
        </h1>
        <div className="work-history">
          <div className="box">Work history form</div>
        </div>
      </section>
    </>
  );
}
