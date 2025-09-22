import "./Header.css";
import { Link } from "react-router-dom";


export function Header() {
 return(
  <header>
        <Link to="/" className="logo">SWIFTRO</Link>
     <nav className="nav-link">
        <ul>
           <li> <Link to="#">Solutions</Link></li> 
           <li> <Link to="/service">Services</Link> </li>
           <li> <Link to="/about">About</Link></li>
           <li className="customer-link"> 
            <Link to="#">Customers</Link>
            <span className="upcoming">no customer yet</span>
           </li>
             <li> <Link to="#">Contact Us </Link> </li>
           <button class="get-started">Find Dispatcher</button>
        </ul>
     </nav>
  </header>
 )
    
}