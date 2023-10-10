import React, { useState, useRef, useEffect } from 'react';
import useOnClickOutside from '../../hooks/outSideClick';
const Counter = () => {

    const [time, setTime] = useState()
    const [timerRunning, setTimerRunning] = useState(false);

    const wrapperRef = useRef(null);


    console.log('Rendring')

    const startTimer = () => {
        if (!timerRunning) {
            setTimerRunning(true);
            setTime(new Date().toLocaleString())

            document.addEventListener('click', () => {
                setTime(new Date().toLocaleString())
            });
        }
    };

    useOnClickOutside(wrapperRef, startTimer);
    
    return (
        <div ref={wrapperRef}>
            {
                timerRunning ?
                    <>
                        <h1>Check console for how many time component re-render</h1>

                        <p> {time}</p>
                    </>
                    : (
                        <h1>Click anywhere</h1>
                    )}

        </div>
    )
}
export default Counter



