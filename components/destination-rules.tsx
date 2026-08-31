"use client";
import { useState, useEffect } from "react";
import { Mic, MicOff, Volume2, Shield, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DestinationRules() {
  const [active, setActive] = useState(false);
  const [bars, setBars] = useState<number[]>([]);
  useEffect(() => {
    const t = setInterval(() => {
      setBars(Array.from({ length: 15 }, () => Math.floor(Math.random() * 80) + 20));
    }, 150);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="ducking-demo" className="py-24 relative overflow-hidden bg-black/20">
      <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded border border-primary/30 bg-primary/10 px-3 py-1 text-xs uppercase tracking-widest text-primary font-bold">
            <Shield className="h-4 w-4" /> Priority Comms
          </div>
          <h2 className="font-display text-4xl font-extrabold uppercase leading-tight sm:text-5xl text-foreground">
            Leadership Priority Ducking
          </h2>
          <p className="mt-6 text-muted-foreground text-sm sm:text-base leading-relaxed">
            When riding in groups, safety depends on clear comms. CrewCom features low-latency WebRTC priority ducking: the millisecond a session Host or designated Road Captain speaks, other rider feeds dynamically drop to exactly <strong className="text-primary font-bold">15% volume</strong>, resuming automatically when they finish.
          </p>
          <div className="mt-6 space-y-3 text-sm text-muted-foreground">
            <div className="flex gap-2"><Radio className="h-4 w-4 text-primary shrink-0 mt-1" /> <span><strong>Zero-Lag Override:</strong> Under 100ms processing lag at the stream mixer level.</span></div>
            <div className="flex gap-2"><Volume2 className="h-4 w-4 text-primary shrink-0 mt-1" /> <span><strong>Smooth Fade:</strong> Standard feeds slide back to 100% in 1.2 seconds.</span></div>
          </div>
        </div>

        <div className="metal-panel p-6 rounded-xl border border-white/10 bg-black/40 relative">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-display text-xs uppercase tracking-wider text-muted-foreground">Live Mixer Channels</span>
            <span className={`text-[10px] font-bold border rounded px-2 py-0.5 ${active ? "bg-primary/20 border-primary/50 text-primary" : "bg-white/5 border-white/10 text-muted-foreground"}`}>{active ? "DUCKING ACTIVE (15%)" : "STANDARD MIXER"}</span>
          </div>
          <div className="space-y-3">
            <div className={`p-3 rounded border transition-colors ${active ? "bg-primary/10 border-primary/30" : "bg-white/[0.01] border-white/5"}`}>
              <div className="flex justify-between text-xs font-semibold uppercase mb-1.5">
                <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-primary" /> Road Captain (Dez)</span>
                <span className={active ? "text-primary font-bold" : "text-muted-foreground"}>{active ? "100% VOLUME" : "SILENT"}</span>
              </div>
              <div className="h-5 bg-black/30 rounded flex items-center px-1.5 gap-0.5">
                {active ? bars.map((h, i) => <span key={i} className="h-full w-full bg-primary rounded-sm transition-all duration-150" style={{ height: `${h}%` }} />) : <span className="text-[9px] font-mono uppercase text-muted-foreground tracking-wider pl-1">Mic Silent</span>}
              </div>
            </div>
            {["Marisol", "Jonesy"].map((rider, ridx) => (
              <div key={rider} className="p-3 rounded border border-white/5 bg-white/[0.01]">
                <div className="flex justify-between text-xs font-semibold uppercase mb-1.5 text-muted-foreground">
                  <span>Rider ({rider})</span>
                  <span className={active ? "text-amber-500 font-bold" : "text-emerald-500"}>{active ? "15% (Ducked)" : "100% Volume"}</span>
                </div>
                <div className="h-5 bg-black/30 rounded flex items-center px-1.5 gap-0.5">
                  {bars.map((h, i) => <span key={i} className={`h-full w-full rounded-sm transition-all duration-300 ${active ? "bg-amber-500/35" : "bg-emerald-500"}`} style={{ height: `${active ? h * 0.15 : h * (0.8 - ridx * 0.1)}%` }} />)}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-white/5">
            <Button onClick={() => setActive(!active)} className={`w-full py-5 font-display uppercase tracking-widest text-xs font-bold ${active ? "bg-destructive hover:bg-destructive/90 text-white" : "bg-primary hover:bg-primary/90 text-primary-foreground"}`}>
              {active ? <><MicOff className="mr-1.5 h-4 w-4" /> Release Captain Mic</> : <><Mic className="mr-1.5 h-4 w-4 animate-pulse" /> Simulate Road Captain Speaking</>}
            </Button>
            <p className="text-[9px] text-muted-foreground uppercase text-center mt-2 tracking-wider">Click button to toggle Captain stream and watch rider streams auto-duck</p>
          </div>
        </div>
      </div>
    </section>
  );
}
