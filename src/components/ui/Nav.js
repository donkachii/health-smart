"use client";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { PiPersonArmsSpreadDuotone } from "react-icons/pi";
import Link from "next/link";
import styles from "../../../styles/Navbar.module.css";

const Nav = () => {
  const [open, setOpen] = useState(false);

  function Modal() {
    setOpen(!open);
  }
  return (
    <header className="p-3 bg-gradient-to-r from-black via-black to-blue-800 ">
      <div className="flex justify-between items-center xl:max-7xl xl:mx-auto py-5 px-[8%] w-full flex-wrap">
        <Link href="/">
          <h1 className="flex items-center text-white cursor-pointer lg:text-3xl">
            Health
            <span className="text-red-800 lg:text-blue-800">
              <PiPersonArmsSpreadDuotone />
            </span>
            Smart
          </h1>
        </Link>
        <FiMenu
          className="block w-6 h-6 text-white cursor-pointer lg:hidden"
          onClick={Modal}
        />
        <nav
          className={`lg:flex lg:justify-betweenlg:items-center lg:w-auto w-full ${
            open ? "block" : "hidden"
          }`}
        >
          <ul className="items-center lg:flex lg:justify-center">
            <li className={styles.list}>
              <Link href="#about">About HealthSmart</Link>
            </li>
            <li className={styles.list}>
              <Link href="#plan">Health Plans</Link>
            </li>
            <li className={styles.list}>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
          <Link href="/signin">
            <button className={styles.btnNav}>Login</button>
          </Link>
          <Link href="/signup">
            <button className={styles.btnNav}>Sign Up</button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
