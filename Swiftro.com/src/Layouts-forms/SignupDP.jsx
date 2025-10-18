import './SignupDp.css'

export function SignupDP () {

    return(
        <section className="signup">

            <div className="signup-hero">
  
                   <h1>Dispatcher Signup Request</h1>

                   <p>
                    Join our dispatcher network and start managing deliveries with ease. 
                    Fill in the form below and our team will get in touch with you within 1 business day.  
                   </p>

                   <span className='note'>
                      Note: Applications submitted on weekends or holidays will be processed on the next business day.
                   </span>
                </div>

                {/* form section */}

                <div className="signup-form-container">
                    <form className="signup-form">
                        <div className='form-row'>
                            <div className="form-group">
                                <label>Company Name</label>
                                <input type="text" required />
                            </div>

                             <div className="form-group">
                                <label>Dispatcher ID</label>
                                <input type="text" required />
                            </div>

                        </div>

                            
                        <div className="form-row">
                           <div className="form-group">
                                 <label>First Name *</label>
                                  <input type="text" required />
                            </div>

                           <div className="form-group">
                                <label>Last Name *</label>
                                <input type="text" required />
                           </div>
                        </div>


                        <div className="form-row">
                           <div className="form-group">
                                 <label>Address</label>
                                  <input type="text" required />
                            </div>

                           <div className="form-group">
                                <label>Postal Code</label>
                                <input type="text" required />
                           </div>
                        </div>


                        <div className="form-row">
                           <div className="form-group">
                                 <label>City</label>
                                  <input type="text" required />
                            </div>

                           <div className="form-group">
                                <label>Phone Number</label>
                                <input type="text" required />
                           </div>
                        </div>

                        <div className="form-row">
                           <div className="form-group">
                                 <label>Email Address</label>
                                  <input type="text" required />
                            </div>

                           <div className="form-group">
                                <label>National ID / License </label>
                                <input type="text" required />
                           </div>
                        </div>

                           <div className="form-group full">
                                <label>Message</label>
                                  <textarea rows="4" />
                            </div>

                            <div className="form-group checkbox">
                                  <label>
                                  <input type="checkbox" /> I agree to provide accurate information
                                  </label>
                             </div>

                            <div className="form-group checkbox">
                                 <label>
                                 <input type="checkbox" /> I have read the <a href="#">Privacy Policy</a>
                                 </label>
                             </div>

                                 <button type="submit" className="submit-btn">SUBMIT</button>
                                   <p>Already had account with Swiftro <a href="/DispatcherLogin">Login</a></p>

                        

                    </form>

                </div>
             
        </section>
    )
    
}