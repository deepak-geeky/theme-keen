import React from 'react'

function Price(props) {
    return (
        <div className='price'>
           {props.text} 
           <style jsx>
          {
            `
            .price
            {
                font-size:1.2rem;
                font-family: Poppins,Helvetica,sans-serif;
                padding-left:1em;
                font-weight:500;
                color:red
            }
            `
          }
      </style>
        </div>
    )
}

export default Price