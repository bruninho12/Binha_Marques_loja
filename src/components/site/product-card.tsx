import { Link } from "@tanstack/react-router";
import { formatBRL, type Product } from "@/lib/store-data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <Link
        to="/produto/$slug"
        params={{ slug: product.slug }}
        className="block"
      >
        <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-2xl bg-card ring-1 ring-border">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          {product.badge ? (
            <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground shadow-soft">
              {product.badge}
            </span>
          ) : null}
        </div>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-foreground">{product.name}</p>
            <p className="text-xs text-muted-foreground">{product.subtitle}</p>
          </div>
          <p className="text-sm font-semibold text-foreground">
            {formatBRL(product.price)}
          </p>
        </div>
      </Link>
      <button
        type="button"
        className="mt-4 w-full rounded-lg border border-border py-3 text-xs font-medium uppercase tracking-widest transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground"
      >
        Adicionar à sacola
      </button>
    </article>
  );
}
