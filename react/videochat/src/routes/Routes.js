import React from 'react';
import {Routes, Route } from 'react-router-dom';
import UserForm from '../modules/SignUp';
import SignIn from '../modules/SignIn';


function ChatRoutes() {
  let data = localStorage.getItem('userdetail');

  console.log(JSON.stringify(data))
  return (
    <div>

   <Routes>
      <Route path='/register' element={<UserForm />} />
      <Route path='/login' element={<SignIn  isLogin={true}/>} />
   </Routes>
    </div>
  )
}

export default ChatRoutes