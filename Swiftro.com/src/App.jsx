
import './App.css'
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom"
import { Homepage } from './Pages/Homepage';
import { Aboutpage } from './Pages/Aboutpage';
import { ServicePage } from './Pages/ServicePage';
import {Faq} from './Pages/Faq'
import { SignupDP } from './Layouts-forms/SignupDP';
import {UserSignup} from "./Layouts-forms/UserSignup"
import { UserLogin } from './Layouts-forms/UserLogin';
import { DispatcherLogin } from './Layouts-forms/DispatcherLogin';
import { Contact } from './Pages/Contact';

  function App() {
    return(
      <>
  
        <Routes>
          <Route path="/" element={<Homepage  />} />
          <Route path="/about" element={<Aboutpage  />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path='faq'  element={<Faq />} />
          <Route path='signup' element={<SignupDP />}/>
          <Route path='UserSignup' element={<UserSignup />} />
          <Route path='UserLogin'  element={<UserLogin />} />
          <Route path='DispatcherLogin' element={<DispatcherLogin/>}/>
          <Route path='Contact' element={<Contact/>}/>
        
        </Routes>
      </>
  

    )
  }
export default App
