import React from 'react'
import HoverButton from '../../atoms/Buttons/hoverButton'
import './navBottomLeft.css'

export const NavBottomLeft= () => {
    return (
        <div className='container-left-bottom'>
            <div className="left-bottom-item first-item-bottom-left">Dashboard</div>
            <div className="left-bottom-item">#XRS-45670</div>
            <div className="left-bottom-item"> <HoverButton link='#' label='Add New' hoverColor='yellow'/> </div>
        </div>
    )
}



