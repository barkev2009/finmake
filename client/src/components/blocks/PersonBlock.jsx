import React from 'react';
import { PERSON_ITEMS } from '../../const';

const PersonBlock = () => {
    return (
        <div className='person_container'>
            <div style={{ padding: '0 10px' }}>
                {
                    PERSON_ITEMS.map(
                        (item, idx) => <p key={idx}>{item}</p>
                    )
                }
            </div>
        </div>
    )
}

export default PersonBlock