import { useState } from 'react';

import ButtonAddMore from './shared/ButtonAddMore';

export default function FieldAdditional({form,target,children,register,errors}) {
  const [quantity, setQuantity] = useState([0]);

  function addElement() {
    const newQuantity = [...quantity, 0];
    setQuantity(newQuantity);
  }


const Inputs= quantity.map((item,index)=>(

    <li className="vertical-input" key={index}>
    <input
 
      type="text"
      defaultValue={form.additional_info.[`${index}${target}`]}
      {...register(`${index}${target}`, {  minLength: 3 })}
    />
     {errors.[`${index}${target}`] &&  <p   className="input-error">Enter valid field (> 3 chars) </p>}
  </li>
)
)


  return (
   
      <label className="inline-box">
        <h3>{children}:</h3>
        <ul>{Inputs}</ul>
        <ButtonAddMore onClick={addElement}>Add more</ButtonAddMore>
      </label>
   
  );
}
