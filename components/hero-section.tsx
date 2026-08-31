"use client";

import Image from "next/image";
import { ArrowRight, Volume2, ShieldAlert, Zap, QrCode, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JoinBetaModal } from "@/components/join-beta-modal";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-24 pt-36 md:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 bg-[radial-gradient(circle_at_center,rgba(255,122,26,0.05)_0%,transparent_70%)]" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15 pulse-ring" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="font-display text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Now boarding riders for early access
            </span>
          </div>

          <h1 className="font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Any bike.
            <br />
            <span className="text-primary">Any bluetooth.</span>
            <br />
            One crew.
          </h1>

          <p className="mt-6 max-w-2xl font-display text-lg text-muted-foreground sm:text-xl leading-relaxed">
            CrewCom is a low-latency WebRTC motorcycle group voice and navigation app. Experience pristine <strong className="text-foreground">24 kbps wideband audio</strong> (AudioPresets.speech), hardware background wind/exhaust noise suppression, and our friction-free <strong className="text-foreground">Host-Pays capacity model</strong> where guests join and chat 100% free. Scan a QR code to pair, and ride safely with dynamic priority ducking.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <JoinBetaModal>
              <Button
                size="lg"
                className="rounded-sm font-display text-base uppercase tracking-widest bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 shadow-lg shadow-primary/20"
              >
                Join Beta Access <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </JoinBetaModal>
            
            <Button
              size="lg"
              variant="outline"
              className="rounded-sm border-white/20 font-display text-base uppercase tracking-widest hover:bg-white/5 px-8 py-6 text-foreground"
              onClick={() => {
                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See Host Plans
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Volume2 className="h-4 w-4 text-primary" />
              <span className="font-display text-xs uppercase tracking-widest font-semibold">
                WebRTC AudioPreset.speech
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <ShieldAlert className="h-4 w-4 text-primary" />
              <span className="font-display text-xs uppercase tracking-widest font-semibold">
                Dynamic Ducking (15% limit)
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <QrCode className="h-4 w-4 text-primary" />
              <span className="font-display text-xs uppercase tracking-widest font-semibold">
                expo-camera Room Sync
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center z-10">
          <div className="float-slow relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-primary/20 blur-3xl" />
            <Image
              src="https://g.tlcdn.com/gen/7da43c69db7843bbab8e4bb0b21b6ef4.png"
              alt="CrewCom helmet comms icon"
              width={480}
              height={480}
              priority
              className="relative z-10 w-full max-w-[380px] rounded-[2rem] shadow-2xl shadow-black/60 border border-white/10"
            />
          </div>

          <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-end gap-1 rounded-full bg-background/90 border border-white/10 px-4 py-2 backdrop-blur shadow-xl">
            <span className="font-display text-[9px] uppercase tracking-widest text-primary mr-2 font-semibold self-center">
              WebRTC Active
            </span>
            {[6, 18, 28, 12, 32, 10, 22, 14, 8].map((h, i) => (
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
