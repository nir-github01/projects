import React from 'react';
import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from './component/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInForm from './component/signin_signup/SignInPage';
import SignUpForm from './component/signin_signup/SignUpPage';
import AdoptionForm from './component/petapplicationform/Adoptpetform';
import GiveAwayform from './component/petapplicationform/GiveAwayPetForm';
import AdoptFormData from './component/petapplicationform/Adopt_classForm';
import AdoptPetList from './component/petapplicationform/AdoptPetList';
import UsersList from './component/signin_signup/UserList';
import UpdateAdoptForm from './component/petapplicationform/UpdateAdoptForm';


function App() {
  return (
    <>
    <div className="App">
          <Routes>
            <Route exact path='/' element={<HomePage />}></Route>
            <Route exact path='/signin' element={<SignInForm />}></Route>
            <Route exact path='/signup' element={<SignUpForm />}></Route>
            <Route exact path='/adopt' element={<AdoptionForm/>}></Route>
            <Route exact path='/giveaway' element={<GiveAwayform/>}></Route>
            <Route exact path='/adoterlist' element={<AdoptPetList />}></Route>
            <Route exact path='/userlist' element={<UsersList />}></Route>
            <Route exact path='/adoptform' element={<AdoptFormData/>}></Route>
            <Route exact path='/adoptpets/update/:id' element={<UpdateAdoptForm/>}></Route>
         
          </Routes>
    </div>
    </>
  );
}

export default App;
