import "./Header.css";

export function Header() {
    return(
       <header>
        <a href="/" class="logo">SWIFTRO</a>
        <nav className="nav-link">
            <ul>
           <li><a href="#">Solutions</a></li> 
            <li><a  href="#">Services</a></li>
           <li> <a  href="about">About</a></li>
           <li> <a   href="#">Customers</a></li>
             <li> <a href="#">Contact Us</a></li>
            <button class="get-started">Get Started</button>
            </ul>
        </nav>
    </header>
    )
    
}