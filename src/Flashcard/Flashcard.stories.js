import React from 'react'
import Flashcard from "./Flashcard"
import '../index.css'

export default {
    title: 'Components/Flashcard',
    component: Flashcard,
    argTypes: { onClick: { action: 'clicked' } },
}

const miscDeck = [
    {
        frontText: "What is the capital of the UK?",
        backText: "London"
    },
    {
        frontText: "What is the largest city in the world?",
        backText: "Tokyo"
    },
    {
        frontText: "What color is the sky?",
        backText: "blue"
    }
]

export const Primary = () => <Flashcard cards={miscDeck} />
