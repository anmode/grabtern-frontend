import {React,useState,useEffect} from 'react';

const AlertBox = ({ message, redirectTo }) => {
    const[time,setTime]=useState(5);
  
    useEffect(() => {
        const countdown = setInterval(() => {
          setTime((prevTime) => prevTime - 1);
        }, 1000);
    
        return () => clearInterval(countdown);
      }, []);
 
    useEffect(() => {
        if (time === 0) {
          window.location.href = redirectTo;
        }
      }, [time]);
   

  return (
    <div className='tw-flex tw-justify-center tw-items-center'>
    <div className="alert-box tw-flex  tw-border-2 tw-border-[#6E4FA0] tw-mt-32 tw-h-[32vh] tw-w-[350px] tw-rounded-lg tw-bg-[#FFFFFF]">
        <div className="tw-flex tw-flex-col tw-justify-center tw-m-5">
      <div className="alert-content tw-relative tw-top-4 tw-mb-7 tw-flex tw-justify-center tw-font-semibold tw-text-[24px] ">
        <p className="tw-text-[#6E4FA0]">{message}</p>
        </div>
        <p>Redirecting you in {time} seconds</p>
        </div>
      
    </div>
    </div>
  );
};

export default AlertBox;
