//NPM Packages
import cv_no_photo from "assets/icns/cv-no-photo.png";
import cv_photo from "assets/icns/cv-photo.png";

//Local imports
export default function TabPhoto() {
  return (
    <section>
      <h1>Choose a CV</h1>
      <div className="cv">
        <div className="box">
          <p>with a photo</p>
          <img src={cv_photo} alt="withphoto" />
        </div>
        <div className="box">
          <p>without photo</p>
          <img src={cv_no_photo} alt="nophoto" />
        </div>
      </div>
    </section>
  );
}
