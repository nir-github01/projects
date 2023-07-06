import React, { useEffect, useState, useRef } from 'react';
import Button from 'react-bootstrap/esm/Button';
import CountDownTimer from './CountDownTimer';
const Timepage = () => {
    let getTime = new Date(); 


    const [counter, setCounter] = useState(0);
    const [timer, updateTimer]   = useState(new Date());
    const [notification, setNotification] = useState();
     
    let miliseconds, seconds, minutes, hours;
    miliseconds=getTime.getMilliseconds();

    
    useEffect(() =>{
    setInterval(() => {
      
    }, 1000)
  });

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
 
   const hoursMinSecs = {hours:1, minutes:20, seconds:30};


  return (
    <div>

         <p>Date - {timer.toLocaleDateString()}</p>
         <p>Time clocking :- {timer.toLocaleTimeString()}</p>
         <p>Counter  {counter}</p>
         <p>{notification}</p>
         <p>Miliseconds {miliseconds}</p>
         <Button onClick={startTime} variant='success' className='me-3 ms-3'>Start</Button>
         <Button onClick={resetTime} variant='warning' className='me-3 ms-3'>Reset</Button>
         <Button onClick={endTime} variant='danger' className='me-3 ms-3'>End</Button>

         <CountDownTimer hoursMinSecs={hoursMinSecs} />
    </div>
  )
}

export default Timepage