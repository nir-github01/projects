// import {React, Component } from "react";
// import Form from 'react-bootstrap/Form';
// import "../signin_signup//SignInSignUp.css";
// import Button from 'react-bootstrap/Button';
// import  {useNavigate} from "react-router-dom";

// export default class AdoptFormData extends Component {
//     userData;
//     constructor (props) {
//            super(props);
//            this.onChangeFirstName = this.onChangeFirstName.bind(this);
//            this.onChangeLastName = this.onChangeLastName.bind(this);
//            this.onChangeEmail = this.onChangeEmail.bind(this);
//            this.onChangePhone = this.onChangePhone.bind(this);
//            this.onChangePassword = this.onChangePassword(this);
//            this.onChangePetType = this.onChangePetType(this);
//            this.onChangeBreedType = this.onChangeBreedType(this);
           

//            this.onSubmit = this.onSubmit.bind(this);
//            this.state = {
//             firstname: '',
//             lastname:'',
//             password:'',
//             pettype:'',
//             breedtype:'',
//             email: '',
//             phone: ''
//            }
           
           
//     }
//         //Redirecting page on button click

//     //form Events

//     onChangeFirstName(e) {
//         this.setState({firstname:e.target.value})
//     }
//     onChangeLastName(e){
//         this.setState({lastname:e.target.value});
//     }
//     onChangePassword(e) {
//         this.setState({password:e.target.value})
//     }
//     onChangePetType(e){
//         this.setState({pettype:e.target.value})
//     }
//     onChangeBreedType(e){
//         this.setState({breedtype:e.target.value})
//     }
//     onChangeEmail(e){
//         this.setState({email:e.target.value})
//     }
//     onChangePhone(e){
//         this.setState({phone:e.target.value});
//     }

//     onSubmit(e){
//         e.preventDefault()
//         this.setState({

//             firstname: '',
//             lastname:'',
//             password:'',
//             pettype:'',
//             breedtype:'',
//             email: '',
//             phone: ''
//         })
//     }

//     //React Life Cycle

//     componentDidMount() {
//         this.userData = JSON.parse(localStorage.getItem('user'));
//         if(localStorage.getItem('user')){
//             this.setState({
//                 firstname:this.userData.firstname,
//                 lastname:this.userData.lastname,
//                 password:this.userData.password,
//                 pettype:this.userData.pettype,
//                 breedtype:this.userData.breedtype,
//                 email: this.userData.email,
//                 phone: this.userData.phone
//             })
//         }else{
//             this.setState({
//                 firstname: '',
//                 lastname:'',
//                 password:'',
//                 pettype:'',
//                 breedtype:'',
//                 email: '',
//                 phone: ''
//             })
//         }
//     }

//     componentDidUpdate(nextProps, nextState){
//         localStorage.setItem('user', JSON.stringify(nextState));
//     }
//         //Redirecting page on button click

//     render() {
//         return (
//             <>
//             <div className='signinForm-div'>
//             <h4 className='loginTitle'>ADOPT A PET</h4>
//                 <Form onSubmit ={this.onSubmit}>
        
//                 <div className='select-div mb-5 mt-4'>
//                 <div>
//                     <h5>What a pet do you want to adopt ?</h5>
//                 </div>
//                 <Form.Label htmlFor="inputGender">Pet type</Form.Label>
//                         <Form.Select aria-label="select-profession" value="this.state.pettype" onChange={this.onChangePetType}>
//                         <option>Choose pet</option>
//                         <option value="dog">Dog</option>
//                         <option value="cat">Cat</option>
//                         <option value="1">1</option>
//                         <option value="2">2</option>
//                         <option value="3">3</option>
//                         <option value="4">4</option>
//                         </Form.Select>
//                 </div>
//                 <div className='select-div mb-5 mt-4'>
//                 <Form.Label htmlFor="inputGender">Breed</Form.Label>
//                         <Form.Select aria-label="select-profession" value={this.state.breedtype} onChange={this.onChangeBreedType} >
//                         <option>Choose breed</option>
//                         <option value="lab">Lab</option>
//                         <option value="1">1</option>
//                         <option value="2">2</option>
//                         <option value="3">3</option>
//                         <option value="4">4</option>
//                         <option value="5">5</option>
//                         </Form.Select>
//                 </div>
//                 <div>
//                     <h5>Please fill your details</h5>
//                 </div>
//                 <Form.Label htmlFor="inputName">First Name</Form.Label>
//                     <Form.Control
//                         type="text"
//                         id="inputFirstname"
//                         value={this.state.firstname}
//                         onChange={this.onChangeFirstName}
//                         placeholder="Fill your first name"
//                         aria-describedby="firstname"
//                     />
//                     <Form.Label htmlFor="inputLastname">Last Name</Form.Label>
//                     <Form.Control
//                         type="text"
//                         id="inputLastname"
//                         value={this.state.lastname}
//                         onChange={this.onChangeLastName}
//                         placeholder='Fill your last name'
//                         aria-describedby="lastname"
//                     />
//                     <Form.Label htmlFor="inputEmail">Phone</Form.Label>
//                     <Form.Control
//                         type="text"
//                         id="inputPhone"
//                         value={this.state.phone}
//                         onChange={this.onChangePhone}
//                         placeholder="Fill your phone number"
//                         aria-describedby="phone"
//                     />
//                     <Form.Label htmlFor="inputEmail">Email</Form.Label>
//                     <Form.Control
//                         type="email"
//                         id="inputEmail"
//                         value={this.state.email}
//                         onChange={this.onChangeEmail}
//                         placeholder="Email-Id"
//                         aria-describedby="email"
//                     />
//                     <Form.Label htmlFor="inputPassword5">Password</Form.Label>
//                     <Form.Control
//                         type="password"
//                         id="inputPassword5"
//                         value={this.state.password}
//                         onChange={this.onChangePassword}
//                         placeholder='Password'
//                         aria-describedby="passwordHelpBlock"
//                     />
//                     <Form.Text id="passwordHelpBlock" muted>
//                         Your password must be 8-20 characters long, contain letters and numbers,
//                         and must not contain spaces, special characters, or emoji.
//                     </Form.Text>
//                     <div className="d-grid gap-2 mt-4">
//                         <Button type="submit" variant="success" size="lg" className='login-btn'>
//                             REQUEST FOR GIVE AWAY
//                         </Button>
//                         {/* <Button variant='danger' size='lg' className='btn cancel-btn' onClick={homePage}>Cancel</Button> */}
//                     </div>
//                 </Form>
//               </div>
//             </>
//           );
//     }
// }


import React, { Component } from 'react';
export default class AdoptFormData extends Component {
    userData;
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            email: '',
            phone: ''
        }
    }
    // Form Events
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangePhone(e) {
        this.setState({ phone: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        this.setState({
            name: '',
            email: '',
            phone: ''
        })
    }
    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));
        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
                phone: this.userData.phone
            })
        } else {
            this.setState({
                name: '',
                email: '',
                phone: ''
            })
        }
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" value={this.state.firstname} onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" value={this.state.lastname} onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="tel" className="form-control" value={this.state.phone} onChange={this.onChangePhone} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }
}