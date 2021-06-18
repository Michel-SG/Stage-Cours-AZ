import React, { Component } from 'react';
import Task from './Task';

export default class Tasklist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
        };
    }

    addTask = (title = 'Nouvelle tâche') => {
        this.setState(state => {
            const biggestId = state.tasks.reduce(
                (prev, task) => (prev > task.id ? prev : task.id),
                0
            );

            return {
                tasks: [...state.tasks, { id: biggestId + 1, title }],
            };
        });
    };

    editTask = (id, newTitle) => {
        this.setState(state => {
            return {
                tasks: state.tasks.map(function (task) {
                    if (task.id === id) {
                        return { ...task, title: newTitle };
                    }
                    return task;
                }),
            };
        });
    };

    deleteTask = id => {
        this.setState(state => ({
            tasks: state.tasks.filter(task => task.id !== id),
        }));
    };

    render() {
        return (
            <>
                <button onClick={() => this.addTask()}>
                    Ajouter une tâche
                </button>
                <table>
                    <tbody>
                        {this.state.tasks.map(task => (
                            <tr key={task.id}>
                                <Task
                                    {...task}
                                    onTextInputChange={this.editTask}
                                    onDeleteButtonClick={this.deleteTask}
                                />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        );
    }
}
