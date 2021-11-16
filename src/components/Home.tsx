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
    work_history: {
      "0company": "Klarna",
      "0title": "Chief",
      "0city": "Stockholm",
      "0country": "Sweden",
    },
    additional_info: {},
  };
  //Local states
  const [display, setDisplay] = useState("photo");
  const [form, setForm] = useState(initialForm);

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }

  console.log(form);
  //send to lacalStorage??
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
