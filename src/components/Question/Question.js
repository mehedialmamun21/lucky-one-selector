import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <h2>How React Works ?</h2>
            <p>A JavaScript library for building user interfaces. <br />
                React.js is one of the most talked about JavaScript web frameworks in years. <br />
                Alongside Angular, and more recently Vue, React is a critical tool that has had a big impact on the way we build web applications. <br />
                But it's hard to find a better description of React.js <br />
                React uses a declarative paradigm that makes it easier to reason about application and aims to be both efficient and flexible. <br />
                It designs simple views for each state in the application, <br />
                and React will efficiently update and render just the right component with associate data changes.</p>
            <hr />
            <h2>How useState works ?</h2>
            <p>
                The useState function is a built in hook that can be imported from the react package. <br />
                It allows us to add state in the functional components. <br />
                By passing the initial state to this function and it returns a variable, <br />
                with the current state value (not necessarily the initial state) and another function to update this value.



            </p>
        </div>
    );
};

export default Question;