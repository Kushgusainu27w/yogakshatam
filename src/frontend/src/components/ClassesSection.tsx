import { Badge } from "@/components/ui/badge";
import { classes } from "@/data/content";
import { Calendar, Clock } from "lucide-react";
import { motion } from "motion/react";

const levelColors: Record<string, string> = {
  "All Levels": "bg-primary/10 text-primary border-primary/20",
  Beginner: "bg-accent/10 text-accent-foreground border-accent/20",
  Intermediate: "bg-secondary/10 text-secondary-foreground border-secondary/20",
  Advanced: "bg-destructive/10 text-destructive border-destructive/20",
};

export function ClassesSection() {
  return (
    <section id="classes" className="py-24 bg-muted/30" data-ocid="classes">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-3"
        >
          <p className="text-xs tracking-[0.3em] uppercase font-body text-primary">
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Classes & Practices
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto text-base">
            From gentle beginners flows to deep meditative stillness — find the
            practice that speaks to you.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((cls, i) => (
            <motion.article
              key={cls.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-calm hover:shadow-soft transition-gentle group"
              data-ocid={`class-card-${cls.id}`}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={cls.image}
                  alt={cls.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-gentle"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span
                    className={`text-xs font-body px-2.5 py-1 rounded-full border ${levelColors[cls.level] ?? levelColors["All Levels"]}`}
                  >
                    {cls.level}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="font-display text-xl text-foreground">
                  {cls.name}
                </h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  {cls.description}
                </p>
                <div className="flex items-center gap-4 pt-2 text-xs font-body text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} className="text-primary" />
                    {cls.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-primary" />
                    {cls.schedule}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
