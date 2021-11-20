import mockup from "assets/backup/mockup.json";
import { useState } from "react";

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

  const Highlights = highlights.map((item, index) => (
    <li key={index}>
      <p>{item}</p>
    </li>
  ));

  const Languages = additional_info.languages.map((item, index) => (
    <li key={index}>
      <h4>{item}</h4>{" "}
    </li>
  ));

  const Skills = additional_info.additional_skills.map((item, index) => (
    <li key={index}>
      <h4>{item}</h4>
    </li>
  ));

  const WorkHistory = work_history.map((item, index) => {
    const Responsibilities = item.responsibilities.map((item, index) => (
      <li key={index}>
        <p>{item}</p>
      </li>
    ));
    const Accomplishments = item.accomplishments.map((item, index) => (
      <li key={index}>
        <p>{item}</p>
      </li>
    ));

    return (
      <li key={index}>
        <div className="heading1">
          <h3>{item.title}</h3>
          <h3>
            {item.from} - {item.to}
          </h3>
        </div>
        <h4 className="heading2">
          {item.company}, {item.city}, {item.country}
        </h4>
        <ul className="responsibilities">{Responsibilities}</ul>
        <ul className="accomplishments">{Accomplishments}</ul>
      </li>
    );
  });

  const Education = education.map((item, index) => (
    <li key={index} className="heading1">
      <div className="data">
        <h4>
          {item.school} - {item.program}
        </h4>
      </div>
      <h4>
        Degree {item.duration} year
        {Number.parseInt(item.duration) > 1 && "s"}
      </h4>
    </li>
  ));

  const Certification = certification.map((item, index) => (
    <li key={index} className="heading1">
      <div className="data">
        <h4>{item.domain} </h4>
      </div>
      <h4>
        Certificate {item.duration} year
        {Number.parseInt(item.duration) > 1 && "s"}
      </h4>
    </li>
  ));

  return (
    <main className="page-preview">
      <h1>Preview</h1>
      <div className="selector">
        <button onClick={() => setStyle("basic")}>Basic</button>
        <button onClick={() => setStyle("modern")}>Modern</button>
      </div>

      <div className={`a4 ${style}`}>
        <div className="title">
          <h1 className="name">
            {contact.firstname} {contact.middlename} {contact.lastname}
          </h1>
          <h2 className="role">{role}</h2>
        </div>
        {photo && (
          <div className="photo">
            <img src={contact.photo_url} alt="" />
          </div>
        )}
        <div className="contact">
          <h4 className="address">{contact.address}</h4>
          <h4 className="postcode ">
            {contact.postcode} <strong>{contact.city}</strong>
          </h4>
          <h4 className="email">{contact.email}</h4>
          <h4 className="mobile">{contact.mobile}</h4>
          <h4 className="linkedin">{contact.linkedin}</h4>
        </div>

        <div className="highlights">
          <h2>Career Highlights</h2>
          <ul>{Highlights}</ul>
        </div>

        <div className="languages">
          <h2>Languages spoken</h2>
          <ul>{Languages}</ul>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <ul>{Skills}</ul>
        </div>
        <div className="content">
          <div className="work-history">
            <h2>Professional Experience</h2>
            <ul className="work-history">{WorkHistory}</ul>
          </div>
          <div className="education">
            <h2>Education</h2>
            <ul>{Education}</ul>
            <ul>{Certification}</ul>
          </div>
        </div>
      </div>
    </main>
  );
}
