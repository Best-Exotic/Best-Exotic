import React, {useState} from 'react'
import Draggable from "react-draggable";
import AppletFactory from "../Applet/AppletFactory";
import './Box.css'

/*
The general applet container. A nice box which supports child applet instantiation on drop. Also has a kill switch.

Props
children: this component will render it's children
childApplets: applets to be rendered outside of the nice box
width: width of the box
height: height of the box
drag: whether the box should be user-draggable
onClick: function to call on click event
onKill: function to call when kill button triggered
 */
export default (props) => {

    const [ongoingDrag, setOngoingDrag] = useState(false)

    const handleDragOver = () => setOngoingDrag(true)
    const handleDragleave = () => setOngoingDrag(false)
    const handleDrop = () => handleDragleave()

    let box = (
        <div
            onClick={props.onClick}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragleave}
            className={`box ${ongoingDrag? `box-drag-active`: ``}`}
            style={{
                width: props.width,
                height: props.height,
            }}
        >
            <div className={'box-kill-button'} onClick={props.onKill}/>
            { props.children }
        </div>
    )

    box = (
        <div className={"box-exterior-container"}>
            { box }
            { props.childApplets }
        </div>
    )

    if (props.drag){
        return (
            <Draggable grid={[50, 50]}>
                {box}
            </Draggable>
        )
    } else {
        return box
    }

}
