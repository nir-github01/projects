import Form from 'react-bootstrap/Form';
import "./SignInSignUp.css";
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
function SignInForm() {
     const navigate = useNavigate();

    const [usersdata, setUsersData] = useState();
    const [userIpt, setUserIpt] = useState();
    const [error, setError] = useState();


    useEffect(() =>{
        let getUserdata = async (e) => {
            const fetchUsersdata = await fetch("http://localhost:8000/user",{
                method:'GET',
            });
            let usersData =await fetchUsersdata.json();
            // console.log(JSON.stringify(usersData));
          setUsersData(usersData);
        }
        getUserdata();
    }, [])

    let handleuserLoginIpt = (e) => {
        setUserIpt({
            ...userIpt,
            [e.target.name] :e.target.value
        })
    }

    let handleUserLogin =async (e) => {
        let errMessage ="Invalid email or Password";
            e.preventDefault();
            console.log(userIpt != undefined);
            if( userIpt != null && userIpt != undefined){  
            usersdata.map((user, idx) => {
                
                    // console.log("Condition 1"+ idx+ user.Email === userIpt.Email && user.Pasword === userIpt.Password);
                    if(user.Email === userIpt.Email && user.Pasword === userIpt.Password){
                      navigate("/");
                    }else{
                        setError(errMessage);
                    }
            })
        }  
    }


  return (
    <>
    <div className='signinForm-div'>
    <h4 className='loginTitle'>LOGIN FORM</h4>
    <p>{error}</p>
        <Form  onClick={handleUserLogin}>

            <Form.Label htmlFor="inputEmail">Email</Form.Label>
            <Form.Control
                type="email"
                id="inputEmail"
                name='Email'
                onChange={handleuserLoginIpt}
                placeholder="Email-Id"
                aria-describedby="email"
            />
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
                type="password"
                id="inputPassword5"
                name='Password'
                onChange={handleuserLoginIpt}
                placeholder='Password'
                aria-describedby="passwordHelpBlock"
            />
            <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and numbers,
                and must not contain spaces, special characters, or emoji.
            </Form.Text>
        
            {/* <Form.Check // prettier-ignore
                type="switch"
                name="confirmation"
                onChange={handleuserLoginIpt}
                id="custom-switch"
                label="Check this switch"
            /> */}

            <div className="d-grid gap-2 mt-4">
                <Button type='submit' variant="success" size="lg" className='login-btn'>
                    LOGIN
                </Button>
            </div>
        </Form>
      </div>
    </>
  );
}

export default SignInForm;