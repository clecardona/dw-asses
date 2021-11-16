//@ts-nocheck
//NPM Packages
import Header from "components/shared/Header";
import TabEducation from "components/TabEducation";
import TabPhoto from "components/TabPhoto";
import { FC, useState } from "react";

import TabAdditionalInfo from "./TabAdditionalInfo";
import TabCertification from "./TabCertification";
import TabContact from "./TabContact";
import TabWorkHistory from "./TabWorkHistory";

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
      },
      {
        company: "Google",
        title: "Chief",
        city: "Los Angeles",
        country: "USA",
        from: 2012,
        to: 2015,
      },
    ],
    additional_info: {},
  };
  //Local states
  const [display, setDisplay] = useState("photo");
  const [form, setForm] = useState(initialForm);

  console.log(form.work_history);
  //send to localStorage??
  return (
    <>
      <Header display={display} setDisplay={setDisplay} />
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
