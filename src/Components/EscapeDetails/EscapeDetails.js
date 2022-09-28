import React from 'react';

const EscapeDetails = ({ totalTime, pausetime }) => {
    return (
        <div className='mt-8'>
            <h1 className='text-2xl font-semibold'>Escape Details</h1>
            <div className='mt-4'>
                <h2 className='my-8'>Total Duration : {totalTime}</h2>
                <h2 className='my-8'>Pause Time: {pausetime}s</h2>
                <button className="btn btn-primary w-full mt-8">Activity  Complete</button>
            </div>

        </div>
    );
};

export default EscapeDetails;