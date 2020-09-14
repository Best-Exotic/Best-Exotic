import React from "react";
import './Dock.css'

/*
A static component that renders the little dock with the applets at the right side of the screen. No params.
 */
export default () => {
    return (
        <div className={"Dock"}>
            <AppletLink name={"info"} />
            <AppletLink name={"flashcards"} />
        </div>
    )
}

/*
A small draggable widget for instantiating applets.

props
name: the name of the applet, very important, used to pick correct applet factory
img: an image used for the background
 */
function AppletLink(props) {

    const handleDrag = (e) => {
        e.dataTransfer.setData("Text", props.name)
    }

    return (
        <div
            className={"dock-applet-link"}
            draggable={true}
            onDragStart={handleDrag}
            style={{
                backgroundImage: `url(${props.img})`
            }}
        />
    )
}