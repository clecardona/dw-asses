//@ts-nocheck
//NPM Packages
import greg from "assets/img/greg.png";
import Header from "components/shared/Header";
import TabEducation from "components/TabEducation";
import TabPhoto from "components/TabPhoto";
import { FC, useState } from "react";
import TabAdditionalInfo from "./TabAdditionalInfo";
import TabCertification from "./TabCertification";
import TabContact from "./TabContact";
import TabWorkHistory from "./TabWorkHistory";
import TipsBox from "./TipsBox";

//Local imports
const Home: FC = () => {
  //Local states
  const [display, setDisplay] = useState("photo");

  return (
    <>
      <Header setDisplay={setDisplay} />
      <main className="page-form">
        {display === "photo" && <TabPhoto />}
        {display === "contact" && <TabContact />}
        {display === "education" && <TabEducation />}
        {display === "certification & training" && <TabCertification />}
        {display === "work history" && <TabWorkHistory />}
        {display === "additional info" && <TabAdditionalInfo />}
      </main>
    </>
  );
};
export default Home;
