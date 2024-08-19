"use client";

// import { useState, useEffect, Suspense } from "react";
// import { useSearchParams } from "next/navigation";
// import { firestore } from "../../../../config/firebase";
// import { collection, doc, getDocs } from "firebase/firestore";
// import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function Flashcard() {
  // const [flashcards, setFlashcards] = useState([]);
  // const [userId, setUserId] = useState("");

  // useEffect(() => {
  //   const userId = localStorage.getItem("userId");
  //   setUserId(userId);
  // }, []);

  // const searchParams = useSearchParams();
  // const search = searchParams.get("id");

  // useEffect(() => {
  //   async function getFlashcard() {
  //     if (!search || !userId) return;

  //     const colRef = collection(
  //       doc(collection(firestore, "users"), userId),
  //       search
  //     );
  //     const docs = await getDocs(colRef);

  //     const flashcards = [];
  //     docs.forEach((doc) => {
  //       flashcards.push({ id: doc.id, ...doc.data() });
  //     });
  //     setFlashcards(flashcards);
  //   }

  //   getFlashcard();
  // }, [search]);

  //   console.log("🚀 ~ getFlashcard ~ flashcards:", flashcards);

  return (
    // <Suspense fallback={<div>Loading...</div>}>
    //   <div className="container px-4 py-8 mx-auto">
    //     {flashcards.length > 0 ? (
    //       <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
    //         {flashcards.map((card, i) => (
    //           <Card key={i} className="py-12 cursor-pointer group perspective">
    //             <CardHeader className="relative w-full h-full space-y-0 duration-1000 preserve-3d group-hover:my-rotate-y-180">
    //               <CardTitle className="absolute h-full text-sm font-medium backface-hidden">
    //                 {card.front}
    //               </CardTitle>
    //               <CardTitle className="overflow-hidden text-sm font-medium my-rotate-y-180 backface-hidden">
    //                 {card.back}
    //               </CardTitle>
    //             </CardHeader>
    //           </Card>
    //         ))}
    //       </div>
    //     ) : (
    //       <p>No flashcards yet. Generate so me!</p>
    //     )}
    //   </div>
    // </Suspense>
    <p>No flashcards yet. Generate so me!</p>
  );
}
