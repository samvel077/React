import React, { useState } from 'react';
import Main from './main';
import Alert from './alert';

export const AlertContext = React.createContext();

const App = () => {
    const [alert, setAlert] = useState(false);

    const toggleAlert = () => {
        setAlert(!alert)
    }
    return (
        <AlertContext.Provider value={alert}>
            <div className="container pt-3">
                <Alert />
                <Main toggle={toggleAlert}/>
            </div>
        </AlertContext.Provider>
    )
};

export default App;