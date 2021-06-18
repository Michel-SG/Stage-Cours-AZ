import React from 'react';

import './FenetreModal.css';

export default function FenetreModal(props) {
    return <div className='modal'>{props.children}</div>;
}
