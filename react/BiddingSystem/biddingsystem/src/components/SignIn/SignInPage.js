import React, { useState } from 'react';
import  {Form, Button } from "react-bootstrap";
import "./SignInPageStyle.css";


function SignInPage() {

    const [resetform, setResetForm] = useState();
    const [form, setForm] = useState([])


    const handleFormIpt =(event) => {
        setForm({
            ...form,
            [event.target.name]:event.target.value
        });
    }
    const handleLogin =(event) => {
             event.preventDefault();
        console.log(form);
       event.target.reset();
    }  

  return (
    <>
        <div className='login-container'>
            <Form  onSubmit={handleLogin}>  
                    <div>
                      <label>Email :
                      <input type='email' className='form-control' name='email' onChange={handleFormIpt} />
                      </label> 
                    </div>
                    <div> 
                    <label>Password : 
                     <input type='password' className='form-control' name='password' onChange={handleFormIpt}/>
                     </label>
                    </div> 
                    <div>
                        <span><input  type='checkbox' name='loginchecbox' onChange={handleFormIpt}/> Remember me  </span>
                    </div>
                     <div className='btn'>
                     <Button type='submit' variant='success' className='btn' size='lg'>SignIn</Button>
                    </div>
              
            </Form>
        </div> 
    </>
  )
}

export default SignInPage;
