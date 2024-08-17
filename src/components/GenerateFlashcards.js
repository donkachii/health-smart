"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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

  console.log(cards);

  const flashcards = [
    {
      front: "Anatomy",
      back: "Anatomy is a study of the structure, function, and organization of the body. It is a foundational part of any human being's life. It is the study of the human body's structure and function.",
    },
    {
      front: "Anatomy",
      back: "Anatomy is a study of the structure, function, and organization of the body. It is a foundational part of any human being's life. It is the study of the human body's structure and function.",
    },
    {
      front: "Anatomy",
      back: "Anatomy is a study of the structure, function, and organization of the body. It is a foundational part of any human being's life. It is the study of the human body's structure and function.",
    },
    {
      front: "Anatomy",
      back: "Anatomy is a study of the structure, function, and organization of the body. It is a foundational part of any human being's life. It is the study of the human body's structure and function.",
    },
  ];

  return (
    <div className="mt-12">
      <h1 className="mb-6 text-2xl font-semibold">
        HealthSmart Flashcard Generation
      </h1>
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
      <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
        {/* <TopicSuggestions />
        <BatchGenerationOptions /> */}
      </div>

      <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
        {flashcards.length > 0 ? (
          flashcards.map((card, i) => <div key={i}>{card.front}</div>)
        ) : (
          <p>No flashcards yet. Generate so me!</p>
        )}
      </div>
    </div>
  );
};

export default GenerateFlashcards;
