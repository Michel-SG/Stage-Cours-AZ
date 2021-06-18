import React, { Component } from 'react';

import './Apple.css';

export default function Apple(props) {
    const { apple, deleteApple } = props;
    return (
        <div className="apple">
            <img src="./pomme.png" title={`Pomme n°${apple.id}`} onClick={() => deleteApple(apple.id)} />
        </div>
    );
}
