import React, { useState } from 'react';
import EscapeDetails from '../EscapeDetails/EscapeDetails';
import FinisTime from '../FinishTIme/FinisTime';

const Profile = ({ totalTime }) => {
    const [pausetime, setPausetime] = useState(0);

    const pauseTimeDuration = (time) => {
        setPausetime(time)
    }

    return (
        <div className='w-full bg-white'>
            <div className='flex justify-start items-center px-4 pt-5'>
                <img className='rounded-md w-12 mr-2' src="https://lh3.googleusercontent.com/ogw/AOh-ky26naS2A1j4FwI1alKKRHJzdNcmqv3tjRFuvlbBdA=s32-c-mo" alt="" />
                <div>
                    <h1 className='text-2xl'>Shubho Ahmed</h1>
                    <p>Belabo, Narsingdi</p>
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