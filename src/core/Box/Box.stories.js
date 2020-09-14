import React from "react";
import Box from './Box'
import Dock from "../Dock/Dock";
import '../../index.css'

export default {
    title: 'Components/Box',
    component: Box,
}

export const Primary = () => <Box width={"150px"} height={"200px"} />

export const Draggable = () => <Box width={"150px"} height={"200px"} drag/>

export const DropDemo = () => {
    return (
        <div>
            Try dragging applets from the dock onto the box.<br/><br/>
            <div style={{display: "flex"}}>
                <Box width={"150px"} height={"200px"} />
                <Dock/>
            </div>
        </div>

    )
}
