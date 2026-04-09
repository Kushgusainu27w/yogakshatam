import { navLinks, siteConfig } from "@/data/content";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-ocid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-gentle ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-subtle border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-xl tracking-widest uppercase text-foreground hover:text-primary transition-gentle"
          data-ocid="nav-logo"
        >
          {siteConfig.name}
        </button>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          data-ocid="nav-links"
        >
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-body text-muted-foreground hover:text-primary transition-gentle tracking-wide"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleNavClick("#contact")}
            className="ml-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-body hover:opacity-90 transition-gentle shadow-calm"
            data-ocid="nav-cta"
          >
            Book a Class
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 text-foreground hover:text-primary transition-gentle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          data-ocid="nav-hamburger"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="md:hidden bg-card border-t border-border px-6 py-6 flex flex-col gap-4 shadow-soft animate-fade-in"
          data-ocid="nav-mobile-menu"
        >
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-base font-body text-foreground hover:text-primary transition-gentle py-1 tracking-wide"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleNavClick("#contact")}
            className="mt-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-body text-center hover:opacity-90 transition-gentle"
            data-ocid="nav-mobile-cta"
          >
            Book a Class
          </button>
        </div>
      )}
    </header>
  );
}
