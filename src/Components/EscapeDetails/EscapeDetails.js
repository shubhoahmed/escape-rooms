import React from 'react';
import { ToastContainer, toast } from 'react-toast'

const EscapeDetails = ({ totalTime, pausetime }) => {
    const wave = () => toast('Successful 👋')
    return (
        <div className='mt-8'>
            <h1 className='text-2xl font-semibold px-3'>Escape Details</h1>
            <div className='mt-4 px-3'>
                <h2 className='my-8'>Total Duration : {totalTime}s</h2>
                <h2 className='my-8'>Pause Time: {pausetime}s</h2>
                <button onClick={() => wave(toast)} className="btn btn-primary w-full mt-8 mb-3">
                    <ToastContainer />
                    Activity  Complete
                </button>
            </div>

        </div>
    );
};

export default EscapeDetails;