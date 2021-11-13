//NPM Packages
import box from "assets/icns/box.png";

//Local imports
export default function TabAdditionalInfo() {
  return (
    <>
      <h1>Additional Info</h1>
      <img src={box} alt="" className="logo" />
      <section>
        <div className="additional-info">
          <div className="box">Additional Info form</div>
        </div>
      </section>
    </>
  );
}
