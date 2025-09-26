
import './App.css'
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom"
import { Homepage } from './Pages/Homepage';
import { Aboutpage } from './Pages/Aboutpage';
import { ServicePage } from './Pages/ServicePage';
import {Faq} from './Pages/Faq'

  function App() {
    return(
      <>
  
        <Routes>
          <Route path="/" element={<Homepage  />} />
          <Route path="/about" element={<Aboutpage  />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path='faq'  element={<Faq />} />
        
        </Routes>
      </>
  

    )
  }
export default App
