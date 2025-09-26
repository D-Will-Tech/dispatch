
import "./Footer.css"


 export function Footer() {

    return(
<section className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="/images/" alt="Logo" />
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Let's do it together</h4>
            <ul>
              <li> for Partners</li>
              <li>Couriers</li>
              <li>Swiftro Business</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Links of interest</h4>
            <ul className="ul">
             <a href=""><li>About us</li></a>
             <a href="/Faq"><li>FAQ</li></a> 
            <a href=""><li>Help</li></a>
            <a href=""><li>Blog</li></a>
             <a href=""> <li>Contact us</li></a>
             <a href=""><li>Security</li></a>
            </ul>
          </div>
        </div>

        <div className="footer-apps">
          <img src="/image/" alt="App Store" />
          <img src="/image/" alt="Google Play" />

          <div className="footer-policy">
            <p>CONFIGURE THE COOKIES</p>
            <p>TERMS & CONDITIONS</p>
            <p>PRIVACY POLICY</p>
            <p>COOKIES POLICY</p>
            <p>COMPLIANCE</p>
          </div>
        </div>
      </div>

      <div className="footer-language">
        <select>
          <option>English</option>
          <option>Hausa</option>
          <option>Igbo</option>
        </select>
      </div>
    </section>
    )
    
}