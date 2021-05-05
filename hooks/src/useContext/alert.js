import React, { useContext } from 'react';
import { AlertContext } from '../useContext';

const Alert = () => {
    const alert = useContext(AlertContext);

    console.log(alert);
    if(!alert) {
        return null
    }
    return (
        <div className="alert alert-danger">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.quos
        </div>
    )
};

export default Alert;