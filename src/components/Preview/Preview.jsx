// NPM Packages
import { useState } from "react";
// Local Files
import mockup from "assets/backup/mockup.json";
import Highlights from "components/Preview/Highlights";
import WorkHistory from "components/Preview/WorkHistory";
import Languages from "components/Preview/Languages";
import Skills from "components/Preview/Skills";
import Title from "components/Preview/Title";
import Photo from "components/Preview/Photo";
import Contact from "components/Preview/Contact";
import Education from "components/Preview/Education";
import Certification from "./Certification";

export default function Preview() {
  const [style, setStyle] = useState("basic");

  const {
    photo,
    role,
    contact,
    additional_info,
    certification,
    education,
    work_history,
    highlights,
  } = mockup;

  console.log(mockup);

  return (
    <main className="page-preview">
      <h1>Preview</h1>
      <div className="selector">
        <button
          className={style === "basic" ? "btn btn-blue " : "btn btn-gray"}
          onClick={() => setStyle("basic")}
        >
          Basic
        </button>
        <button
          className={style === "modern" ? "btn btn-blue " : "btn btn-gray"}
          onClick={() => setStyle("modern")}
        >
          Modern
        </button>
      </div>

      <div className={`a4 ${style}`}>
        <Title contact={contact[0]} role={role} />
        {photo && <Photo contact={contact[0]} />}
        <Contact contact={contact[0]} />
        <Highlights highlights={highlights} />
        <Languages languages={additional_info.languages} />
        <Skills skills={additional_info.additional_skills} />

        <div className="content">
          <WorkHistory work_history={work_history} />
          <div className="education">
            <h2>Education {"&"} Certifications</h2>
            <Education education={education} />
            <Certification certification={certification} />
          </div>
        </div>
      </div>
    </main>
  );
}
