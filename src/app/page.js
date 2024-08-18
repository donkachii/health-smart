import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-100">
      <header className="flex justify-between w-full p-4 bg-blue-600">
        <h1 className="text-3xl font-bold text-left text-white">Health Smart</h1>
        <div className="space-x-5">
          <Link href="/signup">
            <span className="px-6 py-2 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-700 cursor-pointer">
              Login
            </span>
          </Link>
          <Link href="/signin">
            <span className="px-6 py-2 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-700 cursor-pointer">
              Signin
            </span>
          </Link>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 p-4">
        <h2 className="my-6 text-2xl font-bold text-center text-gray-800 md:text-4xl">
          Enhance your learning with our Flashcards
        </h2>
        <p className="max-w-md text-lg text-center text-gray-600">
          Create, share, and study flashcards to boost your knowledge and retention.
        </p>
      </main>

      {/* Added spacer to push the boxes down */}
      <div className="flex-grow"></div> {/* This creates space pushing content down */}

      {/* Scrollable container for the boxes */}
      <div className="bg-gray-100 p-4">
        <div className="flex flex-wrap justify-center gap-6">
          {/* Box 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] h-60 flex-shrink-0">
            <h2 className="text-2xl font-bold mb-4">Free access</h2>
            <h6 className="text-gray-700">Some features are</h6>
            <p>Accessibility to flash cards</p>
            <button className="px-6 py-2 mt-6 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-700">
              Get Started
            </button>
          </div>
          {/* Box 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] h-60 flex-shrink-0">
            <h2 className="text-2xl font-bold mb-4">Premium Access</h2>
            <h6 className="text-gray-700">Some features are</h6>
            <p>Accessibility to flash cards</p>
            <button className="px-6 py-2 mt-6 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-700">
              Get Started
            </button>
          </div>
          {/* Box 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] h-60 flex-shrink-0">
            <h2 className="text-2xl font-bold mb-4">Advanced Premium</h2>
            <h6 className="text-gray-700">Some features are</h6>
            <p>Accessibility to flash cards</p>
            <button className="px-6 py-2 mt-6 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <footer className="w-full p-4 text-center text-white bg-gray-800">
        <p>© 2024 Flashcard App. All rights reserved.</p>
      </footer>
    </div>
  );
}
