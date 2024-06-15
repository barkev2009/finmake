import React from 'react';
import Carousel from './Carousel';
import InfoBlock from './blocks/InfoBlock';
import PersonBlock from './blocks/PersonBlock';

const Content = () => {
    return (
        <div style={{display: 'flex', flexDirection: "column", padding: '0 15px'}}>
            <PersonBlock />
            <InfoBlock />
        </div>
    )
}

export default Content