import { Heading3 } from "@/components/ui/typography";
import { ProductCard } from "@/components/product-card";
import { queryProducts } from "@/actions/query-product";

export default async function Home({
  searchParams,
}: {
  searchParams: { search?: string; category?: string };
}) {
  const { products: filteredProducts, selectedCategory } =
    queryProducts(searchParams);

  const categoryTitle = selectedCategory
    ? "children" in selectedCategory
      ? selectedCategory.name
      : `${selectedCategory.parent.name} > ${selectedCategory.name}`
    : "All Products";

  return (
    <section className="container py-4">
      <Heading3>
        {categoryTitle}
        {searchParams.search && ` - Search: ${searchParams.search}`}
      </Heading3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-8 mt-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
