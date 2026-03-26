import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
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
        <section className="border-t bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
            {/* Tabs */}
              <div className="flex gap-2 justify-center mb-8">
                <Button>Organize Applications</Button>
                <Button>Get Hired</Button>
                <Button>Manage Boards</Button>
              </div>
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
                <Image
                  src="/hero-images/hero1.png"
                  alt="Organize Applications"
                  width={1200}
                  height={800} />

                  <Image
                  src="/hero-images/hero2.png"
                  alt="Manage All boards"
                  width={1200}
                  height={800} />

                  <Image
                  src="/hero-images/hero3.png"
                  alt="Get Hired"
                  width={1200}
                  height={800} />
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
