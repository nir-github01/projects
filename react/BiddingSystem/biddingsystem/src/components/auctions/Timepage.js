import React, { useEffect, useState, useRef } from 'react';
import Button from 'react-bootstrap/esm/Button';
// import CountDownTimer from './CountDownTimer';
import StopWatchPage from '../stopwatch/StopWatchPage';
import { ToastProvider} from 'react-toast-notifications';
import { BsArrowRepeat } from "react-icons/bs";
import {BsDashCircle} from "react-icons/bs";
import {BsPlusSquare}  from "react-icons/bs"


const Timepage = () => {
    let getTime = new Date(); 


    const [counter, setCounter] = useState(0);
    const [timer, updateTimer]   = useState(new Date());
    const [notification, setNotification] = useState();

    useEffect(()=> {
        setInterval(() => {
                updateTimer(new Date()); 
                    }, 1000);
        }, []); 

   let startTime =()=> {
    let count = counter + 1
      setCounter(count)
   }

   let resetTime =() => {
     setCounter(0)
   }

   let endTime =() => {
    let count =counter - 1
    if(counter > 0)
     setCounter(count);
   }
   
  return (
    <div>
         
          <div className='timing_container'>
            <div className="timecounter-box">
            <div className="time-box">
              <h5>Date And Time</h5>
              <p>Date - {timer.toLocaleDateString()}</p>
              <p>Time clocking :- {timer.toLocaleTimeString()}</p>
              </div>
              <div className="counter-box">
              <h5>Counter</h5>
              <p>Counter  {counter}</p>
              <p>{notification}</p>
              <Button onClick={startTime} variant='success' className='me-2 ms-2' size='lg'><BsPlusSquare/></Button>
              <Button onClick={resetTime} variant='warning' className='me-2 ms-2' size='lg'><BsArrowRepeat/></Button>
              <Button onClick={endTime} variant='danger' className='me-2 ms-2' size='lg'><BsDashCircle/></Button>
              </div>
            </div>
            <div>
            <ToastProvider>
                 <StopWatchPage />
            </ToastProvider>
              
            </div>  
          </div>
         {/* <CountDownTimer hoursMinSecs={hoursMinSecs} /> */}
    </div>
  )
}

export default Timepage