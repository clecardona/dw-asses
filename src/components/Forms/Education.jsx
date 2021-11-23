//NPM Packages
import { useState } from "react";
import { useForm } from "react-hook-form";
//Local imports
import education from "assets/icns/education.png";
import TipsBox from "../TipsBox";
import Progress from "../Progress";
import ButtonAddMore from "../shared/ButtonAddMore";
import ButtonRemove from "../shared/ButtonRemove";
import FormInput from "components/FormInput";
import { addElement, removeElement } from "components/Forms/formFunctions";

export default function Education({ form, setForm, setDisplay }) {
  const formSection = form.education;
  const [quantity, setQuantity] = useState(Array(formSection.length).fill(0));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setForm({ ...form, education: data });
  }

  //Component
  const Fields = quantity.map((item, index) => (
    <div className="box" key={index}>
      {quantity.length > 1 && index > 0 && (
        <ButtonRemove
          onClick={(index) => removeElement(index, quantity, setQuantity)}
        />
      )}

      <FormInput
        formSection={formSection}
        index={index}
        labelKey="school"
        errors={errors}
        register={register}
        verif={{ required: true, minLength: 3 }}
      >
        School
      </FormInput>

      <label className="degree">
        {/* todo - handle with 2 radio buttons ? */}
        <h3>Degree ?</h3>
        <input
          type="checkbox"
          defaultValue={formSection[index] ? formSection[index].degree : ""}
          {...register(`${index}degree`, {})}
        />
      </label>

      <FormInput
        formSection={formSection}
        index={index}
        labelKey="program"
        errors={errors}
        register={register}
        verif={{ required: true, minLength: 3 }}
      >
        Program
      </FormInput>

      <FormInput
        formSection={formSection}
        index={index}
        labelKey="duration"
        errors={errors}
        register={register}
        verif={{ required: true }}
      >
        Years Attended
      </FormInput>
    </div>
  ));

  return (
    <>
      <TipsBox tab="education" />
      <h1>Education</h1>
      <img src={education} alt="" className="logo" />

      <section className="education">
        <form onSubmit={handleSubmit(onSubmit)} id="formEducation">
          {Fields}
          <ButtonAddMore onClick={() => addElement(quantity, setQuantity)}>
            Add more
          </ButtonAddMore>
          <input type="submit" className="hidden" id="submit-form" />
        </form>
      </section>
      <Progress progress={30} />
      <div className="buttons">
        <button
          onClick={() => setDisplay("contact")}
          className="btn btn-gray back"
        >
          Back
        </button>
        <label htmlFor="submit-form" className="btn btn-gray save">
          Save
        </label>
        <button
          onClick={() => setDisplay("certification & training")}
          className="btn btn-blue next"
        >
          Next
        </button>
      </div>
    </>
  );
}
