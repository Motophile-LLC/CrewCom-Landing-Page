"use client";

import { MapPin, ListChecks, Compass } from "lucide-react";

export function DestinationRules() {
  return (
    <section className="py-28">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-2">
        <div className="metal-panel rounded-xl p-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-3 py-1.5">
            <Compass className="h-4 w-4 text-primary" />
            <span className="font-display text-xs uppercase tracking-widest text-primary">
              Never lose the Crew
            </span>
          </div>
          <h3 className="font-display text-3xl font-bold uppercase leading-tight">
            Next destination, shared instantly
          </h3>
          <p className="mt-4 text-muted-foreground">
            The Road Captain drops a link to the next stop. Every rider opens
            it in whatever GPS app they already trust — Google Maps, Waze,
            Apple Maps, their bike&apos;s built-in nav. If someone drifts
            from the pack, they&apos;re never actually lost.
          </p>
          <div className="mt-6 flex items-center gap-3 rounded-md border border-white/10 bg-black/30 px-4 py-3">
            <MapPin className="h-4 w-4 shrink-0 text-primary" />
            <span className="truncate font-display text-sm tracking-wide text-muted-foreground">
              crewcom.app/go/blue-ridge-overlook-stop-3
            </span>
          </div>
        </div>

        <div className="metal-panel rounded-xl p-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-3 py-1.5">
            <ListChecks className="h-4 w-4 text-primary" />
            <span className="font-display text-xs uppercase tracking-widest text-primary">
              Set the tone before you roll
            </span>
          </div>
          <h3 className="font-display text-3xl font-bold uppercase leading-tight">
            Ride Rules, your Crew&apos;s way
          </h3>
          <p className="mt-4 text-muted-foreground">
            Write the rules once, and every rider who joins sees them.
            Comms etiquette, no-radio-silence zones, music-sharing policy —
            whatever keeps your Crew running smooth.
          </p>
          <ul className="mt-6 space-y-2">
            {[
              "Road Captain calls take priority, always",
              "Music ducks automatically below 20% during calls",
              "New riders mute on join until introduced",
            ].map((rule) => (
              <li
                key={rule}
                className="flex items-center gap-3 rounded-md border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-muted-foreground"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
