import React, { useState, useEffect } from "react"
import '../css/header.css'

export default function CountdownTimer() {
    // Set the target date and time
    const targetDate = new Date("Apr 14, 2023 09:00:00");
    
    // State variables to store the remaining time
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            // Get the current date and time
            const currentDate = new Date();
            
            // Calculate the difference in milliseconds
            const diff = targetDate - currentDate;
            
            // Calculate the number of days, hours, minutes, and seconds remaining
            setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((diff % (1000 * 60)) / 1000));
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='CountdownTimer'>
            <span style={{ color: 'red' }}>{days} DAYS</span>
            <span style={{ color: 'purple' }}>{hours} HOURS</span> 
            <span style={{ color: 'blue' }}>{minutes} MIN</span>
            <span style={{ color: 'orange' }}>{seconds} SEC</span>
        </div>
    );
}