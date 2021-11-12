//NPM Packages
//Local imports
import certification from "assets/icns/certification.png";
import TipsBox from "./TipsBox";

export default function TabCertification() {
  return (
    <>
      <TipsBox tab="certification" />
      <section>
        <h1>
          Certification & Training <img src={certification} alt="" />
        </h1>
        <div className="certification">
          <div className="box">Certification stuff</div>
        </div>
      </section>
    </>
  );
}
