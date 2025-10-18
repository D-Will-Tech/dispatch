
import "./Login.css";

export function UserLogin  () {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>User Login</h2>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <div className="forgot">
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="btn">Login</button>
        </form>

        <p className="switch">
          Don’t have an account? <a href="/UserSignup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

