import React from 'react';
import { personItems } from '../../const';

const PersonBlock = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row'}}>
            <div className='photo_container' />
            <div>
                {
                    personItems.map(
                        (item, idx) => <p key={idx}>{item}</p>
                    )
                }
            </div>
        </div>
    )
}

export default PersonBlock