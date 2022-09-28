import React from 'react';

const SingleEscape = ({ escape }) => {
    const { id, name, picture, time } = escape;
    return (
        <div>
            <div className="card w-full h-auto bg-base-100 shadow-xl">
                <figure><img className='w-full  h-60 m-4 rounded-md' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Name: {name}
                    </h2>
                    <p>Duaration : {time} seconds</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary w-full">Add to list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleEscape;