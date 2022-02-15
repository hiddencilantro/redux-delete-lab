import React from 'react';
import Band from './Band';

const Bands = props => {
    return props.bands.map(band => <Band key={band.id} band={band} deleteBand={props.deleteBand} />)
}

export default Bands