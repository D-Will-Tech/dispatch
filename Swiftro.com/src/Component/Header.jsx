import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";


export function Header() {
    
   const [draweropen, setDraweropen] = useState(false);

   const toggleEvent = () => setDraweropen(!draweropen);
   const closeEvent = () => setDraweropen(false);

   const styles = {
      Design: {
      fontsiz: "20px",
      fontWeight: "bold", 
      color: "#000000"
      }
   }

 return(
  <header>
        <Link to="/" className="logo">SWIFTRO</Link>
        {!draweropen && (
         <button onClick={toggleEvent}>
         &#9776;
        </button>
        )}

        {draweropen && (
          <button className="close-btn" onClick={closeEvent}>
         &times;
        </button>
        )}
       
     <nav className={ `nav-link ${draweropen ? 'open' : ''}`}>
        <ul>
           <li style={styles.Design}><Link to="/">Active Driver</Link></li>
           <li> <Link to="/contact">Contact Us</Link> </li> 
           <li> <Link to="/service">Services</Link> </li>
           <li> <Link to="/about">About</Link></li>
           <li className="customer-link">
            <Link to="#">Customers</Link>
            <span className="upcoming">no customer yet</span>
           </li>
             <li><Link to="/UserLogin">Login</Link></li>
           <button class="get-started">start free</button>
        </ul>
     </nav>
  </header>
 )
    
}