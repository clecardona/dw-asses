//NPM Packages
import agenda from "assets/icns/agenda.png";

//Local imports
import TipsBox from "./TipsBox";

export default function TabContact() {
  return (
    <>
      <TipsBox tab="contact" />
      <section>
        <h1>
          Contact <img src={agenda} alt="" />
        </h1>
        <div className="contact">
          <div className="box">CONTACT STUFF</div>
        </div>
      </section>
    </>
  );
}
