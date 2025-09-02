import "./Header.css";


export function Header() {
    return(
       <header>
        <a href="/" class="logo">SWIFTRO</a>
        <nav className="nav-link">
            <ul>
           <li><a href="#">Solutions</a></li> 
            <li> <a href="service">Services</a></li>
           <li> <a href="about">About</a></li>
           <li className="customer-link"> 
            <a href="#">Customers</a>
            <span className="upcoming">no customer yet</span>
           </li>
             <li> <a href="#">Contact Us</a></li>
            <button class="get-started">Active Dispatcher</button>
            </ul>
        </nav>
    </header>
    )
    
}