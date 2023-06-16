import Form from 'react-bootstrap/Form';
import "./SignInSignUp.css";
import Button from 'react-bootstrap/Button';
function SignInForm() {
  return (
    <>
    <div className='signinForm-div'>
    <h4 className='loginTitle'>LOGIN FORM</h4>
        <Form>
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
        
            <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label="Check this switch"
            />

            <div className="d-grid gap-2 mt-4">
                <Button variant="success" size="lg" className='login-btn'>
                    LOGIN
                </Button>
            </div>
        </Form>
      </div>
    </>
  );
}

export default SignInForm;