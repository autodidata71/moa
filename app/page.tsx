import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Moã Empório Natural e Cerealista | Araraquara - SP",
  description:
    "Produtos naturais em Araraquara: sem glúten, sem lactose, sem açúcar. Suplementos, grãos, snacks saudáveis e linha infantil. Visite ou peça pelo WhatsApp!",
};

const WHATSAPP_NUMBER = "5516997902701";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Dom+Pedro+II,+942+Araraquara+SP";

const categories = [
  {
    emoji: "💊",
    title: "Suplementos",
    desc: "Proteínas, vitaminas, aminoácidos e muito mais para potencializar seus resultados.",
    color: "from-green-100 to-green-50",
    border: "border-green-200",
    badge: "bg-green-600",
  },
  {
    emoji: "👶",
    title: "Linha Infantil",
    desc: "Opções saudáveis e saborosas especialmente selecionadas para bebês e crianças.",
    color: "from-orange-100 to-orange-50",
    border: "border-orange-200",
    badge: "bg-orange-500",
  },
  {
    emoji: "🧃",
    title: "Bebidas",
    desc: "Chás, sucos naturais, águas funcionais e bebidas refrescantes sem aditivos.",
    color: "from-teal-100 to-teal-50",
    border: "border-teal-200",
    badge: "bg-teal-600",
  },
  {
    emoji: "🌾",
    title: "Grãos e Cereais",
    desc: "Farinhas, arroz integral, quinoa, aveia e uma variedade de grãos a granel.",
    color: "from-amber-100 to-amber-50",
    border: "border-amber-200",
    badge: "bg-amber-600",
  },
  {
    emoji: "🍫",
    title: "Chocolates",
    desc: "Chocolates artesanais, orgânicos e sem açúcar para quem não abre mão do prazer.",
    color: "from-yellow-100 to-yellow-50",
    border: "border-yellow-200",
    badge: "bg-yellow-700",
  },
  {
    emoji: "🥜",
    title: "Snacks Saudáveis",
    desc: "Castanhas, granolas, barrinhas e snacks nutritivos para o dia a dia.",
    color: "from-lime-100 to-lime-50",
    border: "border-lime-200",
    badge: "bg-lime-600",
  },
];

const differentials = [
  { icon: "🌿", label: "Sem Glúten" },
  { icon: "🥛", label: "Sem Lactose" },
  { icon: "🚫", label: "Sem Açúcar" },
  { icon: "🥗", label: "Dietas Específicas" },
  { icon: "👶", label: "Para Bebês" },
  { icon: "🤝", label: "Atendimento Personalizado" },
  { icon: "🌱", label: "Produtos Veganos" },
  { icon: "✨", label: "Produtos Frescos" },
];

const reviews = [
  {
    name: "Marcos A.",
    stars: 5,
    text: "Ambiente ótimo, sofisticado, ótimo para amantes do estilo de vida saudável. Atendimento impecável!",
    avatar: "M",
  },
  {
    name: "Fernanda L.",
    stars: 5,
    text: "Além disso, a variedade de opções é incrível, e sempre encontro o que preciso. Super indico!",
    avatar: "F",
  },
  {
    name: "Ricardo S.",
    stars: 5,
    text: "Produtos para todos os estilos de dieta, atendimento impecável! A loja mais completa de Araraquara.",
    avatar: "R",
  },
  {
    name: "Camila T.",
    stars: 5,
    text: "Encontrei produtos que não acho em nenhum outro lugar. A linha infantil é maravilhosa!",
    avatar: "C",
  },
];

const steps = [
  {
    num: "01",
    title: "Escolha os produtos",
    desc: "Explore nossas categorias e monte a sua lista de produtos naturais favoritos.",
  },
  {
    num: "02",
    title: "Fale pelo WhatsApp",
    desc: "Envie sua lista pelo WhatsApp e tire todas as suas dúvidas com nossa equipe.",
  },
  {
    num: "03",
    title: "Finalize seu pedido",
    desc: "Combine a entrega ou retire na loja. Rápido, fácil e sem complicações.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-orange-400 text-lg">
          ★
        </span>
      ))}
    </div>
  );
}

