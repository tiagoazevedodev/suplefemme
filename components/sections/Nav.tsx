"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { whatsappUrl, SITE } from "@/lib/config";

const links = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#ingredientes", label: "Ingredientes" },
  { href: "#como-usar", label: "Como usar" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () =>
      setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={reduced ? false : { y: -64, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduced ? undefined : { y: -64, opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 top-0 z-50 border-b border-brand-graphite/8 bg-white/85 backdrop-blur-md"
        >
          <Container className="flex h-16 items-center justify-between gap-6">
            <a
              href="#top"
              className={cn(
                "font-display text-lg font-black tracking-tightish text-brand-red-deep",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-white",
              )}
            >
              {SITE.name}
            </a>

            <nav className="hidden items-center gap-7 md:flex">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-display text-[11px] font-semibold uppercase tracking-widest2 text-brand-graphite/75 transition hover:text-brand-red-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <ButtonLink
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primaryDark"
              className="!px-5 !py-2.5 !text-[11px]"
            >
              Comprar
              <ArrowRight size={14} strokeWidth={2.5} />
            </ButtonLink>
          </Container>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
