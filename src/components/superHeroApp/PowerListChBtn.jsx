import { useState } from "react";

export const PowerListChBtn =({powersList})=>{
    const [powers,setPowers]= useState([])
  
    const checkListStyle ={
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        paddingLeft: '10px'
        


    }
    const handleChange =(e)=>{
    const {value, checked} =e.target;
      setPowers(checked? [...powers,  value]:powers.filter(power => power !==value))
    }
    return (<div  className="check-list" style={checkListStyle}>
    {powersList.map(power => 
        <label  key={power}>
        <input value={power}
        checked={powers.includes(power)} 
        onChange={handleChange}
         type='checkbox'/>
       <span>{power}</span>
       </label>)}
    </div>)
}