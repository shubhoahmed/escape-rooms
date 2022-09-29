import React from 'react';

const Questions = () => {
    return (
        <div className='mt-8 px-2'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does react work?
                </div>
                <div className="collapse-content">
                    <p>React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process.React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in our application, and React will efficiently update and render just the right component when our data changes.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Difference between props and state.
                </div>
                <div className="collapse-content">
                    <p>1. In props the Data is passed from one component to another. In state data is passed within the component only. <br />
                        2. Props is immutable (cannot be modified) but state mutable ( can be modified). <br />
                        3. Props can be used with state and functional components, State can be used only with the state components/class component (Before 16.0). <br />
                        4. Props are read-only but state is both read and write.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How we can you use useEffect?
                </div>
                <div className="collapse-content">
                    <p>The useEffect Hook allows us to perform side effects in our components.Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional useEffect function, dependency. useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.

                        This is not what we want. There are several ways to control when side effects run.

                        We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.</p>


                </div>
            </div>
        </div>
    );
};

export default Questions;