import React from 'react';
import Container1 from 'src/containers/Container1';

export default (props) => (

    <div className={props.base}>
        <Container1/>
        {
            'Please exclude me!'
        }
    </div>

)