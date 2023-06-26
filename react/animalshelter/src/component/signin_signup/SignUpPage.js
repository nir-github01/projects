import Form from 'react-bootstrap/Form';
import "./SignInSignUp.css";
import Button from 'react-bootstrap/Button';
import  {useNavigate } from "react-router-dom";
import { useState } from 'react';
import {citysList} from "./locationdatalist/CityList";
import { genderList } from './gender/Genderfile';

function SignUpForm() {

    const navigate = useNavigate ();
    const homePage = () => {
        navigate("/");
    }

    const [userform, setUserForm] = useState();

    const [cityname, setCityName] = useState([]);
    const [genders, setGender] = useState();

    const [mergeform, setMergeForm] = useState({});
    // const [citys, setCitys] = useState([citysList]);
    let handleUserInput =(e) =>{
        setUserForm({
            ...userform,
            [e.target.name] :e.target.value,
            
        });
   
    }

    let handleCheckbox = (e) => {

        let isChecked = e.target.checked;
        let checkedValue = e.target.value;
        console.log({[e.target.name]: [...cityname, checkedValue]})
        if(isChecked){
            setCityName((prevData)=>  [...cityname, checkedValue]);
        }else{
         setCityName((prevData)=>{
            return prevData.filter((val) =>{
                 return val !==checkedValue
             } )
         })
            
        }
    }
    const handleRadio = (e) => {
        let isSelected = e.target.checked;
        let radioValue = e.target.value;

        console.log("Before"+isSelected, radioValue, genders)

        setGender({
            genders:e.target.value
        });

        console.log("After"+isSelected, radioValue, genders)
        // if(isSelected){
        //     setGender(radioValue);
        // }else{
        //     setGender((prevData) => {
        //         return prevData.filter((val) => {
        //             return val !== radioValue;
        //         })
        //     })
        // }
    }
    let handleSubmitForm = async(e)=>{
        e.preventDefault();
         //mergeform = new Array( JSON.stringify(userform),JSON.stringify(genders), "City:"+cityname);
        setMergeForm((prevData) => {
            return {...userform, ...genders, cities: [...cityname]}
        })
        // console.log("MergeForm"+ JSON.stringify(mergeform))

          const responsedata =await fetch("http://localhost:8000/user", {
            method:"POST",
            body:JSON.stringify(mergeform),
            headers:{
             "Content-Type":"application/json"
            },
         });

         const userdata = await responsedata.json();
        //   console.log(userform);
        //   console.log(genders);
        //   console.log(cityname);
    }
 


  return (
    <>
    <div className='signinForm-div'>
    <h4 className='loginTitle'>SIGNUP-FORM</h4>
        <Form onClick={handleSubmitForm} >
        <Form.Label htmlFor="inputName">First Name</Form.Label>
            <Form.Control
                type="text"
                id="inputFirstname"
                name='firstName'
                onChange={handleUserInput}
                placeholder="Fill your first name"
                aria-describedby="firstname"
            />
            <Form.Label htmlFor="inputLastname">Last Name</Form.Label>
            <Form.Control
                type="text"
                id="inputLastname"
                name='lastName'
                onChange={handleUserInput}
                placeholder='Fill your last name'
                aria-describedby="lastname"
            />
            <Form.Label htmlFor="inputPhone">Phone</Form.Label>
            <Form.Control
                type="text"
                id="inputPhone"
                name='Phone'
                onChange={handleUserInput}
                placeholder="Fill your phone number"
                aria-describedby="phone"
            />
            <Form.Label htmlFor="inputDob">Date Of Birth</Form.Label>
            <Form.Control
                type="date"
                id="inputDob"
                name='dateOfBirth'
                onChange={handleUserInput}
                placeholder='Fill your date of birth'
                aria-describedby="dateOfBirth"
            />
            <Form.Label htmlFor="inputEmail">Email</Form.Label>
            <Form.Control
                type="email"
                id="inputEmail"
                name='Email'
                onChange={handleUserInput}
                placeholder="Email-Id"
                aria-describedby="email"
            />
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
                type="password"
                id="inputPassword5"
                name='Password'
                onChange={handleUserInput}
                placeholder='Password'
                aria-describedby="passwordHelpBlock"
            />
            <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and numbers,
                and must not contain spaces, special characters, or emoji.
            </Form.Text>
    <div className='cityname-div'>
      <Form.Label htmlFor="inputCity">City</Form.Label>      
            <div  className="mb-3">
            {citysList.map((city, index) => (
                
                <Form.Check
                    key={city.cityName}
                    name='City'
                    label={city.cityName}
                    value={city.cityName}
                    checked={cityname.includes(city.cityName)}
                    onChange={handleCheckbox}
                    type="checkbox"
                    id={`${city.cityName} + ${index}`}
                />
                  ))}
            </div>
            <div  className="mb-3">
                <Form.Label htmlFor="inputGender">Gender</Form.Label>
                    {genderList.map((gender, index) => (
                        
                        <Form.Check
                            key={gender.genderType+index }
                            name='Gender'
                            label={gender.genderType}
                            checked={genders == gender.genderType}
                            value={gender.genderType}
                            onChange={handleRadio}
                            type="radio"
                            id={`${gender.id} + ${index}`}
                        />
                        ))}
            </div>
          
            {/* <p>{JSON.stringify(citysList)}</p> */}
      </div>
        <div className='select-div mb-5 mt-4'>
        <Form.Label htmlFor="inputGender">Profession</Form.Label>
                <Form.Select aria-label="select-profession" name='Profession' onChange={handleUserInput}>
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
                <Button type='submit' variant="success" size="lg" className='login-btn'>
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