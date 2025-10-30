
import { EventForm } from './components/EventRVSPForm/EventForm.jsx';
import { FormData } from './components/FormData';
import { OtpGenerator } from './components/OtpGenerator';
import { SuperHero} from './components/superHeroApp/SuperHero.jsx';
import { FetchUsers } from './components/users/FetchUsers';


function App() {
 
  return (
    <>
    < OtpGenerator/>
     <FormData />
     <FetchUsers/>
   <SuperHero />
    <EventForm/>
    </>
  )
}

export default App
