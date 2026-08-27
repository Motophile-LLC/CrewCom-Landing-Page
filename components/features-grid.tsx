"use client";

import {
  Bluetooth,
  Users,
  MapPin,
  Shield,
  LogIn,
  Hash,
  Volume2,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Bluetooth,
    title: "Works With Any Bluetooth",
    desc: "No brand lock-in. If your helmet, headset, or earbuds pair over Bluetooth, they work with CrewCom — Android or iPhone, mix and match across the whole Crew.",
    span: "lg:col-span-2",
  },
  {
    icon: Users,
    title: "16 Riders Per Crew",
    desc: "Big group rides, one channel. Everyone hears everyone, clearly, from the front of the pack to the sweep.",
    span: "",
  },
  {
    icon: Shield,
    title: "Road Captain Ducking",
    desc: "The Road Captain can duck every rider's audio to cut through with critical calls — hazards, fuel stops, route changes — instantly.",
    span: "",
  },
  {
    icon: MapPin,
    title: "Live Next-Destination Link",
    desc: "Share the next stop as a link. Riders open it in their own GPS app of choice, so nobody's stuck without navigation if they get separated.",
    span: "lg:col-span-2",
  },
  {
    icon: Hash,
    title: "Customizable Ride Rules",
    desc: "Set the tone before you roll — comms etiquette, speed calls, hand-signal reminders, no-fly topics. Ride Rules live in the Crew for everyone to see.",
    span: "",
  },
  {
    icon: LogIn,
    title: "Google & Apple SSO",
    desc: "Sign in with the account you already have. No new password to remember at a gas stop.",
    span: "",
  },
  {
    icon: Zap,
    title: "QR Crew Joining",
    desc: "Scan, join, ride. New riders hop into a Crew in seconds — perfect for meetups and chapter rides with faces you just met.",
    span: "",
  },
  {
    icon: Volume2,
    title: "Adjustable Ducking & Volumes",
    desc: "Dial in how aggressively voices duck the music or road noise, and set individual rider volumes so the loud one doesn't blow out your ears.",
    span: "lg:col-span-2",
  },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="font-display text-sm uppercase tracking-[0.3em] text-primary">
            Built for the road
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
            Everything a Crew needs, nothing a gearbox doesn&apos;t
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className={`metal-panel group relative overflow-hidden rounded-lg p-6 transition-colors hover:border-primary/40 ${f.span}`}
            >
              <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="mb-4 inline-flex items-center justify-center rounded-md border border-primary/30 bg-primary/10 p-3">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold uppercase tracking-wide">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
