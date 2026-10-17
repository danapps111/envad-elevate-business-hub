import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import portraitAsset from "@/assets/founder-portrait.png.asset.json";
import leMorneAsset from "@/assets/le-morne-lagoon.jpg.asset.json";
import leMorneMobileAsset from "@/assets/le-morne-lagoon-mobile.jpg.asset.json";
import { Leaf, Map, Palette, Presentation, Printer } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Bring = {
  title: string;
  tagline: string;
  text: string;
  Icon: LucideIcon;
  tint: string;
  ink: string;
};

// "What we bring" — icon cards.
const BRINGS: Bring[] = [
  {
    title: "Environmental Expertise",
    tagline: "Science-led. Practical. Experienced.",
    text: "Environmental consultancy informed by real-world experience in environmental management, remediation, contaminated land, permitting, water quality, air quality and environmental assessment.",
    Icon: Leaf,
    tint: "bg-tint-leaf",
    ink: "text-leaf",
  },
  {
    title: "Mapping & Data",
    tagline: "Turning information into insight.",
    text: "GIS mapping, spatial analysis, data consolidation and environmental reporting that make complex information easier to understand, manage and communicate.",
    Icon: Map,
    tint: "bg-tint-sky",
    ink: "text-sky",
  },
  {
    title: "Training & Knowledge",
    tagline: "Making technical subjects accessible.",
    text: "Professional training, workshops and international learning designed to turn specialist knowledge into practical skills people can apply.",
    Icon: Presentation,
    tint: "bg-tint-sun",
    ink: "text-sun",
  },
  {
    title: "Creative Design",
    tagline: "Ideas made visible.",
    text: "Branding, graphic design and visual communication developed with the same attention to detail and problem-solving approach used in our technical work.",
    Icon: Palette,
    tint: "bg-tint-sky",
    ink: "text-sky",
  },
  {
    title: "Design, Print & Engraving",
    tagline: "From concept to something tangible.",
    text: "Bespoke merchandise, printing and engraving that transform ideas and brands into physical products.",
    Icon: Printer,
    tint: "bg-tint-leaf",
    ink: "text-leaf",
  },
];

const MOTTO = ["Think scientifically.", "Create intelligently.", "Deliver practically."];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Envad Ltd" },
      {
        name: "description",
        content:
          "Envad Ltd brings environmental science and creative design together — consultancy, GIS and mapping, training, branding, printing and engraving.",
      },
      { property: "og:title", content: "About Envad Ltd" },
      {
        property: "og:description",
        content:
          "Science, creativity and a different way of thinking: what Envad Ltd brings to every project.",
      },
    ],
  }),
  component: About,
});

function Section({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div className="mt-14 border-t border-navy/10 pt-10 first:mt-0 first:border-0 first:pt-0">
      <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">{heading}</h2>
      <div className="mt-5 space-y-5 text-lg leading-relaxed text-navy/75">{children}</div>
    </div>
  );
}

