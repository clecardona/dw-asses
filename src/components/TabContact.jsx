//NPM Packages

//Local imports
import agenda from "assets/icns/agenda.png";
import camera from "assets/icns/camera.png";
import upload from "assets/icns/upload.png";
import fields from "components/forms/contact.json";
import TipsBox from "./TipsBox";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Progress from './Progress';
import ButtonPlus from "./shared/ButtonPlus";

export default function TabContact({ form, setForm, setDisplay }) {
  const [quantity, setQuantity] = useState([0]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setForm({ ...form, contact: data });
  }


  //Components
 
  const Fields = quantity.map((item, index) => (
    <div className="box" key={index}>

      <label className="firstname" >
        <h3>First name:</h3>
        <input
          type="text"
          defaultValue={form.contact.[`firstname`]}
          {...register(`firstname`, { required: true, minLength: 3 })}
        />
         {errors.[`firstname`]&&  <p className="input-error">Enter Valid name (> 3 chars) </p>}
      </label>

      <label className="lastname" >
        <h3>Last name:</h3>
        <input
          type="text"
          defaultValue={form.contact.[`lastname`]}
          {...register(`lastname`, { required: true, minLength: 3 })}
        />
         {errors.[`lastname`]&&  <p className="input-error">Enter Valid name (> 3 chars) </p>}
      </label>

      <label className="middlename" >
        <h3>Middle name (Optional) :</h3>
        <input
          type="text"
          defaultValue={form.contact.[`middlename`]}
          {...register(`middlename`, { required: false, minLength: 3 })}
        />
         {errors.[`middlename`]&&  <p className="input-error">Enter Valid name (> 3 chars) </p>}
      </label>
     
      <label className="email" >
        <h3>Email :</h3>
        <input
          type="email"
          defaultValue={form.contact.[`email`]}
          {...register(`email`, { required: true })}
        />
         {errors.[`email`]&&  <p className="input-error">Enter Valid Email  </p>}
      </label>

      <label className="mobile" >
        <h3>Mobile :</h3>
        <input
          type="tel"
          defaultValue={form.contact.[`mobile`]}
          {...register(`mobile`, { required: true})}
        />
         {errors.[`mobile`]&&  <p className="input-error">Enter Valid Number  </p>}
      </label>

      <label className="linkedin" >
        <h3>LinkedIn:</h3>
        <input
          type="text"
          defaultValue={form.contact.[`linkedin`]}
          {...register(`linkedin`, { required: true, minLength: 15 })}
        />
         {errors.[`linkedin`]&&  <p className="input-error">Enter Valid information  </p>}
      </label>
 

      <label className="address" >
        <h3>Address (Optional) :</h3>
        <input
          type="text"
          defaultValue={form.contact.[`address`]}
          {...register(`address`, { required: false, minLength: 10 })}
        />
         {errors.[`address`]&&  <p className="input-error">Enter Valid address </p>}
      </label>

      <label className="city" >
        <h3>City :</h3>
        <input
          type="text"
          defaultValue={form.contact.[`city`]}
          {...register(`city`, { required: false, minLength: 3 })}
        />
         {errors.[`city`]&&  <p className="input-error">Enter Valid city ( > 3 chars ) </p>}
      </label>

      <label className="postcode" >
        <h3>Postal Code :</h3>
        <input
          type="text"
          defaultValue={form.contact.[`postcode`]}
          {...register(`postcode`, { required: false, minLength: 5 })}
        />
         {errors.[`postcode`]&&  <p className="input-error">Enter Valid Postal Code ( min 5 chars ) </p>}
      </label>
      <div />
  <div className="upload">
    <img src={camera} alt="" />
    <p>Would you like to upload a profile photo?<br/>
<strong>It’s completely optional!</strong> </p></div>
<ButtonPlus>Upload</ButtonPlus>
    </div>
  ));



  return (
    <>
      <TipsBox tab="contact" />
      <h1>Contact</h1>
      <img src={agenda} alt="" className="logo" />
      <section className="education">
        <form onSubmit={handleSubmit(onSubmit)} id="formContact">
          {Fields}
    
          <input type="submit" className="hidden" id="submit-form" />
        </form>
      </section>
      <Progress progress={10} />
      <div className="buttons">
        <button
          onClick={() => setDisplay("photo")}
          className="btn btn-gray back"
        >
          Back
        </button>
        <label htmlFor="submit-form" className="btn btn-gray save">
          Save
        </label>
        <button
          onClick={() => setDisplay("education")}
          className="btn btn-blue next"
        >
          Next
        </button>
      </div>
    </>
  );
}
