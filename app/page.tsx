import LandImage from "@/components/landPageImage";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
            <img src={"/Logo.svg"} alt="Logo" className="h-32 w-30 align-middle" />
            <h3 className="text-black text-5xl font-bold mb-3">
              Beginning of a new era for
            </h3>
            <h1 className="text-primary text-7xl font-bold mb-8">
              Task Tracking Applications
            </h1>
            <p className="text-muted-foreground mb-10 text-xl">
              Capture, Manage and organize your tasks in one place.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href="/sign-up">
                <Button size="lg" variant="secondary" className="px-8 height-12 text-lg font-medium">
                  Try for Free <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">
                Free Forever. <br />
                No need to waste your time on pop-up ads anymore!
              </p>
            </div>
          </div>
        </section>

        {/* Hero Image Section */}
        <LandImage />
        
      </main>

    </div>
  );
}
