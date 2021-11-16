//NPM Packages
import cv_no_photo from "assets/icns/cv-no-photo.png";
import cv_photo from "assets/icns/cv-photo.png";
import TipsBox from "./TipsBox";

//Local imports
export default function TabPhoto({ form, setForm, setDisplay }) {
  return (
    <>
      <TipsBox tab="cv-photo" />
      <h1>Choose a CV</h1>

      <section className="cv-photo">
        <button
          className="item"
          onClick={() => {
            setForm({ ...form, photo: true });
            setDisplay("contact");
          }}
        >
          <p>with a photo</p>
          <img src={cv_photo} alt="withphoto" />
        </button>

        <button
          className="item"
          onClick={() => {
            setForm({ ...form, photo: false });
            setDisplay("contact");
          }}
        >
          <p>without photo</p>
          <img src={cv_no_photo} alt="nophoto" />
        </button>
      </section>
    </>
  );
}