function WhatsAppButton({
  label = "Falar no WhatsApp",
  size = "md",
  className = "",
}: {
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-10 py-5 text-xl",
  };
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${sizes[size]} ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={size === "lg" ? "w-7 h-7" : "w-5 h-5"}
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {label}
    </a>
  );
}

export default function MoaLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* ── Floating WhatsApp ─────────────────────────────── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-2xl hover:scale-110 transition-transform duration-200"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* ── Nav ───────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-green-700 flex items-center justify-center">
              <span className="text-white font-black text-sm">Moã</span>
            </div>
            <span className="font-bold text-green-800 text-lg hidden sm:block">
              Moã Empório
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#categorias" className="hover:text-green-700 transition-colors">
              Produtos
            </a>
            <a href="#sobre" className="hover:text-green-700 transition-colors">
              Sobre
            </a>
            <a href="#localizacao" className="hover:text-green-700 transition-colors">
              Localização
            </a>
          </nav>
          <WhatsAppButton label="Falar no WhatsApp" size="sm" />
        </div>
      </header>

      <main>
        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-700">
          {/* decorative blobs */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-4 py-24 grid lg:grid-cols-2 gap-12 items-center">
            {/* text */}
            <div className="text-white space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium text-green-100">
                <span>⭐ 5.0 no Google</span>
                <span className="w-1 h-1 rounded-full bg-green-300" />
                <span>Araraquara – SP</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Produtos naturais para uma vida mais{" "}
                <span className="text-orange-300">saudável</span>
              </h1>

              <p className="text-lg sm:text-xl text-green-100 leading-relaxed max-w-lg">
                Sem glúten • Sem lactose • Sem açúcar •{" "}
                <span className="font-semibold text-white">
                  Opções para bebês e crianças
                </span>
              </p>

              <div className="flex flex-wrap gap-4">
                <WhatsAppButton label="Falar no WhatsApp" size="lg" />
                <a
                  href="#categorias"
                  className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white border-2 border-white/40 rounded-full hover:bg-white/10 transition-all duration-200"
                >
                  Ver produtos
                </a>
              </div>

              <div className="flex flex-wrap gap-6 pt-2 text-sm text-green-100">
                <span className="flex items-center gap-1.5">
                  <span className="text-green-300">✓</span> Produtos selecionados
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-green-300">✓</span> Atendimento personalizado
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-green-300">✓</span> Ambiente climatizado
                </span>
              </div>
            </div>

            {/* visual card */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-3xl bg-white/10 backdrop-blur border border-white/20 flex flex-col items-center justify-center gap-6 p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {["🌾 Grãos", "💊 Suplementos", "🍫 Chocolates", "👶 Infantil"].map(
                      (item) => (
                        <div
                          key={item}
                          className="bg-white/10 rounded-2xl p-4 text-center text-sm font-medium text-white border border-white/20"
                        >
                          {item}
                        </div>
                      )
                    )}
                  </div>
                  <div className="w-full bg-orange-400 rounded-2xl py-4 text-center font-bold text-white shadow-lg">
                    ☀️ MOÃ Empório
                  </div>
                  <p className="text-green-100 text-xs text-center">
                    O empório gourmet mais completo da região
                  </p>
                </div>
                {/* floating badge */}
                <div className="absolute -top-4 -right-4 bg-orange-400 text-white rounded-full w-20 h-20 flex flex-col items-center justify-center text-center shadow-xl">
                  <span className="font-black text-xl leading-none">5.0</span>
                  <span className="text-orange-100 text-xs">⭐ Google</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Marquee differentials ─────────────────────────── */}
        <div className="bg-orange-500 py-4 overflow-hidden">
          <div className="flex gap-0 animate-marquee whitespace-nowrap">
            {[...differentials, ...differentials].map((d, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-8 text-white font-semibold text-sm"
              >
                <span>{d.icon}</span>
                {d.label}
                <span className="text-orange-300 ml-4">•</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── About ─────────────────────────────────────────── */}
        <section id="sobre" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
            {/* image placeholder / decorative */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center overflow-hidden shadow-xl">
                <div className="text-center p-10 space-y-4">
                  <div className="text-8xl">🌿</div>
                  <p className="text-green-700 font-semibold text-xl">
                    Moã Empório Natural
                  </p>
                  <p className="text-green-600 text-sm">
                    Araraquara – SP
                  </p>
                </div>
              </div>
              {/* stats */}
              <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                <p className="text-3xl font-black text-green-700">5.0 ⭐</p>
                <p className="text-sm text-gray-500">16+ avaliações</p>
              </div>
              <div className="absolute -top-6 -left-4 bg-orange-500 text-white rounded-2xl shadow-xl p-5">
                <p className="text-3xl font-black">+500</p>
                <p className="text-sm text-orange-100">produtos naturais</p>
              </div>
            </div>

            {/* text */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-block bg-green-100 text-green-700 rounded-full px-4 py-1 text-sm font-semibold">
                Sobre nós
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                A referência em produtos naturais de{" "}
                <span className="text-green-700">Araraquara</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A Moã Empório em Araraquara é o ponto de referência para quem busca
                produtos saudáveis, alimentos naturais e bem-estar com qualidade.
                Nosso espaço climatizado, aconchegante e impecável em limpeza oferece
                o melhor em produtos a granel, castanhas, oleaginosas, chás, temperos,
                produtos veganos, sem glúten, sem açúcar e suplementos naturais.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Com atendimento personalizado e produtos sempre frescos, o Moã Empório
                Araraquara se destaca como o empório gourmet mais completo da região.
                Venha viver saúde e sabor em um só lugar.
              </p>
              <WhatsAppButton label="Visitar ou pedir pelo WhatsApp" size="md" />
            </div>
          </div>
        </section>

        {/* ── Categories ────────────────────────────────────── */}
        <section id="categorias" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-14 space-y-3">
              <div className="inline-block bg-orange-100 text-orange-600 rounded-full px-4 py-1 text-sm font-semibold">
                Catálogo
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                Nossas categorias
              </h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">
                Encontre tudo que você precisa para uma vida mais saudável em um só
                lugar.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat) => (
                <div
                  key={cat.title}
                  className={`group rounded-3xl border-2 ${cat.border} bg-gradient-to-br ${cat.color} p-7 flex flex-col gap-4 hover:shadow-lg transition-all duration-200 hover:-translate-y-1`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-4xl">{cat.emoji}</span>
                    <span
                      className={`${cat.badge} text-white text-xs font-bold px-3 py-1 rounded-full`}
                    >
                      Ver produtos
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {cat.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{cat.desc}</p>
                  </div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#25D366] font-semibold text-sm hover:underline mt-auto"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Pedir pelo WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Differentials ─────────────────────────────────── */}
        <section className="py-20 bg-green-700">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-14 space-y-3">
              <div className="inline-block bg-white/20 text-white rounded-full px-4 py-1 text-sm font-semibold">
                Nossos diferenciais
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Por que escolher a Moã?
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {differentials.map((d) => (
                <div
                  key={d.label}
                  className="flex flex-col items-center gap-3 bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-colors duration-200"
                >
                  <span className="text-4xl">{d.icon}</span>
                  <span className="text-white font-semibold text-sm">{d.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Reviews ───────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-14 space-y-3">
              <div className="inline-block bg-yellow-100 text-yellow-700 rounded-full px-4 py-1 text-sm font-semibold">
                Avaliações
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                O que nossos clientes dizem
              </h2>
              <div className="flex items-center justify-center gap-3">
                <StarRating count={5} />
                <span className="text-gray-600 font-medium">
                  5.0 · 16 avaliações no Google
                </span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {reviews.map((r) => (
                <div
                  key={r.name}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200"
                >
                  <StarRating count={r.stars} />
                  <p className="text-gray-700 text-sm leading-relaxed flex-1">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-green-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {r.avatar}
                    </div>
                    <span className="text-gray-900 font-semibold text-sm">
                      {r.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ──────────────────────────────────── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-14 space-y-3">
              <div className="inline-block bg-green-100 text-green-700 rounded-full px-4 py-1 text-sm font-semibold">
                Como funciona
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                Simples assim
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <div key={step.num} className="relative text-center space-y-4">
                  {/* connector line */}
                  {i < steps.length - 1 && (
                    <div className="hidden sm:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-0.5 bg-green-200" />
                  )}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-700 text-white font-black text-xl shadow-lg mx-auto">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <WhatsAppButton label="Começar agora" size="lg" />
            </div>
          </div>
        </section>

        {/* ── Location ──────────────────────────────────────── */}
        <section id="localizacao" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-orange-100 text-orange-600 rounded-full px-4 py-1 text-sm font-semibold">
                Onde estamos
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                Venha nos visitar
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-700 flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Endereço</p>
                    <p className="text-gray-600">
                      Av. Dom Pedro II, 942 – Jardim do Carmo
                      <br />
                      Araraquara – SP, 14801-040
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-700 flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telefone</p>
                    <a
                      href={`tel:+${WHATSAPP_NUMBER}`}
                      className="text-green-700 hover:underline"
                    >
                      (16) 99790-2701
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-700 flex-shrink-0">
                    🕐
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">
                      Horário de funcionamento
                    </p>
                    <div className="text-gray-600 text-sm space-y-0.5">
                      {[
                        ["Segunda-feira", "09:00 – 18:30"],
                        ["Terça-feira", "09:00 – 18:30"],
                        ["Quarta-feira", "09:00 – 18:30"],
                        ["Quinta-feira", "09:00 – 18:30"],
                        ["Sexta-feira", "09:00 – 18:30"],
                        ["Sábado", "09:00 – 13:00"],
                        ["Domingo", "Fechado"],
                      ].map(([day, hours]) => (
                        <div key={day} className="flex justify-between gap-6">
                          <span>{day}</span>
                          <span
                            className={
                              hours === "Fechado"
                                ? "text-red-500 font-medium"
                                : "font-medium text-gray-800"
                            }
                          >
                            {hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors"
                >
                  📍 Ver no mapa
                </a>
                <WhatsAppButton label="Falar no WhatsApp" size="sm" />
              </div>
            </div>

            {/* map embed placeholder */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 h-80 lg:h-auto">
              <iframe
                title="Moã Empório no Google Maps"
                className="w-full h-full min-h-[20rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=Av.+Dom+Pedro+II,+942+Araraquara+SP&output=embed&z=15`}
              />
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────── */}
        <section className="py-24 bg-gradient-to-br from-green-900 via-green-800 to-green-700 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-green-400/10 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-3xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Comece agora a cuidar da sua saúde com{" "}
              <span className="text-orange-300">produtos naturais</span>
            </h2>
            <p className="text-green-100 text-lg max-w-xl mx-auto">
              Fale com nossa equipe pelo WhatsApp e descubra tudo que temos para
              oferecer. Atendimento personalizado, produtos frescos e entrega rápida.
            </p>
            <WhatsAppButton
              label="Falar no WhatsApp agora"
              size="lg"
              className="mx-auto"
            />
            <p className="text-green-300 text-sm">
              Segunda a sexta: 9h às 18h30 · Sábado: 9h às 13h
            </p>
          </div>
        </section>
      </main>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-8 mb-10">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center">
                  <span className="text-white font-black text-xs">Moã</span>
                </div>
                <span className="font-bold text-white text-lg">Moã Empório</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                O empório gourmet mais completo de Araraquara. Saúde e sabor em um só
                lugar.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-white">Contato</h4>
              <div className="space-y-2 text-sm">
                <p>
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="hover:text-green-400 transition-colors"
                  >
                    (16) 99790-2701
                  </a>
                </p>
                <p className="text-gray-400">
                  Av. Dom Pedro II, 942 – Araraquara, SP
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-white">Redes sociais</h4>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/moaemporio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Moã Empório"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Moã Empório"
                  className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
            <p>© 2026 Moã Empório Natural e Cerealista. Todos os direitos reservados.</p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              Araraquara – SP
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
