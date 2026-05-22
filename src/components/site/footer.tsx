import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <div className="mb-6 font-script text-3xl text-gold">
              Binha Marques
            </div>
            <p className="max-w-[34ch] text-xs leading-relaxed text-background/60">
              Curadoria artesanal de moda e bem-estar para você, sua família e
              sua casa. Entregamos aconchego em todo o Brasil.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-[10px] font-bold uppercase tracking-widest text-gold">
              Atendimento
            </h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li>
                <Link
                  to="/carrinho"
                  className="transition-colors hover:text-background"
                >
                  Minha sacola
                </Link>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-background">
                  Trocas e devoluções
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-background">
                  Rastrear pedido
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-[10px] font-bold uppercase tracking-widest text-gold">
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li className="flex items-center gap-2">
                <MessageCircle className="size-3.5" /> WhatsApp: (31)
                99999-9999
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="size-3.5" /> @binha.maques.store
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-3.5" /> ola@binhamarques.com.br
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-[10px] font-bold uppercase tracking-widest text-gold">
              Receba novidades
            </h4>
            <p className="mb-4 text-xs text-background/60">
              Pré-vendas, lançamentos e ofertas exclusivas direto no seu e-mail.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                required
                placeholder="seu@email.com"
                className="w-full rounded-lg border-none bg-background/10 px-4 py-3 text-xs outline-none focus:ring-1 focus:ring-gold"
              />
              <button
                type="submit"
                className="rounded-lg bg-gold px-4 text-[10px] font-bold uppercase tracking-widest text-gold-foreground"
              >
                Ok
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-background/10 pt-8 text-[10px] uppercase tracking-widest text-background/40 sm:flex-row">
          <span>© 2026 Binha Marques — Todos os direitos reservados</span>
          <span>Pix • Visa • Master • Boleto</span>
        </div>
      </div>
    </footer>
  );
}
