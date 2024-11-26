import React from 'react'

const Sector = ({ sector }) => {
    return (
        <div className='sector_block'>
            <div className="sector_title_block">
                <div className="icon"></div>
                <div className="sector_title">{sector.title}</div>
            </div>
            <div className="sector_description">{sector.descr}</div>
        </div>
    )
}

export default Sector