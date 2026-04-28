// TODO (cliente): substituir pelo número real (formato internacional, só dígitos).
export const WHATSAPP_NUMBER = "5500000000000";
export const WHATSAPP_MESSAGE = "Olá! Tenho interesse no SUPLEFEMME.";

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const SITE = {
  name: "SUPLEFEMME",
  tagline: "Suplemento natural para libido feminina",
  url: "https://suplefemme.com.br",
} as const;
