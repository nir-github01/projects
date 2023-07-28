import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage  from  "../components/HomePage"
import UserListPage from '../components/List/UserListPage';
import SearchListPage from '../components/List/SearchListPage';
import SignUpPage from '../components/SignUp/SignUpPage';
import SignInPage from '../components/SignIn/SignInPage';
import NavigationPage from '../components/navigation/NavPage';
import AcutionPage from '../components/auctions/AcutionPage';
import CountDownTimer from '../components/auctions/CountDownTimer';
import StockMarket from '../components/auctions/ovNewEventFo/StockMarket';
import StockDetailPage from '../components/auctions/StockDetailPage';
import Timepage from '../components/auctions/Timepage';
import StockListPage from '../components/auctions/StockListPage';
import EventsPage from '../components/auctions/ovNewEventFo/EventsPage';
import FAndOPage from '../components/auctions/ovNewEventFo/FAndOPage';
import NewsPage from '../components/auctions/ovNewEventFo/NewsPage';

const RoutePage = () => {
  return (
    <>
            <div className='routerContainer'>
                  <Routes>
                            <Route exact path='/' element={<NavigationPage />}/>
                            <Route exact path='/home' element={<HomePage />}/>
                            <Route exact path='/userlist' element={<UserListPage />}/>
                            <Route exact path='/searchlist' element={<SearchListPage />}/>
                            <Route exact path='/signup' element={<SignUpPage />}/>
                            <Route exact path='/login' element={<SignInPage />}/>
                            <Route exact path='/acution' element={<AcutionPage />}/>
                            <Route exact path='/countdowntimer' element={ <CountDownTimer /> }/>
                            <Route exact path='/stockmkt' element={<StockMarket />}/>
                            <Route exact path='/stkdetail' element={ <StockDetailPage /> }/>
                            <Route exact path='/stkList' element={<StockListPage />}/>
                            <Route exact path='/timepge' element={ <Timepage />}/>
                            <Route exact path='/eventspg' element={<EventsPage />}/>
                            <Route exact path='/fnopg' element={ <FAndOPage />}/>
                            <Route exact path='/news' element={<NewsPage />}/>
                  
                  </Routes>

            </div>
        
    </>
  )
}

export default RoutePage