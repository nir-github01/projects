import React from 'react'
import SignInPage from './SignIn/SignInPage'
import SignUpPage from './SignUp/SignUpPage'
// import FormPage from './FormPage'

function HomePage() {
  return (<>
    <div>HomePage</div>
    <SignInPage/>
    <SignUpPage />
    {/* <FormPage /> */}
    </>
  )
}

export default HomePage