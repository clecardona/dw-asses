//NPM Packages
import { useState } from "react";
//Local imports
import TipsBox from "./TipsBox";
import bag from "assets/icns/bag.png";
import { useForm } from "react-hook-form";

//Local imports
export default function TabWorkHistory({ form, setForm }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [quantity, setQuantity] = useState([0]);
  //const [form, setForm] = useState({});

  function addElement() {
    const newQuantity = [...quantity, 0];
    setQuantity(newQuantity);
  }

  function onSubmit(data) {
    setForm({ ...form, work_history: data });
  }
  console.log(errors);

  const Fields = quantity.map((item, index) => (
    <div className="box" key={index}>
      <label>
        <p>Company</p>
        <input
          type="text"
          {...register(`company${index}`, { required: true, minLength: 3 })}
        />
         {errors.[`company${index}`] &&  <p className="input-error">Enter Valid company name (> 3 chars) </p>}
      </label>

      <label>
        <p>Title</p>
        <input type="text" {...register(`title${index}`)} />
      </label>

      <label>
        <p>City</p>
        <input type="text" {...register(`city${index}`)} />
      </label>

      <label>
        <p>Country</p>
        <input type="text" {...register(`country${index}`)} />
      </label>
    </div>
  ));

  return (
    <>
      <TipsBox tab="history" />
      <h1>Work History</h1>
      <img src={bag} alt="" className="logo" />
      <section className="work-history" >
        <form onSubmit={handleSubmit(onSubmit)} id="myform">
          {Fields}
      <button className="btn btn-addmore" type="button" onClick={addElement}>+ Add more</button>
          <input type="submit" className="hidden" id="submit-form"/>
        </form>
          {/* <button className="btn btn-blue">Next</button> */}
          <label htmlFor="submit-form" className="btn btn-blue" tabindex="0">Next</label>
      </section>
    </>
  );
}
