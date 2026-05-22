import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Truck, Sparkles, RefreshCcw } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { ProductCard } from "@/components/site/product-card";
import { categories, products } from "@/lib/store-data";
import heroImage from "@/assets/hero-atelier.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Binha Marques — Boutique online de moda e cama & banho",
      },
      {
        name: "description",
        content:
          "Estilo, conforto e autoestima em cada look. Roupas femininas, masculinas, infantis e artigos de cama e banho com curadoria artesanal.",
      },
      {
        property: "og:title",
        content: "Binha Marques — Boutique Atelier",
      },
      {
        property: "og:description",
        content:
          "Moda e bem-estar com curadoria artesanal para você e sua casa.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="animate-reveal lg:col-span-5">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-rose/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-clay">
              <span className="size-1.5 rounded-full bg-gold" />
              Coleção primavera
            </span>
            <h1 className="mb-6 text-balance font-display text-5xl leading-[1.05] lg:text-7xl">
              O toque que{" "}
              <span className="italic text-gold">abraça</span> sua casa.
            </h1>
            <p className="mb-8 max-w-md leading-relaxed text-muted-foreground">
              Curadoria artesanal de moda e bem-estar, pensada para quem
              valoriza o aconchego em cada detalhe.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/categoria/$slug"
                params={{ slug: "feminino" }}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-px"
              >
                Ver coleção <ArrowRight className="size-4" />
              </Link>
              <a
                href="#destaques"
                className="inline-flex items-center rounded-full border border-gold px-7 py-4 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
              >
                Destaques da estação
              </a>
            </div>
          </div>

          <div className="animate-reveal-delayed lg:col-span-7">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-rose shadow-lift">
                <img
                  src={heroImage}
                  alt="Modelo com vestido de linho em quarto iluminado pela luz do sol"
                  width={1280}
                  height={1600}
                  className="size-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 max-w-[260px] rounded-2xl border border-gold/20 bg-card p-6 shadow-lift">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-tighter text-accent">
                  Destaque da semana
                </p>
                <p className="font-display text-lg italic">
                  Manta Algodão Cru
                </p>
                <p className="mt-2 font-display text-xs italic text-muted-foreground">
                  “Feita à mão com fibras naturais selecionadas.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-gold/15 bg-rose/30">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-6 py-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent lg:justify-between">
          <div className="flex items-center gap-3">
            <Truck className="size-4 text-gold" />
            Frete grátis acima de R$ 399
          </div>
          <div className="flex items-center gap-3">
            <Sparkles className="size-4 text-gold" />
            5% off no Pix
          </div>
          <div className="flex items-center gap-3">
            <RefreshCcw className="size-4 text-gold" />
            Troca fácil em até 30 dias
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
              Coleções
            </span>
            <h2 className="font-display text-3xl lg:text-4xl">
              Para você, para todos
            </h2>
          </div>
          <Link
            to="/categoria/$slug"
            params={{ slug: "feminino" }}
            className="border-b border-accent pb-1 text-[11px] uppercase tracking-widest hover:text-accent"
          >
            Ver tudo
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/categoria/$slug"
              params={{ slug: c.slug }}
              className="group block"
            >
              <div className="mb-4 aspect-[3/4] overflow-hidden rounded-xl bg-rose/30">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <p className="text-center font-medium">{c.name}</p>
              <p className="text-center text-xs text-muted-foreground">
                {c.tagline}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section
        id="destaques"
        className="mx-auto max-w-7xl px-6 pb-24"
      >
        <h2 className="mb-12 text-center font-display text-3xl lg:text-4xl">
          Destaques da estação
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
