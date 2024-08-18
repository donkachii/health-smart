"use client";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import styles from "../../../styles/Signup.module.css";
import { auth, googleAuthProvider } from "../../../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import swal from "sweetalert";
import { useRouter } from "next/navigation";
import { firestore } from "../../../config/firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSigninUser = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userId = user.uid; // Get the user's unique ID

      if (user) {
        const userRef = doc(firestore, "users", user.uid);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
          // User exists, update the last login time
          await updateDoc(userRef, {
            lastLogin: serverTimestamp(),
          });
        } else {
          // User does not exist, create a new user document
          await setDoc(userRef, {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            createdAt: serverTimestamp(),
            lastLogin: serverTimestamp(),
          });
        }
      }

      // Store the uid in local storage
      localStorage.setItem("userId", userId);

      swal({
        title: "👏🏽",
        text: "Welcome",
        icon: "success",
        button: "OK",
      });
      router.push("/dashboard");
    } catch (error) {
      swal({
        title: "Oops😞",
        text: "Sorry",
        icon: "error",
        button: "OK",
      });
    }
  };

  // Function to handle Login with Google
  const handleLoginWithGoogle = async (e) => {
    e.preventDefault();

    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const userId = result.user.uid; // Get the user's unique ID
      const user = result.user;

      if (user) {
        const userRef = doc(firestore, "users", user.uid);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
          // User exists, update the last login time
          await updateDoc(userRef, {
            lastLogin: serverTimestamp(),
          });
        } else {
          // User does not exist, create a new user document
          await setDoc(userRef, {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            createdAt: serverTimestamp(),
            lastLogin: serverTimestamp(),
          });
        }
      }

      // Store the uid in local storage
      localStorage.setItem("userId", userId);

      console.log("User ID:", userId);
      swal({
        title: "👏🏽",
        text: "You have successfully logged in! Welcome to HealthSmart",
        icon: "success",
        button: "OK",
      });
      router.push("/dashboard");
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
      swal({
        title: "Oops😞",
        text: "Sorry",
        icon: "error",
        button: "OK",
      });
    }
  };

  return (
    <div className={styles.signup}>
      <div className={styles.overlay}>
        <div className={styles.signupForm}>
          <h2 className={styles.signupHead}>Login</h2>
          <form onSubmit={handleSigninUser}>
            <div className="mb-4">
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
              />
            </div>
            <button type="submit" className={styles.btnSignup}>
              Login
            </button>
            <hr />
            <div className="flex justify-center my-4 flex-center">
              <button
                type="button"
                onClick={handleLoginWithGoogle}
                className={styles.btnGoogle}
              >
                <FcGoogle className="mx-2 lg:text-2xl" />
                Or Login with Google
              </button>
            </div>
          </form>
          <p className="mt-4 text-sm text-center text-slate-900">
            Dont have an account?{" "}
            <a href="/signup" className="text-white hover:underline">
              SignUp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
