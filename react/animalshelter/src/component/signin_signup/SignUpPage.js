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
    const userListPage = () => {
        navigate("/userlist");
    }

    const [userform, setUserForm] = useState();
    const [cityname, setCityName] = useState([]);
    const [genders, setGender] = useState();
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

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
        // console.log({[e.target.name]: [...cityname, checkedValue]})
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
        setGender({
            genders:e.target.value
        });
    }

	const changeHandler = (event) => {
        
        console.log("Selected File");
        console.log("Selected File"+" " +selectedFile)
        console.log("Selected File"+" " + isFilePicked)
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

    let handleSubmitForm = async(e)=>{
        e.preventDefault();
        // if(mergeform != undefined  && Object.keys(mergeform).length > 1 && Object.values(mergeform).length > 1){
            setMergeForm((prevData) => {
                return {...userform, ...genders, cities: [...cityname]}
            })

            const responsedata =await fetch("http://localhost:8000/user", {
                method:"POST",
                body:JSON.stringify(mergeform),
                headers:{
                "Content-Type":"application/json"
                },
            });

            const userdata = await responsedata.json();
        
        // if(userform !=undefined ||  userform != null && cityname !=undefined || cityname !=null && genders != undefined || genders != null){
        //    navigate("/");
        // }
    //    } 
    }
  return (
    <>
    <div className='signinForm-div'>
    <h4 className='loginTitle'>SIGNUP-FORM</h4>
    <Button variant='success' onClick={userListPage}>User List</Button>
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
            {citysList.map((city, index) => (
                
                <Form.Check
                    key={city.id +index}
                    name='City'
                    label={city.cityName}
                    value={city.cityName}
                    checked={cityname.includes(city.cityName)}
                    onChange={handleCheckbox}
                    type="checkbox"
                    id={`${city.cityName} + ${index}`}
                />
                  ))}
            <div  className="mb-3">
                <Form.Label htmlFor="inputGender">Gender</Form.Label>
                    {genderList.map((gender, index) => (
                            <div>
                            {/* <p>Genders {JSON.stringify(genders).includes(gender.genderType)}{gender.genderType}</p> */}
                                <Form.Check
                                    key={gender.id+index }
                                    name='genders'
                                    label={gender.genderType}
                                    checked={genders ?  JSON.stringify(genders).includes(gender.genderType): ""}
                                    value={gender.genderType}
                                    onChange={handleRadio}
                                    type="radio"
                                    id={`${gender.id} + ${index}`}
                                />
                            </div>
                        ))}

              </div>
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
        <div className='select-div mb-5 mt-4'>
            <Form.Label >Upload File</Form.Label>
            <Form.Control type="file"  name="file" onChange={changeHandler}/>
			{isFilePicked ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
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