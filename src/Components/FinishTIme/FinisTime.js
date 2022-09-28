import React from 'react';

const FinisTime = ({ pauseTimeDuration }) => {
    return (
        <div>
            <h1 className='text-2xl mt-8 font-semibold'>Select finish time</h1>
            <div className='mt-2 space-x-3 w-full gap-12'>
                <button onClick={() => pauseTimeDuration(15)} className="btn w-12 h-8 rounded-full">15s</button>
                <button onClick={() => pauseTimeDuration(25)} className="btn w-12 h-8 rounded-full">25s</button>
                <button onClick={() => pauseTimeDuration(35)} className="btn w-12 h-8 rounded-full">35s</button>
                <button onClick={() => pauseTimeDuration(45)} className="btn w-12 h-8 rounded-full">45s</button>
                <button onClick={() => pauseTimeDuration(55)} className="btn w-12 h-8 rounded-full">55s</button>
                <button onClick={() => pauseTimeDuration(60)} className="btn w-12 h-8 rounded-full">60s</button>
            </div>
        </div>
    );
};

export default FinisTime;