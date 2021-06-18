import React, { Component } from 'react';

import './ProfileGeneral.css';

export default class ProfileGeneral extends Component {
    render() {
        const { firstName, lastName, age } = this.props;
        return (
            <div className="general">
                <h3>Informations générales</h3>
                <hr />
                <ul>
                    <li>Nom : {lastName}</li>
                    <li>Prénom : {firstName}</li>
                    <li>Age : {age}</li>
                </ul>
            </div>
        );
    }
}
