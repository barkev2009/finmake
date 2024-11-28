import React from 'react'
import Economy from './Economy'
import Education from './Education'
import Fitness from './Fitness'
import IT from './IT'
import Marketplaces from './Marketplaces'
import Production from './Production'
import Retail from './Retail'
import Services from './Services'

const SectorIconGetter = ({ code }) => {
    switch (code) {
        case 'economy':
            return <Economy />
        case 'education':
            return <Education />
        case 'fitness':
            return <Fitness />
        case 'it':
            return <IT />
        case 'marketplaces':
            return <Marketplaces />
        case 'production':
            return <Production />
        case 'retail':
            return <Retail />
        case 'services':
            return <Services />
        default:
            return <></>
    }
}

export default SectorIconGetter