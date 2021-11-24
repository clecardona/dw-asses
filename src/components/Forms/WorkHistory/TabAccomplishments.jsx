import { useState } from "react";
import { useForm } from "react-hook-form";

import Progress from "../../Progress";
import TipsBox from "../../TipsBox";
import ButtonAddMore from "../../shared/ButtonAddMore";
import job from "assets/icns/job.png";
import trophy from "assets/icns/trophy.png";

export default function TabAccomplishments({
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

  const Fields = quantity.map((item, index) => (
    <li key={index}>
      <label className="accomplishment">
        <input
          type="text"
          defaultValue={form.work_history[jobId - 1].accomplishments[index]}
          {...register(`${index}accomplishment`, {
            required: true,
            minLength: 10,
          })}
        />
        {errors[`${index}accomplishment`] && (
          <p className="input-error">
            Enter Valid Information({">"} 10 chars){" "}
          </p>
        )}
      </label>
    </li>
  ));

  return (
    <>
      <TipsBox tab="accomplishments" />
      <h1 className="certification-title">Job {jobId} Accomplishments</h1>
      <img src={job} alt="" className="logo certification-logo" />

      <section className="accomplishments">
        <h3>While you were working at</h3>
        <h2>
          {form.work_history[jobId - 1].company} as{" "}
          {form.work_history[jobId - 1].title}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} id="formAccomplishments">
          <div className="box">
            <img src={trophy} alt="" className="checklist" />
            <h3 className="label">
              What were you the proudest of? Did you launch anything special?
              Did you initiate anything ?
            </h3>
            <p>
              <strong>Think carefully! </strong>
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
          onClick={() => {
            if (jobId < numberOfItems) {
              setDisplay("responsibilities");
              const newJobId = jobId + 1;
              setJobId(newJobId);
            } else {
              setDisplay("summaries");
            }
          }}
          className="btn btn-blue next"
        >
          Next
        </button>
      </div>
    </>
  );
}
