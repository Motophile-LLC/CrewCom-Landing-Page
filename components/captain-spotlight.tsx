"use client";
import { Check, Shield, Zap, Sparkles, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JoinBetaModal } from "@/components/join-beta-modal";

const tiers = [
  {
    name: "Free", price: "$0", period: "forever", riders: "Max 2 Riders", time: "45-Min Room Cap",
    desc: "For two riding buddies on casual commutes.",
    features: ["Standard WebRTC audio", "Glove-friendly mute target", "Manual room cleanup"]
  },
  {
    name: "Pro", price: "$4.99", period: "per month", riders: "Max 4 Riders", time: "Unlimited Time",
    desc: "For small weekend squads on long distance runs.",
    features: ["24 kbps speech preset", "Wind/exhaust noise filtering", "Automated 15-min cleanup"]
  },
  {
    name: "Group Leader", price: "$9.99", period: "per month", riders: "Max 10 Riders", time: "Unlimited Time",
    desc: "The sweet spot for local motorcycle clubs.",
    features: ["1 Road Captain promotion slot", "15% Leadership Priority Ducking", "Real-time waypoint broadcasts"],
    featured: true
  },
  {
    name: "Club Host", price: "$19.99", period: "per month", riders: "Max 16 Riders", time: "Unlimited Time",
    desc: "For full chapters, rallies, and multi-team road trips.",
    features: ["Unlimited Captain/Sweep roles", "Persistent Room URLs", "Live GPS map breadcrumbs"]
  }
];

export function CaptainSpotlight() {
  return (
    <section id="pricing" className="py-24 bg-black/40 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="font-display text-sm uppercase tracking-[0.3em] text-primary font-bold">Capacity & Pricing</span>
          <h2 className="mt-2 font-display text-4xl font-extrabold uppercase sm:text-5xl text-foreground">Host-Pays Group Plans</h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            Only the session host needs a paid plan. Guest riders join and chat 100% free with zero meetup friction.
          </p>
        </div>

        {/* Weekend Pass Banner */}
        <div className="mb-12 max-w-4xl mx-auto rounded-xl border border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-5 flex flex-col sm:flex-row items-center gap-4 justify-between">
          <div className="flex items-center gap-3 text-center sm:text-left flex-col sm:flex-row">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-primary/20 border border-primary/30">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <h4 className="font-display font-extrabold uppercase text-foreground text-sm sm:text-base">48-Hour Weekend Pass</h4>
                <span className="rounded bg-primary px-1.5 py-0.5 text-[8px] uppercase tracking-widest font-bold text-primary-foreground">Only $2.99</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">Non-recurring single-use pass granting 16-rider Club Host privileges for exactly 48 hours.</p>
            </div>
          </div>
          <JoinBetaModal><Button className="rounded bg-primary/20 hover:bg-primary text-primary-foreground font-bold tracking-wider uppercase text-[10px] px-4 py-4 shrink-0">Get Pass</Button></JoinBetaModal>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {tiers.map((t) => (
            <div key={t.name} className={`metal-panel rounded-xl p-5 flex flex-col justify-between relative transition-all ${t.featured ? "border-primary/50 bg-gradient-to-b from-primary/10 to-transparent shadow-lg shadow-primary/5 scale-102" : "border-white/10 bg-white/[0.01]"}`}>
              {t.featured && <span className="absolute top-3 right-3 rounded bg-primary px-1.5 py-0.5 text-[8px] uppercase tracking-widest font-extrabold text-primary-foreground"><Sparkles className="h-2 w-2 inline mr-0.5" /> Featured</span>}
              <div>
                <span className="font-display text-xs uppercase tracking-wider text-muted-foreground">{t.name}</span>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-display text-3xl font-extrabold text-foreground">{t.price}</span>
                  <span className="text-[10px] text-muted-foreground">/{t.period}</span>
                </div>
                <div className="mt-3 border-y border-white/5 py-2 space-y-0.5">
                  <div className="font-display text-xs uppercase tracking-wide font-extrabold text-primary flex items-center gap-1"><Zap className="h-3 w-3" /> {t.riders}</div>
                  <div className="text-[10px] text-muted-foreground font-bold uppercase font-mono">{t.time}</div>
                </div>
                <p className="mt-2 text-[11px] text-muted-foreground leading-normal">{t.desc}</p>
                <ul className="mt-4 space-y-2">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-1.5 text-[11px] text-muted-foreground leading-normal">
                      <Check className="h-3.5 w-3.5 shrink-0 text-primary mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6"><JoinBetaModal><Button className={`w-full py-4 rounded text-[10px] uppercase tracking-widest font-bold ${t.featured ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "bg-white/5 hover:bg-white/10 text-foreground border border-white/10"}`}>Choose {t.name}</Button></JoinBetaModal></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
