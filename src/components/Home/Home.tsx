//@ts-nocheck
//NPM Packages
import greg from "assets/img/greg.png";
import Header from "components/shared/Header";
import TabEducation from "components/TabEducation";
import TabPhoto from "components/TabPhoto";
import { FC, useState } from "react";

//Local imports
const Home: FC = () => {
  //Local states
  const [display, setDisplay] = useState("photo");

  return (
    <>
      <Header setDisplay={setDisplay} />
      <main className="page-form">
        <div className="tips-box">
          <div className="text">
            <p>
              Should we start with your CV or Resume? You can choose a template
              from the selection below!
            </p>
          </div>
          <div className="circle">
            <img src={greg} alt="icn" />
          </div>
        </div>

        {display === "photo" && <TabPhoto />}
        {display === "contact" && <TabPhoto />}
        {display === "education" && <TabEducation />}
        {display === "certification" && <TabPhoto />}
        {display === "work history" && <TabPhoto />}
      </main>
    </>
  );
};
export default Home;
