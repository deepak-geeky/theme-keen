import React from 'react'
import './cardLayout.css'

const CardLayout = (props) => {

    // const {header, dd, ddData, body, bodyData, footer, footerData} = props
    return (
        <div class='card-container'>
            {props.children}
        </div>
    )
}

export default CardLayout
