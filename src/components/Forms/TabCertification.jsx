import certification from "assets/icns/certification.png";
import { useState } from "react";
import { useForm } from "react-hook-form";

import Progress from "../Progress";
import TipsBox from "../TipsBox";
import ButtonAddMore from "components/shared/ButtonAddMore";
import ButtonRemove from "components/shared/ButtonRemove";
import FormInput from "components/Forms/FormInput";
import { addElement, removeElement } from "components/Forms/formFunctions";

export default function TabCertification({ form, setForm, setDisplay }) {
  const formSection = form.certification;
  const [quantity, setQuantity] = useState(Array(formSection.length).fill(0));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setForm({ ...form, certification: data });
  }

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
        labelKey="domain"
        errors={errors}
        register={register}
        verif={{ required: true, minLength: 3 }}
      >
        Certificate {"&"} Training in
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
      <TipsBox tab="certification" />
      <h1 className="certification-title">Certification {"&"} Training</h1>
      <img src={certification} alt="" className="logo certification-logo" />

      <section className="certification-training">
        <form onSubmit={handleSubmit(onSubmit)} id="formCertification">
          {Fields}
          <ButtonAddMore onClick={() => addElement(quantity, setQuantity)}>
            Add more
          </ButtonAddMore>
          <input type="submit" className="hidden" id="submit-form" />
        </form>
      </section>
      <Progress progress={55} />
      <div className="buttons">
        <button
          onClick={() => setDisplay("education")}
          className="btn btn-gray back"
        >
          Back
        </button>
        <label htmlFor="submit-form" className="btn btn-gray save">
          Save
        </label>
        <button
          onClick={() => setDisplay("work history")}
          className="btn btn-blue next"
        >
          Next
        </button>
      </div>
    </>
  );
}
