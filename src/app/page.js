// import { firestore } from "@/libs/firebase/config";

import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <Head>
        <title>Flashcard App</title>
        <meta name="description" content="Learn faster with our flashcard app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-600 w-full p-4 flex justify-between">
        <h1 className="text-white text-3xl text-left font-bold">Health Smart</h1>
        <div className="space-x-5">
          <button className=" bg-blue-500 text-white  px-6 py-2 rounded-md shadow-md hover:bg-blue-700">
    login
  </button>
  <button className=" bg-blue-500 text-white  px-6 py-2 rounded-md shadow-md hover:bg-blue-700">
    signin
  </button>
  </div>
      </header>

      <main className="flex flex-col items-center justify-center flex-1">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 my-6 text-center">
          Enhance your learning with our Flashcards
        </h2>
        <p className="text-gray-600 text-lg text-center max-w-md">
          Create, share, and study flashcards to boost your knowledge and retention.
        </p>
        <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700">
          Get Started
        </button>
      </main>

      <footer className="w-full p-4 bg-gray-800 text-white text-center">
        <p>© 2024 Flashcard App. All rights reserved.</p>
      </footer>
    </div>
  );
}