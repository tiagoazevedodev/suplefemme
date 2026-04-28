# SUPLEFEMME — Contexto do Produto

> Documento de contexto para uso em IDEs agênticas (Cursor, Claude Code, etc.).
> Objetivo: fornecer todas as informações necessárias para construir uma landing page
> consistente com a identidade visual, posicionamento e regulação do produto.

---

## 1. Identidade da Marca

**Nome:** SUPLEFEMME
**Categoria:** Suplemento dietético natural para libido feminina
**Origem:** Spin-off de farmácia de manipulação
**Slogan principal (sugerido):** *Desperte sua essência*

**Slogans alternativos** (caso o agente precise variar A/B test ou copy):
- *A energia que vem de dentro*
- *Sua força. Seu desejo. Sua vez.*
- *Reacenda o que é seu*

**Posicionamento:** Suplemento natural feminino que combina três fitoterápicos
tradicionalmente associados a libido, energia e bem-estar hormonal. Marca elegante,
sensual mas não vulgar, focada em autoestima e empoderamento — não em apelo erótico
explícito.

---

## 2. Identidade Visual

### 2.1 Paleta de Cores

Baseada na embalagem original. Use exatamente estes valores:

```
Vermelho principal     #C8102E   /* fundo dominante, CTAs */
Vermelho profundo      #8B0E1F   /* padrão floral, sombras, hover */
Vermelho escuro        #6B0A17   /* base de gradiente, textos sobre cor clara */
Branco puro            #FFFFFF   /* tipografia principal sobre vermelho */
Off-white              #FAF7F4   /* fundos de seção alternativa, cards */
Cinza-grafite          #2A2A2A   /* texto corrido sobre fundo claro */
Cinza-médio            #6B6B6B   /* texto secundário, legendas */
```

**Gradiente principal** (usado em hero e seções de destaque):
```css
background: linear-gradient(135deg, #C8102E 0%, #A50E25 60%, #8B0E1F 100%);
```

### 2.2 Padrão Floral (Wallpaper)

