import certification from 'assets/icns/certification.png';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Progress from './Progress';
import TipsBox from './TipsBox';
import ButtonAddMore from './shared/ButtonAddMore';

export default function TabCertification({ form, setForm ,setDisplay}) {
  const [quantity, setQuantity] = useState(Array(form.certification.length).fill(0));
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
    setForm({ ...form, certification: data });
  }

  const Fields = quantity.map((item, index) => (
    <div className="box" key={index}>

      <label className="domain">
        <h3>Certificate & Training in:</h3>
        <input
          type="text"
          defaultValue={form.certification[index] ? form.certification[index].domain : ""}
          {...register(`${index}domain`, { required: true, minLength: 3 })}
        />
         {errors.[`${index}domain`] &&  <p className="input-error">Enter Valid Domain(> 3 chars) </p>}
      </label>

      <label className="duration">
        <h3>Years Attended:</h3>
        <input 
        type="text" 
        defaultValue={form.certification[index] ? form.certification[index].duration : ""} 
        {...register(`${index}duration`, { required: true, minLength: 1 })} 
        />
        {errors.[`${index}duration`] &&  <p className="input-error">Field required </p>}

      </label>

     
 
    </div>
  ));



  return (
    <>
      <TipsBox tab="certification" />
      <h1 className="certification-title">Certification & Training</h1>
      <img src={certification} alt="" className="logo certification-logo" />

      <section className="certification-training">
        <form onSubmit={handleSubmit(onSubmit)} id="formCertification">
          {Fields}
          <ButtonAddMore  onClick={addElement} >Add more</ButtonAddMore>
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
