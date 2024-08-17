"use client";

// import ModeToggle from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { UserProfile } from "@/components/UserProfile";
// import config from "@/config";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { BotIcon, Folder, HomeIcon, Settings } from "lucide-react";
import Link from "next/link";

export default function DashboardTopNav({ children }) {
  return (
    <div className="flex flex-col">
      <header className="flex h-14 lg:h-[55px] items-center gap-4 border-b px-3">
        <Dialog>
          <SheetTrigger className="min-[1024px]:hidden p-2 transition">
            <HamburgerMenuIcon />
            <Link href="/dashboard">
              <span className="sr-only">Home</span>
            </Link>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <Link href="/">
                <SheetTitle>HealthSmart Flashcard</SheetTitle>
              </Link>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-[1rem]">
              <DialogClose asChild>
                <Link href="/dashboard">
                  <Button variant="outline" className="w-full">
                    <HomeIcon className="w-4 h-4 mr-2" />
                    Home
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/dashboard/generate">
                  <Button variant="outline" className="w-full">
                    <BotIcon className="w-4 h-4 mr-2" />
                    Generate Flashcards
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/dashboard/flashcards">
                  <Button variant="outline" className="w-full">
                    <Folder className="w-4 h-4 mr-2" />
                    Flashcards
                  </Button>
                </Link>
              </DialogClose>
              <Separator className="my-3" />
              <DialogClose asChild>
                <Link href="/dashboard/settings">
                  <Button variant="outline" className="w-full">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Button>
                </Link>
              </DialogClose>
            </div>
          </SheetContent>
        </Dialog>
        <div className="flex items-center justify-center gap-2 ml-auto">
          {/* {config?.auth?.enabled && <UserProfile />}
          <ModeToggle /> */}
          <UserProfile />
        </div>
      </header>
      {children}
    </div>
  );
}
