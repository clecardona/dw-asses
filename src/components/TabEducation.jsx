//NPM Packages

//Local imports
import education from "assets/icns/education.png";
import TipsBox from "./TipsBox";

export default function TabEducation() {
  return (
    <>
      <TipsBox tab="education" />
      <section>
        <h1>
          Education <img src={education} alt="" />
        </h1>
        <div className="education">
          <div className="box">EDUCATION STUFF</div>
        </div>
      </section>
    </>
  );
}
