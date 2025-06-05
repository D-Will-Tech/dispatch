
import "./Aboutpage.css";
import { Header } from "../Component/Header";



 export function Aboutpage() {
  return (
    <>

    <title>About Us - Swiftro</title>
    
    <Header />
    
    <div className="about-container">
      <div className="about-section">
        <div className="about-image">
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
        

        <div className="about-content">
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
    </>
  );
};


