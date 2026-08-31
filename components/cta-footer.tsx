"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JoinBetaModal } from "@/components/join-beta-modal";

export function CtaFooter() {
  return (
    <>
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-5xl font-bold uppercase leading-tight sm:text-6xl">
            Get your Crew
            <br />
            <span className="text-primary">on the same channel</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Early access is rolling out to riding clubs and chapters first.
            Sign up, grab your QR code, and get every helmet in your Crew
            talking on one channel.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <JoinBetaModal>
              <Button
                size="lg"
                className="rounded-sm font-display text-base uppercase tracking-widest"
              >
                Join the Beta <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </JoinBetaModal>
            <JoinBetaModal>
              <Button
                size="lg"
                variant="outline"
                className="rounded-sm border-white/20 font-display text-base uppercase tracking-widest hover:bg-white/5"
              >
                Invite Your Chapter
              </Button>
            </JoinBetaModal>
          </div>
        </div>
      </section>


      <footer className="border-t border-white/10 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <Image
              src="https://g.tlcdn.com/gen/7da43c69db7843bbab8e4bb0b21b6ef4.png"
              alt="CrewCom icon"
              width={32}
              height={32}
              className="rounded-md"
            />
            <div className="rounded-sm bg-white px-2 py-0.5">
              <Image
                src="https://g.tlcdn.com/gen/2d34be1b91f14192a732039cd5dbcaf2.jpg"
                alt="CrewCom"
                width={100}
                height={28}
                className="h-4 w-auto object-contain"
              />
            </div>
            <span className="font-display text-sm uppercase tracking-widest text-muted-foreground">
              — a Motophile LLC product
            </span>
          </div>
          <div className="flex gap-8 font-display text-xs uppercase tracking-widest text-muted-foreground">
            <a href="#features" className="hover:text-primary">
              Features
            </a>
            <a href="#pricing" className="hover:text-primary">
              Host Plans
            </a>
            <a href="#how" className="hover:text-primary">
              How It Works
            </a>
          </div>
          <span className="font-display text-xs uppercase tracking-widest text-muted-foreground/60">
            © {new Date().getFullYear()} Motophile LLC
          </span>
        </div>
      </footer>
    </>
  );
}
