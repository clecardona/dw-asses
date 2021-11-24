//@ts-nocheck
//NPM Packages
import { FC, useState } from "react";

//Local Files
import mockup from "assets/backup/mockup.json";
import Header from "components/Header/Header";
import TabStart from "components/Forms/TabStart";
import TabContact from "components/Forms/TabContact";
import TabEducation from "components/Forms/TabEducation";
import TabCertification from "components/Forms/TabCertification";
import TabAdditionalInfo from "components/Forms/TabAdditionalInfo";
import TabWorkHistory from "components/Forms/WorkHistory/TabWorkHistory";
import TabResponsibilities from "components/Forms/WorkHistory/TabResponsibilities";
import TabAccomplishments from "components/Forms/WorkHistory/TabAccomplishments";
import TabSummaries from "components/Forms/WorkHistory/TabSummaries";

//Local imports
const Home: FC = () => {
  //Local states
  const [display, setDisplay] = useState("summaries");
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
          <TabStart form={form} setForm={setForm} setDisplay={setDisplay} />
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
