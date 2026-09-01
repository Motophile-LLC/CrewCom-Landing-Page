"use client";

import React, { useState } from "react";
import {
  Truck,
  Radio,
  Navigation,
  Compass,
  Headphones,
  Users,
  Smartphone,
  ShieldAlert,
  MapPin,
  Shield,
  Zap,
  Activity
} from "lucide-react";

interface RiderNode {
  id: string;
  name: string;
  role: string;
  zone: "scout" | "lead" | "mid" | "sweep" | "support";
  zoneLabel: string;
  vehicle: string;
  connection: string;
  feature: string;
  status: string;
  statusType: "success" | "warning" | "info" | "primary";
  details: string;
  x: number; // 400x800 viewBox coordinates
  y: number;
  icon: React.ComponentType<any>;
  telemetry: {
    label1: string;
    value1: string;
    label2: string;
    value2: string;
    label3: string;
    value3: string;
  };
}

const CONVOY_DATA: RiderNode[] = [
  {
    id: "scout",
    name: "Scout (Dez)",
    role: "Route Scout (2 Miles Ahead)",
    zone: "scout",
    zoneLabel: "Scout Zone (Far Ahead)",
    vehicle: "BMW F850 GS Adventure",
    connection: "4G/5G Cellular Link + Helmet BT",
    feature: "Seamless Cell-to-Local Roaming",
    status: "ACTIVE (4G/5G CELLULAR)",
    statusType: "info",
    details: "Coordinates real-time road conditions and updates GPS waypoints directly to the convoy's displays over a multi-carrier VoIP cellular bridge.",
    x: 200,
    y: 40,
    icon: Compass,
    telemetry: {
      label1: "Cellular Link",
      value1: "98% (LTE / 5G SA)",
      label2: "Network Latency",
      value2: "32ms (WebRTC)",
      label3: "Waypoint Sync",
      value3: "Synced",
    },
  },
  {
    id: "road_captain",
    name: "Captain (Marisol)",
    role: "Road Captain (Host)",
    zone: "lead",
    zoneLabel: "Lead Zone (Front of Pack)",
    vehicle: "Harley Road Glide",
    connection: "Helmet BT Headset",
    feature: "Leadership Priority Ducking (15%)",
    status: "ACTIVE (SESSION HOST)",
    statusType: "success",
    details: "Hosts the WebRTC voice bridge. Her channel has absolute audio priority, ducking all other 15 streams to 15% volume whenever she speaks.",
    x: 100,
    y: 160,
    icon: Shield,
    telemetry: {
      label1: "Bridge Status",
      value1: "Online (Host)",
      label2: "Priority Ducking",
      value2: "ACTIVE (15%)",
      label3: "Convoy Clients",
      value3: "15 Connected",
    },
  },
  {
    id: "solo_1",
    name: "Rider 1 (Jonesy)",
    role: "Solo Rider",
    zone: "mid",
    zoneLabel: "Main Formation (Mid Pack)",
    vehicle: "Yamaha MT-09 SP",
    connection: "Cardo Spirit (Helmet BT)",
    feature: "DTX Silence Suppression",
    status: "ACTIVE",
    statusType: "primary",
    details: "Connected using standard Bluetooth. Employs Discontinuous Transmission (DTX) to stop streaming during silence, preserving battery and data.",
    x: 80,
    y: 210,
    icon: Users,
    telemetry: {
      label1: "Audio Codec",
      value1: "Opus 24kbps",
      label2: "DTX Suppression",
      value2: "ENGAGED",
      label3: "Phone Battery",
      value3: "89% (-1.1%/hr)",
    },
  },
  {
    id: "solo_2",
    name: "Rider 2 (Sarah)",
    role: "Solo Rider",
    zone: "mid",
    zoneLabel: "Main Formation (Mid Pack)",
    vehicle: "BMW R1250 GS",
    connection: "Sena 30K (Helmet BT)",
    feature: "DTX Silence Suppression",
    status: "ACTIVE",
    statusType: "primary",
    details: "High-fidelity wideband voice stream. Dynamically switches to comfort noise during silence, eliminating open-mic background wind hiss.",
    x: 100,
    y: 250,
    icon: Users,
    telemetry: {
      label1: "Audio Codec",
      value1: "Opus 24kbps",
      label2: "DTX Suppression",
      value2: "SPEAKING",
      label3: "Phone Battery",
      value3: "91% (-1.2%/hr)",
    },
  },
  {
    id: "rider_passenger_1",
    name: "Rider 3 (Marcus)",
    role: "Intra-Bike Rider #1",
    zone: "mid",
    zoneLabel: "Main Formation (Mid Pack)",
    vehicle: "Honda Goldwing Tour",
    connection: "Wired Phone Earbuds + Bluetooth Hub",
    feature: "Intra-Bike Intercom Bridge",
    status: "ACTIVE (LOCAL CO-RIDER LINK)",
    statusType: "warning",
    details: "Shares an ultra-low-latency direct local Bluetooth link with passenger Elena, allowing instant pillion-to-rider talk while sharing a single cellular connection.",
    x: 160,
    y: 290,
    icon: Headphones,
    telemetry: {
      label1: "Intercom Route",
      value1: "Local BT Direct",
      label2: "Local Latency",
      value2: "3.2ms",
      label3: "Convoy Stream",
      value3: "Merged Link",
    },
  },
  {
    id: "passenger_1",
    name: "Passenger 1 (Elena)",
    role: "Intra-Bike Passenger #1",
    zone: "mid",
    zoneLabel: "Main Formation (Mid Pack)",
    vehicle: "Honda Goldwing (Pillion)",
    connection: "Standard Wired Earbuds",
    feature: "Local Intercom Bridge",
    status: "ACTIVE (LOCAL CO-RIDER LINK)",
    statusType: "warning",
    details: "Linked locally with Marcus's smartphone via the local intercom bridge. Bypasses active cellular requirements, saving phone data and subscription fees.",
    x: 190,
    y: 300,
    icon: Headphones,
    telemetry: {
      label1: "Intercom Route",
      value1: "Shared via Marcus",
      label2: "Audio Quality",
      value2: "48 kHz Stereo",
      label3: "Local Phone Net",
      value3: "Cell Bypassed",
    },
  },
  {
    id: "solo_3",
    name: "Rider 4 (Alex)",
    role: "Solo Rider",
    zone: "mid",
    zoneLabel: "Main Formation (Mid Pack)",
    vehicle: "Kawasaki Ninja 650",
    connection: "Cardo Freecom (Helmet BT)",
    feature: "DTX Silence Suppression",
    status: "ACTIVE",
    statusType: "primary",
    details: "Saves cellular bandwidth and battery life. Automatically opens and closes the microphone gate depending on voice recognition algorithms.",
    x: 240,
    y: 330,
    icon: Users,
    telemetry: {
      label1: "Audio Codec",
      value1: "Opus 24kbps",
      label2: "DTX Suppression",
      value2: "ENGAGED",
      label3: "Signal Jitter",
      value3: "4ms",
    },
  },
  {
    id: "solo_4",
    name: "Rider 5 (Devon)",
    role: "Solo Rider",
    zone: "mid",
    zoneLabel: "Main Formation (Mid Pack)",
    vehicle: "Ducati Monster 821",
    connection: "Sena SF4 (Helmet BT)",
    feature: "DTX Silence Suppression",
    status: "ACTIVE",
    statusType: "primary",
    details: "Connected via standard Bluetooth. Real-time background noise cancellation prevents his Ducati's exhaust from false-triggering the microphone stream.",
    x: 280,
    y: 370,
    icon: Users,
    telemetry: {
      label1: "Audio Codec",
      value1: "Opus 24kbps",
      label2: "DTX Suppression",
      value2: "ENGAGED",
      label3: "Packet Loss",
      value3: "0.0%",
    },
  },
  {
    id: "solo_5",
    name: "Rider 6 (Carlos)",
    role: "Solo Rider",
    zone: "mid",
    zoneLabel: "Main Formation (Mid Pack)",
    vehicle: "Triumph Tiger 900",
    connection: "Standard Helmet BT",
    feature: "DTX Silence Suppression",
    status: "ACTIVE",
    statusType: "primary",
    details: "Crystal-clear digital audio with no static. The mobile client adapts output quality on the fly depending on cell signal strength.",
    x: 310,
    y: 410,
    icon: Users,
    telemetry: {
      label1: "Audio Codec",
      value1: "Opus 24kbps",
      label2: "DTX Suppression",
      value2: "SPEAKING",
      label3: "Cell Signal",
      value3: "-82 dBm",
    },
  },
  {
    id: "solo_6",
    name: "Rider 7 (Emma)",
    role: "Solo Rider",
    zone: "mid",
    zoneLabel: "Main Formation (Mid Pack)",
    vehicle: "Indian Scout Bobber",
    connection: "Standard Helmet BT",
    feature: "DTX Silence Suppression",
    status: "ACTIVE",
    statusType: "primary",
    details: "Communicates within the core convoy group. Standard noise gating dynamically filters out high-speed highway wind noise.",
    x: 290,
    y: 460,
    icon: Users,
    telemetry: {
      label1: "Audio Codec",
      value1: "Opus 24kbps",
      label2: "DTX Suppression",
      value2: "ENGAGED",
      label3: "Signal Jitter",
      value3: "5ms",
    },
  },
  {
    id: "rider_passenger_2",
    name: "Rider 8 (Kenji)",
    role: "Intra-Bike Rider #2",
    zone: "mid",
    zoneLabel: "Main Formation (Mid Pack)",
    vehicle: "Suzuki V-Strom 650 XT",
    connection: "Wired Phone Earbuds + Bluetooth Hub",
    feature: "Intra-Bike Intercom Bridge",
    status: "ACTIVE (LOCAL CO-RIDER LINK)",
    statusType: "warning",
    details: "Combines local passenger intercom with the general convoy comms stream, sending high-fidelity blended audio to both rider and pillion.",
    x: 230,
    y: 510,
    icon: Headphones,
    telemetry: {
      label1: "Intercom Route",
      value1: "Local BT Direct",
      label2: "Local Latency",
      value2: "3.5ms",
      label3: "Convoy Stream",
      value3: "Merged Link",
    },
  },
  {
    id: "passenger_2",
    name: "Passenger 2 (Yuki)",
    role: "Intra-Bike Passenger #2",
    zone: "mid",
    zoneLabel: "Main Formation (Mid Pack)",
    vehicle: "Suzuki V-Strom (Pillion)",
    connection: "Standard Wired Earbuds",
    feature: "Local Intercom Bridge",
    status: "ACTIVE (LOCAL CO-RIDER LINK)",
    statusType: "warning",
    details: "Connected locally via Kenji's audio hub. Allows full verbal communications without requiring dual cellular voice lines.",
    x: 200,
    y: 520,
    icon: Headphones,
    telemetry: {
      label1: "Intercom Route",
      value1: "Shared via Kenji",
      label2: "Audio Quality",
      value2: "48 kHz Stereo",
      label3: "Local Phone Net",
      value3: "Cell Bypassed",
    },
  },
  {
    id: "solo_7",
    name: "Rider 9 (Taylor)",
    role: "Solo Rider",
    zone: "mid",
    zoneLabel: "Main Formation (Mid Pack)",
    vehicle: "KTM 390 Duke",
    connection: "Standard Helmet BT",
    feature: "DTX Silence Suppression",
    status: "ACTIVE",
    statusType: "primary",
    details: "Participates in active conversations. Proves that any rider with simple, standard earbuds can join the full digital convoy bridge.",
    x: 140,
    y: 570,
    icon: Users,
    telemetry: {
      label1: "Audio Codec",
      value1: "Opus 24kbps",
      label2: "DTX Suppression",
      value2: "ENGAGED",
      label3: "Packet Loss",
      value3: "0.1%",
    },
  },
  {
    id: "solo_8",
    name: "Rider 10 (Chris)",
    role: "Solo Rider",
    zone: "mid",
    zoneLabel: "Main Formation (Mid Pack)",
    vehicle: "Suzuki GSX-R750",
    connection: "Standard Helmet BT",
    feature: "DTX Silence Suppression",
    status: "ACTIVE",
    statusType: "primary",
    details: "Utilizes advanced background noise gates. When he stops speaking, comfort noise is injected to maintain audio naturalness.",
    x: 100,
    y: 620,
    icon: Users,
    telemetry: {
      label1: "Audio Codec",
      value1: "Opus 24kbps",
      label2: "DTX Suppression",
      value2: "ENGAGED",
      label3: "Signal Jitter",
      value3: "3ms",
    },
  },
  {
    id: "sweeper",
    name: "Sweeper (Sasha)",
    role: "Sweeper Marshal",
    zone: "sweep",
    zoneLabel: "Sweep Zone (Rear of Pack)",
    vehicle: "Husqvarna Norden 901",
    connection: "Sena 50R (Helmet BT)",
    feature: "Tail Safety & Priority Override",
    status: "ACTIVE (SWEEP SAFETY)",
    statusType: "success",
    details: "Monitors the convoy's tail. Possesses emergency override privileges to immediately transmit road blocks, splits, or crashes directly to the Road Captain.",
    x: 140,
    y: 690,
    icon: ShieldAlert,
    telemetry: {
      label1: "Safety Channel",
      value1: "Active Guard",
      label2: "Tail Distance",
      label3: "Override Status",
      value2: "0.1 Miles",
      value3: "Ready",
    },
  },
  {
    id: "sag_support",
    name: "SAG Truck (Jim)",
    role: "SAG Support Vehicle",
    zone: "support",
    zoneLabel: "Support Zone (Behind Pack)",
    vehicle: "Ford F-250 Chase Truck",
    connection: "Apple CarPlay / Speakerphone",
    feature: "Dashboard Vehicle Hub Link",
    status: "ACTIVE (VEHICLE HUB)",
    statusType: "primary",
    details: "Integrates with in-dash Apple CarPlay or Android Auto systems, enabling hands-free speaking and listening using standard car speakerphones.",
    x: 200,
    y: 760,
    icon: Truck,
    telemetry: {
      label1: "Dashboard OS",
      value1: "Apple CarPlay",
      label2: "Speakerphone",
      value2: "Adaptive Echo",
      label3: "GPS Distance",
      value3: "0.4 mi (Trailing)",
    },
  },
];

