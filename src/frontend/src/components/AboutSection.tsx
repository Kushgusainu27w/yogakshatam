import { about } from "@/data/content";
import { motion } from "motion/react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background" data-ocid="about">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <p className="text-xs tracking-[0.3em] uppercase font-body text-primary">
                About Akshat
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
                {about.heading}
              </h2>
            </div>
            <div className="w-12 h-0.5 bg-primary/40" />
            {about.paragraphs.map((p) => (
              <p
                key={p.slice(0, 30)}
                className="font-body text-muted-foreground leading-relaxed text-base"
              >
                {p}
              </p>
            ))}
          </motion.div>

          {/* Stats + decorative */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-8"
          >
            {/* Lotus SVG ornament */}
            <div className="flex justify-center lg:justify-start">
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                className="animate-float-gentle opacity-60"
                aria-hidden="true"
              >
                <ellipse
                  cx="60"
                  cy="80"
                  rx="16"
                  ry="28"
                  fill="oklch(0.56 0.09 162 / 0.25)"
                />
                <ellipse
                  cx="60"
                  cy="80"
                  rx="28"
                  ry="16"
                  fill="oklch(0.56 0.09 162 / 0.20)"
                  transform="rotate(-30 60 80)"
                />
                <ellipse
                  cx="60"
                  cy="80"
                  rx="28"
                  ry="16"
                  fill="oklch(0.56 0.09 162 / 0.20)"
                  transform="rotate(30 60 80)"
                />
                <ellipse
                  cx="60"
                  cy="75"
                  rx="10"
                  ry="18"
                  fill="oklch(0.56 0.09 162 / 0.35)"
                />
                <circle
                  cx="60"
                  cy="74"
                  r="7"
                  fill="oklch(0.65 0.10 70 / 0.6)"
                />
                <line
                  x1="60"
                  y1="92"
                  x2="60"
                  y2="108"
                  stroke="oklch(0.56 0.09 162 / 0.4)"
                  strokeWidth="2"
                />
                <ellipse
                  cx="44"
                  cy="108"
                  rx="16"
                  ry="6"
                  fill="oklch(0.56 0.09 162 / 0.15)"
                />
                <ellipse
                  cx="76"
                  cy="108"
                  rx="16"
                  ry="6"
                  fill="oklch(0.56 0.09 162 / 0.15)"
                />
              </svg>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {about.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 text-center shadow-calm"
                >
                  <p className="font-display text-3xl text-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs tracking-wide uppercase font-body text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
