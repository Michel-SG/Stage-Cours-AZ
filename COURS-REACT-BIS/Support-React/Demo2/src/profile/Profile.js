import React, { Component } from 'react';
import ProfileGeneral from '../profile-general/ProfileGeneral';
import ProfileAddress from '../profile-address/ProfileAddress';

import './Profile.css';

export default class Profile extends Component {
    render() {
        const { general, address } = this.props;
        return (
            <div className="profile">
                <h1>Bienvenue sur votre profil</h1>
                <hr />
                <ProfileGeneral {...general} />
                <ProfileAddress {...address} />
            </div>
        );
    }
}
