import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { CTA } from "./index";

export const Route = createFileRoute("/how-it-works")({
  component: HowPage,
});

const PHASES = [
  { n: "01", t: "Map", days: "Day 1–2", b: "Audit the funnel. Listen to recordings. Read missed DMs. Quantify the leak.", out: ["Revenue-at-risk report", "Operator brief", "Channel inventory"] },
  { n: "02", t: "Design", days: "Day 3–6", b: "Sketch the persona. Build the knowledge base. Wire the integrations. You sign off on every line.", out: ["Voice + tone card", "Conversation maps", "Integration plan"] },
  { n: "03", t: "Deploy", days: "Day 7–12", b: "Port the number. Hook the CRM. Light the dashboards. Launch quiet, scale loud.", out: ["Live phone + chat agent", "CRM + Calendar wired", "Realtime ops view"] },
  { n: "04", t: "Tune", days: "Ongoing", b: "Weekly review of transcripts. Tighten responses. Push conversion up, cost per booking down.", out: ["Weekly tuning report", "A/B prompt tests", "Quarterly strategy"] },
];

const FAQ = [
  { q: "Does it actually sound human?", a: "Yes. We use the latest low-latency speech models with custom voices. Most callers don't realise — and when they do, they don't mind, because the booking gets handled." },
  { q: "What if it can't answer something?", a: "It hands off. Soft transfer to a human, or it takes a message and routes a Slack / SMS alert to your team within seconds." },
  { q: "How long until launch?", a: "7 to 14 days for the first operator, depending on integration complexity. We've shipped voice agents in 5." },
  { q: "Will it integrate with my CRM?", a: "Almost certainly. HubSpot, Salesforce, GoHighLevel, Pipedrive, Close, Airtable, Notion, custom — if it has an API or a webhook, we ship it." },
  { q: "What does it cost to run?", a: "Compute averages $0.04 per conversation. Most clients see payback in the first booked job." },
];

function HowPage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const line = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <section className="mx-auto max-w-[1400px] px-5 pt-12 lg:px-8">
        <p className="mono text-[10px] uppercase tracking-[0.24em] text-lime">// Process · 04 phases</p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="serif mt-4 text-6xl leading-[0.92] md:text-[9rem]">A two-week<br/><span className="italic text-amber">night shift,</span> built for you.</motion.h1>
        <p className="mt-6 max-w-xl text-muted-foreground md:text-lg">No templates. No 90-day discovery. We map, design, deploy and tune — in that order, fast.</p>
      </section>

      <section ref={ref} className="relative mx-auto mt-20 max-w-[1400px] px-5 lg:px-8">
        <div className="absolute left-[26px] top-0 hidden h-full w-px bg-line md:block lg:left-[40px]" />
        <motion.div style={{ height: line }} className="absolute left-[26px] top-0 hidden w-px bg-lime md:block lg:left-[40px]" />
        <ol className="space-y-24 md:pl-20">
          {PHASES.map((p, i) => (
            <motion.li key={p.n} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: i * 0.05 }} className="relative">
              <span className="absolute -left-20 top-2 hidden h-4 w-4 rounded-full border-2 border-lime bg-background md:block" />
              <div className="mono flex items-baseline gap-4 text-[10px] uppercase tracking-[0.3em] text-lime">{p.n}<span className="text-muted-foreground">{p.days}</span></div>
              <h2 className="serif mt-2 text-7xl leading-none md:text-[8rem]">{p.t}<span className="text-lime">.</span></h2>
              <p className="mt-4 max-w-xl text-muted-foreground md:text-lg">{p.b}</p>
              <ul className="mono mt-6 flex flex-wrap gap-2">
                {p.out.map(o => <li key={o} className="rounded-full border border-line bg-card/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em]">{o}</li>)}
              </ul>
            </motion.li>
          ))}
        </ol>
      </section>

      <section className="mx-auto mt-32 max-w-[1400px] px-5 lg:px-8">
        <div className="border-b border-line pb-6">
          <p className="mono text-[10px] uppercase tracking-[0.24em] text-lime">// FAQ</p>
          <h2 className="serif mt-3 text-5xl italic md:text-7xl">Things people ask before signing.</h2>
        </div>
        <div className="divide-y divide-white/5">
          {FAQ.map((f, i) => <FAQRow key={i} q={f.q} a={f.a} i={i} />)}
        </div>
      </section>
      <CTA />
    </>
  );
}

function FAQRow({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <button onClick={() => setOpen(o => !o)} className="block w-full text-left">
      <div className="grid grid-cols-[40px_1fr_40px] items-center gap-4 py-6">
        <span className="mono text-[10px] uppercase tracking-[0.24em] text-lime">0{i + 1}</span>
        <span className="serif text-2xl md:text-4xl">{q}</span>
        <span className={`mono text-2xl text-lime transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </div>
      <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} className="overflow-hidden">
        <p className="max-w-3xl pb-6 pl-[56px] text-muted-foreground md:text-lg">{a}</p>
      </motion.div>
    </button>
  );
}