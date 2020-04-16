import React from 'react'
import ProgressBar from '../../atoms/Bar/progressBar'
import './progressBar.css'

const ProgressBars = (props) => {
    return (
        <div className='pb-container'>
            {(props.data).map((e,index) =>{
                return <div className={`pb${index} pb`}>
                <ProgressBar text={e.text} color={e.color} value={e.value} />
                </div>
            } )}
        </div>
    )
}

export default ProgressBars
