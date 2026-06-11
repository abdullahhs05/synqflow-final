import { useEffect, useRef } from "react";

export function VoiceWave({ bars = 28, color = "#d4ff3a" }: { bars?: number; color?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    let raf = 0;
    let t = 0;
    const loop = () => {
      t += 0.08;
      children.forEach((c, i) => {
        const v = Math.abs(Math.sin(t + i * 0.45)) * 0.85 + 0.15;
        c.style.transform = `scaleY(${v})`;
      });
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <div ref={ref} className="flex h-10 items-center gap-[3px]">
      {Array.from({ length: bars }).map((_, i) => (
        <span key={i} className="block h-full w-[3px] origin-center rounded-full" style={{ background: color, transform: "scaleY(0.2)", transition: "transform 60ms linear" }} />
      ))}
    </div>
  );
}