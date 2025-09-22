import "./ServicePage.css";
import { Header } from "../Component/Header";
import { Footer } from "../Component/Footer";

export function ServicePage() {
  return (
    <>
        <Header />
    <div className="service-page">

      
      <section className="hero-section">
        <div className="hero-content">
          <h2>Add your address and see if your local favourites are on Swiftro!</h2>
          <div className="address-bar">
            <input type="text" placeholder="📍 What's your address?" />
            <button> <img src="icons/icons8-location-16.png" alt="" /> Use current location</button>
          </div>
        </div>
        <div className="hero-main">
          <div className="hero-image">
            <img src="/image-homepage2.png" alt="" />
          </div>
          <div className="hero-text">
            <h1>Swiftro delivers fast, secure and affordable</h1>
            <p>
              Whether you're sending documents, groceries, food, or gifts — Swiftro has you covered with real-time tracking and dedicated dispatch riders. 
               Enjoy affordable rates, doorstep pickups, and professional service within minutes.
            </p>
            <p>Sign up in under 2 minutes and get exclusive delivery perks and wallet bonuses</p>
            <button className="get-prime">Start with Swiftro</button>
          </div>
        </div>
      </section>

      
      <section className="features-section">
        <h2>Why Choose Swiftro?</h2>

        <div className="feature">
          <img src="icons/icons8-tracking-50.png" alt="icon" />
          <h3>Real-Time Tracking</h3>
          <p>Track your package live from pickup to delivery right from your dashboard</p>
        </div>

        <div className="feature">
          <img src="icons/icons8-in-transit-50.png" alt="icon" />
          <h3>Fast Dispatch</h3>
          <p>Our trained dispatchers respond within minutes to your delivery request.</p>
        </div>

        <div className="feature">
          <img src="icons/icons8-secure-50.png" alt="icon" />
          <h3>Secure and Reliable</h3>
          <p>Every delivery is insured, recorded, and handled with utmost care.</p>
        </div>

       


      
      </section>

      
      <section className="faq-section">
        <h2>More information about Swiftro Prime</h2>
        <div className="faq-boxes">
          <div className="faq-box">
            <h4>How do I subscribe to Swiftro Prime?</h4>
            <p>Use the “Get Prime now” button or access the Prime screen in the Swiftro app.</p>
          </div>
          <div className="faq-box">
            <h4>When will I be charged for next month?</h4>
            <p>Swiftro Prime renews monthly. Check the date on your app's Prime screen.</p>
          </div>
        </div>
      </section>

    </div>


    <Footer />

    </>
  );
}