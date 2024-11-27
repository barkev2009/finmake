import React from 'react'
import { WORK_STEPS } from '../const'
import WorkStep from '../components/items/WorkStep'

const WorkSteps = () => {
    return (
        <div id='steps_container'>
            <div className="steps_content">
                <div className="title-block">
                    <h3 className='title'>Этапы работы</h3>
                </div>
                <div className="steps">
                    {
                        WORK_STEPS.map(item => <WorkStep step={item} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default WorkSteps