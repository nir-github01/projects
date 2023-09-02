import * as React from 'react';
import { Component } from 'react';
import TextField from '@mui/material/TextField';
import { Stack, Button, Link } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default class UserForm extends Component {
  constructor() {
    super()
    // console.log(this.props.isLogin)
    //  this.props = props;
     this.state = {
          firstName:'',
          lastName:'',
          email:'',
          phone:'',
          dateOfBirth:'',
          newPassword:'',
          confirmPassword:'',
          checkbox:false,
     }
     this.onChangeValues = this.onChangeValues.bind(this);
     this.formSubmitted = this.formSubmitted.bind(this)
      
  }
   onChangeValues=(event)=> {
    const {name, value, checked} = event.target;
    const isCheckbox = event.target.type === "checkbox";
    if(isCheckbox){
        this.state.checkbox=checked
        this.setState({[name]:checked})
    }else{
     this.setState({[name]:value})
    }
 
   }
   formSubmitted=(event)=> {
    event.preventDefault();
    let newState = {
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      email:this.state.email,
      phone:this.state.phone,
      newPassword:this.state.newPassword,
      confirmPassword:this.state.confirmPassword,
      tc:this.state.checkbox
    }
    let datas = localStorage.setItem('userdetail', newState)
        console.log(datas)
        let data = localStorage.getItem('userdetail');
          console.log(data)
        console.log(JSON.stringify(newState))
   }
  render(){
      return (
          <React.Fragment>
          <div>
           <h4>SignUp for more explore</h4>
         

          </div>
          <div className='container'>
          <form  onSubmit={this.formSubmitted} action={<Link to="/login" />}>
        
              <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                  <TextField
                      type="text"
                      name='firstName'
                      variant='outlined'
                      color='secondary'
                      label="First Name"
                      value={this.state.firstName}
                      onChange={this.onChangeValues}
                      required
                  />
                  <TextField
                      type="text"
                      name='lastName'
                      variant='outlined'
                      color='secondary'
                      label="Last Name"
                      value={this.state.lastName}
                      onChange={this.onChangeValues}
                      required
                  />
              </Stack>
              <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                <TextField
                    type="email"
                    name='email'
                    variant='outlined'
                    color='secondary'
                    label="Email"
                    autoComplete='userName'
                    value={this.state.email}
                    onChange={this.onChangeValues}
                    required
                    sx={{mb: 4}}
                />

                <TextField
                    type="text"
                    name='phone'
                    variant='outlined'
                    color='secondary'
                    label="Phone"
                    value={this.state.phone}
                    onChange={this.onChangeValues}
                    required
                    sx={{mb: 4}}
                />

              </Stack>
              <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                <TextField
                    type="password"
                    name='newPassword'
                    variant='outlined'
                    color='secondary'
                    label="Password"
                    value={this.state.newPassword}
                    onChange={this.onChangeValues}
                    autoComplete='new-password'
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="password"
                    name='confirmPassword'
                    variant='outlined'
                    color='secondary'
                    label="Confirm-Password"
                    autoComplete='new-password'
                    value={this.state.confirmPassword}
                    onChange={this.onChangeValues}
                    required
                    sx={{mb: 4}}
                />
              </Stack> 
              <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                   
              <TextField
                  type="date"
                  name='dateOfBirth'
                  variant='outlined'
                  color='secondary'
                  label="Date of Birth"
                  value={this.state.dateOfBirth}
                  onChange={this.onChangeValues}
                  fullWidth
                  required
                  sx={{mb: 4}}
              />
              </Stack>
              {/* <Stack>
                <TextField
                    type="file"
                    variant='outlined'
                    color='secondary'
                    label=""
                    value=''
                    sx={{mb: 4}}
                />
              </Stack> */}
              <FormControlLabel
                control={
                  <Checkbox 
                    type='checkbox'
                    value={this.state.checkbox} 
                    onChange={this.onChangeValues} 
                    required
                    name="tc"     
                    />
                }
                label="I agree with terms & conditions"
          />      

              <Stack>
              <Button variant="outlined" color="secondary" type="submit">Register</Button>
              </Stack> 
          </form>
          <small>Already have an account?<Link to="/login">Login Here</Link> </small>
          </div>   
        </React.Fragment>
    );
  }
  
}