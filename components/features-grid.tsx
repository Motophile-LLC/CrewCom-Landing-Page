"use client";

import {
  VolumeX,
  Waves,
  Send,
  Camera,
  Ticket,
  Coins,
  Clock,
  Wrench,
} from "lucide-react";

const features = [
  {
    icon: VolumeX,
    title: "Priority Ducking (15%)",
    desc: "Safety first on the highway. When a Host or Road Captain speaks, other rider streams dynamically duck down to 15% volume, cutting through wind and music instantly.",
    span: "lg:col-span-2",
  },
  {
    icon: Waves,
    title: "24 kbps DSP Suppression",
    desc: "Low-latency WebRTC wideband audio configured with the 24 kbps speech preset. Enhanced with hardware echo cancellation and exhaust noise filtering.",
    span: "",
  },
  {
    icon: Send,
    title: "Supabase Realtime Sync",
    desc: "Broadcast route waypoints in real-time over Postgres WAL change-data-capture channels. Keep the pack perfectly in sync with zero latency.",
    span: "",
  },
  {
    icon: Camera,
    title: "Camera QR Pairing",
    desc: "No typing while geared up. Scan the Host's on-screen QR code using expo-camera to join the group WebRTC voice room in a single second.",
    span: "",
  },
  {
    icon: Ticket,
    title: "$2.99 Weekend Pass",
    desc: "No recurring commitment required. Buy a non-recurring 48-Hour Weekend Pass to unlock full 16-rider Club Host privileges for single big runs.",
    span: "lg:col-span-2",
  },
  {
    icon: Coins,
    title: "Host-Pays Architecture",
    desc: "Eliminate meetup friction. Only the room Host needs a paid subscription—guest riders join and talk for free, forever.",
    span: "",
  },
  {
    icon: Clock,
    title: "15-Min Room Cleanup",
    desc: "Automated, serverless edge functions monitor room activity and automatically tear down empty rooms 15 minutes after inactivity.",
    span: "lg:col-span-2",
  },
  {
    icon: Wrench,
    title: "1-Click Diagnostics",
    desc: "Guided support wizard uploads hardware and session logs directly to Supabase support_diagnostics table with RLS disabled to prevent lockouts.",
    span: "lg:col-span-2",
  },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="py-28 bg-black/20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="font-display text-sm uppercase tracking-[0.3em] text-primary font-bold">
            Built for the road
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-tight sm:text-5xl">
            Everything a Crew needs, nothing a gearbox doesn&apos;t
          </h2>
          <p className="mt-4 text-muted-foreground text-base">
            Engineered specifically for riders, our technology addresses real-world highway issues like wind noise, glove compatibility, and complex pairing steps.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className={`metal-panel group relative overflow-hidden rounded-lg p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 ${f.span}`}
            >
              <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="mb-4 inline-flex items-center justify-center rounded-md border border-primary/30 bg-primary/10 p-3">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-foreground">
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
