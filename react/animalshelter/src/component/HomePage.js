import React from "react";
import SignInForm from "./signin_signup/SignInPage";
import Button from "react-bootstrap/esm/Button";
import SignUpForm from "./signin_signup/SignUpPage";

function HomePage() {
    return (
        <>
        <div className="nav-btn-div">
           <Button className="navbtn me-3" ><a href="<SignInForm/>"> SignIn </a></Button> 
           <Button className="navbtn" ><a href="<SignInForm/>"> SignUp </a></Button> 
        </div>
        <SignUpForm />
        </>
    )
}

export default HomePage;