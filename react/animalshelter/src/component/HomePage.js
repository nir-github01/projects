import React from "react";
import SignInForm from "./signin_signup/SignInPage";
import Button from "react-bootstrap/esm/Button";
// import SignUpForm from "./signin_signup/SignUpPage";
// import AdoptionForm from "./petapplicationform/Adoptpetform";
// import GiveAwayform from "./petapplicationform/GiveAwayPetForm";
import SectionPage from "./sectionpage/SectionPage";
import FooterPage from "./footerpage/FooterPage";
import HeaderPage from "./header/Header";
import AdoptPetList from "./petapplicationform/AdoptPetList";
import {useNavigate} from "react-router-dom";
import UsersList from "./signin_signup/UserList";

function HomePage() {
  const navigate = useNavigate();

  const signUpForm = () => {
    navigate("/signup");

  }

  const signInForm = () => {
    navigate("/signin");
    
  }
  const updateAdopt = () => {
    navigate("/update")
  }
  // const adoptFormdatacls =() =>{
  //   navigate("/adoptform");
  // }
  // const adoptFormdata =() =>{
  //   navigate("/adopt");
  // }
    return (
        <>
        <div className="nav-btn-div">
           <Button className="navbtn me-3" onClick={signInForm} >SIGNIN </Button> 
           <Button className="navbtn" onClick={signUpForm}>SIGNUP </Button> 
           <Button className="me-4" variant="success" onClick={updateAdopt}>Update Adopt</Button>
           <HeaderPage />
          <SectionPage /> 
          <FooterPage/> 
        </div>

        </>
    )
}

export default HomePage;