import React, { Component } from 'react';

import './ProfileAddress.css';

export default class ProfileAddress extends Component {
    render() {
        const { street, postalCode, city, country } = this.props;
        return (
            <div className="address-block">
                <h3>Adresse</h3>
                <ul>
                    <li>Rue : {street}</li>
                    <li>Code postal : {postalCode}</li>
                    <li>Ville : {city}</li>
                    <li>Pays : {country}</li>
                </ul>
            </div>
        );
    }
}
