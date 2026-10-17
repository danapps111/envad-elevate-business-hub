import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { CONTACT } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 border-b border-navy-foreground/10 bg-navy/95 text-navy-foreground backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-xl font-bold tracking-tight">
            Envad<span className="text-leaf">.</span>
          </Link>
          <nav className="flex items-center gap-1 text-sm sm:gap-4">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="rounded-md px-2 py-1 text-navy-foreground/75 transition hover:text-navy-foreground"
                activeProps={{ className: "text-leaf" }} activeOptions={{ exact: true }}>
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="contour-bg text-navy-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl font-bold">Envad<span className="text-leaf">.</span> Ltd</p>
            <p className="mt-2 text-sm text-navy-foreground/70">Environmental consultancy based in Telford, Shropshire — serving the UK and internationally.</p>
          </div>
          <div className="text-sm">
            <p className="font-display font-semibold text-leaf">Contact</p>
            <a href={`mailto:${CONTACT.email}`} className="mt-2 block hover:text-leaf">{CONTACT.email}</a>
            <a href={CONTACT.phoneHref} className="block hover:text-leaf">{CONTACT.phone}</a>
          </div>
          <div className="text-sm text-navy-foreground/60 sm:text-right">© {new Date().getFullYear()} Envad Ltd</div>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="contour-bg text-navy-foreground">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-widest text-leaf">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-navy-foreground/75">{intro}</p>
      </div>
    </section>
  );
}
