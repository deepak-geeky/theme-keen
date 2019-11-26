import React from 'react'
import './squareIcon.css'

function SquareIcon(props) {
    return (
        <img src={props.src} height={`${props.height}px`} width={`${props.width}px`} />
    )
}

export default SquareIcon
