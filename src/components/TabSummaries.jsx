import { useState } from "react";
import { useForm } from "react-hook-form";

import Progress from "./Progress";
import TipsBox from "./TipsBox";
import ButtonAddMore from "./shared/ButtonAddMore";
import checklist from "assets/icns/checklist.png";
import job from "assets/icns/job.png";

export default function TabSummaries({
  form,
  setForm,
  setDisplay,
  jobId,
  setJobId,
  numberOfItems,
}) {
  const [quantity, setQuantity] = useState([0, 0, 0]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function addElement() {
    const newQuantity = [...quantity, 0];
    setQuantity(newQuantity);
  }

  function onSubmit(data) {
    //setForm({ ...form, certification: data }); target the good one
  }

  console.log(form);
  //Components

  const WorkHistory = form.work_history.map((item, index) => {
    const Responsibilities = item.responsibilities.map((item, index) => (
      <button
        className="list-item"
        key={index}
        onClick={() => alert(`${item}`)}
      >
        <h4>{item}</h4>
        <h3 className="btn-edit">Edit</h3>
      </button>
    ));
    const Accomplishments = item.accomplishments.map((item, index) => (
      <>
        <button
          className="list-item"
          key={index}
          onClick={() => alert(`${item}`)}
        >
          <h4>{item}</h4>
          <h3 className="btn-edit">Edit</h3>
        </button>
      </>
    ));

    return (
      <li className="card" key={index}>
        <div className="heading1">
          <h2>
            {item.company} , {item.title} , {item.from} - {item.to}
          </h2>
        </div>
        <div className="responsibilities">
          <h3>Responsibilities</h3>
          <ul>{Responsibilities}</ul>
          <ButtonAddMore onClick={addElement}>Add more</ButtonAddMore>
        </div>
        <div className="accomplishments">
          <h3>Accomplishments</h3>
          <ul>{Accomplishments}</ul>
          <ButtonAddMore onClick={addElement}>Add more</ButtonAddMore>
        </div>
      </li>
    );
  });

  return (
    <>
      <TipsBox tab="summaries" />
      <h1 className="certification-title">Job Summaries</h1>
      <img src={job} alt="" className="logo certification-logo" />

      <section className="summaries">
        <h3>This is a summary of everything you did: </h3>
        <h2>
          {/* {form.work_history[jobId - 1].company} -{" "}
          {form.work_history[jobId - 1].title} */}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} id="formSummaries">
          <div className="box">
            <ul className="fields">{WorkHistory}</ul>
          </div>
          <input type="submit" className="hidden" id="submit-form" />
        </form>
      </section>

      <Progress progress={90} />
      <div className="buttons">
        <button
          onClick={() => {
            setJobId(0);
            setDisplay("work history");
          }}
          className="btn btn-gray back"
        >
          Back
        </button>
        <label htmlFor="submit-form" className="btn btn-gray save">
          Save
        </label>
        <button
          onClick={() => setDisplay("additional info")}
          className="btn btn-blue next"
        >
          Next
        </button>
      </div>
    </>
  );
}
