import catFeminino from "@/assets/cat-feminino.jpg";
import catMasculino from "@/assets/cat-masculino.jpg";
import catInfantil from "@/assets/cat-infantil.jpg";
import catCasa from "@/assets/cat-casa.jpg";

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
};

export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  categorySlug: string;
  categoryLabel: string;
  badge?: string;
  image: string;
};

export const categories: Category[] = [
  {
    slug: "feminino",
    name: "Feminino",
    tagline: "Estilo, conforto e autoestima",
    image: catFeminino,
  },
  {
    slug: "masculino",
    name: "Masculino",
    tagline: "Curadoria sóbria e atemporal",
    image: catMasculino,
  },
  {
    slug: "infantil",
    name: "Infantil",
    tagline: "Aconchego para os pequenos",
    image: catInfantil,
  },
  {
    slug: "cama-banho",
    name: "Cama & Banho",
    tagline: "Sua casa em outro nível",
    image: catCasa,
  },
];

export const products: Product[] = [
  {
    slug: "vestido-midi-linho-areia",
    name: "Vestido Midi Linho",
    subtitle: "Areia • Natural",
    price: 349,
    categorySlug: "feminino",
    categoryLabel: "Vestido",
    badge: "Novo",
    image: catFeminino,
  },
  {
    slug: "jogo-toalhas-egipcias-terracota",
    name: "Jogo de Toalhas Egípcias",
    subtitle: "Terracota • 4 peças",
    price: 229,
    categorySlug: "cama-banho",
    categoryLabel: "Banho",
    image: catCasa,
  },
  {
    slug: "camisa-tencel-creme",
    name: "Camisa Tencel Creme",
    subtitle: "Off-white • Slim",
    price: 289,
    categorySlug: "masculino",
    categoryLabel: "Camisa",
    image: catMasculino,
  },
  {
    slug: "romper-tricot-baby",
    name: "Romper Tricot Baby",
    subtitle: "Off-white • 100% algodão",
    price: 189,
    categorySlug: "infantil",
    categoryLabel: "Kids",
    image: catInfantil,
  },
  {
    slug: "blusa-listrada-rose",
    name: "Blusa Listrada Rosé",
    subtitle: "Manga curta • Algodão pima",
    price: 159,
    categorySlug: "feminino",
    categoryLabel: "Blusa",
    badge: "Best-seller",
    image: catFeminino,
  },
  {
    slug: "jogo-lencois-400-fios",
    name: "Jogo de Lençóis 400 Fios",
    subtitle: "Marfim • Queen",
    price: 542,
    categorySlug: "cama-banho",
    categoryLabel: "Cama",
    image: catCasa,
  },
  {
    slug: "calca-alfaiataria-cafe",
    name: "Calça Alfaiataria Café",
    subtitle: "Café • Corte reto",
    price: 379,
    categorySlug: "masculino",
    categoryLabel: "Calça",
    image: catMasculino,
  },
  {
    slug: "macacao-infantil-cru",
    name: "Macacão Infantil Cru",
    subtitle: "Cru • Plush quentinho",
    price: 169,
    categorySlug: "infantil",
    categoryLabel: "Conjunto",
    image: catInfantil,
  },
];

export const formatBRL = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const productsByCategory = (slug: string) =>
  products.filter((p) => p.categorySlug === slug);
