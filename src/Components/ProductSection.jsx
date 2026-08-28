import ProductCard from "./ProductCard";

export default function ProductSection({
  title,
  products,
  loading,
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mb-10 flex items-center justify-center">
        <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
          {title}
        </h2>
      </div>

      {loading ? (
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item}>
              <div className="aspect-square animate-pulse rounded-xl bg-gray-200" />
              <div className="mt-4 h-4 animate-pulse rounded bg-gray-200" />
              <div className="mt-2 h-4 w-1/2 animate-pulse rounded bg-gray-200" />
            </div>
          ))}
        </div>
      ) : products.length === 0 ? (
        <p className="py-10 text-center text-gray-500">
          No products available.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product._id || product.id}
              product={product}
            />
          ))}
        </div>
      )}

      <div className="mt-10 flex justify-center">
        <button className="rounded-full border border-gray-300 px-10 py-3 text-sm font-medium transition hover:bg-gray-100">
          View All
        </button>
      </div>
    </section>
  );
}