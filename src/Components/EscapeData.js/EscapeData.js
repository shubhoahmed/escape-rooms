import React, { useEffect, useState } from 'react';
import SingleEscape from '../SingleEscape/SingleEscape';

const EscapeData = () => {
    const [escapes, setEscapes] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setEscapes(data));
    }, [])
    return (
        <div>
            <div>
                <h1 className='text-4xl font-bold text-blue-500'> Escape Room</h1>
                <h4 className='text-2xl font-semibold mt-2'>Select today's escape</h4>
                <div className='grid md:gid-cols-1 lg:grid-cols-3 gap-5'>{
                    escapes.map(escape => (

                        <SingleEscape escape={escape}></SingleEscape>
                    ))
                }</div>
            </div>
            <div>
                <h2>Cart</h2>
            </div>
        </div>
    );
};

export default EscapeData;