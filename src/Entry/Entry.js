import React from 'react'
import Draggable from 'react-draggable'
import Box from "../Box/Box";
import './Entry.css'

export default (props) => {
    function foo() {
        alert('foo')
    }
    return (
        <Draggable>
            <Box width={"300px"} height={"450px"}>
                <div className={"entry-title-container"}>
                    <h2 className={"entry-title"}>{ props.title }</h2>
                </div>
                <div className={'entry-content-container'}>
                    { props.content }
                    { props.children }
                </div>
            </Box>
        </Draggable>
    )
}

// const Kids = (props) => {
//     return({
//         props.titles.map((title) => {
//             return(
//                 <div className={"child-entry-container"}>
//                     <h4 className={"child-entry"}>{ title }</h4>
//                 </div>
//             )
//         })
//     })
// }