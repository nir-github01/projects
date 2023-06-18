import React from "react";
import SignInForm from "./signin_signup/SignInPage";
import Button from "react-bootstrap/esm/Button";
// import SignUpForm from "./signin_signup/SignUpPage";
// import AdoptionForm from "./petapplicationform/Adoptpetform";
// import GiveAwayform from "./petapplicationform/GiveAwayPetForm";
import SectionPage from "./sectionpage/SectionPage";
import FooterPage from "./footerpage/FooterPage";
import HeaderPage from "./header/Header";
import {useNavigate} from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const signUpForm = () => {
    navigate("/signup");

  }

  const signInForm = () => {
    navigate("/signin");
    
  }
    return (
        <>
        <div className="nav-btn-div">
           <Button className="navbtn me-3" onClick={signInForm} >SIGNIN </Button> 
           <Button className="navbtn" onClick={signUpForm}>SIGNUP </Button> 
        </div>
        {/* <AdoptionForm />
        <GiveAwayform /> */} 
        <HeaderPage />
        <SectionPage /> 
        <FooterPage/>  
        </>
    )
}

export default HomePage;