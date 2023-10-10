import React, { useState, useEffect } from 'react';

const Cursor = () => {
    const [backgroundColor, setBackgroundColor] = useState('white');

    const handleMouseMove = (event) => {
        const x = event.clientX;
        const y = event.clientY;

        const greenShades = ['#00FF00', '#228B22', '#98FB98', '#808000', '#50C878'];

        const index = Math.floor((x + y) / 100) % greenShades.length;

        const newBackgroundColor = greenShades[index];
        setBackgroundColor(newBackgroundColor);

    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            style={{
                height: '100vh',
                backgroundColor,
            }}
        >
            <h1>Move your cursor to change the background color</h1>
        </div>
    );
}

export default Cursor;