A embalagem traz um padrão decorativo aplicado em **vermelho profundo (#8B0E1F)
sobre o vermelho principal (#C8102E)**, com baixíssimo contraste — funciona como
marca d'água orgânica. Características:

- **Elementos:** flores estilizadas tipo margarida (5–6 pétalas arredondadas), folhas
  alongadas em ramos, espirais/cachos ornamentais (estilo arabesco/floral barroco
  contemporâneo).
- **Composição:** ramos curvos que atravessam diagonalmente a superfície, com flores
  agrupadas e dispersas, espirais decorativas preenchendo espaços vazios. Não é
  geométrico nem repetitivo rígido — é orgânico e fluido.
- **Opacidade visual:** o padrão é cerca de 15–25% mais escuro que o fundo, criando
  um efeito de tom-sobre-tom. **Nunca usar contraste alto** — o padrão decora, não
  compete com o texto.
- **Aplicação:** pode ser usado como background de seções inteiras, divisores, ou
  elementos decorativos em cantos. Evitar atrás de blocos longos de texto.

**Implementação sugerida:** SVG vetorial inline ou PNG transparente sobreposto ao
vermelho de fundo. Para CSS puro, usar `background-image` com `background-size`
controlado para que o padrão respire (não tilear pequeno demais).

### 2.3 Tipografia

A embalagem usa um sans-serif geométrico, bold, levemente largo. Para web, replicar com:

- **Display / Logo / Headlines:** `Montserrat`, weight **800–900** (ExtraBold/Black),
  letter-spacing ligeiramente apertado (`-0.01em` a `-0.02em`).
- **Subtítulos / Tagline:** `Montserrat`, weight **600**, letter-spacing **expandido**
  (`0.15em` a `0.2em`), em **CAIXA ALTA** quando reproduzindo o estilo da embalagem.
- **Texto corrido:** `Inter` ou `Montserrat` weight **400**, line-height **1.6**,
  tamanho **16–18px**.

**Hierarquia tipográfica recomendada:**
```
H1 / Hero    72–96px   Montserrat 900   white          tracking -0.02em
H2           40–56px   Montserrat 800   white/dark
H3           24–32px   Montserrat 700   dark
Tagline      14–16px   Montserrat 600   white/dark     tracking 0.18em UPPERCASE
Body         16–18px   Inter 400        #2A2A2A        line-height 1.6
Caption      13–14px   Inter 400        #6B6B6B
```

### 2.4 Direção de Mood

- **Sensorial e elegante**, não clínico.
- **Feminino contemporâneo** — sem rosa-bebê, sem clichês florais doces. O vermelho
  profundo carrega o produto.
- **Espaços generosos**, respiro entre seções, tipografia grande no hero.
- **Fotografia (se usar):** mulheres adultas (25–55), naturalidade, luz quente,
  ambientes pessoais. Evitar imagens objetificantes ou de estoque genéricas.

---

## 3. O Produto

### 3.1 Composição

Cápsula de **600mg**, com os seguintes ativos:

| Ingrediente            | Dosagem por cápsula | Nome científico             |
|------------------------|---------------------|------------------------------|
| Feno Grego             | 250mg               | *Trigonella foenum-graecum* |
| Maca Peruana           | 150mg               | *Lepidium meyenii*          |
| Long Jack (Tongkat Ali)| 100mg               | *Eurycoma longifolia*       |

> Total dos ativos = 500mg. Os 100mg restantes correspondem a excipientes
> (não detalhados pelo cliente — não inventar composição).

### 3.2 Apresentação

- **60 cápsulas por pote**
- **Posologia:** 2 cápsulas ao dia, junto com refeições
- **Duração média de 1 pote:** 30 dias
- **Validade/garantia de fábrica:** 5 meses

### 3.3 Benefícios Comunicados

Agrupar na landing em três pilares para clareza visual:

**Pilar 1 — Libido & Bem-estar Feminino**
- Aumento da libido
- Estímulo à produção natural de testosterona
- Equilíbrio hormonal
- Redução dos sintomas da TPM

**Pilar 2 — Energia & Performance**
- Aumento de energia e disposição
- Diminuição da fadiga
- Melhora do desempenho físico e força
- Auxílio no ganho de massa magra

**Pilar 3 — Saúde Cognitiva & Imunidade**
- Melhora de memória e concentração
- Fortalecimento do sistema imunológico
- Sensação geral de vitalidade

> **Importante:** todos os benefícios devem ser apresentados como apoio/auxílio,
> nunca como cura, tratamento ou substituto medicamentoso. Ver Seção 6.

### 3.4 Público-alvo

- **Mulheres a partir de 18 anos**
- Foco principal: **mulheres adultas (25–55)** buscando vitalidade, energia e
  reconexão com a própria libido
- Inclui mulheres em fase pré-menopausa e menopausa (sem comunicar isso de forma
  excludente)

---

## 4. Estrutura da Landing Page

Sequência recomendada de seções. Cada bloco já indica intenção de copy + componentes.

### Seção 1 — Hero
- Fundo: vermelho principal com padrão floral sutil + gradiente diagonal.
- Logo SUPLEFEMME grande, branco, centralizado ou alinhado à esquerda.
- Tagline pequena em caixa alta abaixo: *SUPLEMENTO NATURAL PARA LIBIDO FEMININA*.
- Slogan em destaque: **Desperte sua essência**.
- CTA primário: "Quero Experimentar" ou "Comprar Agora" (botão branco com texto
  vermelho, sombra sutil).
- Mockup do produto à direita ou abaixo (pote da cápsula) — placeholder se ainda
  não houver imagem real.

### Seção 2 — O que é o SUPLEFEMME
Bloco curto, prosa, fundo off-white. Explicar em 2–3 parágrafos o produto e seu
propósito. Sem promessas absolutas. Tom: confiante, próximo, informativo.

### Seção 3 — Os Três Pilares de Benefícios
Grid de 3 colunas (desktop) / stack (mobile), um pilar por coluna.
Cada pilar com ícone simples, título e 3–4 bullets curtos.

### Seção 4 — Ingredientes Naturais
Para cada ativo: card com nome popular, nome científico em itálico, dosagem,
breve descrição da tradição de uso (1–2 frases). Layout em 3 cards horizontais.

Conteúdo sugerido:

- **Feno Grego (250mg)** — Erva milenar usada em medicina tradicional, associada
  ao equilíbrio hormonal feminino e ao suporte energético.
- **Maca Peruana (150mg)** — Raiz andina cultivada há séculos nas montanhas do Peru,
  conhecida pelo apoio à vitalidade, humor e disposição.
- **Long Jack (100mg)** — Também chamada de Tongkat Ali, raiz do sudeste asiático
  tradicionalmente usada para suporte hormonal e redução da fadiga.

> Linguagem cuidada: "associado a", "tradicionalmente usado", "apoio a" — nunca
> "cura", "trata" ou "garante".

### Seção 5 — Como Usar
Visual numerado simples: 1 pote, 2 cápsulas/dia, junto às refeições.
Pode ser ilustrado com ícones lineares brancos sobre fundo vermelho.

### Seção 6 — Para Quem é
Bloco curto e inclusivo. Idade mínima 18 anos. Mencionar perfis (mulheres em
busca de mais energia, libido, bem-estar) sem ser estereotipado.

### Seção 7 — FAQ
Accordion com perguntas como:
- Em quanto tempo sentirei resultados?
- Posso tomar com outros suplementos?
- Tem contraindicação para gestantes/lactantes?
- É seguro para uso contínuo?
- Substitui tratamento médico?

> Respostas devem sempre orientar a consultar médico/farmacêutico em caso de dúvida.

### Seção 8 — CTA Final + Garantia
Reforço do CTA, menção à garantia de fábrica de 5 meses, formas de pagamento
(quando definidas).

### Seção 9 — Aviso Legal & Footer
Conteúdo regulatório obrigatório (Seção 6 deste doc), CNPJ/contato (a preencher),
links de política de privacidade e termos de uso.

---

## 5. Tom de Voz

- **Confiante, não agressivo.** Não promete milagre.
- **Próximo, não íntimo demais.** Tratamento "você", evitar gírias.
- **Sensorial, não erótico.** Falar de energia, vitalidade, prazer no sentido amplo
  (de viver, sentir-se bem) — não de ato sexual explícito.
- **Empoderador, não corretivo.** A mulher não tem um "problema a resolver"; ela
  busca potencializar algo que já é seu.
- **Honesto sobre o que é o produto:** suplemento, não medicamento.

**Palavras-chave do vocabulário da marca:**
energia, vitalidade, essência, equilíbrio, natural, bem-estar, autoestima,
disposição, força, despertar, reconectar, plenitude.

**Palavras a evitar:**
cura, trata, garante, milagre, transforma, resolve, performance sexual, potência
sexual, afrodisíaco (termo regulado).

---

## 6. Aviso Legal & Regulatório (OBRIGATÓRIO)

Texto que **deve** aparecer na landing, em local visível (footer e/ou seção
dedicada). Adaptado do PDF original:

> **Aviso legal**
> Este produto é um suplemento dietético, não um medicamento. Suplementa dietas
> insuficientes. Não trata, cura nem previne doenças. Idade mínima recomendada:
> 18 anos. Consumir junto com alimentos para facilitar a assimilação. Consulte
> seu médico e/ou farmacêutico antes de iniciar o uso. Mulheres gestantes,
> lactantes ou em uso de medicação contínua devem consultar profissional de
> saúde antes do consumo. Garantia de fábrica: 5 meses.

**Diretrizes regulatórias adicionais (Brasil/ANVISA — RDC 243/2018 e correlatas):**

- Não usar imagens, depoimentos ou alegações que sugiram efeito terapêutico.
- Não comparar com medicamentos.
- Não usar termos como "afrodisíaco", "estimulante sexual" diretamente em
  alegações de propriedade.
- Depoimentos de clientes, se usados, devem ser identificáveis e não conter
  alegações médicas.
- Toda alegação funcional deve ser passível de comprovação ou claramente
  apresentada como uso tradicional.

---

## 7. O que NÃO Fazer

Lista para o agente evitar erros comuns:

- ❌ Não usar rosa, lilás ou qualquer paleta clichê de "produto feminino".
- ❌ Não usar imagens objetificantes ou suggestivamente sexuais.
- ❌ Não criar copy com promessas absolutas ("garante", "100% eficaz", "resultado
  em X dias").
- ❌ Não comparar com medicamentos ou hormônios sintéticos.
- ❌ Não usar a palavra "afrodisíaco" em alegações de propriedade.
- ❌ Não inventar dosagens, ingredientes ou benefícios não listados aqui.
- ❌ Não criar depoimentos fictícios.
- ❌ Não omitir o aviso legal.
- ❌ Não usar serif clássica ou fontes script — quebra a identidade.
- ❌ Não usar o padrão floral em alto contraste — ele é decoração sutil.

---

## 8. Recomendações Técnicas para o Agente

**Stack sugerido (ajustar ao gosto do dev):**
- Next.js 14+ (App Router) ou Vite + React 18 + TypeScript
- TailwindCSS para styling — mapear paleta como `theme.extend.colors`
- shadcn/ui para componentes base (botões, accordion do FAQ)
- Framer Motion para animações sutis (fade-in em scroll, parallax leve no padrão floral)
- next/font ou @fontsource para Montserrat e Inter

**Tailwind config sugerido (cores):**
```js
colors: {
  brand: {
    red: '#C8102E',
    'red-deep': '#8B0E1F',
    'red-dark': '#6B0A17',
    cream: '#FAF7F4',
    graphite: '#2A2A2A',
    'gray-mid': '#6B6B6B',
  }
}
```

**Performance & SEO:**
- Lighthouse > 90 em todas as métricas.
- Meta tags otimizadas para "suplemento libido feminina", "maca peruana feno grego",
  "suplemento natural feminino".
- Schema.org `Product` com nome, descrição, marca, oferta.
- Imagens em WebP com `loading="lazy"`.

**Acessibilidade:**
- Contraste mínimo AA em todos os textos (texto branco sobre #C8102E passa em AAA
  para tamanhos grandes; verificar em tamanhos pequenos).
- Padrão floral é decorativo — `aria-hidden="true"`.
- Foco visível em todos os interativos.
- Navegação por teclado completa.

**Responsividade:**
- Mobile-first.
- Breakpoints: 640 / 768 / 1024 / 1280.
- Hero deve funcionar bem em vertical (mobile) com pote do produto abaixo do título.

---

## 9. Ativos Pendentes (a fornecer depois)

Itens que o cliente ainda precisa entregar e que o agente deve usar como
placeholders:

- [ ] Logo SUPLEFEMME em SVG (atualmente apenas tipografia bold sobre vermelho)
- [ ] Foto/render do pote real do produto
- [ ] CNPJ, endereço e contato da empresa (footer)
- [ ] Integração de pagamento / checkout (Stripe, Pagar.me, Mercado Pago — definir)
- [ ] Política de privacidade e termos de uso
- [ ] Eventual registro ANVISA / nº de notificação

---

*Última atualização: contexto inicial do produto, baseado na embalagem física da
versão original SUPLEFEMME e no briefing do cliente.*
