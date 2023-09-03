import React from 'react';
import {Routes, Route } from 'react-router-dom';
import UserForm from '../modules/SignUp';
import SignIn from '../modules/SignIn';
import Dashboard from '../modules/Dashboard';
import Home from '../modules/Home'


function ChatRoutes() {
  let data = localStorage.getItem('userdetail');

  console.log(JSON.stringify(data))
  return (
    <div>

   <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/register' element={<UserForm />} />
      <Route path='/login' element={<SignIn  isLogin={true}/>} />
   </Routes>
    </div>
  )
}

export default ChatRoutes