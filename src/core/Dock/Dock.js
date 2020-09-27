import React from "react";
import './Dock.css'

import flashcardLogo from './appletLogos/book.svg'
import infoLogo from './appletLogos/info.svg'
import highlighterLogo from './appletLogos/edit-3.svg'

/*
A static component that renders the little dock thing with the applets at the right side of the screen. No params.
 */
const Dock = () => {
    return (
        <div className={"Dock"}>
            <AppletLink name={"info"} img={infoLogo}/>
            <AppletLink name={"flashcards"} img={flashcardLogo}/>
            <AppletLink name={"highlighter"} img={highlighterLogo}/>
        </div>
    )
}

export default Dock

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