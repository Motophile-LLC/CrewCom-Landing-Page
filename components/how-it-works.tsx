"use client";

import { QrCode, PlusCircle, Radio, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: PlusCircle,
    title: "1. Create Room",
    desc: "A licensed Host creates the session. Under our Host-Pays model, guests join and chat completely free.",
  },
  {
    icon: QrCode,
    title: "2. Scan QR to Join",
    desc: "Riders point their phone camera at the QR code (expo-camera room scanning) and pair instantly in one click.",
  },
  {
    icon: Radio,
    title: "3. Audio & Ducking Go Live",
    desc: "Prinstine 24 kbps WebRTC wideband voice activates. Priority ducking dynamically drops standard rider feeds to 15%.",
  },
  {
    icon: RefreshCw,
    title: "4. Realtime GPS & Logs Sync",
    desc: "Route waypoints sync live via Postgres WAL channels. If issues arise, 1-click diagnostics send device logs directly to Supabase.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24 bg-black/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="font-display text-sm uppercase tracking-[0.3em] text-primary font-bold">
            Rider Workflow
          </span>
          <h2 className="mt-2 font-display text-4xl font-extrabold uppercase leading-tight sm:text-5xl text-foreground">
            Four Steps to Roll
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Zero configuration. No proprietary headsets to chain link. Get your entire crew on a single unified channel before your kickstands are up.
          </p>
        </div>

        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="signal-divider absolute left-0 right-0 top-10 hidden lg:block" />
          {steps.map((step, i) => (
            <div key={step.title} className="relative group">
              <div className="metal-panel relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-background group-hover:border-primary/40 transition-colors duration-300">
                <step.icon className="h-8 w-8 text-primary" />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary font-display text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-wide text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
