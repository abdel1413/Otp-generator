import { useState } from "react"
import { PowerOptions } from "./PowerOptions"
import { PowerListChBtn } from "./PowerListChBtn"
import { EventForm } from "../EventRVSPForm/EventForm"


export const SuperHero=()=>{
   const [heroName, setHeroName] = useState('')
   const [realName,setRealName] = useState("")
//    const [power,setPower] =useState([])
   const [powerSource, setPowerSource] =useState("")

    //create an option containing power source
    const powerSourceOptions = [
        'Bitten by a strange creature',
    'Radioactive exposure',
    'Science experiment',
    'Alien heritage',
    'Ancient artifact discovery',
    'Other'
    ]

    // create  list of check btn with powers
    const powersList =[
      'Super Strength',
    'Super Speed',
    'Flight',
    'Invisibility',
    'Telekinesis',
    'Other'  
    ]

    const heroAppStyle ={
         background: `linear-gradient(30deg, #ff9999 50%, #6699ff 50%)`,
         padding:'5px',
         textAlign: 'center',
         marginBottom:'2.5rem'

         
    }
  const inputStyle ={ 
                display:"flex",
                 flexDirection: 'row',
                 justifyContent:"space-around", 
                 alignItems: 'start',
                margin:'5px',
                padding: '5px'
                }



    const infoStyle ={
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start'
    }

    return (<div className="hero-app" style={heroAppStyle}>
            <div className="section column" >
                <h1>Super Hero App Form</h1>
                <p>Please complete all fields</p>
            </div>
            <form method="post" action='https://superhero-application-form.freecodecamp.org'>
            <div className="section column"
             style={inputStyle}>
   
                <label  style={infoStyle}>
                    <span>Hero Name</span>
                    <input value={heroName} onChange={e =>setHeroName(e.target.value)}/>
                </label>
                <label style={infoStyle}>
                    <span> Real Name</span>
                    <input value={realName} onChange={e => setRealName(e.target.value)} />
                </label>
            </div> 
            <p>How did you get your powers?</p>
            <select value={powerSource} onChange={e => setPowerSource(e.target.value)}>
                  <option value="">Select One</option>
                <PowerOptions optList = {powerSourceOptions} />
            </select>
            <p>List your powers (select all that apply):</p>
           <PowerListChBtn powersList={powersList}/>
            <button type="submit" className="submit-btn"
            disabled={!heroName || !realName || !powerSource || !powersList.length}>Join the League</button>
        </form>
       
        </div>)
}