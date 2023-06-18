import Form from 'react-bootstrap/Form';
import "./SignInSignUp.css";
import Button from 'react-bootstrap/Button';
import  {useNavigate, Navigate } from "react-router-dom";

function SignUpForm() {

    const navigate = useNavigate ();
    const homePage = () => {
        navigate("/");
    }
  return (
    <>
    <div className='signinForm-div'>
    <h4 className='loginTitle'>SIGNUP-FORM</h4>
        <Form>
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
            <Form.Label htmlFor="inputPassword5">Date Of Birth</Form.Label>
            <Form.Control
                type="date"
                id="inputDob"
                placeholder='Fill your date of birth'
                aria-describedby="dateOfBirth"
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
            <div>
            <Form.Label htmlFor="inputGender">Gender</Form.Label>
            {[ 'radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
            <Form.Check
                inline
                label="Male"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
            />
            <Form.Check
                inline
                label="Female"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
            />
            <Form.Check
                inline
                name='group1'
                label="Other"
                type={type}
                id={`inline-${type}-3`}
            />
            </div>
      ))}
      </div>
    <div className='cityname-div'>
      <Form.Label htmlFor="inputGender">City</Form.Label>
            {[ 'checkbox'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                    inline
                    label="Kanpur"
                    name="group2"
                    type={type}
                    id={`inline-${type}-1`}
                />
                <Form.Check
                    inline
                    label="Chandigarh"
                    name="group2"
                    type={type}
                    id={`inline-${type}-2`}
                />
                <Form.Check
                    inline
                    name='group2'
                    label="Lucknow"
                    type={type}
                    id={`inline-${type}-3`}
                />
                <Form.Check
                    inline
                    label="Banglore"
                    name="group2"
                    type={type}
                    id={`inline-${type}-2`}
                />
                <Form.Check
                    inline
                    name='group2'
                    label="Pune"
                    type={type}
                    id={`inline-${type}-3`}
                />
                <Form.Check
                    inline
                    name='group2'
                    label="Other"
                    type={type}
                    id={`inline-${type}-3`}
                />
            </div>
      ))}
      </div>
        <div className='select-div mb-5 mt-4'>
        <Form.Label htmlFor="inputGender">Profession</Form.Label>
                <Form.Select aria-label="select-profession">
                <option>Choose profession</option>
                <option value="bussiness">Bussiness</option>
                <option value="education">Education</option>
                <option value="engineer">Engineering</option>
                <option value="teacher">Teacher</option>
                <option value="leader">Leader</option>
                <option value="manager">Manager</option>
                </Form.Select>
        </div>
            <div className="d-grid gap-2 mt-4">
                <Button variant="success" size="lg" className='login-btn'>
                    SIGNUP
                </Button>
                <Button variant='danger' size='lg' className='btn, cancel-btn' onClick={homePage}>CANCEL</Button>
            </div>
        </Form>
      </div>
    </>
  );
}

export default SignUpForm;