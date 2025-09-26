import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
return(

<section>
    
    <div className="login-header">
        <h2>Welcome Miracle StageX</h2>
        <h3>Login or <Link>create an account</Link></h3>

    </div>

    <div className="login-form">
        <input type="email" placeholder="Email:" /><br/><br/>
        <input type="password" placeholder="Password:"/><br/>
        <input type="checkbox" /> I agree all statements in Terms of service
    </div><br/>

    <div className="sign-button">
        <input type="button" value="SIGN UP" />
        <h6>Forgot Password</h6>
    </div>

    <div className="socialmedia-button">
        <img src="/images/fb.png" alt="facebook logo" width="20" height="20"/>
        <input type="button" value="Login  with Facebook"></input><br/>
        <img src="/images/google.png" alt="facebook logo" width="20" height="20"/>
        <input type="button" value="Login  with Google"></input><br/>
    </div><br/><br/><br/><br/><br/><br/>
    <Footer />

   










</section>



);
};
export default Login;
