import { testimonials } from "@/data/content";
import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-background"
      data-ocid="testimonials"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-3"
        >
          <p className="text-xs tracking-[0.3em] uppercase font-body text-primary">
            Kind Words
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Student Voices
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto text-base">
            The real practice begins off the mat. These words come from
            practitioners who've walked the path.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card border border-border rounded-2xl p-7 shadow-calm hover:shadow-soft transition-gentle flex flex-col gap-4"
              data-ocid={`testimonial-${i}`}
            >
              {/* Stars */}
              <div
                className="flex gap-0.5"
                aria-label={`${t.stars} out of 5 stars`}
              >
                <Star size={12} className="text-accent fill-accent" />
                {t.stars > 1 && (
                  <Star size={12} className="text-accent fill-accent" />
                )}
                {t.stars > 2 && (
                  <Star size={12} className="text-accent fill-accent" />
                )}
                {t.stars > 3 && (
                  <Star size={12} className="text-accent fill-accent" />
                )}
                {t.stars > 4 && (
                  <Star size={12} className="text-accent fill-accent" />
                )}
              </div>

              {/* Quote icon */}
              <Quote size={20} className="text-primary/30" />

              {/* Quote */}
              <blockquote className="font-body text-sm text-foreground leading-relaxed flex-1 italic">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="pt-2 border-t border-border">
                <p className="font-display text-sm text-foreground">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground mt-0.5">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
