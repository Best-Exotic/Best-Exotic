import React, {useState} from 'react'
import Box from '../Box/Box'
import './Flashcard.css'

export default (props) => {
    const cards = props.cards
    const [currentIndex, setIndex] = useState(0)
    const [frontFacing, setFrontFacing] = useState(true)

    const getText = () => {
        let text = cards[currentIndex]
        if (frontFacing){
            return text.frontText
        } else {
            return text.backText
        }
    }

    const flip = (e) => {
        alert('foo')
        e.preventDefault()
        setIndex(currentIndex + 1)
        setFrontFacing(!frontFacing)
    }

    return (
        <Box onClick={flip} width={"150px"} height={"200px"} className={"flashcard-container"}>
            <h3 className={"flashcard-text"}>
                {getText()}
            </h3>
        </Box>
    )
}
