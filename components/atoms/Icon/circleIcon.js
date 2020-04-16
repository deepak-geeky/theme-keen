import React from 'react'
import './circleIcon.css'

function CircleIcon(props) {
    return (
        <img src={props.src} height={`${props.height}px`} width={`${props.width}px`} className='circleIcon' />
    )
}

export default CircleIcon
