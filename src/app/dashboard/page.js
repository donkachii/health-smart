"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GenerateFlashcards from "@/components/GenerateFlashcards";

const DashboardHome = () => {
  const [cards, setCards] = useState([{ question: "Hi", answer: "I am good" }]);
  const [flipped, setFlipped] = useState([]);
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleSubmit = async () => {};

  const [topic, setTopic] = useState("");
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

  // const handleGenerateFlashcard = async () => {
  //   setIsLoading(true);
  //   try {
  //     const newCard = await generateFlashcard(topic);
  //     await addDoc(collection(db, "flashcards"), newCard);
  //     setCards([...cards, newCard]);
  //     setTopic("");
  //   } catch (error) {
  //     console.error("Error generating flashcard:", error);
  //   }
  //   setIsLoading(false);
  // };

  return (
    <div className="container px-4 py-8 mx-auto">
      {/* Overview */}
      <section>
        <h2 className="text-2xl font-semibold">Recent</h2>
        <div className="grid grid-cols-3 gap-2 mt-4">
          <Card className="w-[20rem]">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                No. of All Flashcards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">100</div>
            </CardContent>
          </Card>

          <Card className="w-[20rem]">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                {" "}
                No. of Flashcards to be Viewed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">100</div>
            </CardContent>
          </Card>

          <Card className="w-[20rem]">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                No. of Flashcards to be Viewed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">100</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Flashcards Generation */}
      <section>
        <GenerateFlashcards />
      </section>
    </div>
  );
};

export default DashboardHome;
