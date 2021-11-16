//NPM Packages
import box from "assets/icns/box.png";
import { useForm } from "react-hook-form";
import { useState } from "react";

import FieldAdditional from "./FieldAdditional";
import Progress from "./Progress";

//Local imports
export default function TabAdditionalInfo({ form, setForm, setDisplay }) {



  const { register,handleSubmit,formState: { errors } } = useForm();

  function onSubmit(data) {
    const processedData = inputToArray(data)
 setForm({ ...form, additional_info: processedData});
  }


function getFields(object,name){
  const result = Object.keys(object).filter((key) => key.includes(name)).reduce((cur, key) => 
  { return Object.assign(cur, { [key]: object[key] })}, {}); 
  return Object.values(result)
}

function inputToArray(object){
  
const languages = getFields(object,"lang")
const additional_skills = getFields(object,"add")
const publications = getFields(object,"public")
const volunteer_work = getFields(object,"volunt")

  return {
    languages:languages,
    additional_skills:additional_skills,
    publications:publications,
    volunteer_work:volunteer_work,
    anything_else:object.anything_else
  }
 
}

  

  return (
    <>
      <h1>Additional Info</h1>
      <img src={box} alt="" className="logo" />
      <section className="additional-info">
        <form onSubmit={handleSubmit(onSubmit)} id="formAdditionalInfo">
          <FieldAdditional form={form} target="languages" register={register} errors={errors} >
            Languages
          </FieldAdditional>
          <FieldAdditional form={form} target="additional_skills" register={register} errors={errors} >
            Additional Skills
          </FieldAdditional>
          <FieldAdditional form={form} target="publications" register={register} errors={errors} >
            Publications
          </FieldAdditional>
          <FieldAdditional form={form} target="volunteer_work" register={register} errors={errors} >
            Volunteer Work
          </FieldAdditional>

          <label className="anything_else">
        <h3>Anything else that you would like to add?</h3>
        <input
          type="text"
          defaultValue={form.additional_info.[`anything_else`]}
          {...register(`anything_else`, )}
        />
         {errors.[`anything_else`] &&  <p className="input-error">Enter Valid Information (> 3 chars) </p>}
      </label>

          <input type="submit" className="hidden" id="submit-form" />
        </form>
      </section>
      <Progress progress={85} />
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
          onClick={() => setDisplay("additional info")}
          className="btn btn-blue next"
        >
          Next
        </button>
      </div>
    </>
  );
}
