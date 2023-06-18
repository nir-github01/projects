import React from "react";
import Button from "react-bootstrap/esm/Button";
import {useNavigate} from "react-router-dom";

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
                  <div >
                        <h4>Welcome to the Animal Shelter !</h4>
                        <p>Glad that you care for the animals 
                        so much. We make sure that you’ll not 
                        repent your decision of adopting your
                         favorite pet </p>
                         <div className="button-div">
                            <Button className="btn" size="sm" variant="danger" onClick={adoptionForm}>Adopt !</Button> 
                            <Button className="btn"  size="md" variant="success" >What all pets do we have ?</Button>
                        </div>
                  </div>

                  <div className="">
                        <h5>We do take in pets if you can't take care of them !</h5>
                        <p> </p>
                        <Button  variant="danger"  className="btn" size="md" onClick={giveAwayForm}>Give Away</Button>
                  </div>
                  <div>
                    <img src="#" alt="Image" />
                    <p>add</p>
                  </div>
             </div>
        </>
    )
}

export default SectionPage;