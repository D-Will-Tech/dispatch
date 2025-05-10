import "./Header.css";

export function Header() {
    return(
       <nav className="navbar">
         <div className="container nav-container">
            <div className="logo">Swiftro</div> 
            <ul className="nav-links">
                <li><a href="">Solution</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Riders</a></li>
                <li><a href="">Customers</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <a href="#" className="btn-dark">Download App</a>
         </div>
       </nav>
    )
    
}