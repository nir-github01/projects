import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useToasts } from 'react-toast-notifications';

const StopWatchPage = () => {
    const { addToast } = useToasts();
    const [stopwatch, setStopwatch]  = useState(0);
    const [isRunning, setIsRunning]  = useState(false);
    const [isPaused, setIspaused]    = useState(false);
    const [notification, setNotification ] = useState();
    
    useEffect(() => {
        let interval
        if(isRunning){
           interval = setInterval(()=> 
            setStopwatch(stopwatch + 1), 10);
        }

        return () => clearInterval(interval)
    }, [isRunning, stopwatch]);

        
    let startStopWatch =() => {
       setIsRunning(true);
       setIspaused(false);
       setNotification(
           addToast('StopWatch Started', { appearance: 'success' })
       )
    }

    let stopstopwatch =async () => {
        setIsRunning(false)
        setIspaused(true)
        setNotification(
            addToast('StopWatch Stoped', { appearance: 'error' })
           )
    }
    let resetstopwatch =async () => {
        setIsRunning(false)
        setStopwatch(0);
        setNotification(
            addToast('StopWatch Reset', { appearance: 'success' })
           )
    }
    
    const getMilliSeconds = `0${(stopwatch % 60)}`.slice(-2);
    const seconds1  = `${Math.floor(stopwatch / 60)}`
    const getSeconds = `0${seconds1 % 60}`.slice(-2)
    const getMinutes = `0${Math.floor(stopwatch / 3600)}`.slice(-2);

    const getHours = `0${Math.floor(stopwatch / 36000)}`.slice(-2);

    let milliseconds = parseInt(Math.floor(stopwatch % 60));
    let seconds = parseInt(Math.floor(stopwatch % 6000) / 100);
    let minutes = parseInt(Math.floor(stopwatch % 360000)/ 1000);
    let hours = parseInt(Math.floor(stopwatch % 360000) /10000);

    useEffect(() => {
        if(getMinutes == 5){
          setNotification(  addToast("Five Minute Comleted", {appearance:'warning'}) )
        }else if(getMinutes == 10){
            setNotification(  addToast("Ten Minute Comleted", {appearance:'info'}) )
        }
    },[getMinutes])

  return (
    <>

    <div  className='stopwatch-box'>
      <h5>StopWatch</h5>
     
      <p>StopWatch {stopwatch}</p>

      <p> {hours}:{minutes}:{seconds}:{milliseconds}</p>
      <p>h:m:s:mil</p>
       <p>{getHours}:{getMinutes}:{getSeconds}:{getMilliSeconds}</p>
       {/* {(getSeconds == 30 ) ? addToast("Thirty seconds completed", "success") : ""} */}
  
      <Button onClick={startStopWatch} variant={isPaused ? "success" : "primary"}>{isPaused ? 'Resume': 'Start'}</Button>
      <Button onClick={stopstopwatch} variant='danger' className='ms-3 me-3'>{isPaused ? "Paused": "Stop"}</Button>
      <Button variant='warning' onClick={resetstopwatch}>Reset </Button>
      </div>
    </>
  )
}

export default StopWatchPage