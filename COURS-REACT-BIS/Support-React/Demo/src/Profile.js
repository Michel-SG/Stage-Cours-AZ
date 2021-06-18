import React, { Component } from 'react';

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            client: [],
        };
    }

    componentDidMount() {
        this.id = setInterval(() => console.log(new Date()), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.id);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.counter > this.state.counter) {
            console.log('Le compteur a été décrémenté');
        } else if (prevState.counter < this.state.counter) {
            console.log('Le compteur a été incrémenté');
        } else {
            console.log("Le compteur n'a pas été changé");
        }
    }

    render() {
        const { name, age } = this.props;

        return (
            <div>
                <p>
                    Je m'appelle {name} et j'ai {age} ans !<br />
                    Compteur {this.state.counter}
                    <br />
                    <button
                        onClick={() => {
                            this.setState(state => ({
                                counter: state.counter + 1,
                            }));
                            this.setState(state => ({
                                counter: state.counter + 1,
                            }));
                            this.setState(state => ({
                                counter: state.counter + 1,
                            }));
                            this.setState(state => ({
                                counter: state.counter + 1,
                            }));
                        }}
                    >
                        Incrémenter
                    </button>
                </p>
            </div>
        );
    }
}
