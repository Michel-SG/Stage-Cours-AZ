import React, { Component } from 'react';

export default class Lifecycle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        };

        this.props.addLog('LIFECYCLE - constructor()');
    }

    componentDidMount() {
        this.props.addLog('LIFECYCLE - componentDidMount()');
    }

    componentDidUpdate(prevProps, prevStates) {
        console.log('LIFECYCLE - componentDidUpdate()');
        console.log(prevProps, this.props);
        console.log(prevStates, this.state);
    }

    componentWillUnmount() {
        this.props.addLog('LIFECYCLE - componentWillUnmount()');
    }

    incrementCounter = () => {
        this.props.addLog('LIFECYCLE - incrementCounter()');
        this.setState(state => ({ counter: state.counter + 1 }));
    };

    render() {
        console.log('LIFECYCLE - render()');

        return (
            <div>
                <h1>LIFECYCLE</h1>
                <p>Date : {this.props.date.toLocaleTimeString()}</p>
                <p>Compteur : {this.state.counter}</p>
                <button onClick={this.incrementCounter}>
                    Increment counter
                </button>
            </div>
        );
    }
}
