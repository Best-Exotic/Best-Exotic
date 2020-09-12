import React from "react";

export default (props) => {
    return (
        <div className={"NavIndex"}>
            {props.links.map((link) => <span><Navlink title={link} /><br/></span>)}
        </div>
    )
}

const Navlink = (props) => {
    return (
        <a>{ props.title }</a>
    )
}
