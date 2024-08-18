"use client";

import { Separator } from "@/components/ui/separator";
import clsx from "clsx";
import { Folder, HomeIcon, Settings, BotIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTasks } from "react-icons/fa";

export default function DashboardSideBar() {
  const pathname = usePathname();

  return (
    <div className="hidden h-full border-r lg:block">
      <div className="flex flex-col h-full max-h-screen gap-2 ">
        <div className="flex h-[55px] items-center justify-between border-b px-3 w-full">
          <Link className="flex items-center gap-2 ml-1 font-semibold" href="/">
            <span className="">HealthSmart</span>
          </Link>
        </div>
        <div className="flex-1 py-2 overflow-auto ">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              className={clsx(
                "flex items-center gap-2 rounded-lg px-3 py-4 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-4 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50":
                    pathname === "/dashboard",
                }
              )}
              href="/dashboard"
            >
              <div className="p-1 bg-white border border-gray-400 rounded-lg dark:bg-black dark:border-gray-800">
                <HomeIcon className="w-3 h-3" />
              </div>
              Home
            </Link>
            {/* <Link
              className={clsx(
                "flex items-center gap-2 rounded-lg px-3 py-4 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-4 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50":
                    pathname === "/dashboard/generate",
                }
              )}
              href="/dashboard/generate"
            >
              <div className="p-1 bg-white border border-gray-400 rounded-lg dark:bg-black dark:border-gray-800">
                <BotIcon className="w-3 h-3" />
              </div>
              Generate Flashcard
            </Link> */}
            <Link
              className={clsx(
                "flex items-center gap-2 rounded-lg px-3 py-4 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-4 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50":
                    pathname === "/dashboard/flashcards",
                }
              )}
              href="/dashboard/flashcards"
            >
              <div className="p-1 bg-white border border-gray-400 rounded-lg dark:bg-black dark:border-gray-800">
                <Folder className="w-3 h-3" />
              </div>
              Flashcards
            </Link>
            {/* <Link
              className={clsx(
                "flex items-center gap-2 rounded-lg px-3 py-4 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-4 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50":
                    pathname === "/dashboard/finance",
                }
              )}
              href="/dashboard/finance"
            >
              <div className="p-1 bg-white border border-gray-400 rounded-lg dark:bg-black dark:border-gray-800">
                <Banknote className="w-3 h-3" />
              </div>
              Finance
            </Link> */}
            <Separator className="my-3" />
            <Link
              className={clsx(
                "flex items-center gap-2 rounded-lg px-3 py-4 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-4 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50":
                    pathname === "/dashboard/settings",
                }
              )}
              href="/dashboard/settings"
              id="onboarding"
            >
              <div className="p-1 bg-white border border-gray-400 rounded-lg dark:bg-black dark:border-gray-800">
                <Settings className="w-3 h-3" />
              </div>
              Settings
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
