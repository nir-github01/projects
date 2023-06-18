import React from 'react';
import './App.css';
import HomePage from './component/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInForm from './component/signin_signup/SignInPage';
import SignUpForm from './component/signin_signup/SignUpPage';
import AdoptionForm from './component/petapplicationform/Adoptpetform';
import GiveAwayform from './component/petapplicationform/GiveAwayPetForm';


function App() {
  return (
    <div className="App">
      <h2>Animal Shelter App</h2>
         <Routes>
           <Route exact path='/' element={<HomePage />}></Route>
           <Route exact path='/signin' element={<SignInForm />}></Route>
           <Route exact path='/signup' element={<SignUpForm />}></Route>
           <Route exact path='/adopt' element={<AdoptionForm/>}></Route>
           <Route exact path='/giveaway' element={<GiveAwayform/>}></Route>
         </Routes>
    </div>
  );
}

export default App;
