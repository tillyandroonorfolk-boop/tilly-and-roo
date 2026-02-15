import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Leaf,
  Flame,
  Instagram,
  Mail,
  MapPin,
  Package,
  ShieldCheck,
  Search,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

/**
 * Tilly & Roo Norfolk — Single-file site
 * - Tailwind styling
 * - Framer Motion animations
 * - No backend required
 *
 * Quick customize:
 * - Replace BRAND, links, and product data below.
 */

const BRAND = {
  name: "Tilly & Roo",
  location: "Norfolk",
  tagline: "Hand-poured wax melts made for cosy corners & fresh starts.",
  instagramHandle: "@NorfolkflowerBoutique",
  instagramUrl: "https://instagram.com/NorfolkflowerBoutique",
  contactEmail: "hello@tillyandroo.co.uk",
};

const EDITS = [
  {
    name: "Cosy Edit",
    description: "Soft, warm, and comforting blends for slow evenings.",
    icon: Flame,
  },
  {
    name: "Fresh Edit",
    description: "Clean, airy blends for bright rooms and crisp linens.",
    icon: Leaf,
  },
];

const PRODUCTS = [
  {
    name: "Sunday Linen",
    edit: "Fresh Edit",
    notes: ["clothesline", "soft cotton", "cosy cardigan"],
    vibe: "Fresh, clean, comforting",
  },
  {
    name: "Cashmere Mornings",
    edit: "Cosy Edit",
    notes: ["cashmere petals", "cozy cardigan", "soft musk"],
    vibe: "Creamy, cosy, elegant",
  },
  {
    name: "Quiet House",
    edit: "Cosy Edit",
    notes: ["fluffy fleece", "newborn nursery", "powdery warmth"],
    vibe: "Tender, calm, soothing",
  },
  {
    name: "Amber Hearth",
    edit: "Cosy Edit",
    notes: ["warm amber", "plum", "vanilla amber"],
    vibe: "Golden, rich, welcoming",
  },
  {
    name: "Woodsmoke Wool",
    edit: "Cosy Edit",
    notes: ["bonfire air", "soft vanilla", "smoky warmth"],
    vibe: "Smoky, soft, snug",
  },
];

const FAQ = [
  {
    q: "How do I use wax melts?",
    a: "Pop 1–2 segments into your wax warmer. Enjoy until the scent fades, then let the wax cool and remove it safely.",
  },
  {
    q: "How long do they last?",
    a: "It depends on your warmer and room size, but most customers enjoy multiple sessions per melt segment.",
  },
  {
    q: "Are your products handmade?",
    a: "Yes — each batch is hand-poured in small runs in Norfolk for a consistent, luxe finish.",
  },
  {
    q: "Do you include CLP / safety info?",
    a: "Yes. We label every product with required safety information and guidance for safe use.",
  },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium text-black/70 backdrop-blur">
      {children}
    </span>
  );
}

