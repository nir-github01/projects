import React, { useState } from 'react'
import Input from '../../components/InputPage.js'
import Button from '../../components/Button.js'
import Checkbox from '../../components/Checkbox.js';
import { useNavigate } from "react-router-dom";


const FormPage= ({
  isSignIn=false,
}) => {

  const [form, setForm] = useState('');
  const [tc, setTC] = useState();
  const [mergeform, setMergeForm] = useState({})
  
  //Navigation
const navigate = useNavigate();


  let handleIpt = (event) => {
          setForm({
              ...form,
              [event.target.name]:event.target.value,
          })
  }
  let handleCheckBox = (event) => {

  
    setTC(
     event.target.checked,
    )
  }

  let submitForm =(event) => {
    event.preventDefault();
    setMergeForm({...form, tc})
  }
  return (
    <div>
        <div className='container h-auto bg-white rounded-md shadow-md p-10 m-30' >
        <div className='text-2xl text-blue-700'>Welcome {isSignIn && 'Back'}</div>
         <div className='text-xl text-blue-400 mb-10'>{isSignIn ? 'SignIn now to explore more': 'SignUp now to get started' }</div>
        <form onSubmit={submitForm}>
                { !isSignIn && <Input type='text' name='fullName' placeholder='enter name ' label='Full Name'  onChange={handleIpt}/>}
                { !isSignIn &&<Input type='number' name='phone' placeholder='enter phone ' label='Phone' onChange={handleIpt}/>}
                <Input type='email' name='email' placeholder='enter email '  label='Email' onChange={handleIpt} autoComplete='username' isRequired='required'/>
                <Input type='password' name={isSignIn ?'current-password' :'password'} placeholder='enter password '  label='New-password' onChange={handleIpt} autoComplete={isSignIn? 'current-password' : 'new-password'}/>
                {!isSignIn && <Input type='password' name='password_confirmation' label='Confirm new-password' placeholder='enter confirm password '  onChange={handleIpt}  autoComplete='current-password'/>}
                <Checkbox  name="tc" value={tc} checked={ tc === true} label={isSignIn ? "Remember me " :  'I agree with the '} sublabel={!isSignIn && ' terms and conditions'} onChange={ handleCheckBox}/>
                <Button  type='submit' className='btn btn-blue' label={isSignIn ?"SIGNIN" :'SIGNUP'}/>
        </form>
         <div className='text-black '>{isSignIn ? "User didn't register  " :'Already have an account ?  '} 
         <span className='text-blue-400 underline cursor-pointer' onClick={()=>navigate(`/user/${isSignIn ?"signup" : "login"}`)}>
                           {isSignIn ? 'SignUp':'SignIn'}  
         </span></div>
    </div>
    </div>

  )
}

export default FormPage
