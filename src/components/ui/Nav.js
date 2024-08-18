"use client"
import { FiMenu } from 'react-icons/fi';
import { useState } from "react";
import { PiPersonArmsSpreadDuotone } from 'react-icons/pi';
import Link from 'next/link';
import styles from '../../../styles/Navbar.module.css';

const Nav = () => {
    const [open, setOpen] = useState(false);

		function Modal() {
			setOpen(!open);
		}
  return (
		<header className='bg-gradient-to-r from-black via-black to-blue-800 p-3  '>
			<div className='flex justify-between items-center xl:max-7xl xl:mx-auto py-5 px-[8%] w-full flex-wrap'>
				<Link href='/'>
					<h1 className='flex lg:text-3xl items-center cursor-pointer text-white'>
						Health
						<span className='text-red-800 lg:text-blue-800'>
							<PiPersonArmsSpreadDuotone />
						</span>
						Smart
					</h1>
				</Link>
				<FiMenu
					className='lg:hidden block cursor-pointer h-6 w-6 text-white'
					onClick={Modal}
				/>
				<nav
					className={`lg:flex lg:justify-betweenlg:items-center lg:w-auto w-full ${
						open ? 'block' : 'hidden'
					}`}>
					<ul className='lg:flex lg:justify-center items-center'>
						<li className={styles.list}>
							<Link href='#about'>About HealthSmart</Link>
						</li>
						<li className={styles.list}>
							<Link href='#plan'>Health Plans</Link>
						</li>
						<li className={styles.list}>
							<Link href='#contact'>Contact</Link>
						</li>
					</ul>
					<button className={styles.btnNav}>
						<Link href='#'>Login</Link>
					</button>
					<button className={styles.btnNav}>
						<Link href='#'>SignUp</Link>
					</button>
				</nav>
			</div>
		</header>

	);
}

export default Nav
