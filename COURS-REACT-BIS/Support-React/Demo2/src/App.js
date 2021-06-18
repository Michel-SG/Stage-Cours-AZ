import React from 'react';
import './App.css';
import Profile from './profile/Profile';

function App() {
    const personalInfos = {
        general: {
            firstName: 'Valentin',
            lastName: 'AMATHIEU',
            age: 30,
        },
        address: {
            street: '10 rue des bonnes pratiques',
            postalCode: 69000,
            city: 'Lyon',
            country: 'France',
        },
    };

    return <Profile {...personalInfos} />;
}

export default App;
