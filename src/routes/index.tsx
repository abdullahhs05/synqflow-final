import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { VoiceWave } from "@/components/VoiceWave";
import { Scramble } from "@/components/Scramble";
import heroPoster from "@/assets/hero-poster.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const STATS = [
  { n: "94%", label: "Lead response rate" },
  { n: "<2s", label: "Time to first response" },
  { n: "24/7", label: "Always on" },
  { n: "2wk", label: "Avg. time to deploy" },
];

const SERVICES_PREVIEW = [
  {
    n: "01",
    t: "AI Voice Agent",
    b: "Answers every inbound call, qualifies the lead, books the appointment. Sounds human. Never sleeps.",
    tag: "Voice",
  },
  {
    n: "02",
    t: "Lead Re-engagement",
    b: "Dials your cold pipeline. Sends personalised follow-ups until leads respond or opt out. No manual effort.",
    tag: "Outbound",
  },
  {
    n: "03",
    t: "Chat & DM Automation",
    b: "Handles website chat, Instagram DMs, and WhatsApp. Qualifies, nurtures, books — all without a human.",
    tag: "Chat",
  },
];

export function CTA() {
  return (
    <section className="mx-auto mt-32 max-w-[1400px] px-5 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-lime/30 bg-gradient-to-br from-lime/10 via-card to-transparent p-10 md:p-16">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-lime/10 blur-3xl" />
        <p className="mono text-[10px] uppercase tracking-[0.24em] text-lime">// Ready to deploy</p>
        <h2 className="serif mt-4 text-5xl leading-[0.95] md:text-7xl">
          Stop losing leads<br />
          <span className="italic text-lime">while you sleep.</span>
        </h2>
        <p className="mt-6 max-w-lg text-muted-foreground md:text-lg">
          Book a 20-minute audit. We'll map every leak in your funnel and quote a system that plugs it.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-lime px-7 py-4 text-sm font-semibold text-ink shadow-[0_8px_40px_-12px_rgba(212,255,58,0.6)] transition hover:bg-lime/90"
          >
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-ink" />
            Book free audit
          </Link>
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-4 text-sm text-cream transition hover:border-lime/50"
          >
            See how it works →
          </Link>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative mx-auto max-w-[1400px] overflow-hidden px-5 pt-8 lg:px-8">
        <motion.div style={{ y, opacity }} className="relative z-10">
          <p className="mono text-[10px] uppercase tracking-[0.24em] text-lime">
            // AI Operations · Lead Automation
          </p>
          <h1 className="serif mt-4 text-[clamp(3.5rem,10vw,9rem)] leading-[0.9]">
            Never miss<br />
            <span className="italic text-lime">a lead</span><br />
            again.
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground md:text-xl">
            SynqFlow builds AI voice agents and automation systems that follow up with every lead instantly — 24/7, no human needed.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-lime px-7 py-4 text-sm font-semibold text-ink shadow-[0_8px_40px_-12px_rgba(212,255,58,0.6)] transition hover:bg-lime/90"
            >
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-ink" />
              Deploy a system
            </Link>
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-cream">
              See how it works <span className="text-lime">→</span>
            </Link>
          </div>
          <div className="mt-10">
            <VoiceWave bars={32} />
            <p className="mono mt-2 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              // Live agent · responding now
            </p>
          </div>
        </motion.div>

        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]) }}
          className="relative mt-12 aspect-[16/7] overflow-hidden rounded-3xl border border-line"
        >
          <img
            src={heroPoster}
            alt="SynqFlow operations dashboard"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div className="mono text-[10px] uppercase tracking-[0.24em] text-lime">
              <Scramble text="OPERATOR ACTIVE · ALL CHANNELS LIVE" duration={1200} />
            </div>
            <div className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground hidden sm:block">
              0 leads missed this session
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="mx-auto mt-24 max-w-[1400px] px-5 lg:px-8">
        <div className="grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.n} className="bg-background p-8">
              <p className="serif text-5xl italic text-lime md:text-6xl">{s.n}</p>
              <p className="mono mt-2 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto mt-32 max-w-[1400px] px-5 lg:px-8">
        <div className="flex items-end justify-between border-b border-line pb-6">
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.24em] text-lime">// Systems · 03 active</p>
            <h2 className="serif mt-3 text-5xl italic md:text-7xl">What we deploy.</h2>
          </div>
          <Link to="/services" className="mono hidden text-[10px] uppercase tracking-[0.24em] text-muted-foreground transition hover:text-lime md:block">
            All systems →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES_PREVIEW.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-2xl border border-line bg-card/50 p-6 transition hover:border-lime/40"
            >
              <div className="mono flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-lime">
                <span>{s.n}</span>
                <span className="rounded-full border border-line px-2 py-0.5 text-muted-foreground">{s.tag}</span>
              </div>
              <h3 className="serif mt-4 text-3xl italic">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.b}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social proof */}
      <section className="mx-auto mt-32 max-w-[1400px] px-5 lg:px-8">
        <p className="mono text-[10px] uppercase tracking-[0.24em] text-lime">// Field notes</p>
        <h2 className="serif mt-3 text-5xl italic md:text-7xl">Results from the field.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              q: "We were losing 30% of leads to voicemail. SynqFlow's agent now answers every call. Bookings are up 22% in the first month.",
              who: "Home services, Texas",
            },
            {
              q: "The re-engagement campaign dialled 400 cold leads and booked 17 consultations in a week. Our sales team was sceptical — now they're converts.",
              who: "Marketing agency, London",
            },
          ].map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-line bg-card/50 p-8"
            >
              <p className="serif text-2xl italic leading-snug text-cream">"{t.q}"</p>
              <footer className="mono mt-6 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                — {t.who}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
