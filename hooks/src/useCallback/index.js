import React, { useCallback, useState } from 'react';
import ListItem from './listItem';

const App = () => {
    const [inputValue, setInputValue] = useState(1);
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(prev => prev + inputValue)
    };

    const decrement = () => {
        setCount(prev => prev - inputValue)
    };

    // const renderListItem = () => {
    //     return new Array(count).fill('').map((item, index) => `Element ${index + 1}`)
    // };// wrong

    const renderListItem = useCallback(() => {
        return new Array(count).fill('').map((item, index) => `Element ${index + 1}`)
    }, [count]);

    
    return (
        <div>
            <h2>Count : {count}</h2>
            <button 
                onClick={decrement}
                className="btn btn-danger"
            >
                decrement
            </button>

             <input 
                type="number"
                value={inputValue}
                onChange={e => setInputValue(+e.target.value)}
             />

            <button
                className="btn btn-success"
                onClick={increment}
            >
                increment
            </button>

            <ListItem 
               getItems={renderListItem}
            />
        </div>
    )
};

export default App;