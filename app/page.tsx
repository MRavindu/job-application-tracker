import LandImage from "@/components/landPageImage";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black text-6xl font-bold mb-8">
              A Better way to track your job Applications
            </h1>
            <p className="text-muted-foreground mb-10 text-xl">
              Capture, Manage and organize your job search in one place.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href="/sign-up">
                <Button size="lg" className="px-8 height-12 text-lg font-medium">
                  Try for Free <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">
                Free Forever. No Credit Card Required!
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
