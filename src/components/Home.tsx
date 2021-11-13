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
    education: {},
    work_history: {
      company0: "Klarna",
      title0: "Chief",
      city0: "Stockholm",
      country0: "Sweden",
    },
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
        {display === "photo" && <TabPhoto />}
        {display === "contact" && (
          <TabContact form={form} onChange={onChange} />
        )}
        {display === "education" && (
          <TabEducation form={form} onChange={onChange} />
        )}
        {display === "certification & training" && (
          <TabCertification form={form} onChange={onChange} />
        )}
        {display === "work history" && (
          <TabWorkHistory
            form={form}
            setForm={setForm}
            setDisplay={setDisplay}
          />
        )}
        {display === "additional info" && (
          <TabAdditionalInfo form={form} onChange={onChange} />
        )}
        {/* </form> */}
      </main>
    </>
  );
};
export default Home;
