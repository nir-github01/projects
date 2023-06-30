import React from "react";
import headerImage from "./images/pets.jpeg";
import "./HeaderStyle.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

function HeaderPage(){

   let navigate = useNavigate();

   // const signUpForm = () => {
   //   navigate("/signup");
 
   // }
 
   // const signInForm = () => {
   //   navigate("/signin");
     
   // }
 return(
    <>
         <div className="header-main_div">
             <div className="header_div_ch1">
                <img src={headerImage} className="header_Image" alt="Image" />
                <span className="ms-4">ANIMAL SHELTER</span>
             </div>
             <div className="header_div_ch2 mt-4">
                <span className="me-4 cursor">Home</span>
                <span className="cursor">Contact Us</span>
             </div>
             <div className="signIn_signUp_div mt-4">
               <Link to="/signin">
                 <Button
                     className="navbtn me-3"  
                     // onClick={signInForm}
                     >
                     SIGNIN
                      </Button> 
                 </Link>
                 <Link to="signUp">
                     <Button 
                     className="navbtn" 
                     // onClick={signUpForm}
                     >
                     SIGNUP 
                     </Button> 
                  </Link>
             </div>
             <div className="header_div_ch3 mt-3">
                <span className="ms-2 cursor">linkedIn</span>
                <span className="ms-2 cursor" >twitter</span>
                <span className="ms-2 cursor">instagram</span>
             </div>
         </div>
    </>
 )   
}
export default HeaderPage;