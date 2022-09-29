import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EscapeDetails = ({ totalTime, pausetime }) => {
    const wave = () => toast('Successful 👋')
    return (
        <div className='mt-8'>
            <h1 className='text-2xl font-semibold px-4 mt-8'>Escape Details</h1>
            <div className='mt-4 px-4'>
                <h2 className='my-8 font-semibold'>Total Duration : {totalTime}s</h2>
                <h2 className='my-8 font-semibold'>Pause Time: {pausetime}s</h2>
                <button onClick={() => wave(toast)} className="btn btn-primary w-full mt-8 mb-5">
                    Activity  Complete
                </button>
            </div>

        </div>
    );
};

export default EscapeDetails;