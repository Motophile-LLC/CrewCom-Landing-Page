"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { JoinBetaModal } from "@/components/join-beta-modal";

const links = [
  { href: "#features", label: "Features" },
  { href: "#captain", label: "Road Captain" },
  { href: "#glove", label: "Glove UI" },
  { href: "#how", label: "How It Works" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <Image
            src="https://g.tlcdn.com/gen/7da43c69db7843bbab8e4bb0b21b6ef4.png"
            alt="CrewCom icon"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <div className="rounded-sm bg-white px-2.5 py-1">
            <Image
              src="https://g.tlcdn.com/gen/2d34be1b91f14192a732039cd5dbcaf2.jpg"
              alt="CrewCom"
              width={140}
              height={40}
              className="h-6 w-auto object-contain"
            />
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <JoinBetaModal>
            <Button className="rounded-sm font-display uppercase tracking-widest">
              Get Early Access
            </Button>
          </JoinBetaModal>
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-white/5 bg-background px-6 py-6 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-sm uppercase tracking-widest text-muted-foreground"
            >
              {l.label}
            </a>
          ))}
          <JoinBetaModal>
            <Button className="w-full rounded-sm font-display uppercase tracking-widest">
              Get Early Access
            </Button>
          </JoinBetaModal>
        </div>
      )}
    </header>
  );
}

