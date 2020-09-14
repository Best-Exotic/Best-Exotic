import React from "react";
import './CanvasControls.css'

export default (props) => {
    return (
        <div className={'canvas-controls'}>
            <div onClick={props.zoomIn} className={'canvas-control-button canvas-zoom-in'} />
            <div onClick={props.zoomOut} className={'canvas-control-button canvas-zoom-out'} />
        </div>
    )
}