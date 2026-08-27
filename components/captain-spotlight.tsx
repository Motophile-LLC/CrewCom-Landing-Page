"use client";

import { Shield, Volume2, MapPin } from "lucide-react";

export function CaptainSpotlight() {
  return (
    <section id="captain" className="relative overflow-hidden bg-black/40 py-28">
      <div className="signal-divider absolute left-0 top-0 w-full" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <span className="font-display text-sm uppercase tracking-[0.3em] text-primary">
            Chain of command
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
            The Road Captain
            <br />
            always cuts through
          </h2>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Every Crew rides better with a lead voice. Give one rider Road
            Captain status and they can duck everyone else&apos;s audio the
            moment it matters — a hazard call, a route change, a &quot;pull
            over now.&quot; No shouting over wind noise, no missed calls at
            80 on the interstate.
          </p>

          <div className="mt-10 space-y-5">
            {[
              {
                icon: Shield,
                title: "Priority Channel",
                desc: "Road Captain audio automatically ducks music and other riders' chatter.",
              },
              {
                icon: MapPin,
                title: "Route Authority",
                desc: "Pushes the live next-destination link to the whole Crew in one tap.",
              },
              {
                icon: Volume2,
                title: "Full Volume Control",
                desc: "Fine-tune how hard the duck hits and how loud each rider comes through.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-display text-base font-semibold uppercase tracking-wide">
                    {item.title}
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="metal-panel diagonal-cut relative overflow-hidden rounded-xl p-8">
            <div className="scan-line absolute left-0 top-0 h-1/2 w-full bg-gradient-to-b from-primary/10 to-transparent" />
            <div className="mb-6 flex items-center justify-between">
              <span className="font-display text-xs uppercase tracking-widest text-muted-foreground">
                Live Crew Channel
              </span>
              <span className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 font-display text-xs uppercase tracking-widest text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> On Air
              </span>
            </div>

            <div className="space-y-3">
              {[
                { name: "Road Captain — Dez", active: true, level: 100 },
                { name: "Rider — Marisol", active: false, level: 40 },
                { name: "Rider — Jonesy", active: false, level: 15 },
                { name: "Rider — Ay", active: false, level: 60 },
              ].map((rider) => (
                <div
                  key={rider.name}
                  className={`flex items-center justify-between rounded-md border px-4 py-3 ${
                    rider.active
                      ? "border-primary/50 bg-primary/10"
                      : "border-white/10 bg-white/[0.02]"
                  }`}
                >
                  <span
                    className={`font-display text-sm uppercase tracking-wide ${
                      rider.active ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {rider.name}
                  </span>
                  <div className="flex items-end gap-0.5">
                    {[4, 8, 12, 8, 4].map((h, i) => (
                      <span
                        key={i}
                        className={`waveform-bar w-1 rounded-full ${
                          rider.active ? "bg-primary" : "bg-muted-foreground/40"
                        }`}
                        style={{
                          height: `${(h * rider.level) / 100}px`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-md border border-dashed border-primary/30 bg-primary/5 px-4 py-3 text-center font-display text-xs uppercase tracking-widest text-primary">
              &quot;Merging left, stay in formation&quot; — duck active
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
