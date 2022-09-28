import React, { useState } from 'react';
import EscapeDetails from '../EscapeDetails/EscapeDetails';
import FinisTime from '../FinishTIme/FinisTime';

const Profile = ({ totalTime }) => {
    const [pausetime, setPausetime] = useState(0);

    const pauseTimeDuration = (time) => {
        setPausetime(time)
    }

    return (
        <div className='w-full'>
            <div className='flex justify-center items-center  mt-3'>
                <img className='rounded-md w-12 mr-2' src="https://lh3.googleusercontent.com/ogw/AOh-ky26naS2A1j4FwI1alKKRHJzdNcmqv3tjRFuvlbBdA=s32-c-mo" alt="" />
                <div>
                    <h1 className='text-2xl'>Shubho Ahmed</h1>
                    <p>Belabo, Narsingdi</p>
                </div>
            </div>
            <div className='bg-gray-300 mt-8 flex space-x-5 py-4  rounded-lg items-center justify-center'>
                <div>
                    <h1>68kg</h1>
                    <p>Weight</p>
                </div>
                <div>
                    <h1>170cm</h1>
                    <p>Height</p>
                </div>
                <div>
                    <h1>23years</h1>
                    <p>Age</p>
                </div>
            </div>
            <FinisTime pauseTimeDuration={pauseTimeDuration}></FinisTime>
            <EscapeDetails totalTime={totalTime} pausetime={pausetime} ></EscapeDetails>
        </div>
    );
};

export default Profile;