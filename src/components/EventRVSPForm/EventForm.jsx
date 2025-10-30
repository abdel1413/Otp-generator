import {  useState } from "react";

export const EventForm = () => {
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [attendees,setAttendees] = useState("");
const [dietaryPreferences,setDietaryPreferences] = useState("");
const [additionalGuests,setAdditionalGuests] = useState(false);  
const [submittedData,setSubmittedData] = useState(null);   

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            
            const data = Object.fromEntries(formData.entries());
            console.log("RSVP Data:", data);
            setSubmittedData(data);
            console.log("Submitted Data State:", submittedData);
                
    }} className="form-wrap">
        <h1>Event RSVP Form</h1>
            <label className="section column">
                Name:
                <input type="text" name="name" 
                 placeholder="your name" 
                 value={name}
                 onChange={e => setName(e.target.value)}
                 required
                 />
            </label>
            <br />
            <label className="section column">
                Email:
                <input type="email" 
                name="email"
                 placeholder="you email"
                 value={email}
                    onChange={e => setEmail(e.target.value)}    
                    required
                 />
            </label>
            <br />
            <label className="section column" >
                Number of attendees:
                <input type="number" 
                name="attendees"
                placeholder="number of attendees"
                value={attendees}
                onChange={(e)=>setAttendees(e.target.value)}/>
            </label>
            <br />
            <label className="section column">
               Dietary Preferences:
                <input type="text"
                 name=""
                  placeholder="Dietary preferences"
                  value={dietaryPreferences} 
                  onChange={(e)=>setDietaryPreferences(e.target.value)}/>
            </label>
            <br />

            <label className="">
               additional Guests:
                <input type="checkbox"  checked={additionalGuests} onChange={(e)=> setAdditionalGuests(e.target.checked)}/>
            </label>
            <br />
            <button className="submit-btn" type="submit">Submit RSVP</button>
            {submittedData && (
                <div className="submitted-data">
                    <h2>Submitted RSVP Data:</h2>
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Number of Attendees:</strong> {attendees}</p>
                    <p><strong>Dietary Preferences:</strong> {dietaryPreferences}</p>
                    <p><strong>Additional Guests:</strong> {additionalGuests ? "Yes" : "No"}</p>
                </div>
            )   }
        </form>
    );
}   