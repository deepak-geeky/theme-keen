import React from 'react'

const CardLayout = (props) => {

    const {header, dd, ddData, body, bodyData, footer, footerData} = props
    return (
        <div class='card-container'>
            {/* Head 
            Body 
            Foot */}
            <div className="card-head">

            </div>
            <div className="card-body">

            </div>
            <div className="card-footer">

            </div>
        </div>
    )
}

export default CardLayout
