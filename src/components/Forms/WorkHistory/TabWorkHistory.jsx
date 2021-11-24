import { useState } from "react";
import { useForm } from "react-hook-form";
// Local Files
import TipsBox from "components/TipsBox";
import bag from "assets/icns/bag.png";
import Progress from "components/Progress";
import ButtonAddMore from "components/shared/ButtonAddMore";
import ButtonPlus from "components/shared/ButtonPlus";
import ButtonRemove from "components/shared/ButtonRemove";
import { addElement, removeElement } from "components/Forms/formFunctions";
import WorkFields from "components/Forms/WorkHistory/WorkFields";
import GapFields from "components/Forms/WorkHistory/GapFields";
import WorkSelect from "components/Forms/WorkHistory/PeriodSelect";

export default function TabWorkHistory({
  form,
  setForm,
  setDisplay,
  jobId,
  setJobId,
}) {
  const formSection = form.work_history;
  const gapSection = form.gap_history;
  const [quantity, setQuantity] = useState(Array(formSection.length).fill(0));
  const [gapQuantity, setGapQuantity] = useState(
    Array(gapSection.length).fill(0)
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Methods
  function onSubmit(data) {
    let processedData = [];

    for (let index = 0; index < quantity.length; index++) {
      processedData.push(getFields(data, index));
    }
    setForm({ ...form, work_history: processedData });
  }

  function getFields(object, name) {
    const result = Object.keys(object)
      .filter((key) => key.includes(name))
      .reduce((cur, key) => {
        return Object.assign(cur, { [key.substring(1)]: object[key] });
      }, {});
    return result;
  }

  //Components
  const Boxes = quantity.map((item, index) => (
    <div className="box" key={`box${index}`}>
      <WorkFields
        formSection={formSection}
        errors={errors}
        register={register}
        boxId={index}
      />
      {quantity.length > 1 && index > 0 && (
        <ButtonRemove
          onClick={(index) => removeElement(index, quantity, setQuantity)}
        />
      )}

      <label className="years">
        <label>
          <h3>From:</h3>
          <WorkSelect
            register={register}
            defaultValue={formSection[index] ? formSection[index].from : ""}
            index={index}
            label={"from"}
          />
        </label>
        <label>
          <h3>To:</h3>
          <WorkSelect
            register={register}
            defaultValue={formSection[index] ? formSection[index].to : ""}
            index={index}
            label={"to"}
          />
        </label>
      </label>
    </div>
  ));

  const GapBoxes = gapQuantity.map((item, index) => (
    <div className="box" key={`gapbox${index}`}>
      {quantity.length > 1 && index > 0 && (
        <ButtonRemove
          onClick={(index) => removeElement(index, quantity, setQuantity)}
        />
      )}
      <GapFields
        formSection={gapSection}
        errors={errors}
        register={register}
        boxId={index}
      />
      <label className="years">
        <label>
          <h3>From:</h3>
          <WorkSelect
            register={register}
            defaultValue={gapSection[index] ? gapSection[index].from : ""}
            index={index}
            label={"gapfrom"}
          />
        </label>
        <label>
          <h3>To:</h3>
          <WorkSelect
            register={register}
            defaultValue={gapSection[index] ? gapSection[index].to : ""}
            index={index}
            label={"gapto"}
          />
        </label>
      </label>
    </div>
  ));

  return (
    <>
      <TipsBox tab="history" />
      <h1>Work History</h1>
      <img src={bag} alt="" className="logo" />
      <section className="work-history">
        <form onSubmit={handleSubmit(onSubmit)} id="formWorkHistory">
          {Boxes}
          <ButtonAddMore onClick={() => addElement(quantity, setQuantity)}>
            Add more
          </ButtonAddMore>

          <div className="gaps">
            {gapSection.length > 0 && <h1>Gaps</h1>}

            {GapBoxes}
            <div className="add-gap">
              <ButtonPlus
                onClick={() => addElement(gapQuantity, setGapQuantity)}
              >
                Gap Time
              </ButtonPlus>
              <p>
                Click here to add a gap between your work experiences (e.g.,
                maternity leave, paternity leave, family leave, personal leave).{" "}
              </p>
            </div>
          </div>

          <input type="submit" className="hidden" id="submit-form" />
        </form>
      </section>

      <Progress progress={70} />
      <div className="buttons">
        <button
          onClick={() => setDisplay("certification & training")}
          className="btn btn-gray back"
        >
          Back
        </button>
        <label htmlFor="submit-form" className="btn btn-gray save">
          Save
        </label>
        <button
          onClick={() => {
            setDisplay("responsibilities");
            setJobId(jobId + 1);
          }}
          className="btn btn-blue next"
        >
          Next
        </button>
      </div>
    </>
  );
}
