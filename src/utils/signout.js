'use client'
import { signOut } from "firebase/auth";
import { auth } from '../../config/firebase'
import { useRouter } from 'next/navigation';

export default function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("You have signed out successfully from this application.");
      router.push('/'); 
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <button onClick={handleSignOut} className="bg-blue-800 text-white">
      Sign Out
    </button>
  );
}
