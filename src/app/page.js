import Nav from "@/components/ui/Nav";
import Hero from '@/components/ui/Hero';
import About from "@/components/ui/About";
import Plan from "@/components/ui/Plan";
import Parallax from "@/components/ui/Parallax";
import Contact from "@/components/ui/Contact";
import { BsFillArrowUpSquareFill } from 'react-icons/bs';


export default function Home() {
  return (
		<>
			<Nav />
			<main>
				<Hero />
				<About />
				<Parallax />
				<Plan />
				<Contact />
			</main>
			<a href='#'>
				<div className='flex justify-end items-end p-4 lg:p-8'>
					<BsFillArrowUpSquareFill className='text-blue-900 text-2xl lg:text-3xl ' />
				</div>
			</a>
			<footer className='w-full p-4 text-center text-white bg-gray-800'>
				<p>© 2024 Flashcard App. All rights reserved.</p>
			</footer>
		</>
	);
}
