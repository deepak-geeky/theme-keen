import React from 'react'

function HoverButton(props) {
    return (
        <div className='buttonContainer'>
            <a href={props.link} className='buttonLink'>{props.label}</a>
            <style jsx>
                {`
                    .buttonContainer{
                        
                    }
                    .buttonLink{
                        padding: 1rem;
                        text-decoration: none;
                        color:#000;
                        border-radius:1rem;
                    }
                    .buttonLink:hover {
                        background-color:#9be3de;
                        color:${props.hoverColor};
                    }
                `}
            </style>
        </div>
    )
}

export default HoverButton
