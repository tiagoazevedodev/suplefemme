import { Container } from "@/components/ui/Container";
import { legal } from "@/lib/content";
import { SITE } from "@/lib/config";

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
              <p className="mt-3 font-body text-sm leading-relaxed text-white/85">
                {legal.notice}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-widest2 text-white/70">
                Contato
              </p>
              <ul className="mt-3 space-y-1.5 font-body text-sm text-white/85">
                {/* TODO (cliente): preencher dados reais */}
                <li>CNPJ: —</li>
                <li>contato@suplefemme.com.br</li>
                <li>WhatsApp: a definir</li>
              </ul>
            </div>
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-widest2 text-white/70">
                Institucional
              </p>
              <ul className="mt-3 space-y-1.5 font-body text-sm">
                <li>
                  <a
                    href="#"
                    className="text-white/85 underline-offset-4 hover:text-white hover:underline"
                  >
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/85 underline-offset-4 hover:text-white hover:underline"
                  >
                    Termos de Uso
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
