import React from 'react';
import './App.css';
import Flashcard from "../Flashcard/Flashcard";

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

function App() {

    return(
        <Flashcard cards={miscDeck} />
    )

  // return (
  //   <div className="App">
  //     <div className="viewport">
  //       <div className="virtual-viewport">
  //         <div id="wall">
  //
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default App;
