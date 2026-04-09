import { weeklySchedule } from "@/data/content";
import { motion } from "motion/react";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const levelBg: Record<string, string> = {
  "All Levels": "bg-primary/15 text-primary",
  Beginner: "bg-accent/15 text-accent-foreground",
  Intermediate: "bg-secondary/20 text-secondary-foreground",
  Advanced: "bg-destructive/10 text-destructive",
};

export function ScheduleSection() {
  return (
    <section id="schedule" className="py-24 bg-background" data-ocid="schedule">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-3"
        >
          <p className="text-xs tracking-[0.3em] uppercase font-body text-primary">
            Weekly Rhythm
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Class Schedule
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto text-base">
            Find a time that flows with your life. All timings are in IST.
          </p>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden lg:block overflow-hidden rounded-2xl border border-border shadow-calm"
        >
          <table className="w-full text-sm font-body">
            <thead>
              <tr className="bg-card border-b border-border">
                <th className="text-left px-6 py-4 text-xs tracking-widest uppercase text-muted-foreground font-body">
                  Day
                </th>
                <th className="text-left px-6 py-4 text-xs tracking-widest uppercase text-muted-foreground font-body">
                  Time
                </th>
                <th className="text-left px-6 py-4 text-xs tracking-widest uppercase text-muted-foreground font-body">
                  Class
                </th>
                <th className="text-left px-6 py-4 text-xs tracking-widest uppercase text-muted-foreground font-body">
                  Level
                </th>
                <th className="text-left px-6 py-4 text-xs tracking-widest uppercase text-muted-foreground font-body">
                  Duration
                </th>
              </tr>
            </thead>
            <tbody>
              {weeklySchedule.map((entry, i) => (
                <tr
                  key={`${entry.day}-${entry.time}`}
                  className={`border-b border-border last:border-0 transition-gentle hover:bg-muted/30 ${i % 2 === 0 ? "bg-background" : "bg-card/40"}`}
                >
                  <td className="px-6 py-4 text-foreground font-body">
                    {entry.day}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {entry.time}
                  </td>
                  <td className="px-6 py-4 text-foreground font-display">
                    {entry.className}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full ${levelBg[entry.level] ?? levelBg["All Levels"]}`}
                    >
                      {entry.level}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {entry.duration}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile cards */}
        <div className="lg:hidden space-y-3">
          {DAYS.map((day) => {
            const entries = weeklySchedule.filter((e) => e.day === day);
            if (entries.length === 0) return null;
            return (
              <motion.div
                key={day}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-subtle"
              >
                <div className="px-4 py-3 bg-muted/40 border-b border-border">
                  <p className="font-display text-sm text-foreground">{day}</p>
                </div>
                {entries.map((entry) => (
                  <div
                    key={`${entry.day}-${entry.time}-mobile`}
                    className="px-4 py-3 flex items-center justify-between border-b border-border last:border-0"
                  >
                    <div>
                      <p className="font-display text-sm text-foreground">
                        {entry.className}
                      </p>
                      <p className="font-body text-xs text-muted-foreground mt-0.5">
                        {entry.time} · {entry.duration}
                      </p>
                    </div>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full ${levelBg[entry.level] ?? levelBg["All Levels"]}`}
                    >
                      {entry.level}
                    </span>
                  </div>
                ))}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
