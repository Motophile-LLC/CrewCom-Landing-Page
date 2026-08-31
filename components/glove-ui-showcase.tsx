"use client";
import { useState } from "react";
import { Mic, MicOff, Volume2, MapPin, Shield } from "lucide-react";

export function GloveUiShowcase() {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <section id="glove" className="bg-black/40 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-[300px]">
            <div className="metal-panel rounded-[2rem] p-4 shadow-2xl border border-white/10 bg-background/90">
              <div className="rounded-[1.5rem] border border-white/5 bg-background p-5 relative overflow-hidden">
                <div className="mb-6 flex justify-between text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                  <span>Crew: Blue Ridge</span>
                  <span className="text-primary">8 / 16 Riders</span>
                </div>
                {/* Oversized Mic Trigger */}
                <div className="mb-6 flex flex-col items-center">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className={`flex h-28 w-28 items-center justify-center rounded-full border-4 transition-all ${isMuted ? "border-destructive bg-destructive/10 text-destructive shadow-[0_0_20px_rgba(239,68,68,0.25)]" : "border-primary bg-primary/10 text-primary shadow-[0_0_30px_rgba(255,122,26,0.35)]"}`}
                  >
                    {isMuted ? <MicOff className="h-10 w-10" /> : <Mic className="h-10 w-10" />}
                  </button>
                  <span className={`text-[9px] uppercase tracking-widest font-bold mt-3 font-mono ${isMuted ? "text-destructive" : "text-primary animate-pulse"}`}>{isMuted ? "MICROPHONE MUTED" : "ON AIR (TRANSMITTING)"}</span>
                </div>
                {/* Secondary buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex flex-col items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 py-3 hover:bg-white/10"><Volume2 className="h-5 w-5 text-primary" /><span className="text-[9px] uppercase tracking-widest font-bold">Volumes</span></button>
                  <button className="flex flex-col items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 py-3 hover:bg-white/10"><MapPin className="h-5 w-5 text-primary" /><span className="text-[9px] uppercase tracking-widest font-bold">Next Stop</span></button>
                  <button className="col-span-2 flex items-center justify-center gap-1.5 rounded-xl border border-primary/30 bg-primary/10 py-3 hover:bg-primary/20 text-primary text-[9px] uppercase tracking-widest font-bold"><Shield className="h-4 w-4" /> Road Captain Duck</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="font-display text-sm uppercase tracking-[0.3em] text-primary font-bold">Designed for heavy leather gloves</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-tight sm:text-5xl text-foreground">Big Buttons. Zero Fumble.</h2>
          <p className="mt-6 text-muted-foreground text-sm sm:text-base leading-relaxed">
            You should never have to unzip your riding jacket, pull off a glove, or struggle with tiny headset dials at high speed. CrewCom features a specialized <strong className="text-foreground">Glove UI</strong>: high-contrast layouts, oversized tap targets, and a single-tap microphone mute trigger designed for heavy motorcycle gear.
          </p>
          <div className="mt-6 space-y-3 text-sm text-muted-foreground">
            <div className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /><p><strong className="text-foreground font-semibold">Oversized Mute Target:</strong> Giant button targets allow quick, blind-tap mute actions on handlebar mounts.</p></div>
            <div className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /><p><strong className="text-foreground font-semibold">High-Contrast:</strong> Optimized for direct mid-day solar reflection or night operation legibility.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
