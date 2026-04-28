import LandImage from "@/components/landPageImage";
import { Button } from "@/components/ui/button";
import ParticlesBackground from "@/components/ParticlesBackground";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-transparent">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative container mx-auto px-4 py-32 overflow-hidden">
          <ParticlesBackground />
          <div className="mx-auto max-w-4xl text-center flex flex-col items-center relative z-10">
            <img src={"/Logo.svg"} alt="Logo" className="h-32 w-30 align-middle" />
            <h3 className="text-white text-5xl font-bold mb-3">
              Beginning of a new era for
            </h3>
            <h1 className="text-secondary text-7xl font-bold mb-8">
              Job Tracking Applications
            </h1>
            <p className="text-chart-1 mb-10 text-xl">
              Capture, Manage and organize your jobs in one place.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href="/sign-up">
                <Button size="lg" variant="secondary" className="px-8 height-12 text-lg font-medium">
                  Try for Free <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <p className="text-sm text-chart-1">
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
