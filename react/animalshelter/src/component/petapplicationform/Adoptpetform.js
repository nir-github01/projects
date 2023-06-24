import Form from 'react-bootstrap/Form';
import "../signin_signup//SignInSignUp.css";
import Button from 'react-bootstrap/Button';
import  {useNavigate} from "react-router-dom";
import { useEffect, useState } from 'react';
import Axios from "axios";


function AdoptionForm() {
    
    //Redirecting page on button click
    const navigate = useNavigate();

    const homePage = () => {
        navigate("/");
    }

    const adopterlistPage = () => {
        navigate('/adoterlist')
    }
  
    //form data handling

    const [form, setForm ]  = useState({});

     const handleSubmit = async(e) => {
        
        e.preventDefault();
        const postresponse = await fetch("http://localhost:4000/adoptdata", {
            method:'POST',
            body:JSON.stringify(form),
            headers:{
                'Content-Type':'application/json'
            }
           });
           const postdata = await postresponse.json();
           console.log(postdata);
         // console.log(form);
        // alert("submitted");

     }

      let handlesInputs = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
      }

  return (
    <>
    <div className='signinForm-div'>
    <h4 className='loginTitle'>ADOPT A PET</h4>
    <Button onClick={adopterlistPage} variant='success'>Adopter List</Button>
        <Form onSubmit={handleSubmit}>
      
        <div className='select-div mb-5 mt-4'>
        <div>
            <h5>What a pet do you want to adopt ?</h5>
        </div>
        <Form.Label htmlFor="inputGender">Pet type</Form.Label>
                <Form.Select name='PetType' aria-label="select-profession" onChange={handlesInputs} /**</div>onChange={handlePets}  value={pettype}*/ >
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
                <Form.Select name='BreedType' aria-label="select-profession" onChange={handlesInputs} /**</div>onChange={handleBreed}  value={breed}*/ >
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
                name='FirstName'
                onChange={handlesInputs}
                // value={fname}
                placeholder="Fill your first name"
                /**onChange={handleFname}*/
               aria-describedby="firstname"
            />
            <Form.Label htmlFor="inputLastname">Last Name</Form.Label>
            <Form.Control
                type="text"
                id="inputLastname"
                name='LastName'
                onChange={handlesInputs}
                // value={lname}
                /**onChange={handleLname}*/
                 placeholder='Fill your last name'
                aria-describedby="lastname"
            />
            <Form.Label htmlFor="inputEmail">Phone</Form.Label>
            <Form.Control
                type="text"
                id="inputPhone"
                onChange={handlesInputs}
                name='Phone'
                // value={phone}
                /**onChange={handlePhone}*/
                placeholder="Fill your phone number"
                aria-describedby="phone"
            />
            <Form.Label htmlFor="inputEmail">Email</Form.Label>
            <Form.Control
                type="email"
                id="inputEmail"
                onChange={handlesInputs}
                name='Email'
                // value={email}
                /**onChange={handleEmail}*/
               placeholder="Email-Id"
                aria-describedby="email"
            />
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
                type="password"
                id="inputPassword5"
                onChange={handlesInputs}
                name='Password'
                // value={password}
                /**onChange={handlePassword} */
                placeholder='Password'
                aria-describedby="passwordHelpBlock"
            />
            <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and numbers,
                and must not contain spaces, special characters, or emoji.
            </Form.Text>
            <div className="d-grid gap-2 mt-4">
                <Button type='submit' variant="success" size="lg" className='login-btn'>
                    REQUEST FOR ADOPT
                </Button>
                <Button variant='danger' size='lg' className='btn cancel-btn' onClick={homePage}>Cancel</Button>
            </div>
        </Form>
      </div>
    </>
  );
}

export default AdoptionForm;
