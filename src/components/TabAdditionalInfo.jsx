//NPM Packages
import box from "assets/icns/box.png";

//Local imports
export default function TabAdditionalInfo() {
  return (
    <section>
      <h1>
        Additional Info <img src={box} alt="" />
      </h1>
      <div className="additional-info">
        <div className="box">Additional Info form</div>
      </div>
    </section>
  );
}
