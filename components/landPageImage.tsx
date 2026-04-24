"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";


export default function LandImage() {
  type Tab = "Workspace" | "Task" | "Statuses";
  const [activeTab, setActiveTab] = useState<Tab>("Workspace")

  return (
    <section className="border-t bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
            {/* Tabs */}
              <div className="flex gap-2 justify-center mb-8">
                <Button onClick={() => setActiveTab("Workspace")} className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "Workspace" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>Easy to use Workspace</Button>
                <Button onClick={() => setActiveTab("Task")} className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "Task" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>Add all your Applications</Button>
                <Button onClick={() => setActiveTab("Statuses")} className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "Statuses" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>Keep everything Tracked</Button>
              </div>
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
                {activeTab === "Workspace" && <Image
                  src="/hero-images/hero1.png"
                  alt="Organize Tasks"
                  width={1200}
                  height={800} />}

                {activeTab === "Task" && <Image
                src="/hero-images/hero2.png"
                alt="Manage All boards"
                width={1200}
                height={800} />}

                {activeTab === "Statuses" && <Image
                src="/hero-images/hero3.png"
                alt="Get Hired"
                width={1200}
                height={800} />}
              </div>
            </div>
          </div>
        </section>
  )
    
}