import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import SingleEscape from '../SingleEscape/SingleEscape';

const EscapeData = () => {
    const [escapes, setEscapes] = useState([]);
    const [totalTime, setTotalTime] = useState(0);

    const totalTimeHandler = (time) => {
        const newTime = totalTime + time;
        setTotalTime(newTime);
    }

    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setEscapes(data));
    }, []);

    return (
        <div className='container mx-auto lg:flex gap-12'>
            <div className=' mt-16 w-full lg:w-[70%] mx-auto'>
                <div className='flex pl-8 items-center justify-start'>
                    <img className='w-12 h-12 mr-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT393eTqwCDHsniZjWhBIIBbPXEvYjTbzZq7g&usqp=CAU" alt="" />
                    <h1 className='text-4xl font-bold text-blue-500 '> Escape Room</h1>
                </div>
                <h4 className='text-2xl font-semibold mt-2 pl-8'>Select today's escape</h4>
                <div className='grid md:gid-cols-1 lg:grid-cols-3 gap-5'>{
                    escapes.map(escape => (

                        <SingleEscape
                            key={escape.id}
                            escape={escape} totalTimeHandler={totalTimeHandler}></SingleEscape>
                    ))
                }</div>
            </div>

            <div className='w-full mx-auto lg:w-[30%]'>
                <Profile totalTime={totalTime}></Profile>
            </div>

        </div>
    );
};

export default EscapeData;