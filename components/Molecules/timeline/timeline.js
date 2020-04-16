import React from 'react'
import Timeline from 'react-time-line'


const TimelineList = (props) => {
    return (
        <div>
            <Timeline items={props.data} />
        </div>
    )
}

export default TimelineList
