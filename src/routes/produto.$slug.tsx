import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ShoppingBag, Truck, RefreshCcw, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { ProductCard } from "@/components/site/product-card";
import {
  formatBRL,
  getProduct,
  productsByCategory,
  getCategory,
} from "@/lib/store-data";

export const Route = createFileRoute("/produto/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    const category = getCategory(product.categorySlug);
    const related = productsByCategory(product.categorySlug)
      .filter((p) => p.slug !== product.slug)
      .slice(0, 4);
    return { product, category, related };
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            {
              title: `${loaderData.product.name} — Binha Marques`,
            },
            {
              name: "description",
              content: `${loaderData.product.name}. ${loaderData.product.subtitle}. Disponível por ${formatBRL(
                loaderData.product.price,
              )} na Binha Marques.`,
            },
            {
              property: "og:title",
              content: `${loaderData.product.name} — Binha Marques`,
            },
            {
              property: "og:description",
              content: loaderData.product.subtitle,
            },
            { property: "og:image", content: loaderData.product.image },
          ],
        }
      : { meta: [{ title: "Produto — Binha Marques" }] },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <p className="text-muted-foreground">Produto não encontrado.</p>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product, category, related } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <nav className="mx-auto max-w-7xl px-6 pt-8 text-xs uppercase tracking-widest text-muted-foreground">
        <Link to="/" className="hover:text-foreground">
          Início
        </Link>
        {" / "}
        {category ? (
          <>
            <Link
              to="/categoria/$slug"
              params={{ slug: category.slug }}
              className="hover:text-foreground"
            >
              {category.name}
            </Link>
            {" / "}
          </>
        ) : null}
        <span className="text-foreground">{product.name}</span>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-12 lg:grid-cols-2 lg:py-16">
        <div className="overflow-hidden rounded-3xl bg-rose/30 ring-1 ring-border">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-[4/5] size-full object-cover"
          />
        </div>

        <div>
          <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
            {product.categoryLabel}
          </span>
          <h1 className="mb-3 font-display text-4xl lg:text-5xl">
            {product.name}
          </h1>
          <p className="mb-8 text-muted-foreground">{product.subtitle}</p>

          <p className="mb-8 font-display text-4xl text-clay">
            {formatBRL(product.price)}
          </p>
          <p className="mb-10 text-xs text-muted-foreground">
            Em até 10x sem juros • 5% off no Pix
          </p>

          <div className="mb-8">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest">
              Tamanho
            </p>
            <div className="flex flex-wrap gap-2">
              {["PP", "P", "M", "G", "GG"].map((s) => (
                <button
                  key={s}
                  type="button"
                  className="size-12 rounded-full border border-border text-sm font-medium transition-all hover:border-accent hover:text-accent"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10 flex flex-col gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-px"
            >
              <ShoppingBag className="size-4" />
              Adicionar à sacola
            </button>
            <button
              type="button"
              className="rounded-full border border-gold px-8 py-4 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
            >
              Comprar pelo WhatsApp
            </button>
          </div>

          <div className="grid gap-3 rounded-2xl border border-border bg-card p-5 text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <Truck className="size-4 text-gold" />
              Enviamos para todo o Brasil
            </div>
            <div className="flex items-center gap-3">
              <Sparkles className="size-4 text-gold" />
              Embalagem cuidadosa, pronta para presentear
            </div>
            <div className="flex items-center gap-3">
              <RefreshCcw className="size-4 text-gold" />
              30 dias para troca
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <h2 className="mb-10 font-display text-2xl lg:text-3xl">
            Você também pode gostar
          </h2>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
