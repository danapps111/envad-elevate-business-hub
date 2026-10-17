import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import logoAsset from "@/assets/envad-logo.png.asset.json";
import hero from "@/assets/hero.jpg";
import {
  BarChart3,
  CalendarDays,
  FileCheck,
  Globe,
  Leaf,
  Map,
  Megaphone,
  Presentation,
  ShieldCheck,
  Shirt,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Cover = {
  label: string;
  Icon: LucideIcon;
  tint: string;
  ink: string;
  dot: string;
};

// "What we cover" hub-and-spoke: five cards either side of the central hub.
const LEFT: Cover[] = [
  { label: "Environmental Consultancy", Icon: Leaf, tint: "bg-tint-leaf", ink: "text-leaf", dot: "bg-leaf" },
  { label: "Permitting", Icon: FileCheck, tint: "bg-tint-sky", ink: "text-sky", dot: "bg-sky" },
  { label: "Mapping and GIS Data", Icon: Map, tint: "bg-tint-sun", ink: "text-sun", dot: "bg-sun" },
  { label: "Data Consolidation and Returns", Icon: BarChart3, tint: "bg-tint-leaf", ink: "text-leaf", dot: "bg-leaf" },
  { label: "ISO 9001 Standard", Icon: ShieldCheck, tint: "bg-tint-sky", ink: "text-sky", dot: "bg-sky" },
];

const RIGHT: Cover[] = [
  { label: "Marketing and Branding", Icon: Megaphone, tint: "bg-tint-sun", ink: "text-sun", dot: "bg-sun" },
  { label: "Merchandise Design and Printing/Engraving", Icon: Shirt, tint: "bg-tint-leaf", ink: "text-leaf", dot: "bg-leaf" },
  { label: "Events", Icon: CalendarDays, tint: "bg-tint-sky", ink: "text-sky", dot: "bg-sky" },
  { label: "Training", Icon: Presentation, tint: "bg-tint-sun", ink: "text-sun", dot: "bg-sun" },
  { label: "International Training", Icon: Globe, tint: "bg-tint-leaf", ink: "text-leaf", dot: "bg-leaf" },
];

// Connector geometry, as percentages of the SVG box (100 x 100, stretched to fit).
const HUB = { x: 50, y: 50 };
const EDGES = { left: 34.2, right: 65.8 };
const ROWS = [10, 30, 50, 70, 90];

function spoke(side: "left" | "right", rowY: number) {
  const bend = side === "left" ? 41 : 59;
  return `M ${HUB.x} ${HUB.y} C ${bend} ${HUB.y}, ${bend} ${rowY}, ${EDGES[side]} ${rowY}`;
}

function CoverCard({ item }: { item: Cover }) {
  const { label, Icon, tint, ink } = item;
  return (
    <Link
      to="/services"
      className="flex h-full items-center gap-4 rounded-xl border bg-card px-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
    >
      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${tint}`}>
        <Icon className={`h-5 w-5 ${ink}`} strokeWidth={1.75} />
      </span>
      <span className="font-display text-[15px] font-semibold leading-snug text-navy">{label}</span>
    </Link>
  );
}

// Placeholder quotes — replace with real client testimonials before launch.
const TESTIMONIALS = [
  {
    quote: "The mapping and modelling we were given made a complicated application far easier to defend at committee.",
    role: "Development Planner",
    context: "Residential scheme, West Midlands",
  },
  {
    quote: "Clear reports, quick answers and a genuine understanding of what the regulator actually wants to see.",
    role: "Site Manager",
    context: "Renewable energy project",
  },
  {
    quote: "Envad picked up the project quickly and delivered exactly what we needed, on time and on budget.",
    role: "Company Director",
    context: "Environmental consultancy client",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Envad Ltd — Environmental Consultant in Telford, Shropshire" },
      { name: "description", content: "GIS mapping, air dispersion modelling, ISO 9001, R&D and training for permitting and planning across the UK." },
      { property: "og:title", content: "Envad Ltd — Environmental Consultancy" },
      { property: "og:description", content: "GIS mapping, air dispersion modelling, ISO 9001 and environmental training." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden text-navy">
        <img src={hero} alt="Sunlit green countryside with a winding turquoise river and a flowering flame tree" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-40">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Environmental Consultancy · Telford</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight sm:text-6xl">Clear data for confident environmental decisions.</h1>
          <p className="mt-6 max-w-xl text-lg text-navy/80">
            GIS mapping, air dispersion modelling and compliance support for permitting and planning — across the UK and internationally.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90">Get in touch</Link>
            <Link to="/services" className="rounded-md border border-navy/30 bg-white/60 px-6 py-3 font-medium transition hover:bg-white">Our services</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Expertise</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">What we cover</h2>
            <p className="mt-2 max-w-xl text-muted-foreground">One team at the centre, and everything branches out from there. Each branch is covered in full detail on our Services page.</p>
          </div>
          <Link to="/services" className="text-sm font-medium text-primary hover:underline">All services →</Link>
        </div>

        {/* Hub-and-spoke service map (large screens) */}
        <div className="relative mt-12 hidden h-[660px] lg:block">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {ROWS.map((y) => (
              <g key={y}>
                <path d={spoke("left", y)} fill="none" stroke="var(--border)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                <path d={spoke("right", y)} fill="none" stroke="var(--border)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
              </g>
            ))}
          </svg>

          <div className="absolute inset-0 grid grid-cols-[1fr_320px_1fr] gap-6">
            <div className="grid grid-rows-5 gap-5">
              {LEFT.map((item) => (
                <CoverCard key={item.label} item={item} />
              ))}
            </div>
            <div className="flex items-center justify-center">
              <div className="flex h-72 w-72 flex-col items-center justify-center rounded-full border bg-card px-8 text-center shadow-xl">
                <img src={logoAsset.url} alt="Envad Ltd logo" className="h-20 w-auto" width={320} height={180} />
                <span className="mt-4 h-px w-16 bg-border" />
                <span className="mt-4 text-[11px] font-medium uppercase tracking-widest text-primary">One hub, ten services</span>
              </div>
            </div>
            <div className="grid grid-rows-5 gap-5">
              {RIGHT.map((item) => (
                <CoverCard key={item.label} item={item} />
              ))}
            </div>
          </div>

          {/* where each connector meets its card */}
          {LEFT.map((item, i) => (
            <span
              key={`l-${item.label}`}
              className={`absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${item.dot}`}
              style={{ left: `${EDGES.left}%`, top: `${ROWS[i]}%` }}
            />
          ))}
          {RIGHT.map((item, i) => (
            <span
              key={`r-${item.label}`}
              className={`absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${item.dot}`}
              style={{ left: `${EDGES.right}%`, top: `${ROWS[i]}%` }}
            />
          ))}
        </div>

        {/* Stacked version (small and medium screens) */}
        <div className="mt-10 lg:hidden">
          <div className="mx-auto flex w-fit items-center justify-center rounded-full border bg-card px-8 py-4 shadow-sm">
            <img src={logoAsset.url} alt="Envad Ltd logo" className="h-12 w-auto" width={320} height={180} />
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[...LEFT, ...RIGHT].map((item) => (
              <Link
                key={item.label}
                to="/services"
                className="flex items-center gap-3 rounded-xl border bg-card px-4 py-3 shadow-sm transition hover:border-primary hover:shadow-md"
              >
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${item.tint}`}>
                  <item.Icon className={`h-4 w-4 ${item.ink}`} strokeWidth={1.75} />
                </span>
                <span className="font-display text-sm font-semibold text-navy">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">About</p>
            <h2 className="mt-2 text-3xl font-bold">Specialist expertise, personal service.</h2>
          </div>
          <div className="text-muted-foreground">
            <p>Envad Ltd is based in Shropshire and works with clients across the UK and abroad. Led by Danen, we combine air dispersion modelling, GIS and 3D visualisation to turn complex environmental data into clear answers.</p>
            <Link to="/about" className="mt-4 inline-block font-medium text-primary hover:underline">Read more →</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Testimonials</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">What clients say</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Short words from the people we work with.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.role} className="flex h-full flex-col rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex gap-1 text-sun" role="img" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-navy/80">“{t.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-navy/10 pt-4">
                <span className="block font-display font-semibold text-navy">{t.role}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{t.context}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="deep-glow text-navy-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-16">
          <h2 className="text-3xl font-bold">Have a project in mind?</h2>
          <Link to="/contact" className="rounded-md bg-leaf-bright px-6 py-3 font-medium text-deep hover:bg-leaf-bright/90">Talk to us</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
