import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import logo from "@/assets/logo_synqflow.png";
import { Magnetic } from "./Magnetic";

const NAV = [
  { to: "/", label: "Index", n: "00" },
  { to: "/services", label: "Systems", n: "01" },
  { to: "/how-it-works", label: "Process", n: "02" },
  { to: "/about", label: "Studio", n: "03" },
  { to: "/contact", label: "Signal", n: "04" },
] as const;

function ScrollBar() {
  const { scrollYProgress } = useScroll();
  const w = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return <motion.div style={{ scaleX: w, transformOrigin: "0 0" }} className="fixed left-0 top-0 z-[60] h-[2px] w-full bg-lime" />;
}

function StatusBar() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id);
  }, []);
  return (
    <div className="mono fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-line bg-background/70 px-4 py-1.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-md">
      <span className="flex items-center gap-2"><span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-lime" />SYNQFLOW // OPERATOR ONLINE</span>
      <span className="hidden sm:inline">v4.2 · LAYER-7 AUTOMATION</span>
      <span>{time} UTC</span>
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => { setOpen(false); }, [path]);
  return (
    <>
      <header className="fixed inset-x-0 top-[26px] z-50">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 lg:px-8">
          <Link to="/" className="group flex items-center gap-3">
            <img src={logo} alt="SynqFlow" className="h-9 w-auto" />
            <div className="leading-[0.9]">
              <div className="serif text-[22px] italic">Synqflow<span className="text-lime">.</span></div>
              <div className="mono text-[9px] uppercase tracking-[0.24em] text-muted-foreground">AI Operations Studio</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => {
              const active = n.to === "/" ? path === "/" : path.startsWith(n.to);
              return (
                <Link key={n.to} to={n.to} className={`group relative flex items-baseline gap-1.5 rounded-full px-4 py-2 text-sm transition ${active ? "text-cream" : "text-muted-foreground hover:text-cream"}`}>
                  <span className="mono text-[10px] text-lime">{n.n}</span>
                  <span>{n.label}</span>
                  {active && <motion.span layoutId="nav-underline" className="absolute -bottom-1 left-3 right-3 h-px bg-lime" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3">
            <Magnetic strength={0.4} className="hidden lg:block">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full border border-lime/60 bg-lime/10 px-5 py-2.5 text-sm font-medium text-cream backdrop-blur-md transition hover:bg-lime hover:text-ink">
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-lime group-hover:bg-ink" />
                Deploy a system
              </Link>
            </Magnetic>
            <button aria-label="Menu" onClick={() => setOpen(o => !o)} className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-line lg:hidden">
              <span className={`h-px w-5 bg-cream transition ${open ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`h-px w-5 bg-cream transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-px w-5 bg-cream transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="fixed inset-x-3 top-24 z-40 overflow-hidden rounded-2xl border border-line bg-card/95 backdrop-blur-xl lg:hidden">
            <ul className="divide-y divide-white/5">
              {NAV.map((n) => (
                <li key={n.to}><Link to={n.to} className="flex items-baseline justify-between px-5 py-4 text-cream hover:bg-white/5"><span className="serif text-2xl">{n.label}</span><span className="mono text-[10px] text-lime">{n.n}</span></Link></li>
              ))}
              <li className="p-3"><Link to="/contact" className="block rounded-xl bg-lime px-4 py-3 text-center text-sm font-semibold text-ink">Deploy a system →</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Footer() {
  return (
    <footer className="relative mt-32 border-t border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">// Manifesto</p>
            <p className="serif mt-4 text-4xl italic leading-[1.05] md:text-6xl">Software that <span className="text-lime">answers</span> when no one else can.</p>
            <p className="mt-6 max-w-md text-sm text-muted-foreground">SynqFlow ships AI operators — voice, chat, and workflow — so every inbound signal turns into a booked outcome. No missed leads. No graveyard shifts. No excuses.</p>
          </div>
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">// Navigate</p>
            <ul className="mt-4 space-y-2">
              {NAV.map(n => <li key={n.to}><Link to={n.to} className="serif text-2xl italic text-cream hover:text-lime">{n.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">// Channels</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a className="hover:text-lime" href="mailto:abd@synqflow.online">abd@synqflow.online</a></li>
              <li className="text-muted-foreground">Bookings open globally</li>
              <li className="text-muted-foreground">Response time · &lt; 4 hours</li>
            </ul>
          </div>
        </div>
        <div className="mono mt-16 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-[10px] uppercase tracking-[0.24em] text-muted-foreground md:flex-row md:items-center">
          <span>© 2026 SynqFlow Operations Ltd.</span>
          <span>Designed with intent · Built to never sleep</span>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <ScrollBar />
      <StatusBar />
      <Nav />
      <AnimatePresence mode="wait">
        <motion.main key={path} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="pt-28">
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
