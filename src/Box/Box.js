import React from 'react'
import Draggable from "react-draggable";
import './Box.css'

/*
A nice box with rounded corners and a kill button. Used for creating applets. Please note that the kill switch uses
absolute positioning. So keep that in mind when repositioning the box.

Props
children: this component will render it's children
width: width of the box
height: height of the box
drag: whether the box should be user-draggable
onClick: function to call on click event
onKill: function to call when kill button triggered
 */
export default (props) => {

    const box = (
        <div onClick={props.onClick} className={"box"} style={{width: props.width, height: props.height}}>
            <div className={'box-kill-button'} onClick={props.onKill}/>
            { props.children }
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
