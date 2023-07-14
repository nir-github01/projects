import React from 'react';
// import SignInPage from './SignIn/SignInPage'
// import SignUpPage from './SignUp/SignUpPage';
import NavigationPage from './navigation/NavPage';
import AcutionPage from './auctions/AcutionPage';
// import NewsPage from './auctions/ovNewEventFo/NewsPage';
// import NewsDetails from './auctions/ovNewEventFo/NewsDetails';
// import FormPage from './FormPage';
function HomePage() {
  return (<>
    <div>HomePage</div>
    <span  style={{backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SfNVulavWHxsBLgsREuUPNrd0cgxrlPnhV3QJw6jcMw3IjfJ&s")'}}></span>
     <NavigationPage />
    {/* <SignInPage/> */}
    {/* <SignUpPage /> */}
    {/* <FormPage /> */}
    <AcutionPage/>
    {/* <NewsPage /> */}
    {/* <NewsDetails /> */}
    </>
  )
}

export default HomePage