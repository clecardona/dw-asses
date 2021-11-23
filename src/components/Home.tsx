//@ts-nocheck
//NPM Packages
import { FC, useState } from "react";
import Header from "components/shared/Header";
import Education from "components/Forms/Education";
import TabPhoto from "components/TabPhoto";
import TabAdditionalInfo from "./TabAdditionalInfo";
import TabCertification from "./TabCertification";
import Contact from "components/Forms/Contact";
import WorkHistory from "components/Forms/WorkHistory";
import TabResponsibilities from "./TabResponsibilities";
import TabAccomplishments from "./Forms/Accomplishments";
import TabSummaries from "./TabSummaries";
import mockup from "assets/backup/mockup.json";

//Local imports
const Home: FC = () => {
  //Local states
  const [display, setDisplay] = useState("start");
  const [jobId, setJobId] = useState(0);
  const [form, setForm] = useState(mockup);
  const numberOfItems = form.work_history.length;

  //console.log(form.work_history);
  //send to localStorage??
  return (
    <>
      <Header display={display} setDisplay={setDisplay} setJobId={setJobId} />
      <main className="page-form">
        {/*   <form action=""> */}
        {display === "start" && (
          <TabPhoto form={form} setForm={setForm} setDisplay={setDisplay} />
        )}
        {display === "contact" && (
          <Contact form={form} setForm={setForm} setDisplay={setDisplay} />
        )}
        {display === "education" && (
          <Education form={form} setForm={setForm} setDisplay={setDisplay} />
        )}
        {display === "certification & training" && (
          <TabCertification
            form={form}
            setForm={setForm}
            setDisplay={setDisplay}
          />
        )}
        {display === "work history" && (
          <WorkHistory
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
