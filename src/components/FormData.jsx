import { useActionState } from "react"
import { SubmitForm } from "./SubmitForm"

export const FormData = ()=>{
    const [state, action, isPending] = useActionState(SubmitForm, {message: ""})
    return (<>
        <div>
            <h2>Greeting</h2>
            <form action={action} >
              <input type="text" name='name' placeholder="Enter your name" / >
              <button disabled={isPending}>{isPending? "Greeting...": "Greet"}</button>
            
            {state.message && <p> {state.message}</p>}
            </form>
        </div>
    </>)
}