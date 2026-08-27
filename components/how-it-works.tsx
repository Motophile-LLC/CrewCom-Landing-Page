"use client";

import { QrCode, LogIn, Bluetooth, Radio } from "lucide-react";

const steps = [
  {
    icon: LogIn,
    title: "Sign In",
    desc: "Google or Apple SSO — you're in before your engine warms up.",
  },
  {
    icon: Bluetooth,
    title: "Pair Any Headset",
    desc: "Connect whatever Bluetooth comm you already own. No new hardware.",
  },
  {
    icon: QrCode,
    title: "Scan to Join",
    desc: "Point your camera at the Crew's QR code and you're on the channel.",
  },
  {
    icon: Radio,
    title: "Roll Out",
    desc: "Talk, listen, follow the next-destination link, ride the Rules.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="font-display text-sm uppercase tracking-[0.3em] text-primary">
            From parking lot to highway
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
            Rolling with a new Crew takes four steps
          </h2>
        </div>

        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="signal-divider absolute left-0 right-0 top-10 hidden lg:block" />
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="metal-panel relative z-10 flex h-20 w-20 items-center justify-center rounded-full">
                <step.icon className="h-8 w-8 text-primary" />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary font-display text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold uppercase tracking-wide">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
