import React from "react";
import Box from './Box'
import '../index.css'

export default {
    title: 'Components/Box',
    component: Box,
}

export const Primary = () => <Box width={"150px"} height={"200px"} />

export const Draggable = () => <Box width={"150px"} height={"200px"} drag/>
