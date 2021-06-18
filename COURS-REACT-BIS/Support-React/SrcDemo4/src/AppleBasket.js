import React, { Component } from 'react';
import Apple from './Apple';

import './AppleBasket.css';

export default class AppleBasket extends Component {
    constructor(props) {
        super(props);

        this.state = {
            apples: [],
        };
    }

    handleAddApple = () => {
        let lastAppleId = 0;
        if (this.state.apples.length > 0) {
            lastAppleId = this.state.apples[this.state.apples.length - 1].id;
        }

        const newApple = {
            id: lastAppleId + 1,
        };

        this.setState((state) => ({
            apples: [...state.apples, newApple],
        }));
    };

    handleDeleteApple = (id) => {
        this.setState((state) => ({
            apples: state.apples.filter((apple) => apple.id != id),
        }));
    };

    render() {
        const { apples } = this.state;

        return (
            <div>
                <div className="appleBasket-commands">
                    <button onClick={this.handleAddApple}>Ajouter une pomme</button>
                    <p>Pour supprimer une pomme, veuillez cliquer dessus</p>
                </div>
                <hr />
                <div className="appleBasket-list">
                    {apples.map((apple) => (
                        <Apple key={apple.id} apple={apple} deleteApple={this.handleDeleteApple} />
                    ))}
                </div>
            </div>
        );
    }
}
