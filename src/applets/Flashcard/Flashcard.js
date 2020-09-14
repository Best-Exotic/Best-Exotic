import React, {useState} from 'react'
import Box from '../../core/Box/Box'
import './Flashcard.css'

export default (props) => {
    const cards = props.cards
    const [currentIndex, setIndex] = useState(0)
    const [frontFacing, setFrontFacing] = useState(true)

    const handleRestart = (e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation()
        setIndex(0)
        setFrontFacing(true)
    }

    const getText = () => {
        let card = cards[currentIndex]
        if (currentIndex < cards.length){
            // we should serve the current card face
            let card_text
            if (frontFacing){
                card_text = card.frontText
            } else {
                card_text = card.backText
            }
            return (
                <h3 className={"flashcard-text"}>
                    {card_text}
                </h3>
            )
        } else {
            // we should serve the final card face
            return (
                <div className={"flashcard-text"}>
                    <h3>Review completed</h3>
                    <a onClick={handleRestart}>Do it again</a>
                </div>
            )
        }
    }

    const flip = (e) => {
        e.preventDefault()
        if (!frontFacing){setIndex(currentIndex + 1)}
        setFrontFacing(!frontFacing)
    }

    return (
        <Box width={"150px"} height={"200px"} className={"flashcard-container"} onClick={flip}>
            {getText()}
        </Box>
    )
}
