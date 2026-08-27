"use client";

import { Mic, Volume2, MapPin, Shield } from "lucide-react";

export function GloveUiShowcase() {
  return (
    <section id="glove" className="bg-black/40 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-[320px]">
            <div className="metal-panel rounded-[2.5rem] p-4 shadow-2xl shadow-black/60">
              <div className="rounded-[2rem] border border-white/10 bg-background/60 p-5">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-display text-xs uppercase tracking-widest text-muted-foreground">
                    Crew: Blue Ridge Riders
                  </span>
                  <span className="rounded-full bg-primary/20 px-2 py-0.5 font-display text-[10px] uppercase tracking-widest text-primary">
                    8 / 16
                  </span>
                </div>

                <div className="mb-6 flex justify-center">
                  <button className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-primary bg-primary/20 shadow-[0_0_40px_rgba(255,122,26,0.35)]">
                    <Mic className="h-10 w-10 text-primary" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-5">
                    <Volume2 className="h-7 w-7 text-primary" />
                    <span className="font-display text-[11px] uppercase tracking-widest">
                      Volumes
                    </span>
                  </button>
                  <button className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-5">
                    <MapPin className="h-7 w-7 text-primary" />
                    <span className="font-display text-[11px] uppercase tracking-widest">
                      Next Stop
                    </span>
                  </button>
                  <button className="col-span-2 flex items-center justify-center gap-2 rounded-2xl border border-primary/40 bg-primary/10 py-5">
                    <Shield className="h-6 w-6 text-primary" />
                    <span className="font-display text-[11px] uppercase tracking-widest text-primary">
                      Road Captain Duck
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="font-display text-sm uppercase tracking-[0.3em] text-primary">
            Designed for gloves, not fingertips
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
            Big buttons. Fast taps. Zero fumbling.
          </h2>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            You&apos;re not unzipping a glove at 65 mph to mute yourself.
            Every control in CrewCom is oversized, high-contrast, and
            placed for a thumb in full riding gear — at a stoplight or a
            dead stop, one tap and you&apos;re done.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Oversized push-to-talk target, impossible to miss
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              High-contrast icons legible in direct sun or at night
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              One-tap access to volumes, ducking, and next destination
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
