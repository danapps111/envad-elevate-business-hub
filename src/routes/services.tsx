import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Envad Ltd" },
      { name: "description", content: "GIS mapping, air dispersion modelling, ISO 9001, digital services, R&D, training and support for international companies." },
      { property: "og:title", content: "Services — Envad Ltd" },
      { property: "og:description", content: "Environmental consultancy services for permitting, planning and compliance." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Services" title="Everything you need for permitting, planning and compliance." intro="Specialist environmental services delivered with clarity and care." />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="flex gap-5 rounded-lg border bg-card p-6">
              <span className="font-display text-2xl font-bold text-primary">0{i + 1}</span>
              <div>
                <h2 className="text-xl font-semibold">{s.title}</h2>
                <p className="mt-2 text-muted-foreground">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact" className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90">Request a quote</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
