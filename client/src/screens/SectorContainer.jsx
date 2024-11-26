import React from 'react'
import { SECTORS } from '../const'
import Sector from '../components/items/Sector'

const SectorContainer = () => {
  return (
    <div id='sectors_container'>
      <div className="sectors_content">
        <div className="title-block">
          <h3 className='title'>Отрасли</h3>
        </div>
        <div className="sectors">
          {
            SECTORS.map(sector => <Sector key={sector.title} sector={sector} />)
          }
        </div>
      </div>
    </div>
  )
}

export default SectorContainer