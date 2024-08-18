"use client";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import styles from "../../../styles/Signup.module.css";
import { auth, googleAuthProvider } from "../../../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter("");

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
      swal({
        title: "Success",
        text: "Account created successfully",
        icon: "success",
        button: "Continue",
      });

      router.push("/signin");
    } catch (error) {
      swal({
        title: "Oops account not created ",
        text: "We are sorry, but we could not log you in. Please ensure that you have filled out the form correctly or check your internet connection.",
        icon: "error",
        button: "Try Again",
      });
    }
  };

  const handleGoogleUser = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
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

      swal({
        title: "Account created successfully",
        text: "Go ahead and log in!",
        icon: "success",
        button: "OK",
      });
      router.push("/signin");
    } catch (err) {
      swal({
        title: "Oops account not created ",
        text: "We are sorry, but we could not log you in. Please ensure that you have filled out the form correctly or check your internet connection.",
        icon: "error",
        button: "Try Again",
      });
    }
  };

  return (
    <div className={styles.signup}>
      <div className={styles.overlay}>
        <div className={styles.signupForm}>
          <h2 className={styles.signupHead}>Register your Account</h2>
          <form onSubmit={handleCreateUser}>
            <div className="mb-4">
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
              />
            </div>
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
            <div className="mb-4">
              <label htmlFor="confirm_password" className={styles.label}>
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={styles.input}
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="mr-2"
                />
                <label htmlFor="terms" className="text-sm text-black">
                  I agree to the{" "}
                  <a href="#" className="text-white hover:underline">
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button type="submit" className={styles.btnSignup}>
              Register
            </button>
            <hr />

            <div className="flex justify-center my-4 flex-center">
              <button
                type="button"
                onClick={handleGoogleUser}
                className={styles.btnGoogle}
              >
                <FcGoogle className="mx-2 lg:text-2xl" />
                Or continue with Google
              </button>
            </div>
          </form>
          <p className="mt-4 text-sm text-center text-slate-900">
            Already have an account?{" "}
            <a href="/signin" className="text-white hover:underline">
              SignIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
