import React from 'react';
import { personItems } from '../../const';
import imageLink from './../../img/person.JPEG'

const PersonBlock = () => {
    return (
        <div className='person_container'>
            <img src={imageLink} alt="person" className='photo_container'/>
            <div style={{padding: '0 10px'}}>
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