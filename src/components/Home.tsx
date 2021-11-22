//@ts-nocheck
//NPM Packages
import { FC, useState } from "react";
import Header from "components/shared/Header";
import TabEducation from "components/TabEducation";
import TabPhoto from "components/TabPhoto";
import TabAdditionalInfo from "./TabAdditionalInfo";
import TabCertification from "./TabCertification";
import TabContact from "./TabContact";
import TabWorkHistory from "./TabWorkHistory";
import TabResponsibilities from "./TabResponsibilities";
import TabAccomplishments from "./TabAccomplishments";
import TabSummaries from "./TabSummaries";
import mockup from "assets/backup/mockup.json";

//Local imports
const Home: FC = () => {
  const initialForm = {
    photo: {},
    contact: {},
    education: {},
    certification: {},
    work_history: [
      {
        company: "Klarna",
        title: "Chief",
        city: "Stockholm",
        country: "Sweden",
        from: 2010,
        to: 2012,
        responsibilities: [
          "Klarna - responsibility 1",
          "Klarna - responsibility 2",
          "Klarna - responsibility 3",
        ],
        accomplishments: ["Klarna - acc 1", "Klarna - acc 2", "Klarna - acc 3"],
      },
      {
        company: "Google",
        title: "Chief",
        city: "Los Angeles",
        country: "USA",
        from: 2012,
        to: 2015,
        responsibilities: [
          "Google - responsibility 1",
          "Google - responsibility 2",
          "Google - responsibility 3",
        ],
        accomplishments: ["Google - acc 1", "Google - acc 2", "Google - acc 3"],
      },
    ],
    additional_info: {},
  };
  //Local states
  const [display, setDisplay] = useState("photo");
  const [jobId, setJobId] = useState(0);
  const [form, setForm] = useState(mockup);
  //const [form, setForm] = useState(initialForm);
  const numberOfItems = form.work_history.length;

  //console.log(form.work_history);
  //send to localStorage??
  return (
    <>
      <Header display={display} setDisplay={setDisplay} setJobId={setJobId} />
      <main className="page-form">
        {/*   <form action=""> */}
        {display === "photo" && (
          <TabPhoto form={form} setForm={setForm} setDisplay={setDisplay} />
        )}
        {display === "contact" && (
          <TabContact form={form} setForm={setForm} setDisplay={setDisplay} />
        )}
        {display === "education" && (
          <TabEducation form={form} setForm={setForm} setDisplay={setDisplay} />
        )}
        {display === "certification & training" && (
          <TabCertification
            form={form}
            setForm={setForm}
            setDisplay={setDisplay}
          />
        )}
        {display === "work history" && (
          <TabWorkHistory
            form={form}
            setForm={setForm}
            setDisplay={setDisplay}
            jobId={jobId}
            setJobId={setJobId}
            numberOfItems={numberOfItems}
          />
        )}
        {display === "responsibilities" && (
          <TabResponsibilities
            form={form}
            setForm={setForm}
            setDisplay={setDisplay}
            jobId={jobId}
            setJobId={setJobId}
            numberOfItems={numberOfItems}
          />
        )}
        {display === "accomplishments" && (
          <TabAccomplishments
            form={form}
            setForm={setForm}
            setDisplay={setDisplay}
            jobId={jobId}
            setJobId={setJobId}
            numberOfItems={numberOfItems}
          />
        )}
        {display === "summaries" && (
          <TabSummaries
            form={form}
            setForm={setForm}
            setDisplay={setDisplay}
            setJobId={setJobId}
            numberOfItems={numberOfItems}
          />
        )}
        {display === "additional info" && (
          <TabAdditionalInfo
            form={form}
            setForm={setForm}
            setDisplay={setDisplay}
          />
        )}
        {/* </form> */}
      </main>
    </>
  );
};
export default Home;
