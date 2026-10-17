import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { CONTACT } from "@/lib/site";
import logoAsset from "@/assets/envad-logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 border-b border-navy/10 bg-white/90 text-navy backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-5 sm:py-7">
          <Link to="/" className="flex shrink-0 items-center">
            <img src={logoAsset.url} alt="Envad Ltd logo" className="h-16 w-auto sm:h-24" width={320} height={180} />
          </Link>
          <nav className="flex w-full items-center justify-between gap-1 text-sm sm:w-auto sm:justify-end sm:gap-6 sm:text-base">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="rounded-md px-2 py-2 text-navy/70 transition hover:text-navy"
                activeProps={{ className: "font-semibold text-primary" }} activeOptions={{ exact: true }}>
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="contour-bg text-navy">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3">
          <div>
            <img src={logoAsset.url} alt="Envad Ltd logo" className="h-12 w-auto" width={240} height={120} loading="lazy" />
            <p className="mt-3 text-sm text-navy/70">Environmental consultancy based in Telford, Shropshire — serving the UK and internationally.</p>
          </div>
          <div className="text-sm">
            <p className="font-display font-semibold text-primary">Contact</p>
            <a href={`mailto:${CONTACT.email}`} className="mt-2 block hover:text-primary">{CONTACT.email}</a>
            <a href={CONTACT.phoneHref} className="block hover:text-primary">{CONTACT.phone}</a>
          </div>
          <div className="text-sm text-navy/60 sm:text-right">
            <p>© {new Date().getFullYear()} Envad Ltd</p>
            <p className="mt-2 text-xs leading-relaxed text-navy/45">
              Mauritius photograph: “Mauritius Lagoon next to Le Morne 3” by otterboris, CC BY 3.0, via Wikimedia
              Commons.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
  bgImage,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  bgImage?: string;
}) {
  return (
    <section className="contour-bg relative overflow-hidden text-navy">
      {bgImage ? (
        <>
          <img
            src={bgImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-[center_72%]"
          />
          <div className="header-photo-fade absolute inset-0" />
        </>
      ) : null}
      <div className="relative mx-auto max-w-6xl px-6 py-14 sm:py-20">
        <div className={bgImage ? "flex min-h-[430px] flex-col justify-end sm:min-h-0 sm:block" : undefined}>
          <div
            className={
              bgImage
                ? "rounded-2xl bg-white/72 p-5 shadow-sm ring-1 ring-white/60 backdrop-blur-md sm:bg-white/80 sm:p-8 lg:max-w-2xl"
                : undefined
            }
          >
            <p className="text-sm font-medium uppercase tracking-widest text-primary">{eyebrow}</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">{title}</h1>
            <p className="mt-4 max-w-2xl text-lg text-navy/70">{intro}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