function SectionTitle({ kicker, title, desc }) {
  return (
    <div className="max-w-2xl">
      {kicker ? (
        <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-black/60">
          <Sparkles className="h-4 w-4" />
          <span>{kicker}</span>
        </div>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-black md:text-3xl">
        {title}
      </h2>
      {desc ? <p className="mt-3 text-base text-black/70">{desc}</p> : null}
    </div>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="rounded-full px-3 py-2 text-sm font-medium text-black/70 hover:bg-black/5 hover:text-black"
    >
      {children}
    </a>
  );
}

export default function TillyAndRooNorfolkSite() {
  const [query, setQuery] = useState("");
  const [edit, setEdit] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchesQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.vibe.toLowerCase().includes(q) ||
        p.notes.join(" ").toLowerCase().includes(q) ||
        p.edit.toLowerCase().includes(q);
      const matchesEdit = edit === "All" || p.edit === edit;
      return matchesQ && matchesEdit;
    });
  }, [query, edit]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F6F2EE] via-white to-[#F6F2EE] text-black">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-black/10 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-2xl bg-black text-white shadow-sm">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">{BRAND.name}</div>
              <div className="text-xs text-black/60">{BRAND.location}</div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            <NavLink href="#edits">Edits</NavLink>
            <NavLink href="#collection">Collection</NavLink>
            <NavLink href="#story">Our Story</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <a
              className="hidden rounded-full border border-black/10 bg-white px-3 py-2 text-sm font-medium text-black/70 hover:bg-black/5 md:inline-flex"
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="mr-2 h-4 w-4" />
              Instagram
            </a>
            <a
              className="inline-flex rounded-full bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90"
              href="#collection"
            >
              Shop Scents <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main id="top">
        <section className="mx-auto max-w-6xl px-4 pb-10 pt-10 md:px-6 md:pb-16 md:pt-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-2">
                <Pill>
                  <MapPin className="mr-2 h-4 w-4" />
                  Hand-poured in {BRAND.location}
                </Pill>
                <Pill>
                  <ShieldCheck className="mr-2 h-4 w-4" />
                  Safety-labelled & gift-ready
                </Pill>
                <Pill>
                  <Package className="mr-2 h-4 w-4" />
                  Small-batch melts
                </Pill>
              </div>

              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Luxe wax melts, made for the moments you actually live in.
              </h1>
              <p className="text-base text-black/70 md:text-lg">{BRAND.tagline}</p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  className="rounded-full"
                  onClick={() => {
                    const el = document.querySelector("#collection");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Explore the collection <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full"
                  onClick={() => {
                    const el = document.querySelector("#story");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Our story
                </Button>
              </div>

              <div className="text-sm text-black/60">
                Available exclusively at <span className="font-semibold">{BRAND.instagramHandle}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-2 rounded-[2.25rem] bg-black/5 blur-2xl" />
              <Card className="relative overflow-hidden rounded-[2.25rem] border-black/10 shadow-sm">
                <CardHeader className="border-b border-black/10 bg-white/70">
                  <CardTitle className="flex items-center justify-between text-base">
                    <span className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5" />
                      Today’s vibe
                    </span>
                    <Badge className="rounded-full" variant="secondary">
                      Cosy / Fresh
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-4">
                    <div className="rounded-2xl border border-black/10 bg-gradient-to-br from-white to-black/5 p-5">
                      <div className="text-xs font-semibold text-black/60">Try this pairing</div>
                      <div className="mt-2 text-xl font-semibold tracking-tight">Sunday Linen</div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {["Fresh linen", "soft cotton", "cosy warmth"].map((t) => (
                          <Badge
                            key={t}
                            variant="outline"
                            className="rounded-full border-black/10 bg-white"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                      <p className="mt-3 text-sm text-black/70">
                        Clean-room energy with a soft, snuggly finish.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-black/10 bg-white p-4">
                        <div className="text-xs font-semibold text-black/60">Small-batch</div>
                        <div className="mt-1 text-sm font-semibold">Poured by hand</div>
                      </div>
                      <div className="rounded-2xl border border-black/10 bg-white p-4">
                        <div className="text-xs font-semibold text-black/60">Gifting</div>
                        <div className="mt-1 text-sm font-semibold">Wrapped & ready</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Edits */}
        <section id="edits" className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionTitle
              kicker="Two curated vibes"
              title="Choose your edit"
              desc="Cosy or Fresh — start with the mood, then pick a signature scent."
            />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {EDITS.map((e) => {
              const Icon = e.icon;
              return (
                <motion.div
                  key={e.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="rounded-[2rem] border-black/10 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="inline-flex items-center gap-2 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                            <Icon className="h-4 w-4" />
                            {e.name}
                          </div>
                          <p className="mt-3 text-sm text-black/70">{e.description}</p>
                        </div>
                        <Button
                          variant="outline"
                          className="rounded-full"
                          onClick={() => {
                            setEdit(e.name);
                            const el = document.querySelector("#collection");
                            el?.scrollIntoView({ behavior: "smooth" });
                          }}
                        >
                          View scents
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Collection */}
        <section id="collection" className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionTitle
              kicker="Shop the collection"
              title="Signature scents"
              desc="Search by name, note, or vibe — and filter by edit."
            />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-black/50" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search… (e.g., linen, amber, cosy)"
                  className="w-full rounded-full border-black/10 bg-white pl-9 sm:w-[320px]"
                />
              </div>
              <div className="flex gap-2">
                {["All", "Cosy Edit", "Fresh Edit"].map((opt) => (
                  <Button
                    key={opt}
                    variant={edit === opt ? "default" : "outline"}
                    className="rounded-full"
                    onClick={() => setEdit(opt)}
                  >
                    {opt === "All" ? "All" : opt.replace(" Edit", "")}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full rounded-[2rem] border-black/10 shadow-sm">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-lg font-semibold tracking-tight">{p.name}</div>
                        <div className="mt-1 text-sm text-black/60">{p.vibe}</div>
                      </div>
                      <Badge
                        variant="secondary"
                        className="rounded-full border border-black/10 bg-white"
                      >
                        {p.edit.replace(" Edit", "")}
                      </Badge>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.notes.map((n) => (
                        <Badge
                          key={n}
                          variant="outline"
                          className="rounded-full border-black/10 bg-white"
                        >
                          {n}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-3">
                      <Button
                        className="rounded-full"
                        onClick={() => {
                          // Replace with your checkout / DM flow
                          const msg = encodeURIComponent(
                            `Hi! I’d love to order ${p.name} from Tilly & Roo Norfolk ✨`
                          );
                          window.open(`${BRAND.instagramUrl}?text=${msg}`, "_blank");
                        }}
                      >
                        Order via Instagram
                      </Button>
                      <Button
                        variant="outline"
                        className="rounded-full"
                        onClick={() => {
                          setQuery(p.name);
                          window.location.hash = "collection";
                        }}
                      >
                        Pin
                      </Button>
                    </div>

                    <p className="mt-4 text-xs text-black/60">
                      Always follow your warmer’s instructions. Never leave burning melts unattended.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="mt-10 rounded-3xl border border-black/10 bg-white p-6 text-black/70">
              No matches — try a different note (e.g., “linen”, “amber”, “vanilla”).
            </div>
          ) : null}
        </section>

        {/* Story */}
        <section id="story" className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <SectionTitle
              kicker="Our story"
              title="Small-batch, thoughtfully blended"
              desc="Tilly & Roo is built around two things: beautiful scent and everyday ease. Each blend is tested for throw, balance, and that “walk into the room and smile” feeling." 
            />

            <div className="grid gap-4">
              <Card className="rounded-[2rem] border-black/10 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-black text-white">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">A luxe finish, without the fuss</div>
                      <p className="mt-1 text-sm text-black/70">
                        Designed to feel premium — from the scent profile to the unboxing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] border-black/10 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-black text-white">
                      <Leaf className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Curated edits</div>
                      <p className="mt-1 text-sm text-black/70">
                        Shop by mood: cosy comforters and fresh-air favourites.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] border-black/10 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-black text-white">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Made with care</div>
                      <p className="mt-1 text-sm text-black/70">
                        Clear safety guidance and product labelling — so you can enjoy scent confidently.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
          <SectionTitle
            kicker="Quick answers"
            title="FAQ"
            desc="Everything you might want to know before you melt."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {FAQ.map((item) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
              >
                <Card className="rounded-[2rem] border-black/10 shadow-sm">
                  <CardContent className="p-6">
                    <div className="text-sm font-semibold">{item.q}</div>
                    <p className="mt-2 text-sm text-black/70">{item.a}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
          <Card className="overflow-hidden rounded-[2.25rem] border-black/10 shadow-sm">
            <div className="grid md:grid-cols-2">
              <div className="p-6 md:p-8">
                <SectionTitle
                  kicker="Get in touch"
                  title="Orders, stockists, collaborations"
                  desc="Message on Instagram for fastest replies, or email if you prefer."
                />

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={BRAND.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
                  >
                    <Instagram className="mr-2 h-4 w-4" />
                    DM on Instagram
                  </a>
                  <a
                    href={`mailto:${BRAND.contactEmail}`}
                    className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black/80 hover:bg-black/5"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Email us
                  </a>
                </div>

                <div className="mt-6 space-y-2 text-sm text-black/70">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Norfolk, UK</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>{BRAND.contactEmail}</span>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-black/10 bg-white p-4 text-xs text-black/60">
                  <div className="font-semibold text-black/70">Safety note</div>
                  <p className="mt-1">
                    Use melts only with suitable warmers. Keep away from children/pets.
                    Never leave a warmer unattended.
                  </p>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-black/5 via-white to-black/10 p-6 md:p-8">
                <div className="absolute inset-0 opacity-40" />
                <div className="relative space-y-4">
                  <div className="text-sm font-semibold">Join the drop list</div>
                  <p className="text-sm text-black/70">
                    Pop your email here (optional) so you can paste it into your email tool / form later.
                    This demo doesn’t submit anywhere.
                  </p>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Input
                      placeholder="Email address"
                      className="rounded-full border-black/10 bg-white"
                    />
                    <Button
                      className="rounded-full"
                      onClick={() => alert("Demo only — connect this to your email platform when ready.")}
                    >
                      Subscribe
                    </Button>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="text-xs font-semibold text-black/60">What to expect</div>
                    <ul className="mt-2 space-y-2 text-sm text-black/70">
                      <li>• New blends + restocks</li>
                      <li>• Seasonal edits</li>
                      <li>• Stockist announcements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/10 bg-white/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-black/60 md:flex-row md:items-center md:justify-between md:px-6">
          <div>
            © {new Date().getFullYear()} {BRAND.name} {BRAND.location}. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 hover:bg-black/5"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
            <a
              href={`mailto:${BRAND.contactEmail}`}
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 hover:bg-black/5"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
