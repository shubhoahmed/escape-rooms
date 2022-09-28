import React, { useState } from 'react';

const SingleEscape = ({ escape, totalTimeHandler }) => {
    const { name, picture, time } = escape;
    return (
        <div className=''>
            <div className=" card w-full h-auto bg-base-100 shadow-xl">
                <figure><img className='w-full  h-60 m-4 rounded-md' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Name: {name}
                    </h2>
                    <p>Duaration : {time} seconds</p>
                    <div >
                        <button onClick={() => {
                            totalTimeHandler(time)
                        }} className="btn btn-primary w-full">Add to list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleEscape;