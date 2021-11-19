import { useState } from "react";
import { useForm } from "react-hook-form";

import Progress from "./Progress";
import TipsBox from "./TipsBox";
import ButtonAddMore from "./shared/ButtonAddMore";
import checklist from "assets/icns/checklist.png";
import job from "assets/icns/job.png";

export default function TabResponsibilities({
  form,
  setForm,
  setDisplay,
  jobId,
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

  const Fields = quantity.map((item, index) => (
    <li key={index}>
      <label className="responsibility">
        <input
          type="text"
          defaultValue={form.work_history[jobId - 1].responsibilities[index]}
          {...register(`${index}responsability`, {
            required: true,
            minLength: 10,
          })}
        />
        {errors.[`${index}responsability`] &&  <p className="input-error">Enter Valid Information({'>'} 10 chars) </p>}
      </label>
    </li>
  ));

  return (
    <>
      <TipsBox tab="responsibilities" />
      <h1 className="certification-title">Job @{jobId}@ Responsibilities</h1>
      <img src={job} alt="" className="logo certification-logo" />

      <section className="responsibilities">
        <h3>Let's start with </h3>
        <h2>Job @{jobId}@</h2>

        <form onSubmit={handleSubmit(onSubmit)} id="formResponsibilities">
          <div className="box">
            <img src={checklist} alt="" className="checklist" />
            <h3 className="label">
              If you had to describe what you did daily or weekly, what would
              you list ?
            </h3>
            <p>
              <strong>Don’t worry about grammar, just start writing!</strong>
            </p>
            <ul className="fields">{Fields}</ul>
          </div>

          {quantity.length < 5 && (
            <ButtonAddMore onClick={addElement}>Add more</ButtonAddMore>
          )}

          <input type="submit" className="hidden" id="submit-form" />
        </form>
      </section>
      <Progress progress={75} />
      <div className="buttons">
        <button
          onClick={() => setDisplay("work history")}
          className="btn btn-gray back"
        >
          Back
        </button>
        <label htmlFor="submit-form" className="btn btn-gray save">
          Save
        </label>
        <button
          onClick={() => setDisplay("accomplishments")}
          className="btn btn-blue next"
        >
          Next
        </button>
      </div>
    </>
  );
}
