
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
    </>
  )
}

export default App
