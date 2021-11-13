//NPM Packages
import { useState } from "react";
//Local imports
import TipsBox from "./TipsBox";
import bag from "assets/icns/bag.png";
import { useForm } from "react-hook-form";

//Local imports
export default function TabWorkHistory({ form, setForm ,setDisplay}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [quantity, setQuantity] = useState([0]);


  function addElement() {
    const newQuantity = [...quantity, 0];
    setQuantity(newQuantity);
  }

  function onSubmit(data) {
    setForm({ ...form, work_history: data });
  }
  console.log(errors);

  const years =Array.from(Array(new Date().getFullYear() - 1979), (_, i) => (i + 1980).toString())

  function Select({index,options}) {
    return(
      <select {...register(`title${index}`)} >
      {options.map(value => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
    )
  } 


  const Fields = quantity.map((item, index) => (
    <div className="box" key={index}>
      <label>
        <p>Company</p>
        <input
          type="text"
          defaultValue={form.work_history.[`company${index}`]}
          {...register(`company${index}`, { required: true, minLength: 3 })}
        />
         {errors.[`company${index}`] &&  <p className="input-error">Enter Valid company name (> 3 chars) </p>}
      </label>

      <label>
        <p>Title</p>
        <input type="text" {...register(`title${index}`)} />
      </label>

      <label className="years">
  
        <label ><p>From</p><Select index={index} options={years}/></label>
        <label ><p>To</p><Select index={index} options={years}/></label>
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
        
      </section>

        <div className="progress">
          <p>You're @@% done</p>
          <div className="bar-container">
            <div className="bar"/>    
          </div>
        </div>
        <div className="buttons">
          <button onClick={()=>setDisplay("certification & training")}className="btn btn-gray back" >Back</button>
          <label htmlFor="submit-form" className="btn btn-gray save" >Save</label>
          <button onClick={()=>setDisplay("additional info")}className="btn btn-blue next" >Next</button>
        </div>
    </>
  );
}
