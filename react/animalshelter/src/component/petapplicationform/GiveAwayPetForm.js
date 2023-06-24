import Form from 'react-bootstrap/Form';
import "../signin_signup/SignInSignUp.css";
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";
import { useState } from 'react';

function GiveAwayform() {
    const navigate = useNavigate();
    const homePage = () => {
        navigate("/");
    }
   //UseState
    const [giveawayform, setGiveAwayForm] = useState();

    const handleGiveawayformInput = (e) => {
            setGiveAwayForm({
                ...giveawayform,
                [e.target.name] :e.target.value,
            });
            console.log(e.target.name, e.target.value);
            
    }

      const submitGiveAwayForm =async (e) => {
        e.preventDefault();

        const postresponse = await fetch("http://localhost:5000/giveaway",{
               method:"POST",
               body:JSON.stringify(giveawayform),
               headers:{
                'Content-Type':'application/json'
               },
        });
        const giveform_data = await postresponse.text();
        console.log(giveform_data);
        console.log(giveawayform);
        //alert("submitted");
      }
  
    return (
    <>
    <div className='signinForm-div'>
    <h4 className='loginTitle'>GIVE AWAY</h4>
        <Form onSubmit={submitGiveAwayForm}>

        <div className='select-div mb-5 mt-4'>
        <div>
            <h5>What a pet do you want to give away ?</h5>
        </div>
        <Form.Label htmlFor="inputGender">Pet type</Form.Label>
                <Form.Select aria-label="select-profession" name='Pet_Type' onChange={handleGiveawayformInput}>
                <option>Choose pet</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                </Form.Select>
        </div>
        <div className='select-div mb-5 mt-4'>
        <Form.Label htmlFor="inputGender">Breed</Form.Label>
                <Form.Select aria-label="select-profession" name='Breed_Type' onChange={handleGiveawayformInput}>
                <option>Choose breed</option>
                <option value="lab">Lab</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </Form.Select>
        </div>
        <div>
            <h5>Please fill your details</h5>
        </div>
        <Form.Label htmlFor="inputName">First Name</Form.Label>
            <Form.Control
                type="text"
                id="inputFirstname"
                name='First_Name'
                onChange={handleGiveawayformInput}
                placeholder="Fill your first name"
                aria-describedby="firstname"
            />
            <Form.Label htmlFor="inputLastname">Last Name</Form.Label>
            <Form.Control
                type="text"
                id="inputLastname"
                name='Last_Name'
                onChange={handleGiveawayformInput}
                placeholder='Fill your last name'
                aria-describedby="lastname"
            />
                        <Form.Label htmlFor="inputEmail">Phone</Form.Label>
            <Form.Control
                type="text"
                id="inputPhone"
                name='Phone'
                onChange={handleGiveawayformInput}
                placeholder="Fill your phone number"
                aria-describedby="phone"
            />
            <Form.Label htmlFor="inputEmail">Email</Form.Label>
            <Form.Control
                type="email"
                id="inputEmail"
                name='Email'
                onChange={handleGiveawayformInput}
                placeholder="Email-Id"
                aria-describedby="email"
            />
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
                type="password"
                id="inputPassword5"
                name='Password'
                onChange={handleGiveawayformInput}
                placeholder='Password'
                aria-describedby="passwordHelpBlock"
            />
            <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and numbers,
                and must not contain spaces, special characters, or emoji.
            </Form.Text>
            <div className="d-grid gap-2 mt-4">
                <Button type='submit' variant="success" size="lg" className='login-btn'>
                    REQUEST FOR GIVE AWAY
                </Button>
                <Button variant='danger' size='lg' className='btn cancel-btn' onClick={homePage}>CANCEL</Button>
            </div>
        </Form>
      </div>
    </>
  );
}

export default GiveAwayform;