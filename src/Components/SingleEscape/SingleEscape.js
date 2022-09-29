
const SingleEscape = ({ escape, totalTimeHandler }) => {
    const { name, picture, time, title } = escape;
    return (
        <div className=''>
            <div className=" card w-full h-auto bg-base-100 shadow-xl mb-4">
                <figure><img className='w-full  h-60 m-4 rounded-md' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Name: {name}
                    </h2>
                    <p> {title}</p>
                    <p className='font-semibold'>Duaration : {time} seconds</p>
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