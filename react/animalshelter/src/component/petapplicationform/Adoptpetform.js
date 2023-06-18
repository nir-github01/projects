import Form from 'react-bootstrap/Form';
import "../signin_signup//SignInSignUp.css";
import Button from 'react-bootstrap/Button';
import  {useNavigate} from "react-router-dom";


function AdoptionForm() {

    const navigate = useNavigate();

    const homePage = () => {
        navigate("/");
    }


  return (
    <>
    <div className='signinForm-div'>
    <h4 className='loginTitle'>ADOPT A PET</h4>
        <Form>

        <div className='select-div mb-5 mt-4'>
        <div>
            <h5>What a pet do you want to adopt ?</h5>
        </div>
        <Form.Label htmlFor="inputGender">Pet type</Form.Label>
                <Form.Select aria-label="select-profession">
                <option>Choose pet</option>
                <option value="bussiness">Dog</option>
                <option value="education">Cat</option>
                <option value="engineer">1</option>
                <option value="teacher">2</option>
                <option value="leader">3</option>
                <option value="manager">4</option>
                </Form.Select>
        </div>
        <div className='select-div mb-5 mt-4'>
        <Form.Label htmlFor="inputGender">Breed</Form.Label>
                <Form.Select aria-label="select-profession">
                <option>Choose breed</option>
                <option value="bussiness">Lab</option>
                <option value="education">1</option>
                <option value="engineer">2</option>
                <option value="teacher">3</option>
                <option value="leader">4</option>
                <option value="manager">5</option>
                </Form.Select>
        </div>
        <div>
            <h5>Please fill your details</h5>
        </div>
        <Form.Label htmlFor="inputName">First Name</Form.Label>
            <Form.Control
                type="text"
                id="inputFirstname"
                placeholder="Fill your first name"
                aria-describedby="firstname"
            />
            <Form.Label htmlFor="inputLastname">Last Name</Form.Label>
            <Form.Control
                type="text"
                id="inputLastname"
                placeholder='Fill your last name'
                aria-describedby="lastname"
            />
                        <Form.Label htmlFor="inputEmail">Phone</Form.Label>
            <Form.Control
                type="text"
                id="inputPhone"
                placeholder="Fill your phone number"
                aria-describedby="phone"
            />
            <Form.Label htmlFor="inputEmail">Email</Form.Label>
            <Form.Control
                type="email"
                id="inputEmail"
                placeholder="Email-Id"
                aria-describedby="email"
            />
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
                type="password"
                id="inputPassword5"
                placeholder='Password'
                aria-describedby="passwordHelpBlock"
            />
            <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and numbers,
                and must not contain spaces, special characters, or emoji.
            </Form.Text>
            <div className="d-grid gap-2 mt-4">
                <Button variant="success" size="lg" className='login-btn'>
                    REQUEST FOR GIVE AWAY
                </Button>
                <Button variant='danger' size='lg' className='btn cancel-btn' onClick={homePage}>Cancel</Button>
            </div>
        </Form>
      </div>
    </>
  );
}

export default AdoptionForm;
