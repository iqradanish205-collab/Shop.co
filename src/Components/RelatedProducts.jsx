import { Link } from "react-router-dom";

import products from "../Data/products";

function RelatedProducts({ currentId }) {

  const relatedProducts = products.filter(
    (product) => product.id !== currentId
  );

  return (
    <section
      id="shop"
      className="mt-20"
    >

      {/* Heading */}
      <div className="mb-7">

        <p
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-gray-500
          "
        >
          More Styles
        </p>

        <h2
          className="
            mt-1
            text-xl
            font-black
            uppercase
          "
        >
          You Might Also Like
        </h2>

      </div>

      {/* Products */}
      <div
        className="
          grid
          grid-cols-2
          gap-x-4
          gap-y-8
          sm:grid-cols-3
          lg:grid-cols-4
        "
      >

        {relatedProducts.map((product) => (

          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group"
          >

            {/* Image */}
            <div
              className="
                aspect-4/5
                overflow-hidden
                bg-gray-50
              "
            >

              <img
                src={product.images[0]}
                alt={product.name}
                className="
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-105
                "
              />

            </div>

            {/* Product Name */}
            <h3
              className="
                mt-3
                line-clamp-2
                text-xs
                font-bold
                uppercase
                leading-5
              "
            >
              {product.name}
            </h3>

            {/* Price */}
            <div className="mt-1 flex gap-2">

              <span className="text-sm font-semibold">
                ${product.price.toFixed(2)}
              </span>

              <span className="text-xs text-gray-400 line-through">
                ${product.oldPrice.toFixed(2)}
              </span>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}

export default RelatedProducts;