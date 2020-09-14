import React, {useState} from "react";
import AppletFactory from "./AppletFactory";
import supportedApplets from './AppletFactory'

/*
The all-powerful applet component. When an applet link is dropped on this component, it renders the applet using the
data it has stored about it's own children.

props
children: The content of the primary applet. This will probably be a Box.
 */
export default (props) => {

    const [kids, setKids] = useState([])
    const addKid = (kid) => {
        let new_kids = kids
        new_kids.push(kid)
        setKids(new_kids)
    }
    //const removeKid = (kid) => setKids(kids.filter((kiddy) => kiddy !== kid))

    const handleDragOver = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }

    const handleDrop = (e) => {
        let newKid = e.dataTransfer.getData("Text")
        supportedApplets.includes(newKid)? addKid(newKid) : console.log(`${newKid} applet failed to load: unknown`)
    }

    return (
        <div
            className={"Applet"}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            { props.children }
            { kids.map((kid) => <AppletFactory parentId={props.id} applet={kid}/>) }
        </div>
    )
}
