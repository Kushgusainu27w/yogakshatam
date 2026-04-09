import { siteConfig } from "@/data/content";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background" data-ocid="contact">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-3"
        >
          <p className="text-xs tracking-[0.3em] uppercase font-body text-primary">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Begin Your Journey
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto text-base">
            Have a question about classes, or simply want to connect? Send a
            message — Akshat responds personally.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="font-display text-2xl text-foreground">
                Connect Directly
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Whether you're new to yoga or seeking to deepen an established
                practice, every inquiry is welcome. Reach out — no question is
                too small.
              </p>
            </div>

            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: siteConfig.email },
                { icon: Phone, label: "Phone", value: siteConfig.phone },
                { icon: MapPin, label: "Location", value: siteConfig.location },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase font-body text-muted-foreground mb-0.5">
                      {item.label}
                    </p>
                    <p className="font-body text-sm text-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative quote */}
            <blockquote className="border-l-2 border-primary/40 pl-5 font-display text-sm italic text-muted-foreground">
              "Yoga is not about touching your toes. It is about what you learn
              on the way down."
              <footer className="font-body text-xs mt-1 not-italic">
                — Jigar Gor
              </footer>
            </blockquote>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center space-y-4 bg-card border border-border rounded-2xl p-10 shadow-calm"
                data-ocid="contact-success"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Send size={22} className="text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground">
                  Message Received
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Thank you for reaching out. Akshat will personally respond
                  within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-sm font-body text-primary underline underline-offset-2 hover:opacity-70 transition-gentle"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-border rounded-2xl p-8 shadow-calm space-y-5"
                data-ocid="contact-form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs tracking-widest uppercase font-body text-muted-foreground"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-gentle"
                      data-ocid="contact-name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs tracking-widest uppercase font-body text-muted-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-gentle"
                      data-ocid="contact-email"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs tracking-widest uppercase font-body text-muted-foreground"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-gentle"
                    data-ocid="contact-subject"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs tracking-widest uppercase font-body text-muted-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell Akshat what you're looking for..."
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-gentle resize-none"
                    data-ocid="contact-message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-primary text-primary-foreground text-sm font-body tracking-wide hover:opacity-90 transition-gentle shadow-calm flex items-center justify-center gap-2"
                  data-ocid="contact-submit"
                >
                  <Send size={14} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
