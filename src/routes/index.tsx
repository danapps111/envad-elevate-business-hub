import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { SERVICES } from "@/lib/site";
import hero from "@/assets/hero.jpg";

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
          </div>
          <Link to="/services" className="text-sm font-medium text-primary hover:underline">All services →</Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((s, i) => (
            <div key={s.title} className="group rounded-lg border bg-card p-6 transition hover:-translate-y-1 hover:border-primary hover:shadow-lg">
              <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
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

      <section className="contour-bg text-navy-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-16">
          <h2 className="text-3xl font-bold">Have a project in mind?</h2>
          <Link to="/contact" className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90">Talk to us</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
