import React from 'react'
import HeadingText from '../../atoms/Text/headingText'
import SplineArea from '../../atoms/Chart_Graph/splineArea'
import ListItemCardOne from '../listItem/card1-listItem'

function Trend() {
    return (
        <div className='container-trend'>
            {/* //Text Trend
            //Menu on top right
            //Spline Chart
            //Three List Item with Icon + Primary Text + Secondry Text + Price */}
            <HeadingText text={'Trends'}/>
            <SplineArea />
            <ListItemCardOne />

        <style jsx>{
            `
            .container-trend{
                background-color:#ffffff;
                border:1px solid black;
                border-radius:0.2em;
                padding:1em 0em 1em 0em;
            }
            
            `
        }

        </style>
        </div>
    )
}

export default Trend
