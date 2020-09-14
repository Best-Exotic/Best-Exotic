import React, {useRef} from 'react'
import './Searchbar.css'

export default (props) => {

    const searchInput = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const items = [
            "Afghanistan",
            "Albania",
            "Algeria",
            "American Samoa",
            "Andorra",
            "Angola",
            "Anguilla",
            "Antarctica",
            "Antigua and Barbuda",
            "Argentina",
            "Armenia",
            "Aruba",
            "Australia",
            "Austria",
            "Azerbaijan"]
        let new_links = []
        Array(...Array(5).keys()).forEach(() => {
                new_links.push(items[Math.floor(Math.random()*items.length)])
        })
        props.setLinks(new_links)
        searchInput.current.value = ''
    }

    return (
        <div className={"Searchbar"}>
            <form className={"search-form"} onSubmit={handleSubmit}>
                <input className={"search-input"} ref={searchInput} type={"text"} placeholder={"Search..."} />
                <button className={"search-submit-button"} type={"submit"}>Go</button>
            </form>
        </div>
    )
}
