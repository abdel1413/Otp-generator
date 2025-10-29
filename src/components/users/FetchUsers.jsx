import { startTransition, useActionState } from "react"
import { GetUsers } from "./GetUsers"
  
export const FetchUsers =()=>{
    const [users, fetchAction, isPending] = useActionState(GetUsers,[]);
   const ulStyle =
{listStyle:'none',
     displayFlex: 'flex',
      flexWrap: 'wrap',
     
      padding:"0"
    }

    const btnStyle = {backgroundColor: 'lightblue',
        marginTop: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const listStyle = {
        border:'2px solid black', 
        fontSize: '1.2rem' ,
         marginBottom: '5px',
         textAlign: 'center'
        }

        const divStyle = {
          
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            
        }
   
    return(<div style={divStyle}>
     <button disabled={isPending}
     onClick={()=>startTransition(()=>fetchAction())}
     style={btnStyle}
     >
       {isPending? "Fetching users...": "Fetch users"}
     </button>
     <ul style={ulStyle}>
        {users?.map(user =>(
            <li  style={listStyle} key={user.id}>
            <p style={{margin: "0.5rem"}}>{user.name}</p>
            <p style={{margin: "0.5rem"}}>{user.email}</p>
        </li>))}
     </ul>
    </div>)

}