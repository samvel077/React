import React, { useState, useEffect } from 'react';

const ListItem = ({ getItems }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const newItems = getItems();
        setItems(newItems);
        console.log('render')
    }, [getItems]);
    
    return (
        <ul>
           { items.map(i => <li key={i}>${i}</li>) }
        </ul>
    )
};

export default ListItem;