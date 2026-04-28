"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // ✅ stable + lightweight
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      className="absolute inset-0 -z-10"
      options={{
        background: { color: "transparent" },
        fpsLimit: 80,
        particles: {
          number: { value: 100 },
          opacity: {value: 0.4}, // 👈 lower = more subtle
          color: { value: "#ffffff"},
          links: {
            enable: true,
            distance: 150,
            color: "#ECA106",
            opacity: 0.2,
            width: 1,
            triangles: {
              enable: true,
              opacity: 0.01,
            },
          },
          move: {
            enable: true,
            speed: 1,
          },
          size: { value: 3 },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 200,
              links: { opacity: 0.8 },
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}