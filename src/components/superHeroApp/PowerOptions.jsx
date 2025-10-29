

export  const PowerOptions = (props)=>{
 

    return (
           <>
        {props.optList.map(prop => <option key={prop} value={prop}>{prop}</option>)}
           </>
    )
       
    
   
}