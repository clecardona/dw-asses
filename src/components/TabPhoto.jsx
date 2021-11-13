//NPM Packages
import cv_no_photo from "assets/icns/cv-no-photo.png";
import cv_photo from "assets/icns/cv-photo.png";
import TipsBox from "./TipsBox";

//Local imports
export default function TabPhoto() {
  return (
    <>
      <TipsBox tab="cv-photo" />
      <h1>Choose a CV</h1>

      <section className="cv-photo">
        <div className="item">
          <p>with a photo</p>
          <img src={cv_photo} alt="withphoto" />
        </div>
        <div className="item">
          <p>without photo</p>
          <img src={cv_no_photo} alt="nophoto" />
        </div>
      </section>
    </>
  );
}
