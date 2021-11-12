//NPM Packages
import certification from "assets/icns/certification.png";

//Local imports
export default function TabCertification() {
  return (
    <section>
      <h1>
        Certification & Training <img src={certification} alt="" />
      </h1>
      <div className="certification">
        <div className="box">Certification stuff</div>
      </div>
    </section>
  );
}
