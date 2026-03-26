import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <nav className="border-b border-gray-200 bg-white">
            <div className="container mx-auto flex h-16 items-center px-4 justify-between">
                <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-primary">
                <Briefcase />
                Job Application Tracker
                </Link>

                {/* Login and Signup buttons */}
                <div className="flex item-center gap-1">
                    <Link href="/sign-in">
                    <Button variant=" ghost " className="text-black hover:text-primary">
                        Log in
                    </Button>
                    </Link>

                    <Link href="/sign-up">
                    <Button className="text-white hover:text-black">
                        Start for Free
                    </Button>
                    </Link>
                </div>
            </div>

        </nav>
    )
}