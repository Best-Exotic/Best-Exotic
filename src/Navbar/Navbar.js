import React, {useState} from 'react'
import Searchbar from "./Searchbar";
import NavIndex from "./NavIndex";

export default (props) => {

    const [links, setLinks] = useState(['foo', 'bar', 'baz'])

    return (
        <div className={"Navbar"}>
            <div className={"glyph"} />
            <Searchbar setLinks={setLinks} />
            <NavIndex links={links} />
        </div>
    )
}
