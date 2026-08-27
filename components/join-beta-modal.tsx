"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { joinWaitlist } from "@/app/actions/waitlist";
import { Check, Loader2 } from "lucide-react";

export function JoinBetaModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", source: "", notes: "" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await joinWaitlist(form);
      if (res.success) {
        setSuccess(res.message || "Thank you for joining our waitlist!");
        setForm({ name: "", email: "", source: "", notes: "" });
      } else setError(res.error || "An error occurred.");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) { setError(null); setSuccess(null); } }}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="metal-panel border-white/10 bg-background/95 backdrop-blur-md text-foreground max-w-md rounded-xl p-8 shadow-2xl">
        <DialogHeader className="space-y-1.5 text-center sm:text-center">
          <DialogTitle className="font-display text-3xl font-bold uppercase tracking-wide text-primary">Join the CrewCom Beta</DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">Secure early access waitlist registration for your riders.</DialogDescription>
        </DialogHeader>
        {success ? (
          <div className="flex flex-col items-center text-center space-y-4 py-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
              <Check className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-display text-xl font-semibold uppercase text-primary">Success!</h4>
            <p className="text-sm text-muted-foreground max-w-xs">{success}</p>
            <Button onClick={() => setOpen(false)} className="mt-4 rounded-sm font-display uppercase tracking-widest w-full">Back to Site</Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            {error && <div className="rounded-md bg-destructive/10 border border-destructive/20 p-3 text-sm text-destructive-foreground">{error}</div>}
            <div className="space-y-1">
              <Label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">Your Name</Label>
              <Input id="name" placeholder="Dez Rider" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="rounded-sm border-white/10 bg-black/40" required disabled={loading} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">Email Address</Label>
              <Input id="email" type="email" placeholder="dez@crewcom.app" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="rounded-sm border-white/10 bg-black/40" required disabled={loading} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="source" className="text-xs uppercase tracking-wider text-muted-foreground">How did you hear about us?</Label>
              <select id="source" value={form.source} onChange={e => setForm({ ...form, source: e.target.value })} className="flex h-10 w-full rounded-sm border border-white/10 bg-black/40 px-3 text-sm text-foreground appearance-none cursor-pointer" required disabled={loading}>
                <option value="" disabled className="bg-background text-muted-foreground">Select an option</option>
                <option value="google" className="bg-background">Google / Search Engine</option>
                <option value="social" className="bg-background">Social Media</option>
                <option value="club" className="bg-background">Motorcycle Club or Chapter</option>
                <option value="friend" className="bg-background">Friend / Rider</option>
                <option value="other" className="bg-background">Other</option>
              </select>
            </div>
            <div className="space-y-1">
              <Label htmlFor="notes" className="text-xs uppercase tracking-wider text-muted-foreground">Comments <span className="text-muted-foreground/50 lowercase italic">(optional)</span></Label>
              <Textarea id="notes" placeholder="Group size, helmet brand, comments..." value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} className="rounded-sm border-white/10 bg-black/40 min-h-[50px]" disabled={loading} />
            </div>
            <Button type="submit" className="w-full rounded-sm font-display uppercase tracking-widest mt-6" disabled={loading}>
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Submit Request"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

