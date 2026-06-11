import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      await fetch("https://formspree.io/f/movkajbg", { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      setStatus("sent");
      form.reset();
    } catch { setStatus("idle"); }
  }

  return (
    <section className="mx-auto grid min-h-[80vh] max-w-[1400px] gap-12 px-5 pt-8 lg:grid-cols-[1.1fr_1fr] lg:px-8">
      <div>
        <p className="mono text-[10px] uppercase tracking-[0.24em] text-lime">// Signal · open channel</p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="serif mt-4 text-6xl leading-[0.92] md:text-[7.5rem]">
          Let's hear<br/>your <span className="italic text-lime">phone</span> ring.
        </motion.h1>
        <p className="mt-6 max-w-md text-muted-foreground md:text-lg">Tell us about the leaks. 20 minutes. No deck. We'll either help, point you somewhere better, or both.</p>

        <dl className="mono mt-12 grid grid-cols-2 gap-6 border-t border-line pt-6 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          <div><dt className="text-lime">// email</dt><dd className="mt-2 text-cream"><a href="mailto:abd@synqflow.online">abd@synqflow.online</a></dd></div>
          <div><dt className="text-lime">// response</dt><dd className="mt-2 text-cream">&lt; 4 hours</dd></div>
          <div><dt className="text-lime">// hours</dt><dd className="mt-2 text-cream">Always on</dd></div>
          <div><dt className="text-lime">// location</dt><dd className="mt-2 text-cream">Remote / Global</dd></div>
        </dl>
      </div>

      <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} onSubmit={submit}
        className="self-start rounded-3xl border border-line bg-card/50 p-6 backdrop-blur md:p-10">
        <div className="mono flex items-center justify-between border-b border-line pb-3 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          <span className="flex items-center gap-2"><span className="pulse-dot h-1.5 w-1.5 rounded-full bg-lime" />/intake · ready</span>
          <span>{status === "sent" ? "200 OK" : status === "sending" ? "PENDING" : "AWAITING INPUT"}</span>
        </div>
        <Field label="Name" name="name" />
        <Field label="Email" name="email" type="email" />
        <Field label="Company" name="company" />
        <Field label="What's leaking?" name="message" textarea placeholder="e.g. We miss ~30% of after-hours calls and lose half to competitors." />
        <button disabled={status !== "idle"} className="mt-8 inline-flex items-center gap-3 rounded-full bg-lime px-7 py-4 text-sm font-semibold text-ink shadow-[0_8px_40px_-12px_rgba(212,255,58,0.6)] transition disabled:opacity-60">
          {status === "sent" ? "✓ Signal received" : status === "sending" ? "Transmitting…" : "Transmit signal"}
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-ink text-lime">↗</span>
        </button>
        {status === "sent" && <p className="mono mt-4 text-[10px] uppercase tracking-[0.24em] text-lime">// You'll hear back inside 4 hours.</p>}
      </motion.form>
    </section>
  );
}

function Field({ label, name, type = "text", textarea = false, placeholder }: { label: string; name: string; type?: string; textarea?: boolean; placeholder?: string }) {
  const cls = "mt-2 block w-full rounded-xl border border-line bg-background/50 px-4 py-3 text-cream outline-none transition focus:border-lime focus:ring-1 focus:ring-lime";
  return (
    <label className="mt-6 block">
      <span className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">{label}</span>
      {textarea
        ? <textarea name={name} required rows={4} placeholder={placeholder} className={cls} />
        : <input name={name} type={type} required placeholder={placeholder} className={cls} />}
    </label>
  );
}