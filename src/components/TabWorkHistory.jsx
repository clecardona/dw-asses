import { useState } from "react";
import TipsBox from "./TipsBox";
import bag from "assets/icns/bag.png";
import { useForm } from "react-hook-form";
import Progress from "./Progress";
import ButtonAddMore from "./shared/ButtonAddMore";
import ButtonPlus from "./shared/ButtonPlus";

//Local imports
export default function TabWorkHistory({ form, setForm ,setDisplay,jobId,setJobId}) {
  const [quantity, setQuantity] = useState(Array(form.work_history.length).fill(0));


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  



  function addElement() {
    const newQuantity = [...quantity, "album"];
    setQuantity(newQuantity);
  }

  function onSubmit(data) {
   
    let processedData=[]

for (let index = 0; index < quantity.length; index++) {
  processedData.push(getFields(data,index))
}
setForm({ ...form, work_history: processedData });
  }


  function getFields(object,name){
    const result = Object.keys(object).filter((key) => key.includes(name)).reduce((cur, key) => 
    { return Object.assign(cur, { [key.substring(1)]: object[key] })}, {}); 
    return result
  }


  function Select({index,label,defaultValue}) {
    const years =Array.from(Array(new Date().getFullYear() - 1979), (_, i) => (i + 1980).toString())
    const currentYear=new Date().getFullYear()
    return(
      <select defaultValue={defaultValue ? defaultValue :currentYear} {...register(`${index}${label}`)} >
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
          defaultValue={form.work_history[index].company}
          {...register(`${index}company`, { required: true, minLength: 3 })}
        />
         {errors.[`${index}company`] &&  <p className="input-error">Enter Valid Title (> 3 chars) </p>}
      </label>

      <label>
        <h3>Title:</h3>
        <input 
        type="text" 
        defaultValue={form.work_history[index].title} 
        {...register(`${index}title`, { required: true, minLength: 3 })} 
        />
        {errors.[`${index}title`] &&  <p className="input-error">Enter Valid company name (> 3 chars) </p>}

      </label>

      <label className="years">
        <label ><h3>From:</h3><Select  defaultValue={form.work_history[index].from} index={index}  label={"from"}/></label>
        <label ><h3>To:</h3><Select defaultValue={form.work_history[index].to} index={index}  label={"to"}/></label>
      </label>
  

      <label>
        <h3>City:</h3>
        <input 
        type="text" 
        defaultValue={form.work_history[index].city} 
        {...register(`${index}city`, { required: true, minLength: 3 })} 
        />
         {errors.[`${index}city`] &&  <p className="input-error">Enter Valid city (> 3 chars) </p>}
      </label>

      <label>
        <h3>Country:</h3>
        <input type="text" 
        defaultValue={form.work_history[index].country} 
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
        <form onSubmit={handleSubmit(onSubmit)} id="formWorkHistory">
          {Fields}
          <ButtonAddMore  onClick={addElement} >Add more</ButtonAddMore>
          <div className="gap"><ButtonPlus>Gap Time</ButtonPlus> <p>Click here to add a gap betweeen your work experiences (e.g., maternity leave, paternity leave, family leave, personal leave). </p></div>
          <input type="submit" className="hidden" id="submit-form"/>
        </form>
      </section>
       <Progress progress={70}/>
        <div className="buttons">
          <button onClick={()=>setDisplay("certification & training")}className="btn btn-gray back" >Back</button>
          <label htmlFor="submit-form" className="btn btn-gray save" >Save</label>
          <button onClick={()=>{setDisplay("responsibilities"); setJobId(jobId+1)}}className="btn btn-blue next" >Next</button>
        </div>
    </>
  );
}
