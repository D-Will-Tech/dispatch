import "./ServicePage.css";
import { Header } from "../Component/Header";

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
            <button>📍 Use current location</button>
          </div>
        </div>
        <div className="hero-main">
          <div className="hero-image">
            {/* Place your image here manually */}
          </div>
          <div className="hero-text">
            <h1>Swiftro PRIME</h1>
            <h3>Swiftro Prime gives you free deliveries and more</h3>
            <p>
              Sign up in less than 2 minutes and enjoy Prime benefits for your next order!
            </p>
            <button className="get-prime">Get Prime now</button>
          </div>
        </div>
      </section>

      
      <section className="features-section">
        <div className="feature">
          <img alt="icon" />
          <h3>Free unlimited deliveries</h3>
          <p>Enjoy Swiftro Prime at 80% of supermarkets and 90% of restaurants, including top favorites.</p>
        </div>
        <div className="feature">
          <img alt="icon" />
          <h3>Exclusive Prime deals</h3>
          <p>Save more with Swiftro Prime, enjoy bigger discounts and exclusive promotions.</p>
        </div>
        <div className="feature">
          <img alt="icon" />
          <h3>No commitments</h3>
          <p>Easily manage your subscription in the app: Automatic monthly renewals. Cancel anytime.</p>
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

    </>
  );
}