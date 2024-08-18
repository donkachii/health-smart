"use client";
import Link from "next/link";
import styles from "../../../styles/Navbar.module.css";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <h2 className={styles.heroHeading}>
          <Typewriter
            options={{
              strings: [
                "Do you want to enhance your learning with our Flashcards?",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <div>
          <p className={styles.heroPara}>
            Welcome to HealthStart, your go-to platform for creating, sharing,
            and studying flashcards to strengthen your knowledge in health and
            first aid.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Link href="/signin">
            <button className={styles.btnHero}>Get Started</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
