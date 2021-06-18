import './App.css';

import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = { nightMode: false };
    }

    handleNightMode = event => {
        this.setState(state => ({
            nightMode: !state.nightMode,
        }));
    };

    render() {
        const boxProps = {
            className: 'box',
        };

        boxProps.className += this.state.nightMode ? ' nightMode' : ' dayMode';

        return (
            <div>
                <button onClick={this.handleNightMode}>
                    Passer en mode {this.state.nightMode ? 'jour' : 'nuit'}
                </button>
                <div {...boxProps}>
                    <h1>Night mode : {this.state.nightMode ? 'ON' : 'OFF'}</h1>
                </div>
            </div>
        );
    }
}
