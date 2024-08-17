// import { firestore } from "@/libs/firebase/config";

import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Flashcard App</title>
        <meta
          name="description"
          content="Learn faster with our flashcard app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between w-full p-4 bg-blue-600">
        <h1 className="text-3xl font-bold text-left text-white">
          Health Smart
        </h1>
        <div className="space-x-5">
          <button className="px-6 py-2 text-white bg-blue-500 rounded-md shadow-md  hover:bg-blue-700">
            login
          </button>
          <button className="px-6 py-2 text-white bg-blue-500 rounded-md shadow-md  hover:bg-blue-700">
            signin
          </button>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center flex-1">
        <h2 className="my-6 text-2xl font-bold text-center text-gray-800 md:text-4xl">
          Enhance your learning with our Flashcards
        </h2>
        <p className="max-w-md text-lg text-center text-gray-600">
          Create, share, and study flashcards to boost your knowledge and
          retention.
        </p>
        <button className="px-6 py-2 mt-6 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-700">
          Get Started
        </button>
      </main>

      <footer className="w-full p-4 text-center text-white bg-gray-800">
        <p>© 2024 Flashcard App. All rights reserved.</p>
      </footer>
    </div>
  );
}
