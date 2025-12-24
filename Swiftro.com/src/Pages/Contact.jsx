import './Contact.css';
import { Header } from "../Component/Header";

export function Contact() {
  return (
    <>
      <Header />

      <div className="contact-page">
        <h1>Contact Us</h1>

        <section className="location">

        
           <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15864.690492588536!2d7.071504125381631!3d6.240966522997135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104382785adb3819%3A0x49315f1ca186253f!2sIfite%20Awka%20420112%2C%20Anambra!5e0!3m2!1sen!2sng!4v1760826174345!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Scotland Location"
          ></iframe>
        </section>

        <section className="contact-us">
          <div className="row">
            <div className="contact-col">
              <div>
                <i className="fa fa-home" aria-hidden="true"></i>
                <span>
                  <h5>Ifite awka 420112</h5>
                  <p>Anambra state 2sNigeria for now </p>
                </span>
              </div>
              <div>
                <i className="fa fa-phone-square" aria-hidden="true"></i>
                <span>
                  <h5>+2348073023611</h5>
                  <p>Monday to Saturday, 10am</p>
                </span>
              </div>
              <div>
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                <span>
                  <h5>Swiftro@gmail.com</h5>
                  <p>Email us for your query</p>
                </span>
              </div>
            </div>

            <div className="contact-col">
              <form action="form-handler.php" method="post">
                <input type="text" name="name" placeholder="Enter your name" required />
                <input type="text" name="email" placeholder="Enter your email" required />
                <input type="text" name="subject" placeholder="Enter your subject" required />
                <textarea rows="8" name="message" placeholder="Message" required></textarea>
                <button type="submit" className="hero-btn red-btn">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}