import React from 'react';
// import SignInPage from './SignIn/SignInPage'
import SignUpPage from './SignUp/SignUpPage';
import NavigationPage from './navigation/NavPage';
import AcutionPage from './auctions/AcutionPage';
import UserListPage from './List/UserListPage';
import SearchListPage from './List/SearchListPage';
// import NewsPage from './auctions/ovNewEventFo/NewsPage';
// import NewsDetails from './auctions/ovNewEventFo/NewsDetails';
// import FormPage from './FormPage';
function HomePage() {
  return (<>
    <span  style={{backgroundImage:'url("")'}}></span>
     <NavigationPage />

     <div className='HomeContainer'>
          <div className='homebox1'>
               <h3>Focus on what matters</h3>
                <p>Discover top stocks & mutual funds with forecast, analyst ratings, scorecard & more </p>
          </div>
          <div className="homebox2">
               <h5>Everything you need to smartly invest</h5>
               <span className='stocks_p'>Stock</span>
               <span className='stocks_p'>News</span>
          </div>
     </div>
    {/* <SignInPage/> */}
    {/* <SignUpPage /> */}
    {/* <FormPage /> */}
    {/* <AcutionPage/> */}
    {/* <NewsPage /> */}
    {/* <NewsDetails /> */}
    <UserListPage />
    <SearchListPage />


    </>
  )
}

export default HomePage