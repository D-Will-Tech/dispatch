import { Header } from "../Component/Header"
import "./Homepage.css";
import { Aboutpage } from "./Aboutpage";
import { ServicePage } from "./ServicePage";
import {Link} from "react-router-dom"
import { useRef, useState, useEffect } from "react";

export function Homepage() {

  const [animate, setAnimate] = useState(false);
  const aboutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting){
          setAnimate(true);
        
        }else{
          setAnimate(false);
        }
      },
      {threshold: 0.3}
    );
    if(aboutRef.current){
      observer.observe(aboutRef.current);
    }
    
    return () => observer.disconnect();

  }, [])


  const [joinAnimate, setJoinAnimate] = useState(false)

  const joinRef = useRef(null)
  
  useEffect(() => {

    const joinObserver = new IntersectionObserver(
       ([entry])  => {

        console.log("join entry",  entry.isIntersecting)

        if (entry.isIntersecting) {
          setJoinAnimate(true)
          
        }else{
          setJoinAnimate(false)
        }

       },
       {threshold: 0.5}
    );
    if(joinRef.current){
      joinObserver.observe(joinRef.current);
    }

    return () => joinObserver.disconnect()
      

  }, [])


  return(
        <>
         <title>Swiftro.com</title>
        <Header />
    <section className="container homepage">
        <div className=" homepage-content">
            <div className="homepage-text">
                   <span className="badge">Start Your 7-Days Free Trial</span>
                   <h1>Your Delivery Power, Just <span className="highlight">A Click Away</span></h1>
                    <p>Swiftro helps you connect instantly with available dispatchers in your area 
                       whether it's to run a quick errand, deliver a parcel, or handle a major haul.
                    </p>
                  <div className="homepage-buttons">
                    <Link to="#" className="btn-dark">Get started</Link>
                    <Link to="#" className="btn-light">Learn more</Link>
                  </div>
            </div>
                 
           <div className="homepage-image">
                  <img src="/image-homepage.png" alt="A Dispatcher"/>
                <div className="overlay">
                     <p>Accurate Dispatcher</p>
                     <p>Trusted Dispatcher</p>  
                </div>
            </div>       
            
        </div>

    </section>

        {/* homepage section end? */}

        <section className="trusted">
                    <div className="container">
                        <p className="trusted-text">Trusted by over 100 companies to their delivery processes</p>
                        
                        <div className="logos">
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>

        </section>

        <section className="features">
            <div className="container">
                <span className="features-tag">Swiftro Features</span>
                <div className="features-head">
                    <h2>An experience that <strong>delivers</strong> fast, smart, and smooth.</h2>
                     <p>We’re transforming the way local logistics works. From finding a dispatcher near you to tracking packages and handling payments, Swiftro makes it all seamless.</p>
                </div>

                <div className="features-cards">
                    <div className="card">
                        <div className="icon">📦</div>
                        <h3>Multiple Account</h3>
                        <p>Manage all your dispatch operation with Multiple dispatcher support.</p>
                        <Link to="#" className="learn-link">Learn more →</Link>
                    </div>

                    <div className="card">
                        <div className="icon">💸</div>
                        <h3>Free Transfers </h3>
                        <p>Send delivery payments quickly and securely, helping you run faster logistics.</p>
                        <Link to="#" className="learn-link">Learn more →</Link>
                    </div>

                    <div className="card">
                        <div className="icon">🔐</div>
                        <h3>Unmatched Security</h3>
                        <p>Our platform provides peace of mind in a fast-growing digital dispatch world.</p>
                        <Link to="#" className="learn-link">Learn more →</Link>
                    </div>
                </div>

            </div>

        </section>

         <div className="about-container">
      <div className="about-section" ref={aboutRef}>
        <div className={`about-image ${animate ? "slide-in-left" : ""}`}>
          <img src="Images/about-us1.png" alt="About"/> 
          <div className="about-badge">
            <p className="badge-title">Trusted by 2M+ Users</p>
            <p className="badge-text">Join over <span className="highlight">16,500</span> satisfied users choosing Swiftro for daily deliveries!</p>
            <div className="badge-avatars">
              <img src="https://via.placeholder.com/40" alt="user 1" />
              <img src="https://via.placeholder.com/40" alt="user 2" />
              <img src="https://via.placeholder.com/40" alt="user 3" />
              <span>34k+ Reviews</span>
            </div>
          </div>
        </div>
        

        <div className={`about-content ${animate ? "slide-in-right" : ""}`}>
          <div className="about-tag">About Swiftro</div>
          <h1>Smart Logistics Solutions for Fast and Reliable Deliveries</h1>
          <p className="about-desc">
            Swiftro is a modern dispatch and delivery platform that connects individuals and businesses with available dispatchers across Nigeria. Whether it's errands, packages, or scheduled deliveries, Swiftro simplifies your logistics needs.
          </p>

          <ul className="about-points">
            <li>Real-time Tracking</li>
            <li>Secure Wallet System</li>
            <li>24/7 Customer Support</li>
            <li>Available  Nigeria</li>
          </ul>

          <button className="about-button">Get Started with Swiftro</button>

          <div className="about-stats">
            <div className="stat-box">
              <h3>15K+</h3>
              <p>Daily Requests</p>
            </div>
            <div className="stat-box">
              <h3>350+</h3>
              <p>Verified Dispatchers</p>
            </div>
            <div className="stat-box">
              <h3>99%</h3>
              <p>User Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>

        
        <section className="join-section" ref={joinRef} >
      <h2 className={joinAnimate ? "slide-in-down" : ""}>Let’s do it together</h2>
      <div className="join-cards">
        <div className={`join-card ${joinAnimate ? "slide-in-down" : ""}`}>
          <div className="image-wrapper">
            <img src="/Images/riderImage.png" alt="rider" />
          </div>
          <h3>Become a rider</h3>
          <p>Enjoy flexibility, freedom and earnings by delivering through Swiftro.com better for you</p>
          <button>Register here</button>
        </div>

        <div className={`join-card ${joinAnimate ? "slide-in-down" : ""}`}>
          <div className="image-wrapper">
            <img src="/Images/partnerImage2.png" alt="partner" />
          </div>
          <h3>Become a partner</h3>
          <p>Grow with Swiftro! Our tools and users can help you boost sales and unlock opportunities!</p>
          <button>Register here</button>
        </div>

        <div className={`join-card ${joinAnimate ? "slide-in-down" : ""}`} >
          <div className="image-wrapper">
            <img src="/Images/careerImage.png" alt="careers" />
          </div>
          <h3>Careers</h3>
          <p>If you're ambitious, humble and love working with others, we want to hear from you!</p>
          <button>Register here</button>
        </div>
      </div>
    </section>



    <section className="container download-app">
      <div className="download-left">
        <img src="/your-icon.svg" alt="Download Icon" className="download-icon" />
        <h2>Download the app</h2>
        <p>Order anything and track it in real time with the Swiftro app.</p>
        <div className="store-buttons">
          <Link to="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img src="/google-play-badge.png" alt="Google Play" />
          </Link>
          <Link to="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src="/app-store-badge.png" alt="App Store" />
          </Link>
        </div>
      </div>

      <div className="download-right">
        <img src="/app-screenshots.png" alt="App Screenshots" />
      </div>
    </section>



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
            <ul>
              <li>About us</li>
              <li>FAQ</li>
              <li>Help</li>
              <li>Blog</li>
              <li>Contact us</li>
              <li>Security</li>
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

  

        </>
  )
    
}