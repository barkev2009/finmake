import React from 'react';
import { personItems } from '../../const';

const PersonBlock = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', height: '90vh' }}>
            <div className='photo_container' />
            <div>
                {
                    personItems.map(
                        item => <p>{item}</p>
                    )
                }
            </div>
        </div>
    )
}

export default PersonBlock