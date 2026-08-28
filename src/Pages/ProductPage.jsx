import { useParams } from "react-router-dom";

import Navbar from "../Components/Navbar";
import ProductGallery from "../Components/ProductGallery";
import ProductInfo from "../Components/ProductInfo";
import Reviews from "../Components/Reviews";
import RelatedProducts from "../Components/RelatedProducts";
import Newsletter from "../Components/Newsletter";
import Footer from "../components/Footer";
import products from "../Data/products";

function ProductPage() {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === id
  );

  if (!product) {

    return (
      <>
        <Navbar />

        <main className="container-page py-20">

          <h1 className="text-2xl font-bold">
            Product Not Found
          </h1>

        </main>
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="container-page py-5 sm:py-8">

        {/* Breadcrumb */}
        <div
          className="
            mb-6
            text-[10px]
            font-medium
            uppercase
            tracking-wide
            text-gray-400
          "
        >
          Home / Shop / {product.name}
        </div>

        {/* Product */}
        <section
          className="
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-[1.05fr_.95fr]
            lg:gap-12
          "
        >

          <ProductGallery
            images={product.images}
          />

          <ProductInfo
            product={product}
          />

        </section>

        {/* Reviews */}
        <Reviews />

        {/* Related Products */}
        <RelatedProducts
          currentId={product.id}
        />

        {/* Newsletter */}
        <Newsletter />

      </main>

      {/* Footer */}
      <div className="container-page">
        <Footer />
      </div>

    </>
  );
}

export default ProductPage;