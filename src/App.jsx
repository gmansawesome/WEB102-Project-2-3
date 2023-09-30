import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const cardSet = [{
        id: 1,
        question: "Gallgher Thornfall Mk.VI",
        answer: "Medium tank",
        difficulty: "medium"
    }, {
        id: 2,
        question: "O'Brien V.190 Knave",
        answer: "Armored Car",
        difficulty: "medium"
    }, {
        id: 3,
        question: "O'Brien V.110",
        answer: "Armored Car",
        difficulty: "easy"
    }, {
        id: 4,
        question: "King Spire Mk.I",
        answer: "Scout Tank",
        difficulty: "easy"
    }, {
        id: 5,
        question: "Silverhand Mk.IV",
        answer: "Medium Tank",
        difficulty: "easy"
    }, {
        id: 6,
        question: "Silverhand Lordscar - Mk.X",
        answer: "Medium Tank",
        difficulty: "medium"
    }, {
        id: 7,
        question: "Flood Juggernaut Mk.VII",
        answer: "Battle Tank",
        difficulty: "medium"
    }, {
        id: 8,
        question: "O'Brien V.113 Gravekeeper",
        answer: "Armored Car",
        difficulty: "hard"
    }, {
        id: 9,
        question: "Devitt-Caine Mk.IV MMR",
        answer: "Light Tank",
        difficulty: "hard"
    }, {
        id: 10,
        question: "Devitt Ironhide Mk.IV",
        answer: "Light Tank",
        difficulty: "hard"
  }]

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFront, setIsFront] = useState(true);
  
  const currentCard = cardSet[currentCardIndex];
  const { question, answer, difficulty} = currentCard;
  
  const handleFlip = () => {
    console.log("clicked");
    setIsFront(!isFront);
  };

  const handleNextCard = () => {
    const nextIndex = Math.floor(Math.random() * cardSet.length);
    setCurrentCardIndex(nextIndex);
    setIsFront(true);
  };

  return (
    <div>
      <h2> The Ultimate Colonial Tanker!</h2>
      <h4>How good of a Colonial tanker are you? Identify the types of these Warden armored vics by their official titles! </h4>
      <h5>Number of Cards: </h5>
      <div className="card" onClick={handleFlip} id={difficulty}>
        <div className={`front ${isFront ? 'show' : ''}`}>
            {isFront ? question : answer}
          </div>
        </div>
      <button type="next" class="nextcard" onClick={handleNextCard}>
        ⭢
      </button>
    </div>
  )
}

export default App
