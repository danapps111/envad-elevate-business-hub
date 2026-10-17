import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Envad Ltd" },
      { name: "description", content: "Envad Ltd is a Telford-based environmental consultancy specialising in air dispersion modelling, GIS and 3D visualisation." },
      { property: "og:title", content: "About Envad Ltd" },
      { property: "og:description", content: "A Shropshire environmental consultancy serving the UK and internationally." },
    ],
  }),
  component: About,
});

const points = ["Air dispersion modelling (ADMS & AERMOD)", "GIS mapping with ArcGIS Pro", "3D rendering & visual solutions", "Contamination & remediation expertise"];

function About() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="About us" title="A first-rate environmental consultant in Telford." intro="Based in Shropshire, providing services across the UK and internationally." />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>Envad Ltd is focused on the environmental consultancy sector, helping businesses navigate permitting, planning and compliance with clear, reliable evidence.</p>
          <p>Danen has expertise in air dispersion modelling using ADMS and AERMOD, and provides visual solutions including GIS and 3D rendering — turning technical results into maps and visuals that regulators and stakeholders understand.</p>
        </div>
        <ul className="space-y-3">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-3 rounded-lg border bg-card p-4 font-medium">
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />{p}
            </li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}
