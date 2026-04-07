const WA = "https://wa.me/5516997902701";
const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Av.+Dom+Pedro+II,+942+Araraquara+SP";

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function IconWA({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconLeaf({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C7 3 3 8 3 13c0 3.866 2.686 7.1 6.343 7.842C10.228 21.277 11.1 21.5 12 21.5c.9 0 1.772-.223 2.657-.658C18.314 20.1 21 16.866 21 13c0-5-4-10-9-10z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18.5" />
    </svg>
  );
}

function IconCheck({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function IconInstagram({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

// ── UI Primitives ─────────────────────────────────────────────────────────────

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-widest text-amber">
      <span className="w-6 h-px bg-amber" />
      {children}
    </p>
  );
}

function WaButton({
  label = "Falar no WhatsApp",
  variant = "filled",
  size = "md",
  className = "",
}: {
  label?: string;
  variant?: "filled" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-2.5 font-sans font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0";
  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-[0.95rem]",
    lg: "px-9 py-4.5 text-base",
  };
  const variants = {
    filled: "bg-forest text-cream shadow-green hover:bg-sage",
    outline: "border border-cream/40 text-cream hover:bg-cream/10",
    ghost: "text-forest hover:bg-forest/8",
  };
  return (
    <a
      href={WA}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <IconWA className={size === "lg" ? "w-5 h-5" : "w-4 h-4"} />
      {label}
    </a>
  );
}

// ── Page Data ──────────────────────────────────────────────────────────────────

const categories = [
  {
    title: "Suplementos",
    tagline: "Para quem treina e cuida do corpo",
    desc: "Proteínas, vitaminas, aminoácidos e funcionais selecionados com critério.",
    img: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=600&q=80",
    accent: "#2c5545",
  },
  {
    title: "Linha Infantil",
    tagline: "Nutrição que cresce junto",
    desc: "Snacks, cereais e produtos formulados para a alimentação saudável das crianças.",
    img: "https://images.unsplash.com/photo-1560717845-968823efbee1?w=600&q=80",
    accent: "#b87333",
  },
  {
    title: "Bebidas",
    tagline: "Hidratação com propósito",
    desc: "Chás funcionais, águas aromatizadas, kombuchas e bebidas naturais sem aditivos.",
    img: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&q=80",
    accent: "#2c5545",
  },
  {
    title: "Grãos e Cereais",
    tagline: "A base de uma dieta equilibrada",
    desc: "Quinoa, amaranto, aveia, arroz integral e dezenas de opções a granel.",
    img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80",
    accent: "#8b7355",
  },
  {
    title: "Chocolates",
    tagline: "Prazer sem abrir mão da saúde",
    desc: "Chocolates orgânicos, amargos, sem lactose e sem açúcar de marcas selecionadas.",
    img: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600&q=80",
    accent: "#6B4F3A",
  },
  {
    title: "Snacks Saudáveis",
    tagline: "Lanches inteligentes para o dia a dia",
    desc: "Castanhas, mix de sementes, barrinhas proteicas e opções para qualquer hora.",
    img: "https://images.unsplash.com/photo-1559181567-c3190b0b8085?w=600&q=80",
    accent: "#2c5545",
  },
];

const features = [
  {
    title: "Sem glúten",
    desc: "Ampla variedade de produtos para quem tem restrição ou preferência.",
  },
  {
    title: "Sem lactose",
    desc: "Alternativas vegetais, fermentados e funcionais para cada necessidade.",
  },
  {
    title: "Sem açúcar",
    desc: "Itens adoçados naturalmente ou sem adição de açúcares refinados.",
  },
  {
    title: "Linha infantil",
    desc: "Opções pensadas para a nutrição e o desenvolvimento de bebês e crianças.",
  },
  {
    title: "Produtos veganos",
    desc: "Variedade de alternativas 100% de origem vegetal.",
  },
  {
    title: "Atendimento personalizado",
    desc: "Nossa equipe ajuda você a encontrar o produto certo para seus objetivos.",
  },
];

const reviews = [
  {
    name: "Marcos A.",
    text: "Ambiente sofisticado e acolhedor, ótimo para quem busca um estilo de vida mais saudável. Atendimento impecável.",
  },
  {
    name: "Fernanda L.",
    text: "A variedade de opções é incrível. Sempre encontro o que preciso — e ainda descubro produtos novos que adorei.",
  },
  {
    name: "Ricardo S.",
    text: "Produtos para todos os estilos de dieta, com atendimento atencioso. A loja mais completa de Araraquara.",
  },
  {
    name: "Camila T.",
    text: "A linha infantil é maravilhosa. Encontro produtos que não acho em nenhum outro lugar da cidade.",
  },
];

const steps = [
  {
    n: "01",
    title: "Escolha seus produtos",
    desc: "Explore nossas categorias e monte sua lista com os itens que você procura.",
  },
  {
    n: "02",
    title: "Fale com a gente",
    desc: "Envie sua lista pelo WhatsApp. Nossa equipe te orienta e confirma disponibilidade.",
  },
  {
    n: "03",
    title: "Retire ou receba",
    desc: "Passe na loja ou combine uma entrega. Simples, rápido e sem complicação.",
  },
];

const hours = [
  ["Segunda", "09:00 – 18:30"],
  ["Terça", "09:00 – 18:30"],
  ["Quarta", "09:00 – 18:30"],
  ["Quinta", "09:00 – 18:30"],
  ["Sexta", "09:00 – 18:30"],
  ["Sábado", "09:00 – 13:00"],
  ["Domingo", "Fechado"],
];

const trust = [
  "Sem glúten",
  "Sem lactose",
  "Sem açúcar",
  "Produtos veganos",
  "Linha infantil",
  "Atendimento personalizado",
  "Produtos frescos",
  "Curadoria premium",
  "Araraquara · SP",
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <div className="bg-cream font-sans text-ink antialiased">

      {/* ── Floating WhatsApp ── */}
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-200"
      >
        <IconWA className="w-7 h-7 text-white" />
      </a>

      {/* ── Header ── */}
      <header className="fixed top-0 inset-x-0 z-40 border-b border-sand/60 bg-cream/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-forest flex items-center justify-center flex-shrink-0">
              <IconLeaf className="w-4 h-4 text-cream" />
            </div>
            <div className="leading-none">
              <span className="font-playfair font-semibold text-forest text-lg tracking-tight">Moã</span>
              <span className="block text-[0.6rem] font-sans uppercase tracking-widest text-stone mt-0.5">Empório Natural</span>
            </div>
          </a>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm text-stone">
            {[["Produtos", "#produtos"], ["Sobre", "#sobre"], ["Localização", "#localizacao"]].map(([l, h]) => (
              <a key={l} href={h} className="hover-underline hover:text-ink transition-colors">{l}</a>
            ))}
          </nav>

          <WaButton label="WhatsApp" size="sm" />
        </div>
      </header>

      <main>

        {/* ══════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-hero-gradient grain">

          {/* Botanical SVG decoration */}
          <svg
            viewBox="0 0 480 720"
            fill="none"
            className="absolute right-0 top-0 h-full w-auto opacity-[0.07] pointer-events-none hidden lg:block"
            aria-hidden="true"
          >
            <path d="M240 700 C240 500 200 380 160 80" stroke="white" strokeWidth="1" />
            <ellipse cx="120" cy="140" rx="70" ry="28" fill="white" transform="rotate(-40 120 140)" />
            <ellipse cx="170" cy="240" rx="60" ry="24" fill="white" transform="rotate(30 170 240)" />
            <ellipse cx="100" cy="340" rx="80" ry="30" fill="white" transform="rotate(-25 100 340)" />
            <ellipse cx="180" cy="430" rx="55" ry="22" fill="white" transform="rotate(45 180 430)" />
            <ellipse cx="90" cy="520" rx="65" ry="25" fill="white" transform="rotate(-35 90 520)" />
            <path d="M340 700 C360 520 380 400 420 120" stroke="white" strokeWidth="0.8" />
            <ellipse cx="400" cy="180" rx="50" ry="18" fill="white" transform="rotate(20 400 180)" />
            <ellipse cx="360" cy="300" rx="55" ry="20" fill="white" transform="rotate(-30 360 300)" />
            <ellipse cx="400" cy="420" rx="45" ry="17" fill="white" transform="rotate(35 400 420)" />
          </svg>

          <div className="relative max-w-6xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center w-full">

            {/* Text column */}
            <div className="space-y-8">
              <Label>Araraquara · Empório Natural Premium</Label>

              <h1 className="font-playfair text-display-xl text-cream leading-[1.08]">
                Alimentação que nutre.<br />
                <em className="text-sand not-italic">Escolhas que transformam.</em>
              </h1>

              <p className="text-[1.05rem] text-green-200 leading-relaxed max-w-md" style={{ color: "rgba(220,235,228,0.85)" }}>
                O empório de produtos naturais mais completo de Araraquara. Produtos
                selecionados com rigor para quem valoriza saúde, qualidade e
                bem-estar real.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {["Sem glúten", "Sem lactose", "Sem açúcar", "Linha infantil"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold border"
                    style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(220,235,228,0.8)", background: "rgba(255,255,255,0.06)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-2">
                <WaButton label="Falar no WhatsApp" size="lg" variant="outline"
                  className="!bg-amber !border-amber !text-cream !shadow-btn-lg hover:!bg-clay"
                />
                <a
                  href="#produtos"
                  className="inline-flex items-center gap-2 px-9 py-4.5 text-base font-semibold border border-cream/30 text-cream rounded-full hover:bg-cream/10 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ paddingTop: "1.125rem", paddingBottom: "1.125rem" }}
                >
                  Ver produtos
                </a>
              </div>

              {/* Trust row */}
              <div className="flex flex-wrap gap-6 pt-4 border-t border-white/10">
                {[
                  ["⭐", "5.0 no Google", "16+ avaliações"],
                  ["🌿", "+500 produtos", "curadoria premium"],
                  ["📍", "Araraquara, SP", "Av. Dom Pedro II, 942"],
                ].map(([icon, main, sub]) => (
                  <div key={main} className="flex items-center gap-2.5">
                    <span className="text-xl">{icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-cream leading-none">{main}</p>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(220,235,228,0.55)" }}>{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual column */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                {/* Main circular frame */}
                <div
                  className="w-[380px] h-[380px] rounded-full overflow-hidden border"
                  style={{ borderColor: "rgba(255,255,255,0.1)", boxShadow: "0 0 0 1px rgba(255,255,255,0.05), 0 40px 80px rgba(0,0,0,0.3)" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=760&q=85"
                    alt="Moã Empório Natural"
                    className="w-full h-full object-cover opacity-75"
                    loading="eager"
                  />
                </div>

                {/* Floating card — Google */}
                <div
                  className="absolute -top-4 -left-8 bg-cream rounded-2xl px-5 py-4 shadow-card-lg"
                >
                  <div className="flex items-center gap-1 text-amber text-lg mb-0.5">★★★★★</div>
                  <p className="font-semibold text-sm text-ink">5.0 Google</p>
                  <p className="text-xs text-stone">16+ avaliações</p>
                </div>

                {/* Floating card — Products */}
                <div
                  className="absolute -bottom-4 -right-6 bg-forest text-cream rounded-2xl px-5 py-4 shadow-green"
                >
                  <p className="font-playfair text-3xl font-semibold leading-none">+500</p>
                  <p className="text-xs mt-1" style={{ color: "rgba(220,235,228,0.7)" }}>produtos naturais</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            TRUST MARQUEE
        ══════════════════════════════════════════════════ */}
        <div className="bg-amber overflow-hidden py-3.5 border-y border-amber/20">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...trust, ...trust].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-4 px-7 text-sm font-semibold text-cream uppercase tracking-wider">
                <span className="w-1 h-1 rounded-full bg-cream/60" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            ABOUT
        ══════════════════════════════════════════════════ */}
        <section id="sobre" className="py-28 bg-linen">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-card-lg">
                <img
                  src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&q=85"
                  alt="Produtos naturais"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Accent card */}
              <div className="absolute -bottom-6 -right-4 bg-forest text-cream rounded-2xl p-6 shadow-green max-w-[200px]">
                <p className="font-playfair text-4xl font-semibold leading-none">2021</p>
                <p className="text-xs mt-2 leading-relaxed" style={{ color: "rgba(220,235,228,0.7)" }}>Referência em alimentos naturais em Araraquara</p>
              </div>
              {/* Decorative ring */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border border-amber/30 pointer-events-none" />
              <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full border border-sand pointer-events-none" />
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2 space-y-7">
              <Label>Sobre a Moã Empório</Label>

              <h2 className="font-playfair text-display-lg text-ink leading-[1.1]">
                O ponto de referência em<br />
                saúde e bem-estar de<br />
                <em className="text-amber">Araraquara</em>
              </h2>

              <div className="space-y-4 text-stone text-[1rem] leading-relaxed">
                <p>
                  A Moã Empório nasceu da crença de que alimentação saudável deve ser
                  acessível, saborosa e inspiradora. Em nosso espaço climatizado e
                  cuidadosamente organizado, você encontra o que há de melhor em
                  produtos naturais, funcionais e orgânicos.
                </p>
                <p>
                  De grãos a granel a suplementos premium, de opções veganas a toda
                  uma linha pensada para bebês e crianças — tudo selecionado com rigor
                  e entregue com atendimento personalizado.
                </p>
              </div>

              {/* Mini features */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Ambiente climatizado e organizado",
                  "Produtos sempre frescos",
                  "Atendimento especializado",
                  "Curadoria de marcas premium",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-forest flex items-center justify-center flex-shrink-0 mt-0.5">
                      <IconCheck className="w-3 h-3 text-cream" />
                    </div>
                    <span className="text-sm text-stone">{item}</span>
                  </div>
                ))}
              </div>

              <WaButton label="Conheça a loja pelo WhatsApp" size="md" />
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            CATEGORIES
        ══════════════════════════════════════════════════ */}
        <section id="produtos" className="py-28 bg-cream">
          <div className="max-w-6xl mx-auto px-6">

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
              <div className="space-y-4">
                <Label>Catálogo</Label>
                <h2 className="font-playfair text-display-lg text-ink leading-[1.1]">
                  Curadoria de<br />produtos naturais
                </h2>
              </div>
              <p className="text-stone text-[0.95rem] max-w-xs leading-relaxed">
                Cada categoria foi pensada para cobrir todas as necessidades de quem
                busca uma alimentação mais saudável.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat, i) => (
                <article
                  key={cat.title}
                  className="group relative rounded-3xl overflow-hidden bg-cream border border-sand shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={cat.img}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-amber mb-1">
                        {cat.tagline}
                      </p>
                      <h3 className="font-playfair text-[1.4rem] font-semibold text-ink leading-tight">
                        {cat.title}
                      </h3>
                    </div>
                    <p className="text-sm text-stone leading-relaxed">{cat.desc}</p>
                    <a
                      href={WA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-sage transition-colors mt-1 hover-underline"
                    >
                      <IconWA className="w-4 h-4" />
                      Pedir pelo WhatsApp
                    </a>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            DIFFERENTIALS
        ══════════════════════════════════════════════════ */}
        <section className="py-28 bg-forest grain">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

            <div className="space-y-7">
              <Label>Nossos diferenciais</Label>
              <h2 className="font-playfair text-display-lg text-cream leading-[1.1]">
                Por que a Moã<br />
                <em className="text-sand">faz diferença</em>
              </h2>
              <p className="text-[1rem] leading-relaxed max-w-sm" style={{ color: "rgba(220,235,228,0.75)" }}>
                Não somos só uma loja. Somos um espaço para quem quer viver melhor
                — com produtos que respeitam o seu corpo e o seu estilo de vida.
              </p>
              <WaButton label="Falar com a equipe" variant="outline" size="md" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl p-5 border transition-colors duration-200"
                  style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-full bg-amber flex items-center justify-center flex-shrink-0">
                      <IconCheck className="w-3 h-3 text-cream" />
                    </div>
                    <p className="font-semibold text-cream text-sm">{f.title}</p>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(220,235,228,0.6)" }}>
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            TESTIMONIALS
        ══════════════════════════════════════════════════ */}
        <section className="py-28 bg-linen">
          <div className="max-w-6xl mx-auto px-6">

            <div className="text-center space-y-4 mb-14">
              <Label>Avaliações</Label>
              <h2 className="font-playfair text-display-lg text-ink">
                O que nossos clientes dizem
              </h2>
              <div className="flex items-center justify-center gap-2">
                <span className="text-amber text-xl tracking-tight">★★★★★</span>
                <span className="text-stone text-sm font-medium">5.0 · 16 avaliações no Google</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {reviews.map((r) => (
                <div
                  key={r.name}
                  className="bg-cream rounded-3xl p-7 border border-sand shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col gap-5"
                >
                  {/* Stars */}
                  <span className="text-amber text-lg tracking-tight">★★★★★</span>
                  {/* Quote */}
                  <p className="text-sm text-stone leading-relaxed flex-1 italic">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-forest flex items-center justify-center text-cream text-sm font-semibold flex-shrink-0">
                      {r.name[0]}
                    </div>
                    <span className="text-sm font-semibold text-ink">{r.name}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            HOW IT WORKS
        ══════════════════════════════════════════════════ */}
        <section className="py-28 bg-cream">
          <div className="max-w-4xl mx-auto px-6">

            <div className="text-center space-y-4 mb-16">
              <Label>Como funciona</Label>
              <h2 className="font-playfair text-display-lg text-ink">
                Simples assim
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-10">
              {steps.map((s, i) => (
                <div key={s.n} className="relative text-center space-y-4">
                  {/* Connector */}
                  {i < steps.length - 1 && (
                    <div className="hidden sm:block absolute top-7 left-[60%] w-[80%] h-px bg-sand" />
                  )}
                  {/* Number */}
                  <div className="relative inline-flex">
                    <span className="font-playfair text-5xl font-semibold text-forest/15 leading-none select-none">
                      {s.n}
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center shadow-green">
                        <span className="text-cream text-xs font-bold">{s.n}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-ink">{s.title}</h3>
                  <p className="text-sm text-stone leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-14">
              <WaButton label="Começar agora" size="lg" />
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            LOCATION
        ══════════════════════════════════════════════════ */}
        <section id="localizacao" className="py-28 bg-linen">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">

            <div className="space-y-8">
              <div className="space-y-4">
                <Label>Localização</Label>
                <h2 className="font-playfair text-display-lg text-ink leading-[1.1]">
                  Venha nos<br />
                  <em className="text-amber">visitar em Araraquara</em>
                </h2>
              </div>

              <div className="space-y-5">
                {[
                  {
                    icon: "📍",
                    title: "Endereço",
                    lines: ["Av. Dom Pedro II, 942 – Jardim do Carmo", "Araraquara – SP, 14801-040"],
                  },
                  {
                    icon: "📞",
                    title: "Telefone / WhatsApp",
                    lines: ["(16) 99790-2701"],
                    link: WA,
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cream border border-sand flex items-center justify-center text-base flex-shrink-0 shadow-card">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-ink mb-0.5">{item.title}</p>
                      {item.lines.map((l, i) =>
                        item.link ? (
                          <a key={i} href={item.link} target="_blank" rel="noopener noreferrer"
                            className="block text-sm text-amber hover:text-clay transition-colors hover-underline">
                            {l}
                          </a>
                        ) : (
                          <p key={i} className="text-sm text-stone">{l}</p>
                        )
                      )}
                    </div>
                  </div>
                ))}

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cream border border-sand flex items-center justify-center text-base flex-shrink-0 shadow-card">🕐</div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-ink mb-2">Horários</p>
                    <div className="space-y-1">
                      {hours.map(([day, time]) => (
                        <div key={day} className="flex justify-between text-sm">
                          <span className="text-stone">{day}</span>
                          <span className={`font-medium ${time === "Fechado" ? "text-red-400" : "text-ink"}`}>
                            {time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={MAPS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-ink text-cream rounded-full hover:bg-stone transition-colors"
                >
                  📍 Ver no mapa
                </a>
                <WaButton label="Falar no WhatsApp" size="sm" />
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-card-lg border border-sand h-[480px]">
              <iframe
                title="Moã Empório no Google Maps"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Av.+Dom+Pedro+II,+942+Araraquara+SP&output=embed&z=15"
              />
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            FINAL CTA
        ══════════════════════════════════════════════════ */}
        <section className="py-28 bg-cta-gradient grain">
          <div className="max-w-3xl mx-auto px-6 text-center space-y-8">

            {/* Decorative */}
            <div className="flex justify-center mb-2">
              <div className="w-px h-12 bg-amber/60" />
            </div>

            <Label>Pronto para começar?</Label>

            <h2 className="font-playfair text-display-xl text-cream leading-[1.08]">
              Comece agora a cuidar de<br />
              você com produtos naturais<br />
              <em className="text-sand">de verdade</em>
            </h2>

            <p className="text-[1rem] max-w-md mx-auto leading-relaxed" style={{ color: "rgba(220,235,228,0.72)" }}>
              Fale com nossa equipe pelo WhatsApp e descubra como a Moã Empório pode
              transformar sua alimentação do dia a dia.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-amber hover:bg-clay text-cream font-semibold text-base rounded-full shadow-btn-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <IconWA className="w-5 h-5" />
                Falar no WhatsApp agora
              </a>
            </div>

            <p className="text-xs" style={{ color: "rgba(220,235,228,0.45)" }}>
              Seg – Sex: 9h às 18h30 &nbsp;·&nbsp; Sábado: 9h às 13h
            </p>

          </div>
        </section>

      </main>

      {/* ══════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════ */}
      <footer className="bg-moss border-t border-white/5 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-12 pb-12 border-b border-white/10">

            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-forest border border-white/10 flex items-center justify-center">
                  <IconLeaf className="w-4 h-4 text-cream" />
                </div>
                <div>
                  <span className="font-playfair text-lg font-semibold text-cream">Moã</span>
                  <span className="block text-[0.6rem] font-sans uppercase tracking-widest" style={{ color: "rgba(220,235,228,0.45)" }}>Empório Natural</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed max-w-[220px]" style={{ color: "rgba(220,235,228,0.55)" }}>
                O empório de produtos naturais premium de Araraquara. Saúde e sabor em um só lugar.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber">Contato</p>
              <div className="space-y-2 text-sm" style={{ color: "rgba(220,235,228,0.65)" }}>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="block hover:text-cream transition-colors">
                  (16) 99790-2701
                </a>
                <p>Av. Dom Pedro II, 942</p>
                <p>Araraquara – SP</p>
              </div>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber">Redes sociais</p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/moaemporio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors hover:bg-white/10"
                  style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(220,235,228,0.7)" }}
                >
                  <IconInstagram className="w-5 h-5" />
                </a>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors hover:bg-white/10"
                  style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(220,235,228,0.7)" }}
                >
                  <IconWA className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs" style={{ color: "rgba(220,235,228,0.35)" }}>
            <p>© 2026 Moã Empório Natural e Cerealista. Todos os direitos reservados.</p>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">
              Araraquara, SP
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
