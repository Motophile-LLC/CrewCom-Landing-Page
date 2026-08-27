"use client";

import Image from "next/image";
import { ArrowRight, Users, Globe, Bluetooth } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JoinBetaModal } from "@/components/join-beta-modal";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-24 pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15 pulse-ring" />
        <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/25" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="font-display text-xs uppercase tracking-[0.2em] text-primary">
              Now boarding riders for early access
            </span>
          </div>

          <h1 className="font-display text-6xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Any bike.
            <br />
            <span className="text-primary">Any bluetooth.</span>
            <br />
            One crew.
          </h1>

          <p className="mt-6 max-w-xl font-display text-lg text-muted-foreground sm:text-xl">
            CrewCom is rider-to-rider communication over the internet —
            not a proprietary headset. Any phone, any Bluetooth, any
            distance. Roll out with up to 16 riders, one Road Captain, and
            zero dropped signal at the back of the pack.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <JoinBetaModal>
              <Button
                size="lg"
                className="rounded-sm font-display text-base uppercase tracking-widest"
              >
                Join the Beta <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </JoinBetaModal>
            <Button
              size="lg"
              variant="outline"
              className="rounded-sm border-white/20 font-display text-base uppercase tracking-widest hover:bg-white/5"
              onClick={() => {
                document.getElementById("how")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See How It Works
            </Button>
          </div>


          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Bluetooth className="h-4 w-4 text-primary" />
              <span className="font-display text-sm uppercase tracking-widest">
                Brand-agnostic Bluetooth
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Globe className="h-4 w-4 text-primary" />
              <span className="font-display text-sm uppercase tracking-widest">
                Internet range, not RF range
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-4 w-4 text-primary" />
              <span className="font-display text-sm uppercase tracking-widest">
                16 riders per Crew
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="float-slow relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-primary/20 blur-3xl" />
            <Image
              src="https://g.tlcdn.com/gen/7da43c69db7843bbab8e4bb0b21b6ef4.png"
              alt="CrewCom helmet comms icon"
              width={480}
              height={480}
              priority
              className="relative z-10 w-full max-w-[420px] rounded-[2rem] shadow-2xl shadow-black/60"
            />
          </div>

          <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-end gap-1 rounded-full bg-background/80 px-4 py-2 backdrop-blur">
            {[6, 14, 22, 12, 26, 10, 18, 8].map((h, i) => (
              <span
                key={i}
                className="waveform-bar w-1 rounded-full bg-primary"
                style={{ height: `${h}px`, animationDelay: `${i * 0.12}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
