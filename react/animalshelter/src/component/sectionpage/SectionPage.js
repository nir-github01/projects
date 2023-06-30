import React from "react";
import Button from "react-bootstrap/esm/Button";
import {useNavigate} from "react-router-dom";
import sectionImage from "./images/anime_people.jpeg";
import "./SectionStyle.css";

function SectionPage() {
     const navigate = useNavigate ();
     const adoptionForm = () => {
        navigate("/adopt")
     }
const giveAwayForm = () => {
    navigate("/giveaway");
}
    return(
        <>
             <div className="section-div">
                  <div  className="section_ch1">
                        <h4>Welcome to the Animal Shelter !</h4>
                        <p>Glad that you care for the animals 
                        so much. We make sure that you’ll not 
                        repent your decision of adopting your
                         favorite pet </p>
                         <div className="button-div">
                            <Button className="btn me-3" size="sm" variant="danger" onClick={adoptionForm}>ADOPT !</Button> 
                            <Button className="btn"  size="md" variant="success" >What all pets do we have ?</Button>
                        </div>
                  </div>

                  <div className="section_ch2 ">
                        <h5>We do take in pets if you can't take care of them !</h5>
                        <p> </p>
                        <Button  variant="danger"  className="btn mb-3 mt-3" size="md" onClick={giveAwayForm}>Give Away</Button>

                  </div>
                  <div>
                    <img src={sectionImage} className="section_Image" alt="Image" />
                    <p>add</p>
                  </div>
             </div>
        </>
    )
}

export default SectionPage;