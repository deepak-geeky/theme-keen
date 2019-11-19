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
                        padding: 0.5em 1em;
                        text-decoration: none;
                        color:#000;
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
