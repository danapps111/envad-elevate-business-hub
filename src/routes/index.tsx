import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import hero from "@/assets/hero.jpg";

// Homepage mind map — hub position in SVG viewBox units (900 x 540).
const HUB = { x: 450, y: 270 };
const BRANCHES = [
  { label: "Environmental Services", x: 770, y: 270 },
  { label: "GIS & Mapping", x: 676, y: 132 },
  { label: "ISO 9001", x: 450, y: 75 },
  { label: "R&D", x: 224, y: 132 },
  { label: "Training", x: 130, y: 270 },
  { label: "International", x: 224, y: 408 },
  { label: "Branding & Marketing", x: 450, y: 465 },
  { label: "Merchandise", x: 676, y: 408 },
];

function branchPath(cx: number, cy: number, x: number, y: number, bend: number) {
  const mx = (cx + x) / 2;
  const my = (cy + y) / 2;
  const dx = x - cx;
  const dy = y - cy;
  const len = Math.hypot(dx, dy) || 1;
  return `M ${cx} ${cy} Q ${mx + (-dy / len) * bend} ${my + (dx / len) * bend} ${x} ${y}`;
}

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

        {/* Mind map (tablet and up) */}
        <div className="relative mx-auto mt-12 hidden h-[540px] max-w-[900px] md:block">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 540" preserveAspectRatio="none" aria-hidden="true">
            {BRANCHES.map((b, i) => (
              <path
                key={b.label}
                d={branchPath(HUB.x, HUB.y, b.x, b.y, i % 2 === 0 ? 40 : -40)}
                fill="none"
                stroke="var(--border)"
                strokeWidth="2"
              />
            ))}
          </svg>
          <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-navy text-center text-navy-foreground shadow-xl">
            <span className="font-display text-xl font-bold tracking-tight">Envad Ltd</span>
            <span className="mt-1 text-[11px] uppercase tracking-widest text-sun">One hub</span>
          </div>
          {BRANCHES.map((b, i) => (
            <Link
              key={b.label}
              to="/services"
              style={{ left: `${(b.x / 900) * 100}%`, top: `${(b.y / 540) * 100}%` }}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full border bg-card px-4 py-2 text-sm font-medium shadow-sm transition hover:-translate-y-[calc(50%+2px)] hover:border-primary hover:text-primary hover:shadow-md"
            >
              <span className={`h-2 w-2 rounded-full ${i % 2 === 0 ? "bg-leaf" : "bg-sun"}`} />
              {b.label}
            </Link>
          ))}
        </div>

        {/* Simple branch list (mobile) */}
        <div className="mt-10 md:hidden">
          <div className="mx-auto flex w-fit items-center justify-center rounded-full bg-navy px-6 py-3 text-center text-navy-foreground">
            <span className="font-display text-lg font-bold">Envad Ltd</span>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {BRANCHES.map((b, i) => (
              <Link
                key={b.label}
                to="/services"
                className="flex items-center gap-2 rounded-lg border bg-card px-3 py-3 text-sm font-medium shadow-sm transition hover:border-primary hover:text-primary"
              >
                <span className={`h-2 w-2 shrink-0 rounded-full ${i % 2 === 0 ? "bg-leaf" : "bg-sun"}`} />
                {b.label}
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

      <section className="contour-bg text-navy">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-16">
          <h2 className="text-3xl font-bold">Have a project in mind?</h2>
          <Link to="/contact" className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90">Talk to us</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
