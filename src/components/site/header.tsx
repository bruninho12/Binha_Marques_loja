import { Link } from "@tanstack/react-router";
import { Search, ShoppingBag, User } from "lucide-react";
import { categories } from "@/lib/store-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
        <nav className="hidden items-center gap-7 text-[11px] font-medium uppercase tracking-[0.2em] lg:flex">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/categoria/$slug"
              params={{ slug: c.slug }}
              className="transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
            >
              {c.name}
            </Link>
          ))}
        </nav>

        <Link
          to="/"
          className="select-none font-script text-4xl leading-none text-gold"
        >
          Binha Marques
        </Link>

        <div className="flex items-center gap-3 text-sm">
          <button
            type="button"
            aria-label="Buscar"
            className="hidden rounded-full p-2 transition-colors hover:bg-rose/40 sm:inline-flex"
          >
            <Search className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Conta"
            className="rounded-full p-2 transition-colors hover:bg-rose/40"
          >
            <User className="size-4" />
          </button>
          <Link
            to="/carrinho"
            aria-label="Sacola"
            className="relative inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-medium uppercase tracking-widest text-background transition-transform hover:-translate-y-px"
          >
            <ShoppingBag className="size-3.5" />
            Sacola
            <span className="ml-1 rounded-full bg-gold px-1.5 py-0.5 text-[10px] font-bold text-gold-foreground">
              0
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
