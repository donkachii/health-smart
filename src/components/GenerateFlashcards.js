"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const GenerateFlashcards = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

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

  const handleGenerateFlashcard = async () => {
    if (!text.trim()) {
      alert("Please enter some text to generate flashcards.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        body: text,
      });

      if (!response.ok) {
        throw new Error("Failed to generate flashcards");
      }

      const data = await response.json();
      setCards(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error generating flashcards:", error);
      setIsLoading(false);
      alert("An error occurred while generating flashcards. Please try again.");
    }
  };

  //   console.log(cards);

  return (
    <div className="mt-12">
      <h1 className="mb-6 text-2xl font-semibold">
        HealthSmart Flashcard Generation
      </h1>
      <div className="flex justify-between">
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
            onClick={handleGenerateFlashcard}
            className="px-4 py-2 text-white transition-colors duration-300 bg-blue-500 rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            {isLoading ? "Generating..." : "Generate"}
          </button>
        </div>
        {cards.length > 0 && (
          <Button
            className="px-4 py-2 text-white transition-colors duration-300 bg-green-500 rounded hover:bg-green-600 disabled:bg-gray-400"
            // onClick={handleSave}
          >
            Save
          </Button>
        )}
      </div>
      {cards.length > 0 && (
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Card key={i} className="py-12 cursor-pointer group perspective">
              <CardHeader className="relative w-full h-full space-y-0 duration-1000 preserve-3d group-hover:my-rotate-y-180">
                <CardTitle className="absolute h-full text-sm font-medium backface-hidden">
                  {card.front}
                </CardTitle>
                <CardTitle className="overflow-hidden text-sm font-medium my-rotate-y-180 backface-hidden">
                  {card.back}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}

      {/* <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
        {flashcards.length > 0 ? (
          flashcards.map((card, i) => <div key={i}>{card.front}</div>)
        ) : (
          <p>No flashcards yet. Generate so me!</p>
        )}
      </div> */}
    </div>
  );
};

export default GenerateFlashcards;
