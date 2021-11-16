import mockup from "assets/backup/mockup.json";

export default function Preview() {
  const {
    photo,
    contact,
    additional_info,
    certification,
    education,
    work_history,
  } = mockup;

  console.log(certification);

  const Languages = additional_info.languages.map((item, index) => (
    <li key={index}>
      <p>{item}</p>{" "}
    </li>
  ));

  const Skills = additional_info.additional_skills.map((item, index) => (
    <li key={index}>
      <p>{item}</p>
    </li>
  ));

  const WorkHistory = work_history.map((item, index) => (
    <li key={index}>
      <h3 className="heading1">
        {item.title} | {item.from} - {item.to}
      </h3>
      <h4 className="heading2">
        {item.company},{item.city},{item.country}
      </h4>
      <p>
        Because people absorb new information by relating it to an existing
        reference point they understand, you should create a metaphor that
        allows them to associate, compare, and draw relations easily.
      </p>
    </li>
  ));

  const Education = education.map((item, index) => (
    <li key={index}>
      <h3 className="heading1">
        {item.program} | {item.duration} year
        {Number.parseInt(item.duration) > 1 && "s"}
      </h3>
      <h4 className="heading2">{item.school}</h4>
      <p>
        Because people absorb new information by relating it to an existing
        reference point they understand, you should create a metaphor that
        allows them to associate, compare, and draw relations easily.
      </p>
    </li>
  ));

  const Certification = certification.map((item, index) => (
    <li key={index}>
      <h4 className="heading1">
        {item.domain} | {item.duration} year
        {Number.parseInt(item.duration) > 1 && "s"}
      </h4>
    </li>
  ));

  return (
    <main className="page-preview">
      <h1>Preview</h1>
      <div className="a4">
        <div className="title">
          <h1 className="name">
            {contact.firstname} {contact.middlename} {contact.lastname}
          </h1>
          <h2 className="role">Role</h2>
          <p className="pitch">
            “Our device is called the Hydrolyzier, and it uses a tri-plane
            osmotic process that dramatically reduces the content of impurities
            in drinking water.”
          </p>
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
        </div>
        <div className="languages">
          <h3>Languages spoken :</h3>
          <ul>{Languages}</ul>
        </div>
        <div className="skills">
          <h3>Skills :</h3>
          <ul>{Skills}</ul>
        </div>
        <div className="content">
          <div className="work-history">
            <h3>Professional Experience :</h3>
            <ul>{WorkHistory}</ul>
          </div>
          <div className="education">
            <h3>Education :</h3>
            <ul>{Education}</ul>
          </div>
          <div className="certification">
            <h3>Certifications & Training :</h3>
            <ul>{Certification}</ul>
          </div>
        </div>
      </div>
    </main>
  );
}
