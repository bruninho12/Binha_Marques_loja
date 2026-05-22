import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";

export const Route = createFileRoute("/carrinho")({
  head: () => ({
    meta: [
      { title: "Sua sacola — Binha Marques" },
      {
        name: "description",
        content: "Revise os itens da sua sacola e finalize sua compra com segurança na Binha Marques.",
      },
      { property: "og:title", content: "Sua sacola — Binha Marques" },
      {
        property: "og:description",
        content: "Revise sua sacola e finalize a compra com Pix, cartão ou boleto.",
      },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-20">
        <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
          Sua sacola
        </span>
        <h1 className="mb-12 font-display text-4xl lg:text-5xl">
          Quase lá, leve com carinho.
        </h1>

        <div className="rounded-3xl border border-border bg-card p-12 text-center shadow-soft">
          <div className="mx-auto mb-6 inline-flex size-16 items-center justify-center rounded-full bg-rose/50 text-clay">
            <ShoppingBag className="size-7" />
          </div>
          <h2 className="mb-2 font-display text-2xl">Sua sacola está vazia</h2>
          <p className="mb-8 text-sm text-muted-foreground">
            Que tal começar explorando nossa nova coleção?
          </p>
          <Link
            to="/categoria/$slug"
            params={{ slug: "feminino" }}
            className="inline-flex items-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-px"
          >
            Ver coleção feminina
          </Link>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          O checkout com Pix e cartão estará disponível em breve.
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
