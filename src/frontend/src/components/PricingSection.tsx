import { pricingPlans } from "@/data/content";
import { Check } from "lucide-react";
import { motion } from "motion/react";

export function PricingSection() {
  const handleContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="pricing" className="py-24 bg-muted/30" data-ocid="pricing">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-3"
        >
          <p className="text-xs tracking-[0.3em] uppercase font-body text-primary">
            Investment
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Simple Pricing
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto text-base">
            Transparent, honest pricing. Every option is a step toward a
            consistent practice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border p-8 flex flex-col gap-6 transition-gentle ${
                plan.highlight
                  ? "bg-primary text-primary-foreground border-primary shadow-soft scale-[1.02]"
                  : "bg-card border-border shadow-calm hover:shadow-soft"
              }`}
              data-ocid={`pricing-${plan.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground text-xs font-body px-3 py-1 rounded-full border border-accent/30">
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <h3
                  className={`font-display text-xl mb-2 ${plan.highlight ? "text-primary-foreground" : "text-foreground"}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm font-body leading-relaxed ${plan.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                >
                  {plan.description}
                </p>
              </div>

              <div>
                <span
                  className={`font-display text-4xl ${plan.highlight ? "text-primary-foreground" : "text-foreground"}`}
                >
                  {plan.price}
                </span>
                <span
                  className={`ml-1 text-sm font-body ${plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm font-body"
                  >
                    <Check
                      size={14}
                      className={`mt-0.5 shrink-0 ${plan.highlight ? "text-primary-foreground/80" : "text-primary"}`}
                    />
                    <span
                      className={
                        plan.highlight
                          ? "text-primary-foreground/90"
                          : "text-muted-foreground"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={handleContact}
                className={`w-full py-3 rounded-full text-sm font-body tracking-wide transition-gentle ${
                  plan.highlight
                    ? "bg-primary-foreground text-primary hover:opacity-90"
                    : "bg-primary text-primary-foreground hover:opacity-90 shadow-calm"
                }`}
                data-ocid={`pricing-cta-${plan.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
