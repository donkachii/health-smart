"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Flashcards = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleSubmit = async () => {};

  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   // Load flashcards from Firebase
  //   const loadFlashcards = async () => {
  //     const querySnapshot = await getDocs(collection(db, "flashcards"));
  //     const loadedCards = querySnapshot.docs.map((doc) => doc.data());
  //     setCards(loadedCards);
  //   };
  //   loadFlashcards();
  // }, []);

  console.log(cards);

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-6 text-2xl font-semibold">Flashcard</h1>
      <div className="flex mb-8 space-x-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a topic"
          className="px-4 py-2 border rounded"
        />
        <button
          disabled={isLoading}
          className="px-4 py-2 text-white transition-colors duration-300 bg-blue-500 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {isLoading ? "Generating..." : "Generate Flashcard"}
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
        {/* <TopicSuggestions />
        <BatchGenerationOptions /> */}
      </div>

      {/* {cards.length > 0 ? (
        <FlashcardDeck cards={cards} />
      ) : (
        <p>No flashcards yet. Generate so
        me!</p>
      )} */}
    </div>
  );
};

export default Flashcards;
