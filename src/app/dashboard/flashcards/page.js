"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { firestore } from "../../../../config/firebase";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Flashcards = () => {
  const [flashcards, setFlashcards] = useState([]);
  const router = useRouter();

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    async function getFlashcards() {
      if (!userId) return;
      const docRef = doc(collection(firestore, "users"), userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const collections = docSnap.data().flashcardSets || [];
        setFlashcards(collections);
      } else {
        await setDoc(docRef, { flashcardSets: [] });
      }
    }
    getFlashcards();
  }, [userId]);

  const handleCardClick = (id) => {
    router.push(`/dashboard/flashcard?id=${id}`);
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-6 text-2xl font-semibold">All Flashcard</h1>
      {flashcards.length > 0 && (
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          {flashcards.map((card, i) => {
            let name = card.name;
            return (
              <Button
                className="py-12 cursor-pointer group"
                key={i}
                onClick={() => handleCardClick(name)}
              >
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Flashcards;
