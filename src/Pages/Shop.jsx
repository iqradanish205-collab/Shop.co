import { useState } from "react";
import Navbar from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";
import ShopFilters from "../Components/ShopFilters";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import products from "../Data/products";



const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <main className="mx-auto max-w-1200px px-5 py-8 sm:px-8">

        {/* Breadcrumb */}
        <div className="mb-8 text-xs text-gray-400">
          Home / Casual
        </div>

        {/* Page Heading */}
        <div className="mb-8 flex items-center justify-between">

          <h1 className="text-3xl font-black uppercase sm:text-4xl">
            Casual
          </h1>

          <div className="hidden text-xs text-gray-500 sm:block">
            Showing 1-{filteredProducts.length} of{" "}
            {products.length} Products
          </div>

        </div>

        {/* Main Shop Area */}
        <div className="flex gap-8">

          {/* Filters */}
          <ShopFilters
            onCategoryChange={setSelectedCategory}
          />

          {/* Products */}
          <div className="min-w-0 flex-1">

            {/* Mobile filter */}
            <div className="mb-6 flex items-center justify-between lg:hidden">

              <button
                type="button"
                className="rounded-full bg-black px-5 py-3 text-xs font-bold text-white"
              >
                Filters
              </button>

              <select className="rounded-full border border-gray-200 px-4 py-3 text-xs outline-none">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Price Low to High</option>
                <option>Price High to Low</option>
              </select>

            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">

              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}

            </div>

            {/* Empty */}
            {filteredProducts.length === 0 && (
              <div className="py-20 text-center">
                <h2 className="text-xl font-bold">
                  No Products Found
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Try another category.
                </p>
              </div>
            )}

          </div>

        </div>

        {/* Dress Style */}
       
        {/* Happy Customers */}
        <section className="mt-20">

          <h2 className="text-2xl font-black uppercase sm:text-3xl">
            Our Happy Customers
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-gray-200 p-6">

              <div className="text-yellow-400">
                ★★★★★
              </div>

              <h3 className="mt-3 font-bold">
                Sarah M.
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Great quality and amazing style. I really loved my order.
              </p>

            </div>

            <div className="rounded-2xl border border-gray-200 p-6">

              <div className="text-yellow-400">
                ★★★★★
              </div>

              <h3 className="mt-3 font-bold">
                Alex R.
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                The clothes are comfortable and exactly like the pictures.
              </p>

            </div>

            <div className="rounded-2xl border border-gray-200 p-6">

              <div className="text-yellow-400">
                ★★★★★
              </div>

              <h3 className="mt-3 font-bold">
                James K.
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Fast delivery and excellent product quality.
              </p>

            </div>

          </div>

        </section>

        {/* Newsletter */}
        <Newsletter />

        {/* Footer */}
        <Footer />

      </main>

    </div>
  );
};

export default Shop;


