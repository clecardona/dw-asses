//NPM Packages
//Local imports
import certification from "assets/icns/certification.png";
import TipsBox from "./TipsBox";

export default function TabCertification() {
  return (
    <>
      <TipsBox tab="certification" />
      <h1 className="certification-title">Certification & Training</h1>
      <img src={certification} alt="" className="logo certification-logo" />
      <section>
        <div className="box">Certification stuff</div>
      </section>
    </>
  );
}
