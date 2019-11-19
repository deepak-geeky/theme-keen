import React from 'react'

function IconButton(props) {
    const {iconUrl,href} = props
    return (
        <div>
            <a href={href}><img src={iconUrl}/></a>
        </div>
    )
}

export default IconButton
