import React, {useState} from 'react'
import Box from "../../core/Box/Box";
import './Entry.css'

/*
A draggable box component for wiki entries.

props
title: a string value with the title of the entry
content: a string value with the content of the article
children: JSX that is rendered inside the article after 'content'
stack: a list of the names of the entries under the current one in the stack
 */
const Entry = (props) => {

    const [title, setTitle] = useState(props.title)
    const [content, setContent] = useState(props.content)
    const [children, setChildren] = useState(props.children)
    const [stack, setStack] = useState(props.stack)

    // called when an item from the stack is clicked
    // this function is passed as a prop to Stack, where it is used
    const promoteStackEntry = (item) => {
        // remove the item from the current stack and put the current front item in the stack
        let new_stack = stack.filter((el) => el.title !== item.title)
        new_stack.push({title: title, content: content, children:children})
        setStack(new_stack)

        // display the item
        setTitle(item.title)
        setContent(item.content)
        setChildren(item.children)
    }

    return (
        <Box width={"300px"} height={"450px"} drag>
            <div className={"spaced-repetition-indicator"} />
            <div className={"entry-title-container"}>
                <h2 className={"entry-title"}>{ title }</h2>
            </div>
            <div className={'entry-content-container'}>
                { content }
                { children }
            </div>
            <Stack stack={stack} promote={promoteStackEntry} />
        </Box>
    )
}

export default Entry

// stack as a separate component for readability
const Stack = (props) => {

    // each entry packaged and told to promote on click
    const titles = props.stack.map((entry) => {
        return (
            <div className={"stack-item"} onClick={() => props.promote(entry)}>
                <p className={"stack-title"}>{entry.title}</p>
            </div>
        )
    })

    return (
        <div className={"Stack"}>
            {titles}
        </div>
    )
}
