import { siteConfig } from "@/data/content";
import { motion } from "motion/react";

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-ocid="hero"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-yoga.dim_1600x900.jpg')",
        }}
        aria-hidden="true"
      />

      {/* Warm gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.15 0.02 70 / 0.72) 0%, oklch(0.20 0.03 162 / 0.50) 60%, oklch(0.12 0.01 70 / 0.40) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Soft bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background:
            "linear-gradient(to top, oklch(var(--background)) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-16">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs tracking-[0.3em] uppercase font-body mb-6"
          style={{ color: "oklch(0.90 0.04 70)" }}
        >
          Welcome to
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight mb-6"
          style={{ color: "oklch(0.97 0.01 70)" }}
        >
          {siteConfig.name}
        </motion.h1>

        {/* Divider ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div
            className="h-px w-16 opacity-50"
            style={{ background: "oklch(0.80 0.05 70)" }}
          />
          <span
            className="text-lg opacity-70"
            style={{ color: "oklch(0.90 0.05 70)" }}
          >
            ✦
          </span>
          <div
            className="h-px w-16 opacity-50"
            style={{ background: "oklch(0.80 0.05 70)" }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-display text-xl sm:text-2xl md:text-3xl italic mb-6"
          style={{ color: "oklch(0.92 0.03 70)" }}
        >
          {siteConfig.tagline}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="font-body text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed opacity-80"
          style={{ color: "oklch(0.90 0.02 70)" }}
        >
          {siteConfig.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={() => handleScroll("#classes")}
            className="px-8 py-3.5 rounded-full font-body text-sm tracking-wide transition-gentle shadow-soft hover:shadow-calm hover:scale-105 active:scale-95"
            style={{
              background: "oklch(0.56 0.09 162)",
              color: "oklch(0.98 0.01 70)",
            }}
            data-ocid="hero-cta-primary"
          >
            Explore Classes
          </button>
          <button
            type="button"
            onClick={() => handleScroll("#about")}
            className="px-8 py-3.5 rounded-full font-body text-sm tracking-wide transition-gentle border hover:bg-white/10"
            style={{
              color: "oklch(0.97 0.01 70)",
              borderColor: "oklch(0.85 0.02 70 / 0.5)",
            }}
            data-ocid="hero-cta-secondary"
          >
            About Akshat
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
          aria-hidden="true"
        >
          <span
            className="text-xs tracking-widest uppercase font-body"
            style={{ color: "oklch(0.90 0.02 70)" }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="w-px h-8"
            style={{ background: "oklch(0.85 0.02 70 / 0.6)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
