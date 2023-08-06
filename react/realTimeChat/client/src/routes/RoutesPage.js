import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Dashboard from '../modules/dashboard/Dashboard';
import FormPage from '../modules/form/FormPage';


const RoutesPage = () => {
  return (
    <div>
          <Routes>
                  <Route  path='/' element={<Dashboard />} />
                  <Route path='/user/login' element={  <FormPage isSignIn={true} /> }/>
                  <Route path='/user/signup' element={  <FormPage isSignIn={false}/> }/>
          </Routes>

    </div>
  )
}

export default RoutesPage