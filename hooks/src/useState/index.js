import React, { useState } from 'react';

function computeInitialCounter() {
    console.log('Compute Initial Counter');
    return Math.trunc(Math.random() * 20);
};

const App = () => {
    // const [ count, setCount ] = useState(0);
    // const [ count, setCount ] = useState(computeInitialCounter());
    const [ counter, setCounter ] = useState(() => {
        return computeInitialCounter()
    });

    const [state, setState] = useState({
        name: 'User Name',
        lastName: 'Sargsyan',
        age: 21,
        date: new Date()
    })

    const increment = () => {
        setCounter(prevState => prevState + 1);
        setCounter(prevState => prevState + 1)

        // setCount(count + 1); wrang result
        // setCount(count + 1); wrang result
    };

    const decrement = () => {
        setCounter(counter - 1)
    };

    const changeUserName = () => {
        // setState({
        //     name: 'Davit'
        // }) //wrang;

        setState(prevState => {
            return {
                ...prevState,
                name: 'Davit'
            }
        })
    }
    console.log('render component')
    return (
        <div>
            <h2>Counter: ${counter}</h2>
            <button 
                onClick={increment}
                className="btn btn-success"
            >
                increment
            </button>

            <button 
                onClick={decrement}
                className="btn btn-danger"
            >
                decrement
            </button>

            <button
                className="btn btn-default"
                onClick={changeUserName}
            >
                Change User Name
            </button>

            <pre>
               {JSON.stringify(state, null, 2)}
            </pre>
        </div>
    )
};

export default App;