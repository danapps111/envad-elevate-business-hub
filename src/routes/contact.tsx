import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { CONTACT } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Envad Ltd" },
      { name: "description", content: "Get in touch with Envad Ltd by email or phone to discuss your environmental project." },
      { property: "og:title", content: "Contact Envad Ltd" },
      { property: "og:description", content: "Email info@envadltd.co.uk or call 07515 669717." },
    ],
  }),
  component: Contact,
});

const field = "w-full rounded-md border border-input bg-card px-4 py-3 outline-none focus:border-ring focus:ring-2 focus:ring-ring/30";

function Contact() {
  const [f, setF] = useState({ name: "", email: "", phone: "", message: "" });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const body = `${f.message}\n\nName: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Enquiry from " + f.name)}&body=${encodeURIComponent(body)}`;
  };
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });

  return (
    <SiteLayout>
      <PageHeader eyebrow="Contact" title="Let's talk about your project." intro="Tell us what you need and we'll get back to you promptly." />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.4fr]">
        <div className="deep-glow space-y-7 self-start rounded-2xl p-8 text-navy-foreground shadow-sm">
          <div>
            <p className="text-sm uppercase tracking-widest text-navy-foreground/60">Email</p>
            <a href={`mailto:${CONTACT.email}`} className="font-display text-xl font-semibold text-leaf-bright hover:underline">{CONTACT.email}</a>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-navy-foreground/60">Phone</p>
            <a href={CONTACT.phoneHref} className="font-display text-xl font-semibold text-leaf-bright hover:underline">{CONTACT.phone}</a>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-navy-foreground/60">Based in</p>
            <p className="font-display text-xl font-semibold">Telford, Shropshire</p>
          </div>
        </div>
        <form onSubmit={submit} className="space-y-4 rounded-lg border bg-card p-6 shadow-sm">
          <textarea required rows={5} placeholder="Tell us about your request" className={field} value={f.message} onChange={set("message")} />
          <div className="grid gap-4 sm:grid-cols-2">
            <input required placeholder="Your name" className={field} value={f.name} onChange={set("name")} />
            <input required type="email" placeholder="Your email" className={field} value={f.email} onChange={set("email")} />
          </div>
          <input placeholder="Your phone number" className={field} value={f.phone} onChange={set("phone")} />
          <button className="w-full rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90">Send message</button>
        </form>
      </section>
    </SiteLayout>
  );
}
