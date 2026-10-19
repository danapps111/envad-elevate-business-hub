import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { SERVICES } from "@/lib/site";
import waterfallAsset from "@/assets/waterfall.jpg.asset.json";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Envad Ltd" },
      {
        name: "description",
        content:
          "GIS mapping, air dispersion modelling, ISO 9001, digital services, R&D, training and support for international companies.",
      },
      { property: "og:title", content: "Services — Envad Ltd" },
      {
        property: "og:description",
        content: "Environmental consultancy services for permitting, planning and compliance.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Services"
        title="Everything you need for permitting, planning and compliance."
        intro="Specialist environmental services delivered with clarity and care. Select a service to read the full details."
      />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group flex gap-5 rounded-lg border bg-card p-6 transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
            >
              <span className="font-display text-2xl font-bold text-primary">0{i + 1}</span>
              <div>
                <h2 className="text-xl font-semibold transition group-hover:text-primary">{s.title}</h2>
                <p className="mt-2 text-muted-foreground">{s.body}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Read more <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-16 grid gap-8 rounded-2xl border bg-card p-6 shadow-sm md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-12 md:p-8">
          <figure className="relative min-h-[360px] overflow-hidden rounded-xl border shadow-sm sm:min-h-[420px]">
            <img
              src={waterfallAsset.url}
              alt="Waterfall cascading into a clear pool in the Mauritian highlands"
              width={800}
              height={1000}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </figure>
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Not sure which service fits?</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Tell us what you're working on.</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Send over the brief — a planning application, a permit, a modelling question — and we'll point you to the right service.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-block rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
