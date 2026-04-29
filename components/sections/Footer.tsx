import { Building2, Facebook, Instagram, MapPin, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { legal } from "@/lib/content";
import { SITE, WHATSAPP_NUMBER, whatsappUrl } from "@/lib/config";
import { formatPhoneNumber } from "@/lib/format";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-red-dark text-white/85">
      <Container className="py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div>
            <p className="font-display text-2xl font-black tracking-tightish text-white md:text-3xl">
              {SITE.name}
            </p>
            <p className="mt-2 font-display text-xs font-semibold uppercase tracking-widest2 text-white/70">
              {SITE.tagline}
            </p>

            <div className="mt-8 max-w-2xl rounded-2xl border border-white/15 bg-white/5 p-6">
              <p className="font-display text-xs font-semibold uppercase tracking-widest2 text-white">
                Aviso legal
              </p>
              <p className="mt-3 font-body text-xs leading-relaxed text-white/75">
                {legal.notice}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-widest2 text-white/70">
                Contato
              </p>
              <ul className="mt-3 space-y-3 font-body text-sm text-white/85">
                <li className="flex items-start gap-2.5">
                  <Building2 size={15} strokeWidth={1.7} className="mt-0.5 shrink-0 text-white/50" aria-hidden="true" />
                  <span>05.230.012/0002-07 — Dose Indicada</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MessageCircle size={15} strokeWidth={1.7} className="mt-0.5 shrink-0 text-white/50" aria-hidden="true" />
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    {formatPhoneNumber(WHATSAPP_NUMBER)}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin size={15} strokeWidth={1.7} className="mt-0.5 shrink-0 text-white/50" aria-hidden="true" />
                  <span>Rua Barão de Cotegipe, 442 — Centro, Rio Grande - RS, 96200-290</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Instagram size={15} strokeWidth={1.7} className="mt-0.5 shrink-0 text-white/50" aria-hidden="true" />
                  <a href="https://www.instagram.com/suplefemme_oficial" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    @suplefemme_oficial
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Facebook size={15} strokeWidth={1.7} className="mt-0.5 shrink-0 text-white/50" aria-hidden="true" />
                  <a href="https://www.facebook.com/profile.php?id=61584095726578&sk=mentions" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    SUPLEFEMME
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 font-body text-xs text-white/60 md:flex-row md:items-center">
          <p>© {year} {SITE.name}. Todos os direitos reservados.</p>
          <p>
            Imagens meramente ilustrativas. Suplemento dietético — não é
            medicamento.
          </p>
        </div>
      </Container>
    </footer>
  );
}
