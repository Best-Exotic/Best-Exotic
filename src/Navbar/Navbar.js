import React, {useState} from 'react'
import './Navbar.css'
import Chika from './chika.jpg'
import Searchbar from "./Searchbar";
import NavIndex from "./NavIndex";

export default (props) => {

    const [links, setLinks] = useState(['foo', 'bar', 'baz'])

    return (
        <div className={"Navbar"}>
            <img src={Chika} alt={"chika"} style={{width:"15vw", height:"15vw", borderRadius:"18px", marginBottom: "5px"}}/>
            <Searchbar setLinks={setLinks} />
            <NavIndex links={links} />
        </div>
    )
}
