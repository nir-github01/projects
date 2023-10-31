import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from '../modules/Form';
import Home from '../modules/Home';
import { auth } from '../Firebase';

function Routing() {

  const [user, setUser] = useState("");

  useEffect(() => {
     auth.onAuthStateChanged((user) => {
      if(user){
          setUser(user.displayName);
      }
     })
  })
  return (
    <div>

      <Routes>
         <Route path='/' element={<Home userName= {user}/>} />
         <Route path='/signin' element={<Form  signUp={false}/>} />
         <Route path='/signup' element={<Form  signUp={true}/>} />
      </Routes>
    </div>
  )
}

export default Routing