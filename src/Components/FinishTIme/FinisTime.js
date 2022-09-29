import React from 'react';

const FinisTime = ({ pauseTimeDuration }) => {
    return (
        <div>
            <h1 className='  text-2xl my-8 font-semibold px-4'>Select a finish time.</h1>
            <div className=' bg-gray-300 py-4 px-3 space-x-2 mx-4 rounded-md mt-2  w-[92%] gap-12  mb-5'>
                <button onClick={() => pauseTimeDuration(15)} className="btn w-12 h-8 rounded-full ">15s</button>
                <button onClick={() => pauseTimeDuration(25)} className="btn w-12 h-8 rounded-full ">25s</button>
                <button onClick={() => pauseTimeDuration(35)} className="btn w-12 h-8 rounded-full ">35s</button>
                <button onClick={() => pauseTimeDuration(45)} className="btn w-12 h-8 rounded-full">45s</button>
                <button onClick={() => pauseTimeDuration(55)} className="btn w-12 h-8 rounded-full">55s</button>
                <button onClick={() => pauseTimeDuration(60)} className="btn w-12 h-8 rounded-full">60s</button>
            </div>
        </div>
    );
};

export default FinisTime;