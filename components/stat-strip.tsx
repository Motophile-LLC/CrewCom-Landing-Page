export function StatStrip() {
  const stats = [
    { value: "16", label: "Riders per Crew" },
    { value: "0", label: "Proprietary headsets required" },
    { value: "∞", label: "Range — it runs on the internet" },
    { value: "1", label: "Tap QR join" },
  ];

  return (
    <section className="border-y border-white/10 bg-black/30">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-6 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="px-6 py-8 text-center">
            <div className="font-display text-4xl font-bold text-primary sm:text-5xl">
              {s.value}
            </div>
            <div className="mt-2 font-display text-xs uppercase tracking-widest text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
