import React from 'react'
import { PROGRESS_STATS } from '../../const'

const Screens = () => {
    return (
        <div className='screens_container'>
            {
                PROGRESS_STATS.map(p => <div className='stat'>
                    <h3>{p.name}</h3>
                    <div className='progress_bar'>
                        <div className="progress" style={{width: `${p.progress}%`}}></div>
                        <p style={{color: `${p.progress >= 60 ? 'white' : 'black'}`}} >{p.progress + '%'}</p>
                    </div>
                </div>

                )
            }
        </div>
    )
}

export default Screens