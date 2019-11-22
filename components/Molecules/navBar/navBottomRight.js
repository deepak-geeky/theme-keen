import React from 'react'
import HoverButton from '../../atoms/Buttons/hoverButton'
export const NavBottomRight=()=> {
    return (
        <div>
            <div className="right-item">
                <HoverButton label='Today' hovercolor='blue'/>
            </div>
            <div className="right-item">
            <HoverButton label='Month' hovercolor='blue'/>
                
            </div>
            <div className="right-item">
            <HoverButton label='Year' hovercolor='blue'/>

            </div>
            <div className="right-item">
                <HoverButton label='' />
            </div>
            <div className="right-item"></div>    
        </div>
    )
}
