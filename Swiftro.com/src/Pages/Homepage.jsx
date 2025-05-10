import { Header } from "../Component/Header"
import "./Homepage.css";

export function Homepage() {
    return(
        <>
        <Header />
        <section className="homepage">
            <div className="container homepage-content">
                <div className="homepage-text">
                   <span className="badge">Start Your 7-Days Free Trial</span>
                   <h1>Your Delivery Power, Just <span className="highlight">A Click Away</span></h1>
                   <p>Swiftro helps you connect instantly with available dispatchers in your area 
                      whether it's to run a quick errand, deliver a parcel, or handle a major haul. 
                      Fast, reliable, and always nearby Swiftro moves your world at your pace.
                      With Swiftro, you can manage your deliveries with ease and confidence,
                    </p>
                <div className="homepage-buttons">
                    <a href="#" className="btn-dark">Get started</a>
                    <a href="#" className="btn-light">Learn more</a>
                </div>
                </div>
                 
                 <div className="homepage-image">
                  <img src=""  classNamealt="image-box" />
                 </div>

            </div>

        </section>

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
                        <a href="#" className="learn-link">Learn more →</a>
                    </div>

                    <div className="card">
                        <div className="icon">💸</div>
                        <h3>Free Transfers </h3>
                        <p>Send delivery payments quickly and securely, helping you run faster logistics.</p>
                        <a href="#" className="learn-link">Learn more →</a>
                    </div>

                    <div className="card">
                        <div className="icon">🔐</div>
                        <h3>Unmatched Security</h3>
                        <p>Our platform provides peace of mind in a fast-growing digital dispatch world.</p>
                        <a href="#" className="learn-link">Learn more →</a>
                    </div>
                </div>

            </div>

        </section>

        </>
    )
    
}