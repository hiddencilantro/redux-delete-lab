import React from 'react';

const Band = props => {
    return (
        <li>
            <span>{props.band.name}</span>
            <button onClick={() => props.deleteBand(props.band.id)}>DELETE BAND</button>
        </li>
    )
}

export default Band