import React from 'react';

export default function Task({
    id,
    title,
    onTextInputChange,
    onDeleteButtonClick,
}) {
    const handleChange = event => {
        onTextInputChange(id, event.target.value);
    };

    const handleClick = () => onDeleteButtonClick(id);

    return (
        <>
            <td>
                <input type='text' value={title} onChange={handleChange} />
            </td>
            <td>
                <button onClick={handleClick}>X</button>
            </td>
        </>
    );
}
