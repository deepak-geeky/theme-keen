import React from 'react'

function IconButton(props) {
    const { iconUrl, href, height, width } = props
    return (
        <div>
            <a href={href}><img src={iconUrl} height={height} width={width}/></a>
        </div>
    )
}

export default IconButton
