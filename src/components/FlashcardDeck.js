import React, { useState } from "react";

const FlashCardDeck = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* <Flashcard
        question={cards[currentCardIndex].question}
        answer={cards[currentCardIndex].answer}
      /> */}
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 text-white transition-colors duration-300 bg-gray-500 rounded hover:bg-gray-600"
          onClick={handlePrevCard}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 text-white transition-colors duration-300 bg-gray-500 rounded hover:bg-gray-600"
          onClick={handleNextCard}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FlashCardDeck;