function BringCard({ item, wide }: { item: Bring; wide: boolean }) {
  const { title, tagline, text, Icon, tint, ink } = item;
  return (
    <div
      className={`flex h-full flex-col rounded-xl border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md ${
        wide ? "lg:col-span-3" : "lg:col-span-2"
      }`}
    >
      <span className={`flex h-12 w-12 items-center justify-center rounded-full ${tint}`}>
        <Icon className={`h-6 w-6 ${ink}`} strokeWidth={1.75} />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-1 text-sm font-medium text-primary">{tagline}</p>
      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

function About() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About us"
        title="Science. Creativity. A different way of thinking."
        intro="Envad was created from two things that have shaped much of my life: a passion for the environment and a passion for creating."
        bgImage={leMorneAsset.url}
        bgImageSmall={leMorneMobileAsset.url}
      />

      {/* Part one — the story, in text */}
      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <figure className="mb-10 grid items-center gap-6 sm:grid-cols-[auto_1fr] sm:gap-8">
          <img
            src={portraitAsset.url}
            alt="Danen Appasamy, founder of Envad Ltd"
            width={1122}
            height={1402}
            loading="lazy"
            className="mx-auto h-64 w-52 rounded-2xl object-cover object-top shadow-lg ring-1 ring-navy/10 sm:h-72 sm:w-60"
          />
          <figcaption className="text-center sm:text-left">
            <p className="font-display text-2xl font-bold text-navy">Danen Appasamy</p>
            <p className="mt-1 text-sm font-medium uppercase tracking-widest text-primary">Founder — Envad Ltd</p>
            <p className="mt-4 text-[15px] leading-relaxed text-navy/70">
              PhD in Environmental Management and Remediation, with more than fifteen years across environmental
              consultancy, scientific research, monitoring, higher education and professional training.
            </p>
          </figcaption>
        </figure>

        <Section heading="From Mauritius to environmental science">
          <p>
            I grew up in Mauritius, surrounded by mountains, rivers, forests, wildlife and the ocean. That
            connection with nature inspired me to pursue a career in environmental science and continues to
            influence how I think, work and create today.
          </p>
          <p>
            It is also the inspiration behind the Envad identity. The colours are drawn from the Mauritian flag,
            while the natural elements within the brand reflect the landscapes and biodiversity that first sparked
            my interest in the environment.
          </p>
          <p>
            My professional journey has taken me from Environmental Management and Geography to a PhD in
            Environmental Management and Remediation, followed by more than fifteen years working across
            environmental consultancy, scientific research, environmental monitoring, higher education and
            professional training.
          </p>
          <p>
            My experience spans contaminated land, water quality, environmental permitting, air quality, GIS and
            mapping, environmental impact assessment, remediation and environmental management.
          </p>
          <p>
            I have worked across consultancy, academia and the public sector, including advising the Ministry of
            Environment in Mauritius, and have been involved in projects ranging from environmental monitoring and
            laboratory development to planning, permitting, research and commercial environmental services.
          </p>
          <p>
            Envad grew from that experience: a way of bringing together technical knowledge, practical
            problem-solving and a more flexible approach to helping organisations.
          </p>
        </Section>

        <Section heading="Where science meets creativity">
          <p>Envad was never intended to be a conventional environmental consultancy.</p>
          <p>
            I have always been a creative person. Alongside science, I enjoy design, visual communication,
            creating things and turning ideas into something tangible. Over time, those two sides naturally began
            to merge.
          </p>
          <p>
            Good environmental work is not only about producing technically correct information. It is also about
            communicating complex ideas clearly, presenting information effectively and creating solutions that
            people can actually use. That thinking has allowed Envad to grow beyond traditional consultancy.
          </p>
          <p>
            Today, our work can move from environmental permitting, GIS mapping and data management to branding,
            design, merchandise, engraving, events and training. They may appear to be very different services,
            but they all begin in the same place:
          </p>
          <p className="border-l-2 border-primary pl-5 font-display text-xl font-semibold leading-snug text-navy">
            Understand the problem. Find the solution. Communicate it well.
          </p>
        </Section>
      </section>

      {/* Part two — what we bring, as icon cards */}
      <section className="border-y bg-secondary text-navy">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">What we bring</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Five strengths behind every project</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {BRINGS.map((item, i) => (
              <BringCard key={item.title} item={item} wide={i >= 3} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="deep-glow text-navy-foreground">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-leaf-bright">One business. Two passions.</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Environmental scientist. Consultant. Researcher. Educator. Designer. Maker.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-navy-foreground/75">
            Rather than separating these different parts of what I do, Envad brings them together. The result is a
            business that can approach a problem technically, strategically and creatively — and develop solutions
            that are not only scientifically sound, but clear, practical and engaging.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {MOTTO.map((line) => (
              <p key={line} className="rounded-lg bg-navy-foreground/10 px-4 py-5 font-display text-lg font-semibold ring-1 ring-navy-foreground/15">
                {line}
              </p>
            ))}
          </div>
          <p className="mt-8 text-navy-foreground/70">
            And behind it all is a little piece of Mauritius — the place where my connection with nature, colour and
            creativity began.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-block rounded-md bg-leaf-bright px-6 py-3 font-medium text-deep transition hover:bg-leaf-bright/90"
          >
            Talk to us
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
