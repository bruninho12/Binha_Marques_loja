import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { ProductCard } from "@/components/site/product-card";
import { getCategory, productsByCategory, type Product } from "@/lib/store-data";

export const Route = createFileRoute("/categoria/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    const items = productsByCategory(params.slug);
    return { category, items };
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            {
              title: `${loaderData.category.name} — Binha Marques`,
            },
            {
              name: "description",
              content: `${loaderData.category.tagline}. Confira peças selecionadas da categoria ${loaderData.category.name} na Binha Marques.`,
            },
            {
              property: "og:title",
              content: `${loaderData.category.name} — Binha Marques`,
            },
            {
              property: "og:description",
              content: loaderData.category.tagline,
            },
            {
              property: "og:image",
              content: loaderData.category.image,
            },
          ],
        }
      : { meta: [{ title: "Categoria — Binha Marques" }] },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <p className="text-muted-foreground">Categoria não encontrada.</p>
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category, items } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border bg-rose/20">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
            Categoria
          </span>
          <h1 className="mb-3 font-display text-5xl lg:text-6xl">
            {category.name}
          </h1>
          <p className="max-w-xl text-muted-foreground">{category.tagline}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        {items.length === 0 ? (
          <p className="text-center text-muted-foreground">
            Em breve novas peças nesta categoria.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((p: Product) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}
