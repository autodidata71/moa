import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Moã Empório Natural e Cerealista | Araraquara - SP",
  description: "Produtos naturais em Araraquara: sem glúten, sem lactose, sem açúcar. Suplementos, grãos, snacks saudáveis e linha infantil."
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
