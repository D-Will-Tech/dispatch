import { useState } from "react";  
import "./Faq.css"
import { Header } from "../Component/Header";


export function Faq () {

    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
  {
    question: "Can I integrate Swiftro with my existing online store or website?",
    answer: "Yes, Swiftro integrates easily with your website or online store, allowing smooth order dispatch and tracking."
  },
  {
    question: "How can I get orders into Swiftro?",
    answer: "You can upload manually, integrate via API, or sync with your e-commerce platform for automatic order imports."
  },
  {
    question: "Can I register as a driver with Swiftro?",
    answer: "Yes! Simply sign up through our driver registration portal, and you’ll get access to delivery opportunities."
  },
  {
    question: "Can Swiftro automate my deliveries?",
    answer: "Absolutely. Our smart dispatch system assigns drivers automatically and optimizes delivery routes in real time."
  },
  {
    question: "Is there a mobile app available for drivers?",
    answer: "Yes, Swiftro provides a mobile app for drivers to accept jobs, navigate, and update delivery status easily."
  },
  {
    question: "Can I use Swiftro for free?",
    answer: "We offer a free plan with limited features, and paid plans with advanced tracking, automation, and support."
  }
];


 const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    {/* <Header/> */}
     
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "active" : ""}`} >
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <h3>{faq.question}</h3>
              <span>{openIndex === index ? "-" : "+"}</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
    </>
  );
    
}