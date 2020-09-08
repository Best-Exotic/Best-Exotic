import React from 'react'
import './Box.css'

export default (props) => {
    return (
        <div className={"box"} style={{width: props.width, height: props.height}}>
            { props.children }
        </div>
    )
}
