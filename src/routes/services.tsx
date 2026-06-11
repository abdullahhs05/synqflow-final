import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { CTA } from "./index";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

const SERVICES = [
  {
    n: "01",
    t: "AI Voice Agent",
    tag: "Inbound · Voice",
    b: "A custom-built phone agent that answers every call, qualifies the lead, and books the appointment — all without a human in the loop. Sounds natural, responds instantly, never misses a ring.",
    features: ["Custom voice & persona", "CRM integration", "Calendar booking", "Live call handoff", "Call transcripts"],
    stat: { n: "94%", label: "Answer rate" },
  },
  {
    n: "02",
    t: "Outbound Re-engagement",
    tag: "Outbound · Voice + SMS",
    b: "Dials your cold and stale pipeline automatically. Personalised openers, multi-touch follow-ups, and smart cadences — running 24/7 until every lead responds or opts out.",
    features: ["Personalised outbound calls", "SMS + voicemail drops", "Smart cadences", "Reply detection", "Pipeline enrichment"],
    stat: { n: "3–5×", label: "Contact rate vs manual" },
  },
  {
    n: "03",
    t: "Chat & DM Automation",
    tag: "Chat · Async",
    b: "Handles website chat, Instagram DMs, WhatsApp, and Facebook Messenger. Qualifies visitors, answers questions, nurtures warm leads, and routes hot ones to your team — instantly.",
    features: ["Website live chat", "Instagram & WhatsApp DMs", "Lead qualification flows", "Smart handoff", "24/7 uptime"],
    stat: { n: "<2s", label: "First response" },
  },
  {
    n: "04",
    t: "Workflow Automation",
    tag: "Backend · Integration",
    b: "Wires your tools together so no lead falls through the cracks. CRM updates, Slack alerts, booking confirmations, follow-up sequences — all triggered automatically at the right moment.",
    features: ["CRM sync & tagging", "Slack / email alerts", "Booking confirmations", "No-show recovery", "Reporting dashboards"],
    stat: { n: "0", label: "Manual tasks remaining" },
  },
];

function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-5 pt-12 lg:px-8">
        <p className="mono text-[10px] uppercase tracking-[0.24em] text-lime">// Systems · 04 deployed</p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="serif mt-4 text-6xl leading-[0.92] md:text-[9rem]"
        >
          Every channel.<br />
          <span className="italic text-lime">Zero gaps.</span>
        </motion.h1>
        <p className="mt-6 max-w-xl text-muted-foreground md:text-lg">
          Voice, chat, outbound, workflow. Four systems, one mission: make sure every lead gets a response before they find a competitor.
        </p>
      </section>

      <section className="mx-auto mt-20 max-w-[1400px] space-y-6 px-5 lg:px-8">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.06 }}
            className="group grid gap-8 rounded-3xl border border-line bg-card/40 p-8 transition hover:border-lime/30 md:grid-cols-[1fr_auto] md:p-12"
          >
            <div>
              <div className="mono flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-lime">
                <span>{s.n}</span>
                <span className="rounded-full border border-line px-2 py-0.5 text-muted-foreground">{s.tag}</span>
              </div>
              <h2 className="serif mt-4 text-5xl italic md:text-7xl">{s.t}</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">{s.b}</p>
              <ul className="mono mt-6 flex flex-wrap gap-2">
                {s.features.map((f) => (
                  <li key={f} className="rounded-full border border-line bg-background/50 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em]">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-row items-center gap-6 border-t border-line pt-6 md:flex-col md:items-end md:border-l md:border-t-0 md:pl-12 md:pt-0">
              <div className="text-right">
                <p className="serif text-5xl italic text-lime md:text-6xl">{s.stat.n}</p>
                <p className="mono mt-1 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">{s.stat.label}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="mx-auto mt-32 max-w-[1400px] px-5 lg:px-8">
        <div className="rounded-3xl border border-line bg-card/40 p-8 md:p-12">
          <p className="mono text-[10px] uppercase tracking-[0.24em] text-lime">// Custom systems</p>
          <h2 className="serif mt-4 text-4xl italic md:text-6xl">Need something bespoke?</h2>
          <p className="mt-4 max-w-xl text-muted-foreground md:text-lg">
            Most clients need a combination. We scope, design, and build custom stacks — tell us about the leak and we'll engineer a fix.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-7 py-4 text-sm font-semibold text-ink transition hover:bg-lime/90"
          >
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-ink" />
            Talk to us
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
