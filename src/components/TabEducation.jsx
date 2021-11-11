//NPM Packages
import education from "assets/icns/education.png";
import cv_photo from "assets/icns/cv-photo.png";

//Local imports
export default function TabEducation() {
  return (
    <section>
      <h1>
        Education <img src={education} alt="" />
      </h1>
      <div className="education">
        <div className="box">EDUCATION STUFF</div>
      </div>
    </section>
  );
}
