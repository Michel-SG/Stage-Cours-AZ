import Lifecycle from './Lifecycle';

import './App.css';

import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            displayLifecycle: true,
            logs: [],
        };
    }

    updateDate = () => {
        this.setState(state => ({ date: new Date() }));
    };

    toggleLifecycle = () => {
        this.setState(state => ({ displayLifecycle: !state.displayLifecycle }));
    };

    addLog = message => {
        this.setState(state => {
            const biggestId = state.logs.reduce(
                (prev, log) => (log.id > prev ? log.id : prev),
                0
            );
            return {
                logs: [...state.logs, { id: biggestId + 1, message }],
            };
        });
    };

    sortLogs = () => {
        this.setState(state => ({
            logs: [...state.logs].sort(function (a, b) {
                if (a.message > b.message) return 1;
                else if (a.message < b.message) return -1;
                else return 0;
            }),
        }));
    };

    render() {
        return (
            <div className='App'>
                <button onClick={this.updateDate}>Update date</button>
                <button onClick={this.toggleLifecycle}>Toggle lifecycle</button>
                <button onClick={this.sortLogs}>Sort logs</button>
                {this.state.displayLifecycle && (
                    <Lifecycle date={this.state.date} addLog={this.addLog} />
                )}
                <ul>
                    {this.state.logs.map(log => (
                        <li key={log.id}>{log.message}</li>
                    ))}
                </ul>

                <table>
                    <tbody>
                        <tr>
                            <td>John</td>
                            <td>DOE</td>
                            <TableActionCells
                                onModify={() => {}}
                                onDelete={() => {}}
                            />
                        </tr>
                        <tr>
                            <td>Bruce</td>
                            <td>WAYNE</td>
                            <TableActionCells
                                onModify={() => {}}
                                onDelete={() => {}}
                            />
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

function TableActionCells(props) {
    return (
        <>
            <td>
                <button onClick={props.onModify}>Modifier</button>
            </td>
            <td>
                <button onClick={props.onDelete}>Supprimer</button>
            </td>
        </>
    );
}
