import React from 'react'
import SectorIconGetter from '../../svg/sectors/SectorIconGetter'

const Sector = ({ sector }) => {
    return (
        <div className='sector_block'>
            <div className="sector_title_block">
                <div className="icon"><SectorIconGetter code={sector.id} /></div>
                <div className="sector_title">{sector.title}</div>
            </div>
            <div className="sector_description">{sector.descr}</div>
        </div>
    )
}

export default Sector