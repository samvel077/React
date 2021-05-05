import React, { useRef, useEffect, useState } from 'react';

const App = () => {
    // const [renderCount, setRenderCount] = useState(1)
    // useEffect(() => {
    //     setRenderCount(prev => prev + 1)
    // }) //wrong

    const [inputValue, setInputValue] = useState('');
    const renderCount = useRef(1);
    const inputRef = useRef(null);

    useEffect(() => {
        renderCount.current++;
        console.log(inputRef.current)
    })
    const handleFocus = () => inputRef.current.focus();
    return (
        <div>
            <h1>Render Count : {renderCount.current}</h1>

            <input 
                type="text"
                ref={inputRef}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />

            <button 
                onClick={handleFocus}
                className="btn btn-success"
            >
                focus
            </button>
        </div>
    )
};

export default App;