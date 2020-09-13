import React from "react";
import './Dock.css'

export default () => {
    return (
        <div className={"Dock"}>
            <AppletLink />
            <AppletLink />
            <AppletLink />
            <AppletLink />
            <AppletLink />
        </div>
    )
}

function AppletLink() {
    return (
        <div className={"dock-applet-link"} draggable={true} />
    )
}