import React from 'react'
import HeadingText from '../../atoms/Text/headingText'
import SplineArea from '../../atoms/Chart_Graph/splineArea'
import ListItemCardOne from '../listItem/card1-listItem'
import './trend.css'

function Trend() {
    return (
        <div className='container-trend'>
            <HeadingText text={'Trends'}/>
            <SplineArea />
            <ListItemCardOne />
        </div>
    )
}

export default Trend
