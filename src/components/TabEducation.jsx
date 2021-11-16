//NPM Packages
import { useState } from "react";
import { useForm } from "react-hook-form";
//Local imports
import education from "assets/icns/education.png";
import TipsBox from "./TipsBox";
import Progress from './Progress';
import ButtonAddMore from "./shared/ButtonAddMore";

export default function TabEducation({ form, setForm, setDisplay }) {
  const [quantity, setQuantity] = useState([0]);
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
    setForm({ ...form, education: data });
  }

  //Components
 const Fields = quantity.map((item, index) => (
    <div className="box" key={index}>

      <label className="school" >
        <h3>School:</h3>
        <input
          type="text"
          defaultValue={form.education.[`${index}school`]}
          {...register(`${index}school`, { required: true, minLength: 3 })}
        />
         {errors.[`${index}school`] &&  <p className="input-error">Enter Valid Domain(> 3 chars) </p>}
      </label>

      <label className="degree">
        <h3>Degree ?</h3>
        <input 
        type="checkbox" 
        defaultValue={form.education.[`${index}degree`]} 
        {...register(`${index}degree`, { required: true, minLength: 1 })} 
        />
        {errors.[`${index}degree`] &&  <p className="input-error">Field required </p>}

      </label>

      <label className="program">
        <h3>Program:</h3>
        <input 
        type="text" 
        defaultValue={form.education.[`${index}program`]} 
        {...register(`${index}program`, { required: true, minLength: 1 })} 
        />
        {errors.[`${index}program`] &&  <p className="input-error">Field required </p>}

      </label>

      <label className="duration">
        <h3>Years Attended:</h3>
        <input 
        type="text" 
        defaultValue={form.education.[`${index}duration`]} 
        {...register(`${index}duration`, { required: true, minLength: 1 })} 
        />
        {errors.[`${index}duration`] &&  <p className="input-error">Field required </p>}

      </label>

     
 
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
      
          <ButtonAddMore  onClick={addElement} >Add more</ButtonAddMore>
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
