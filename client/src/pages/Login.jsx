import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="login-page">
      <Navbar />

      <div className="login-container">
        <div className="login-box">
          <div className="login-header">
            <h2>Welcome StageOneX</h2>
            <h4>
              Login or{" "}
              <Link to="/signup">
                <u>create an account</u>
              </Link>
            </h4>
          </div>

          <form className="login-form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

<<<<<<< HEAD
           <div className="login-form">
               <input type="email" placeholder="Email:" /><br /><br />
               <input type="password" placeholder="Password:" /><br /> 
           </div>
           <br />

           <div className="agree">   <input type="checkbox"  /> I agree all statements in Terms of service</div> 
            
            <br />
            <div className="sign-button">
                <input type="button" value="SIGN UP" />
                
=======
            <div className="agree">
              <input type="checkbox" /> I agree all statements in Terms of
              Service
            </div>

            <div className="sign-button">
              <input type="button" value="SIGN UP" />
>>>>>>> 7f98a5c91ef59dbf67f395e9f919c8d0c7d18cd5
            </div>

            <div className="socialmedia-button">
              <button type="button" className="facebook-btn">
                <img
                  src="/images/fb.png"
                  alt="facebook logo"
                  width="20"
                  height="20"
                />
                Login with Facebook
              </button>

              <button type="button" className="google-btn">
                <img
                  src="/images/google.png"
                  alt="google logo"
                  width="20"
                  height="20"
                />
                Login with Google
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Login;
