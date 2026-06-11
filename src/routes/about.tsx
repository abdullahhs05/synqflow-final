import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { CTA } from "./index";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const VALUES = [
  { k: "Velocity", v: "We ship in days, not quarters. The lead can't wait — neither will we." },
  { k: "Restraint", v: "Bespoke, not bloated. One operator that works beats ten that don't." },
  { k: "Receipts", v: "Every system is measured. If it isn't booking, it isn't shipping." },
];

function AboutPage() {
  return (
    <>
      <section className="mx-auto grid max-w-[1400px] gap-12 px-5 pt-12 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <p className="mono text-[10px] uppercase tracking-[0.24em] text-lime">// Studio · est. 2024</p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="serif mt-4 text-6xl leading-[0.92] md:text-[8.5rem]">
            A small studio,<br/><span className="italic text-lime">obsessed with</span><br/>the second ring.
          </motion.h1>
        </div>
        <aside className="mono space-y-1 self-end text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          <p>// FOUNDED — 2024</p>
          <p>// TEAM — 3 humans + n AI</p>
          <p>// HQ — Remote / Global</p>
          <p>// CONTACT — abd@synqflow.online</p>
        </aside>
      </section>

      <section className="mx-auto mt-24 grid max-w-[1400px] gap-16 px-5 lg:grid-cols-[1.1fr_1fr] lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6 text-lg leading-relaxed text-cream">
          <p className="serif text-3xl italic text-amber">It started with a roofer.</p>
          <p>A friend was running a small home-services business. Great work, great reviews — and 40% of his calls going to voicemail. By the time he called back, the customer had hired someone else.</p>
          <p>SynqFlow was born to fix that single, infuriating gap: <em className="text-cream not-italic">a business that does the work, losing the work, because no one picked up.</em></p>
          <p>Today we build the same thing — bespoke AI operators that answer, qualify, and book — for service businesses, agencies, consumer brands and B2B teams across the world.</p>
          <p className="serif text-2xl italic text-lime">Our promise is small and total: nothing falls through the cracks.</p>
        </motion.div>

        <div className="space-y-4">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="rounded-2xl border border-lime/30 bg-gradient-to-br from-lime/15 via-card to-transparent p-6">
            <div className="flex items-center gap-4">
              <div className="serif flex h-16 w-16 items-center justify-center rounded-full bg-lime text-3xl italic text-ink">A</div>
              <div>
                <h3 className="serif text-2xl italic">Abd</h3>
                <p className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">Founder · Operator</p>
                <a href="mailto:abd@synqflow.online" className="mono text-[10px] uppercase tracking-[0.24em] text-lime hover:underline">abd@synqflow.online</a>
              </div>
            </div>
          </motion.div>
          {VALUES.map((v, i) => (
            <motion.div key={v.k} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-line bg-card/50 p-6">
              <div className="mono text-[10px] uppercase tracking-[0.24em] text-lime">0{i + 1} · principle</div>
              <h4 className="serif mt-2 text-3xl italic">{v.k}.</h4>
              <p className="mt-2 text-sm text-muted-foreground">{v.v}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}