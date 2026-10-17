import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { CONTACT, SERVICES } from "@/lib/site";
import { getServiceDetail } from "@/lib/service-details";
import type { Block } from "@/lib/service-details";

export const Route = createFileRoute("/services_/$slug")({
  head: ({ params }) => {
    const detail = getServiceDetail(params.slug);
    if (!detail) return { meta: [{ title: "Service not found — Envad Ltd" }] };
    return {
      meta: [
        { title: `${detail.metaTitle} — Envad Ltd` },
        { name: "description", content: detail.metaDescription },
        { property: "og:title", content: `${detail.metaTitle} — Envad Ltd` },
        { property: "og:description", content: detail.metaDescription },
        { property: "og:type", content: "website" },
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceDetailPage,
});

function BlockView({ block }: { block: Block }) {
  if (block.kind === "text") {
    return <p className="text-[17px] leading-relaxed text-navy/75">{block.text}</p>;
  }
  return (
    <ul className="space-y-2.5">
      {block.items.map((item) => (
        <li key={item} className="flex gap-3 text-[17px] leading-relaxed text-navy/75">
          <Check className="mt-1.5 h-4 w-4 shrink-0 text-leaf" strokeWidth={2.5} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ServiceNotFound() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Services"
        title="We couldn’t find that service"
        intro="It may have been renamed. Take a look at everything we offer instead."
      />
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <Link
          to="/services"
          className="inline-flex rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90"
        >
          Back to all services
        </Link>
      </div>
    </SiteLayout>
  );
}

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const detail = getServiceDetail(slug);
  if (!detail) throw notFound();

  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <SiteLayout>
      <PageHeader eyebrow="Services" title={detail.heading} intro={detail.tagline} />

      <article className="mx-auto max-w-3xl px-6 py-12">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> All services
        </Link>

        <div className="mt-8 space-y-5">
          {detail.intro.map((paragraph) => (
            <p key={paragraph} className="text-[17px] leading-relaxed text-navy/75">
              {paragraph}
            </p>
          ))}
        </div>

        {detail.sections.map((section) => (
          <section key={section.title} className="mt-12 border-t border-navy/10 pt-8">
            <h2 className="font-display text-2xl font-bold text-navy">{section.title}</h2>
            <div className="mt-4 space-y-4">
              {section.blocks.map((block, index) => (
                <BlockView key={index} block={block} />
              ))}
            </div>
          </section>
        ))}

        {detail.highlights ? (
          <section className="mt-12 border-t border-navy/10 pt-8">
            <h2 className="font-display text-2xl font-bold text-navy">{detail.highlights.title}</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {detail.highlights.items.map((item) => (
                <div key={item} className="rounded-xl border bg-card p-5 shadow-sm">
                  <Check className="h-5 w-5 text-leaf" strokeWidth={2.5} />
                  <p className="mt-3 text-[15px] leading-relaxed text-navy/75">{item}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {detail.deliverables || detail.industries ? (
          <div className="mt-12 grid gap-5 border-t border-navy/10 pt-8 md:grid-cols-2">
            {detail.deliverables ? (
              <div className="rounded-xl border bg-tint-sky p-6">
                <h2 className="font-display text-lg font-semibold text-navy">{detail.deliverables.title}</h2>
                <ul className="mt-3 space-y-2">
                  {detail.deliverables.items.map((item) => (
                    <li key={item} className="text-[15px] leading-relaxed text-navy/75">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {detail.industries ? (
              <div className="rounded-xl border bg-tint-leaf p-6">
                <h2 className="font-display text-lg font-semibold text-navy">{detail.industries.title}</h2>
                <ul className="mt-3 space-y-2">
                  {detail.industries.items.map((item) => (
                    <li key={item} className="text-[15px] leading-relaxed text-navy/75">
                      {item}
                    </li>
                  ))}
                </ul>
                {detail.industries.note ? (
                  <p className="mt-3 text-[15px] leading-relaxed text-navy/75">{detail.industries.note}</p>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : null}

        {detail.closing ? (
          <div className="deep-glow mt-12 rounded-2xl p-6 text-navy-foreground sm:p-8">
            <p className="text-[17px] leading-relaxed text-navy-foreground/85">{detail.closing}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-md bg-leaf-bright px-6 py-3 font-medium text-deep transition hover:bg-leaf-bright/90"
              >
                Talk to us
              </Link>
              <a
                href={`mailto:${CONTACT.email}`}
                className="rounded-md bg-card px-6 py-3 font-medium text-deep transition hover:bg-card/90"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>
        ) : null}
      </article>

      <section className="contour-bg">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-2xl font-bold text-navy">Other services</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="rounded-xl border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
              >
                <h3 className="font-display text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{s.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
