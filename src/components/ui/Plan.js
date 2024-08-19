import Image from "next/image";
import basic from "../../../public/assets/basic plan.svg";
import premium from "../../../public/assets/premium plan.svg";
import premiumPlus from "../../../public/assets/premium plus.svg";
import { BsCheck2 } from "react-icons/bs";
import styles from "../../../styles/Navbar.module.css";
import Link from "next/link";
import getStripe from "@/utils/get-stripe";

export default function Plan() {
  //   const handleProPlan = async () => {
  //     const checkoutSession = await fetch("/api/checkout_sessions", {
  //       method: "POST",
  //       headers: { origin: "http://localhost:3000" },
  //     });
  //     const checkoutSessionJson = await checkoutSession.json();

  //     const stripe = await getStripe();
  //     const { error } = await stripe.redirectToCheckout({
  //       sessionId: checkoutSessionJson.id,
  //     });

  //     if (error) {
  //       console.warn(error.message);
  //     }
  //   };

  return (
    <div className="max-w-5xl px-4 mx-auto mt-8" id="plan">
      <div className="mb-16 leading-8 text-center">
        <h3 className={styles.plan}>Health Plans</h3>
        <p>Choose the plan that works for you</p>
      </div>
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
        {/* Basic Plan */}
        <div className="relative flex flex-col p-8 border border-blue-800 shadow-lg rounded-xl">
          <div className="flex items-center">
            <Image src={basic} alt="basic-plan" width={50} height={50} />
            <div className="ml-4">
              <h3 className="text-2xl font-semibold text-slate-500">
                Basic Plan
              </h3>
              <p className="font-bold text-slate-800">Free</p>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex items-start">
              <BsCheck2 className="text-xl text-blue-700" />
              <p className="ml-2">Access to 50 flashcards</p>
            </div>
            <div className="flex items-start mt-2">
              <BsCheck2 className="text-xl text-blue-700" />
              <p className="ml-2">Basic health and first aid topics</p>
            </div>
            <div className="flex items-start mt-2">
              <BsCheck2 className="text-xl text-blue-700" />
              <p className="ml-2">Create and study flashcards</p>
            </div>
            <div className="flex items-start mt-2">
              <BsCheck2 className="text-xl text-blue-700" />
              <p className="ml-2">Community access</p>
            </div>
          </div>
          <div className={styles.btnPlanContainer}>
            <Link href="#">
              <button className={styles.btnPlan}>Get plan</button>
            </Link>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="relative flex flex-col p-8 text-white bg-blue-900 rounded-xl">
          <div className="flex items-center">
            <Image src={premium} alt="premium-plan" width={50} height={50} />
            <h3 className="ml-4 text-2xl font-semibold">Pro</h3>
          </div>
          <div className="mt-10">
            <div className="flex items-start">
              <BsCheck2 className="text-xl text-green-700" />
              <p className="ml-2">Access to unlimited flashcards</p>
            </div>
            <div className="flex items-start mt-2">
              <BsCheck2 className="text-xl text-green-700" />
              <p className="ml-2">Advanced health and first aid topics</p>
            </div>
            <div className="flex items-start mt-2">
              <BsCheck2 className="text-xl text-green-700" />
              <p className="ml-2">Create, study, and share flashcards</p>
            </div>
            <div className="flex items-start mt-2">
              <BsCheck2 className="text-xl text-green-700" />
              <p className="ml-2">Community access with discussion forums</p>
            </div>
            <div className="flex items-start mt-2">
              <BsCheck2 className="text-xl text-green-700" />
              <p className="ml-2">Ad-free experience</p>
            </div>
          </div>
          <div className={styles.btnPlanContainer}>
            <Link href="#">
              <button className={styles.btnPlan2}>Get plan</button>
            </Link>
          </div>
        </div>

        {/* Premium Plus Plan */}
        <div className="flex flex-col p-8 border border-blue-800 shadow-lg rounded-xl">
          <div className="flex items-center">
            <Image
              src={premiumPlus}
              alt="premiumplus-plan"
              width={50}
              height={50}
            />
            <h3 className="ml-4 text-2xl font-semibold text-slate-500">
              Premium Plus
            </h3>
          </div>
          <div className="mt-10">
            <div className="flex items-start">
              <BsCheck2 className="text-xl text-yellow-700" />
              <p className="ml-2">All Pro Plan features</p>
            </div>
            <div className="flex items-start mt-2">
              <BsCheck2 className="text-xl text-yellow-700" />
              <p className="ml-2">Personalized study plans</p>
            </div>
            <div className="flex items-start mt-2">
              <BsCheck2 className="text-xl text-yellow-700" />
              <p className="ml-2">Priority customer support</p>
            </div>
            <div className="flex items-start mt-2">
              <BsCheck2 className="text-xl text-yellow-700" />
              <p className="ml-2">Access to exclusive webinars and content</p>
            </div>
            <div className="flex items-start mt-2">
              <BsCheck2 className="text-xl text-yellow-700" />
              <p className="ml-2">Offline access to flashcards</p>
            </div>
          </div>
          <div className={styles.btnPlanContainer}>
            <Link href="#">
              <button className={styles.btnPlan}>Get plan</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