type ScenarioFilter = "all" | "scout" | "intercom" | "support";

export function ScenarioExplorer() {
  const [activeFilter, setActiveFilter] = useState<ScenarioFilter>("all");
  const [selectedNodeId, setSelectedNodeId] = useState<string>("road_captain");

  const selectedNode =
    CONVOY_DATA.find((n) => n.id === selectedNodeId) || CONVOY_DATA[1];

  const handleFilterChange = (filter: ScenarioFilter) => {
    setActiveFilter(filter);
    if (filter === "scout") {
      setSelectedNodeId("scout");
    } else if (filter === "intercom") {
      setSelectedNodeId("rider_passenger_1");
    } else if (filter === "support") {
      setSelectedNodeId("sag_support");
    } else {
      setSelectedNodeId("road_captain");
    }
  };

  const getNodeOpacityClass = (node: RiderNode) => {
    if (activeFilter === "all") return "opacity-100 scale-100 cursor-pointer";
    if (activeFilter === "scout") {
      return node.id === "scout"
        ? "opacity-100 scale-110"
        : "opacity-25 hover:opacity-50 scale-95";
    }
    if (activeFilter === "intercom") {
      const isIntercom = [
        "rider_passenger_1",
        "passenger_1",
        "rider_passenger_2",
        "passenger_2"
      ].includes(node.id);
      return isIntercom
        ? "opacity-100 scale-110"
        : "opacity-25 hover:opacity-50 scale-95";
    }
    if (activeFilter === "support") {
      return node.id === "sag_support"
        ? "opacity-100 scale-110"
        : "opacity-25 hover:opacity-50 scale-95";
    }
    return "opacity-100";
  };

  const getBadgeColors = (type: RiderNode["statusType"]) => {
    switch (type) {
      case "success":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "info":
        return "bg-sky-500/10 text-sky-400 border-sky-500/20";
      case "warning":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      case "primary":
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <section id="use-cases" className="py-24 relative overflow-hidden bg-black/40 bg-grit">
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col items-start md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded border border-primary/30 bg-primary/10 px-3 py-1 text-xs uppercase tracking-widest text-primary font-bold">
              <MapPin className="h-4 w-4" /> Use Cases & Convoy
            </div>
            <h2 className="font-display text-4xl font-extrabold uppercase leading-tight sm:text-5xl text-foreground">
              Convoy Tactical Route Map
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed">
              Explore real-time data flow, local intercom links, and dashboard integrations across a full 16-person riding crew operating in formation.
            </p>
          </div>

          <div className="mt-6 md:mt-0 text-right font-mono text-[11px] text-muted-foreground/60 tracking-wider">
            SYSTEM STATUS: <span className="text-emerald-500 font-bold animate-pulse">OPTIMAL (16/16 SYNCED)</span>
          </div>
        </div>

        {/* Tactical Scenario Filter Tabs */}
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap md:gap-3 bg-black/20 p-2 rounded-lg border border-white/5 mb-12">
          {[
            { id: "all", label: "All 16-Rider Crew", icon: Users },
            { id: "scout", label: "Long-Range Scout", icon: Compass },
            { id: "intercom", label: "Intra-Bike Intercom", icon: Headphones },
            { id: "support", label: "Support / SAG Vehicle", icon: Truck },
          ].map((tab) => {
            const TabIcon = tab.icon;
            const isSelected = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleFilterChange(tab.id as ScenarioFilter)}
                className={`flex items-center gap-2 px-4 py-3 rounded text-xs font-bold uppercase tracking-wider transition-all duration-300 border text-left flex-1 sm:flex-none ${
                  isSelected
                    ? "bg-primary/10 border-primary text-primary shadow-[0_0_15px_rgba(255,122,26,0.15)]"
                    : "bg-white/[0.02] border-white/5 text-muted-foreground hover:border-white/10 hover:text-foreground hover:bg-white/[0.04]"
                }`}
              >
                <TabIcon className={`h-4 w-4 shrink-0 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          {/* LEFT COLUMN: Styled Tactical Map SVG Panel */}
          <div className="lg:col-span-7 metal-panel rounded-xl border border-white/10 bg-black/50 p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
            </div>

            <div className="relative z-10 flex items-center justify-between border-b border-white/5 pb-4 mb-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
                <span>Radar Scan Active</span>
              </div>
              <div className="flex gap-4">
                <span>CONVOY DURATION: 02:44:12</span>
                <span className="hidden sm:inline">RSSI: -76 dBm</span>
              </div>
            </div>

            <div className="relative z-10 w-full flex justify-center items-center py-6 bg-zinc-950/40 rounded-lg border border-white/5">
              <div className="absolute left-4 top-0 bottom-0 flex flex-col justify-between pointer-events-none font-display text-[10px] sm:text-xs uppercase tracking-widest font-black text-muted-foreground/30 py-10 select-none">
                <div>Scout Zone</div>
                <div>Lead Zone</div>
                <div>Main Formation</div>
                <div>Sweep Zone</div>
                <div>Support Zone</div>
              </div>

              <svg viewBox="0 0 400 800" className="w-full max-w-[360px] sm:max-w-[420px] h-auto aspect-[1/2]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <style>
                    {`@keyframes fd { to { stroke-dashoffset: -40; } }
                      .dfl { animation: fd 1.8s linear infinite; }
                      @keyframes pr { 0% { transform: scale(0.8); opacity: 0.8; } 100% { transform: scale(1.8); opacity: 0; } }
                      .mp { animation: pr 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite; transform-origin: center; }`}
                  </style>
                </defs>

                <g stroke="rgba(255,255,255,0.015)" strokeWidth="1">
                  {Array.from({ length: 9 }).map((_, i) => <line key={i} x1="0" y1={(i+1)*80} x2="400" y2={(i+1)*80} />)}
                  {Array.from({ length: 5 }).map((_, i) => <line key={i} x1={(i+1)*80} y1="0" x2={(i+1)*80} y2="800" />)}
                </g>

                {/* Road Paths */}
                {["rgba(255, 122, 26, 0.04)", "#09090b", "rgba(255,255,255,0.06)"].map((col, idx) => (
                  <path
                    key={idx}
                    d="M 200,40 C 40,120 40,240 200,280 C 360,320 360,440 200,480 C 40,520 40,640 140,680 L 200,760"
                    fill="none"
                    stroke={col}
                    strokeWidth={idx === 0 ? "48" : idx === 1 ? "32" : "34"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ))}

                <path
                  d="M 200,40 C 40,120 40,240 200,280 C 360,320 360,440 200,480 C 40,520 40,640 140,680 L 200,760"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1.5"
                  strokeDasharray="8 12"
                  strokeLinecap="round"
                />

                <path
                  d="M 200,40 C 40,120 40,240 200,280 C 360,320 360,440 200,480 C 40,520 40,640 140,680 L 200,760"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  strokeDasharray="10 15"
                  strokeLinecap="round"
                  opacity={activeFilter === "all" ? 0.8 : 0.3}
                  className="dfl"
                  filter="url(#neon-glow)"
                />

                {/* Local Links */}
                {[[160, 290, 190, 300], [230, 510, 200, 520]].map(([x1, y1, x2, y2], idx) => (
                  <line
                    key={idx}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="#a78bfa" strokeWidth="3" strokeDasharray="3 3"
                    opacity={activeFilter === "all" || activeFilter === "intercom" ? 1 : 0.15}
                    className="animate-pulse"
                  />
                ))}

                {CONVOY_DATA.map((node) => {
                  const isNodeSelected = selectedNodeId === node.id;
                  const isHighlighted =
                    activeFilter === "all" ||
                    (activeFilter === "scout" && node.id === "scout") ||
                    (activeFilter === "support" && node.id === "sag_support") ||
                    (activeFilter === "intercom" &&
                      ["rider_passenger_1", "passenger_1", "rider_passenger_2", "passenger_2"].includes(node.id));

                  const opacityClass = getNodeOpacityClass(node);

                  // Color selection for circles
                  let nodeColor = "hsl(var(--primary))";
                  if (node.id === "scout") nodeColor = "#38bdf8";
                  if (node.id === "road_captain") nodeColor = "#10b981";
                  if (node.id === "sweeper") nodeColor = "#f59e0b";
                  if (node.id === "sag_support") nodeColor = "#f97316";
                  if (["rider_passenger_1", "passenger_1", "rider_passenger_2", "passenger_2"].includes(node.id)) {
                    nodeColor = "#a78bfa";
                  }

                  return (
                    <g
                      key={node.id}
                      className={`transition-all duration-500 origin-center ${opacityClass}`}
                      onClick={() => setSelectedNodeId(node.id)}
                    >
                      {/* Active pulsing rings */}
                      {(isNodeSelected || (isHighlighted && activeFilter !== "all")) && (
                        <>
                          <circle
                            cx={node.x}
                            cy={node.y}
                            r="20"
                            fill="none"
                            stroke={nodeColor}
                            strokeWidth="1.5"
                            opacity="0.3"
                            className="mp"
                          />
                          <circle
                            cx={node.x}
                            cy={node.y}
                            r="13"
                            fill="none"
                            stroke={nodeColor}
                            strokeWidth="2"
                            opacity="0.6"
                            className="mp"
                            style={{ animationDelay: "0.5s" }}
                          />
                        </>
                      )}

                      <circle cx={node.x} cy={node.y} r="16" fill="transparent" className="cursor-pointer" />

                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={isNodeSelected ? "8" : "6"}
                        fill={nodeColor}
                        stroke={isNodeSelected ? "#ffffff" : "rgba(0,0,0,0.4)"}
                        strokeWidth={isNodeSelected ? "2.5" : "1.5"}
                        className="cursor-pointer shadow-lg hover:scale-125 transition-transform duration-300"
                        filter={isNodeSelected ? "url(#neon-glow)" : undefined}
                      />

                      {(node.id === "road_captain" || node.id === "sag_support" || node.id === "scout" || node.id === "sweeper") && (
                        <circle cx={node.x} cy={node.y} r="2" fill="#ffffff" />
                      )}

                      {(node.id === "scout" ||
                        node.id === "road_captain" ||
                        node.id === "rider_passenger_1" ||
                        node.id === "rider_passenger_2" ||
                        node.id === "sweeper" ||
                        node.id === "sag_support" ||
                        isNodeSelected) && (
                        <g>
                          <rect
                            x={node.x > 200 ? node.x - 110 : node.x + 12}
                            y={node.y - 12}
                            width="98"
                            height="24"
                            rx="3"
                            fill="rgba(5, 5, 5, 0.85)"
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="0.5"
                            className="pointer-events-none"
                          />
                          <text
                            x={node.x > 200 ? node.x - 61 : node.x + 61}
                            y={node.y + 3}
                            fill={isNodeSelected ? "#ffffff" : "rgba(255,255,255,0.8)"}
                            fontSize="8"
                            fontWeight={isNodeSelected ? "bold" : "normal"}
                            textAnchor="middle"
                            fontFamily="monospace"
                            className="pointer-events-none select-none tracking-tight uppercase"
                          >
                            {node.id === "road_captain"
                              ? "Cap (Host)"
                              : node.id === "rider_passenger_1"
                              ? "Intra-bike 1"
                              : node.id === "rider_passenger_2"
                              ? "Intra-bike 2"
                              : node.id === "sag_support"
                              ? "SAG Truck"
                              : node.name.split(" ")[0] + " " + (node.name.split(" ")[1] || "")}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Map Legend */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-5 gap-3 mt-4 pt-4 border-t border-white/5 text-[10px] uppercase font-mono tracking-wider text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#10b981]" />
                <span>Host/Captain</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#38bdf8]" />
                <span>Scout</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#a78bfa]" />
                <span>Intra-Bike</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span>Solo Riders</span>
              </div>
              <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                <span className="h-2 w-2 rounded-full bg-[#f97316]" />
                <span>Support Chase</span>
              </div>
            </div>
          </div>
          {/* RIGHT COLUMN: HUD Telemetry Inspector Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="metal-panel rounded-xl border border-white/10 bg-black/40 p-6 flex-1 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-primary/10 opacity-30 scan-line pointer-events-none" />

              <div>
                {/* Card Title & Status Badge */}
                <div className="flex items-start justify-between border-b border-white/5 pb-4 mb-6">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-primary font-bold">
                      {selectedNode.zoneLabel}
                    </span>
                    <h3 className="font-display text-2xl font-extrabold uppercase text-foreground tracking-tight mt-1">
                      {selectedNode.name}
                    </h3>
                  </div>
                  <span
                    className={`text-[9px] font-bold border rounded px-2.5 py-0.5 tracking-wider uppercase ${getBadgeColors(
                      selectedNode.statusType
                    )}`}
                  >
                    {selectedNode.status}
                  </span>
                </div>

                {/* General Description Sub-Card */}
                <div className="space-y-4 mb-6 text-sm text-muted-foreground leading-relaxed">
                  <div className="p-4 rounded-lg bg-black/40 border border-white/5">
                    <p className="text-xs sm:text-sm text-foreground/90 font-medium">
                      {selectedNode.details}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="p-3 rounded border border-white/5 bg-white/[0.01]">
                      <span className="text-muted-foreground/60 font-mono uppercase block mb-1">Vehicle Class</span>
                      <span className="text-foreground font-semibold flex items-center gap-1.5 uppercase font-mono">
                        <Truck className="h-3.5 w-3.5 text-primary shrink-0" />
                        {selectedNode.vehicle.split(" (")[0]}
                      </span>
                    </div>
                    <div className="p-3 rounded border border-white/5 bg-white/[0.01]">
                      <span className="text-muted-foreground/60 font-mono uppercase block mb-1">Comms Protocol</span>
                      <span className="text-foreground font-semibold flex items-center gap-1.5 uppercase font-mono">
                        <Radio className="h-3.5 w-3.5 text-primary shrink-0" />
                        {selectedNode.id === "sag_support" ? "Speakerphone" : "Helmet Bluetooth"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tech Highlight Block */}
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 mb-6">
                  <div className="flex gap-3">
                    <div className="p-2 h-fit rounded bg-primary/10 border border-primary/20 text-primary">
                      {selectedNode.id === "scout" ? (
                        <Compass className="h-4 w-4" />
                      ) : selectedNode.id === "road_captain" ? (
                        <Shield className="h-4 w-4" />
                      ) : selectedNode.zone === "mid" && selectedNode.id.includes("passenger") ? (
                        <Headphones className="h-4 w-4" />
                      ) : selectedNode.id.includes("rider") ? (
                        <Headphones className="h-4 w-4" />
                      ) : selectedNode.id === "sweeper" ? (
                        <ShieldAlert className="h-4 w-4" />
                      ) : selectedNode.id === "sag_support" ? (
                        <Truck className="h-4 w-4" />
                      ) : (
                        <Zap className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold font-display uppercase tracking-wider text-foreground">
                        CrewCom Tech: {selectedNode.feature}
                      </h4>
                      <p className="text-[11px] text-muted-foreground mt-1 leading-normal">
                        {selectedNode.id === "road_captain" &&
                          "Automatically prioritizes leadership broadcasts, allowing instantly readable traffic orders."}
                        {selectedNode.id === "scout" &&
                          "Utilizes high-gain roaming antennas to secure seamless cell-tower hopping miles in advance."}
                        {selectedNode.zone === "mid" &&
                          !selectedNode.id.includes("passenger") &&
                          !selectedNode.id.includes("rider") &&
                          "Squelch-free comfort noise and active compression make hours in the saddle fatigue-free."}
                        {(selectedNode.id.includes("passenger") || selectedNode.id.includes("rider")) &&
                          "Provides local intercom mixing, meaning co-riders share conversation without lag or cell charges."}
                        {selectedNode.id === "sweeper" &&
                          "Ensures trailing-safety coverage, pushing emergency crash or split-convoy warnings to the lead."}
                        {selectedNode.id === "sag_support" &&
                          "Seamlessly pipes conversational streams into vehicular hands-free screens using CarPlay."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* HUD Live Telemetry Reading */}
              <div className="border-t border-white/5 pt-4">
                <div className="flex items-center gap-2 mb-3 text-[10px] font-mono uppercase text-muted-foreground/80 font-bold">
                  <Activity className="h-3.5 w-3.5 text-primary shrink-0 animate-pulse" />
                  <span>HUD Real-Time Stream Telemetry</span>
                </div>

                <div className="grid grid-cols-3 gap-2 font-mono text-[10px] text-muted-foreground uppercase">
                  <div className="bg-black/40 border border-white/5 p-2 rounded">
                    <span className="block text-muted-foreground/50 text-[8px] mb-1">
                      {selectedNode.telemetry.label1}
                    </span>
                    <span className="text-foreground font-bold font-mono">
                      {selectedNode.telemetry.value1}
                    </span>
                  </div>
                  <div className="bg-black/40 border border-white/5 p-2 rounded">
                    <span className="block text-muted-foreground/50 text-[8px] mb-1">
                      {selectedNode.telemetry.label2}
                    </span>
                    <span className="text-primary font-bold font-mono">
                      {selectedNode.telemetry.value2}
                    </span>
                  </div>
                  <div className="bg-black/40 border border-white/5 p-2 rounded">
                    <span className="block text-muted-foreground/50 text-[8px] mb-1">
                      {selectedNode.telemetry.label3}
                    </span>
                    <span className="text-emerald-400 font-bold font-mono">
                      {selectedNode.telemetry.value3}
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex justify-between items-center text-[8px] font-mono text-muted-foreground/50 uppercase tracking-widest">
                  <span>PACKET STREAM MIXER: SYNCED</span>
                  <span>OPUS CODEC STABLE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
