import React from 'react';

const Main = ({toggle}) => {
    return (
        <>
            <h2>Use Context</h2>
            <button
                onClick={toggle}
                className="btn btn-success"
               
            >
                Alert success
            </button>
        </>
    )
};

export default Main;