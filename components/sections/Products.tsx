import { Reveal } from "@/components/ui/Reveal";
import { ProductCard } from "@/components/ui/ProductCard";
import { productsIntro, products } from "@/content/site";

export function Products() {
  return (
    <section id="products" className="border-t border-border py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{productsIntro.title}</h2>
          <p className="mt-4 text-muted">{productsIntro.subtitle}</p>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={Math.min(i * 0.05, 0.3)}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
