"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "./ui/dialog";
import BeatLoader from "react-spinners/BeatLoader";
import { Input } from "./ui/input";
import swal from "sweetalert";
import { firestore } from "../../config/firebase";
import {
  doc,
  getDoc,
  collection,
  writeBatch,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

const GenerateFlashcards = () => {
  const [cards, setCards] = useState([]);
  const [userId, setUserId] = useState("");
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaveLoading, setIsSaveLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setUserId(userId);
  }, []);

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

  const handleSave = async () => {
    if (!name.trim()) {
      alert("Please enter a name for the flashcards.");
      return;
    }

    try {
      setIsSaveLoading(true);
      const userDocRef = doc(collection(firestore, "users"), userId);
      const userDocSnap = await getDoc(userDocRef);

      const batch = writeBatch(firestore);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        const updatedSets = [...(userData.flashcardSets || []), { name: name }];
        batch.update(userDocRef, { flashcardSets: updatedSets });
      } else {
        batch.set(userDocRef, { flashcardSets: [{ name: name }] });
      }

      const setDocRef = doc(collection(userDocRef, "flashcardSets"), name);
      batch.set(setDocRef, { cards });

      await batch.commit();

      setIsSaveLoading(false);
      setIsOpen(false);

      setName("");

      swal({
        title: "👏🏽",
        text: "Flashcards saved successfully!",
        icon: "success",
        button: "OK",
      });
    } catch (error) {
      console.error("Error saving flashcards:", error);
      swal({
        title: "Oops😞",
        text: "An error occurred while saving flashcards. Please try again.",
        icon: "error",
        button: "OK",
      });
    }
  };

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

        {/* Save Dialog */}
        {cards.length > 0 && (
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="px-4 py-2 text-white transition-colors duration-300 bg-green-500 rounded hover:bg-green-600 disabled:bg-green-400">
                Save
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Save Flashcard</DialogTitle>
                <DialogDescription>
                  Add your flashcard folder name here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid items-center grid-cols-4 gap-4">
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="col-span-full"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  onClick={handleSave}
                  className="transition-colors duration-300 bg-green-500 rounded hover:bg-green-600 disabled:bg-green-400"
                >
                  {isSaveLoading ? <BeatLoader /> : "Save changes"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
