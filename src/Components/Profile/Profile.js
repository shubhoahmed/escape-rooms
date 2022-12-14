import React, { useState } from 'react';
import EscapeDetails from '../EscapeDetails/EscapeDetails';
import FinisTime from '../FinishTIme/FinisTime';

const Profile = ({ totalTime }) => {
    const pauseTimeDB = localStorage.getItem('pause-time')
    const [pausetime, setPausetime] = useState(pauseTimeDB || 0);


    const pauseTimeDuration = (time) => {
        setPausetime(time);
        localStorage.setItem('pause-time', time);
    }

    return (
        <div className='w-full bg-white'>
            <div className='flex justify-start items-center px-4 pt-5'>
                <img className='rounded-md w-12 mr-2' src="https://lh3.googleusercontent.com/ogw/AOh-ky26naS2A1j4FwI1alKKRHJzdNcmqv3tjRFuvlbBdA=s32-c-mo" alt="" />
                <div>
                    <h1 className='text-2xl'>Shubho Ahmed</h1>
                    <p className='flex'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                        Belabo, Narsingdi, Dhaka</p>
                </div>
            </div>
            <div className='bg-gray-300 mt-8 flex space-x-8 py-4 mx-4 rounded-lg items-center justify-center'>
                <div>
                    <h1>68 kg</h1>
                    <p className='font-bold'>Weight</p>
                </div>
                <div>
                    <h1>170 cm</h1>
                    <p className='font-bold'>Height</p>
                </div>
                <div>
                    <h1>23 years</h1>
                    <p className='font-bold'>Age</p>
                </div>
            </div>
            <FinisTime pauseTimeDuration={pauseTimeDuration}></FinisTime>
            <EscapeDetails totalTime={totalTime} pausetime={pausetime} ></EscapeDetails>
        </div>
    );
};

export default Profile;