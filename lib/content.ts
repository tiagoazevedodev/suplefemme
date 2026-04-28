// Copy centralizada da landing.
//
// Regras de tom (brief seção 5 e 6):
// - Vocabulário permitido: energia, vitalidade, essência, equilíbrio, natural,
//   bem-estar, autoestima, disposição, despertar, reconectar, plenitude.
// - PROIBIDO: cura, trata, garante, milagre, transforma, resolve,
//   "performance/potência sexual", afrodisíaco (termo regulado).
// - Sempre apresentar benefícios como "apoio", "auxílio", "tradicionalmente
//   associado a" — nunca como promessa terapêutica.

export const hero = {
  tagline: "Suplemento natural para libido feminina",
  title: "Desperte sua essência",
  description:
    "Três fitoterápicos tradicionais reunidos em uma fórmula pensada para apoiar a vitalidade, a energia e o bem-estar hormonal feminino — do seu jeito, no seu tempo.",
  ctaPrimary: "Quero experimentar",
  ctaSecondary: "Ver ingredientes",
} as const;

export const about = {
  eyebrow: "O que é o SUPLEFEMME",
  title: "Energia que vem de dentro",
  paragraphs: [
    "SUPLEFEMME é um suplemento dietético natural, formulado com Feno Grego, Maca Peruana e Long Jack — três ativos tradicionalmente associados ao equilíbrio hormonal, à disposição e ao bem-estar da mulher adulta.",
    "Nasceu em uma farmácia de manipulação, com cuidado no que entra na cápsula e respeito por quem vai tomar. Não é medicamento. É um apoio diário para mulheres que querem se sentir mais inteiras, presentes e conectadas com a própria essência.",
  ],
} as const;

export const pillars = [
  {
    title: "Libido & Bem-estar Feminino",
    items: [
      "Apoio à libido",
      "Estímulo à produção natural de testosterona",
      "Auxílio no equilíbrio hormonal",
      "Suporte aos sintomas da TPM",
    ],
  },
  {
    title: "Energia & Performance Física",
    items: [
      "Mais energia e disposição no dia a dia",
      "Auxílio na redução da fadiga",
      "Apoio ao desempenho físico e à força",
      "Suporte ao ganho de massa magra",
    ],
  },
  {
    title: "Saúde Cognitiva & Imunidade",
    items: [
      "Apoio à memória e concentração",
      "Suporte ao sistema imunológico",
      "Sensação geral de vitalidade",
    ],
  },
] as const;

export const ingredients = [
  {
    name: "Feno Grego",
    scientific: "Trigonella foenum-graecum",
    dose: "250mg",
    description:
      "Erva milenar utilizada em medicina tradicional, associada ao equilíbrio hormonal feminino e ao suporte energético.",
  },
  {
    name: "Maca Peruana",
    scientific: "Lepidium meyenii",
    dose: "150mg",
    description:
      "Raiz andina cultivada há séculos nas montanhas do Peru, conhecida pelo apoio à vitalidade, ao humor e à disposição.",
  },
  {
    name: "Long Jack",
    scientific: "Eurycoma longifolia",
    dose: "100mg",
    description:
      "Também chamada de Tongkat Ali, raiz do sudeste asiático tradicionalmente usada para suporte hormonal e auxílio na redução da fadiga.",
  },
] as const;

export const howToUse = {
  eyebrow: "Como usar",
  title: "Simples no dia a dia",
  steps: [
    {
      n: "01",
      title: "1 pote",
      description: "60 cápsulas de 600mg — cerca de 30 dias de uso contínuo.",
    },
    {
      n: "02",
      title: "2 cápsulas por dia",
      description: "Tomar com água, junto às refeições para melhor assimilação.",
    },
    {
      n: "03",
      title: "Constância",
      description:
        "Os ativos naturais agem ao longo das semanas — o uso regular é o que sustenta o efeito.",
    },
  ],
} as const;

export const forWhom = {
  eyebrow: "Para quem é",
  title: "Para mulheres adultas que escolhem se cuidar",
  description:
    "Indicado para mulheres a partir de 18 anos que buscam apoio à energia, ao bem-estar hormonal e à reconexão com a própria libido — incluindo fases como pré-menopausa e menopausa.",
  notRecommended:
    "Gestantes, lactantes ou mulheres em uso de medicação contínua devem consultar um profissional de saúde antes de iniciar o uso.",
} as const;

export const faqs = [
  {
    q: "Em quanto tempo sentirei resultados?",
    a: "Os efeitos de fitoterápicos costumam aparecer ao longo de algumas semanas de uso contínuo. Cada organismo responde de forma diferente — o uso regular, junto a hábitos saudáveis, é o que sustenta a sensação de bem-estar.",
  },
  {
    q: "Posso tomar com outros suplementos?",
    a: "Em geral sim, mas recomendamos consultar seu médico ou farmacêutico, especialmente se você já faz uso de outros suplementos ou medicamentos.",
  },
  {
    q: "Tem contraindicação para gestantes ou lactantes?",
    a: "SUPLEFEMME não é indicado para gestantes e lactantes. Mulheres nessas condições devem sempre consultar um profissional de saúde antes de qualquer suplementação.",
  },
  {
    q: "É seguro para uso contínuo?",
    a: "Trata-se de um suplemento dietético formulado com ativos de uso tradicional. Para uso prolongado, recomendamos acompanhamento profissional, como ocorre com qualquer suplementação.",
  },
  {
    q: "Substitui tratamento médico?",
    a: "Não. SUPLEFEMME é um suplemento dietético — não trata, não cura e não previne doenças. Não substitui acompanhamento médico nem qualquer medicação prescrita.",
  },
  {
    q: "Qual a validade do produto?",
    a: "A garantia de fábrica é de 5 meses. Conserve em local seco e arejado, ao abrigo da luz.",
  },
] as const;

export const finalCta = {
  eyebrow: "Sua vez",
  title: "Reacenda o que é seu",
  description:
    "Garantia de fábrica de 5 meses. Atendimento humano para tirar suas dúvidas antes da compra.",
  cta: "Falar no WhatsApp",
} as const;

export const legal = {
  // Texto literal do brief seção 6 — não parafrasear (regulatório).
  notice:
    "Este produto é um suplemento dietético, não um medicamento. Suplementa dietas insuficientes. Não trata, cura nem previne doenças. Idade mínima recomendada: 18 anos. Consumir junto com alimentos para facilitar a assimilação. Consulte seu médico e/ou farmacêutico antes de iniciar o uso. Mulheres gestantes, lactantes ou em uso de medicação contínua devem consultar profissional de saúde antes do consumo. Garantia de fábrica: 5 meses.",
} as const;
