import React, { useState, useMemo } from 'react';

const heavyAction = nmb => {
    for(let i = 0; i < 1000000000; i++) {

    }
    return nmb;
};


const App = () => {
    const [number, setNumber] = useState(1);
    const [isOpenAvatar, setIsOpenAvatar] = useState(false);
    // const result = heavyAction(number); no optimal wrong

    const result = useMemo(() => {
        return heavyAction(number);
    }, [number]);

    // const result = heavyAction(number);
    return(
        <div>
            <h2>Counter: {result}</h2>

            <button 
                className="btn btn-danger"
                onClick={() => setNumber(prev => prev - 1)}
            >
                decrement
            </button>

            <button
                className="btn btn-success"
                onClick={() => setNumber(prev => prev + 1)}
            >
                Change User Name
            </button>

            <hr />
            
            <button
                className="btn btn-success"
                onClick={() => setIsOpenAvatar(prev => !prev)}
            >
                { isOpenAvatar ? 'close' : 'open' }
            </button>

            {
                isOpenAvatar && (
                <div class="card" style={{width: '300px'}}>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
                )
            }

        </div>
    )
};

export default App;