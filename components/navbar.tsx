"use client";

import Link from "next/link";
import { useSession } from "@/lib/auth/auth-client";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import SignOutButton from "./sign-out-btn";

export default function Navbar() {
  const { data: session, isPending } = useSession();

  // ✅ Prevent hydration mismatch
  if (isPending) {
    return null;
  }

  const isLoggedIn = !!session?.user;
  const homeHref = isLoggedIn ? "/dashboard" : "/";

  return (
    <nav className="border-b border-none bg-transparent">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        {/* Logo */}
        <Link
          href={homeHref}
          className="flex items-center gap-2 text-xl font-semibold text-white"
        >
          <img src="/Logo.svg" alt="Logo" className="h-8 w-8" />
          Phoenix Tracker
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link href="/dashboard">
                <Button
                  variant="ghost"
                  className="text-gray-200 hover:text-secondary hover:bg-transparent"
                >
                  Dashboard
                </Button>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-white">
                        {session.user.name?.[0]?.toUpperCase() ?? "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {session.user.name ?? "User"}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {session.user.email ?? ""}
                      </p>
                    </div>
                  </DropdownMenuLabel>

                  <SignOutButton />
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link href="/sign-in">
                <Button
                  variant="ghost"
                  className="text-gray-200 hover:text-secondary hover:bg-transparent"
                >
                  Log In
                </Button>
              </Link>

              <Link href="/sign-up">
                <Button
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium"
                >
                  Start for free
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
