import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ProductSection from "../Components/ProductSection";
import DressStyle from "../Components/DressStyle";
import Testimonials from "../Components/Testimonials";
import Newsletter from "../Components/Newsletter";
import Footer from "../components/Footer";
// import { getProducts } from "../services/api";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();

        if (Array.isArray(data)) {
          setProducts(data);
        } else if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error("Products API Error:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const newArrivals = products.filter(
    (product) => product.category === "new-arrivals"
  );

  const topSelling = products.filter(
    (product) => product.category === "top-selling"
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />

        <ProductSection
          title="New Arrivals"
          products={newArrivals.length ? newArrivals : products}
          loading={loading}
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200" />
        </div>

        <ProductSection
          title="Top Selling"
          products={topSelling.length ? topSelling : products}
          loading={loading}
        />

        <DressStyle />

        <Testimonials />

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}