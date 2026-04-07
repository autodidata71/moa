import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Moã Empório Natural | Produtos Naturais Premium em Araraquara - SP",
  description:
    "Alimentos naturais selecionados em Araraquara. Sem glúten, sem lactose, sem açúcar. Suplementos, grãos, snacks saudáveis e linha infantil. Peça pelo WhatsApp.",
  keywords:
    "produtos naturais araraquara, empório natural, sem glúten, sem lactose, suplementos araraquara, loja natural",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
