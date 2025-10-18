import "./UserSignup.css" 
 
 export function UserSignup() {
  return (
    <section className="signup">
      {/* Hero Section with Background Image */}
      <div className="signup-hero">
        
          <h1>User Signup Request</h1>
          <p>
            Create your Swiftro account and start booking, tracking, and 
            managing your deliveries. Fill in the form below and your account 
            will be created instantly.
          </p>
          <span className="note">
            Note: Make sure you provide valid details. You’ll receive a confirmation email.
          </span>
        
      </div>

      {/* Form Section */}
      <div className="signup-form-container">
        <form className="signup-form">
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" required />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Password</label>
              <input type="password" required />
            </div>
            <div className="form-group">
              <label>Confirm Password </label>
              <input type="password" required />
            </div>
          </div>

          <div className="form-group full">
            <label>Address</label>
            <input type="text" required />
          </div>

          <div className="form-group full">
            <label>City</label>
            <input type="text" required />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Postal Code</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>State</label>
              <input type="text" required />
            </div>
          </div>

          <div className="form-group checkbox">
            <label>
              <input type="checkbox" required /> I agree to the{" "}
              <a href="#">Terms & Conditions</a> *
            </label>
          </div>

          <div className="form-group checkbox">
            <label>
              <input type="checkbox"  required/>
               I have read the{" "}
              <a href="#">Privacy Policy</a> *
            </label>
          </div>

               <button type="submit" className="submit-btn">SIGN UP</button>
               <p>Already had account with Swiftro <a href="/UserLogin">Login</a></p>
            
        </form>
      </div>
    </section>
  );
};