import { useState } from "react";
import TipsBox from "./TipsBox";
import bag from "assets/icns/bag.png";
import { useForm } from "react-hook-form";
import Progress from "./Progress";

//Local imports
export default function TabWorkHistory({ form, setForm ,setDisplay}) {
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
    setForm({ ...form, work_history: data });
  }



  function Select({index,label}) {
    const years =Array.from(Array(new Date().getFullYear() - 1979), (_, i) => (i + 1980).toString())
    const currentYear=new Date().getFullYear()
    return(
      <select defaultValue={currentYear} {...register(`${index}${label}`)} >
      {years.map(value => (
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
        <h3>Company:</h3>
        <input
          type="text"
          defaultValue={form.work_history.[`${index}company`]}
          {...register(`${index}company`, { required: true, minLength: 3 })}
        />
         {errors.[`${index}company`] &&  <p className="input-error">Enter Valid Title (> 3 chars) </p>}
      </label>

      <label>
        <h3>Title:</h3>
        <input 
        type="text" 
        defaultValue={form.work_history.[`${index}title`]} 
        {...register(`${index}title`, { required: true, minLength: 3 })} 
        />
        {errors.[`${index}title`] &&  <p className="input-error">Enter Valid company name (> 3 chars) </p>}

      </label>

      <label className="years">
        <label ><h3>From:</h3><Select index={index}  label={"from"}/></label>
        <label ><h3>To:</h3><Select index={index}  label={"to"}/></label>
      </label>
  

      <label>
        <h3>City:</h3>
        <input 
        type="text" 
        defaultValue={form.work_history.[`${index}city`]} 
        {...register(`${index}city`, { required: true, minLength: 3 })} 
        />
         {errors.[`${index}city`] &&  <p className="input-error">Enter Valid city (> 3 chars) </p>}
      </label>

      <label>
        <h3>Country:</h3>
        <input type="text" 
        defaultValue={form.work_history.[`${index}country`]} 
        {...register(`${index}country`, { required: true, minLength: 3 })} />
      {errors.[`${index}country`] &&  <p className="input-error">Enter Valid country (> 3 chars) </p>}
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
       <Progress progress={65}/>
        <div className="buttons">
          <button onClick={()=>setDisplay("certification & training")}className="btn btn-gray back" >Back</button>
          <label htmlFor="submit-form" className="btn btn-gray save" >Save</label>
          <button onClick={()=>setDisplay("additional info")}className="btn btn-blue next" >Next</button>
        </div>
    </>
  );
}
