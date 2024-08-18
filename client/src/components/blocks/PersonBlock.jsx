import React from 'react';
import { PERSON_ITEMS } from '../../const';
import imageLink from './../../img/person.JPEG'

const PersonBlock = () => {
    return (
        <div className='person_container'>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src={imageLink} alt="person" className='photo_container' />
            </div>
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