import React, { useState, useEffect } from 'react';
// https://jsonplaceholder.typicode.com/
const types = {
    users: 'users',
    todos: 'todos',
    posts: 'posts'
}
const App = () => {
    const [ type, setType ] = useState('users');
    const [ data, setData ] = useState([]);
    const [ pos, setPos ] = useState({
        x: 0,
        y: 0
    })
    // console.log('Component render')
    // useEffect(() => {
    //     console.log('render')//mounting render and change state
    // });

    // useEffect(() => {
    //     console.log('render') //mounting render 1
    // }, [])

    const mouseMoveHandle = event => {
        setPos({
            x: event.clientX,
            y: event.clientY
        })
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`) // /:{}
        .then(response => response.json())
        .then(data => setData(data));

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandle)
        }
    }, [type]);


    useEffect(() => {
        console.log('ComponentDidMont');
       window.addEventListener('mousemove', mouseMoveHandle)
    }, []);
        

    return (
        <div>
            <h2> Result: {type} </h2>

            <button
                className="btn btn-default"
                onClick={() => setType(types.users)}
            >
                User
            </button>

            <button
                className="btn btn-default"
                onClick={() => setType(types.todos)}
            >
                Todo
            </button>

            <button
                className="btn btn-default"
                onClick={() => setType(types.posts)}
            >
                Posts
            </button>

            <pre>
                {JSON.stringify(pos, null, 2)}
            </pre>

            <hr /> 

            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>

        </div>
    )
};

export default App;