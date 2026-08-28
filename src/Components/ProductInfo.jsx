import { useState } from "react";

import {
  Heart,
  ShoppingBag,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import Stars from "./Stars";
import Quantity from "./Quantity";

function ProductInfo({ product }) {

  const [quantity, setQuantity] = useState(1);

  const [selectedColor, setSelectedColor] =
    useState(0);

  const [liked, setLiked] =
    useState(false);

  // Add Product To LocalStorage
  const addToCart = () => {

  const oldCart = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );

  const existingIndex = oldCart.findIndex(
    (item) =>
      item.productId === product.id &&
      item.color === product.colors[selectedColor]
  );

  if (existingIndex !== -1) {

    oldCart[existingIndex].quantity += quantity;

  } else {

    oldCart.push({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: quantity,
      color: product.colors[selectedColor],
    });

  }

  localStorage.setItem(
    "cart",
    JSON.stringify(oldCart)
  );

  alert("Product added to cart!");
};

  return (

    <div className="pt-1 lg:pl-6">

      {/* Rating */}
      <div className="mb-3 flex items-center gap-2">

        <Stars
          rating={product.rating}
        />

        <span className="text-xs text-gray-500">
          ({product.reviews} reviews)
        </span>

      </div>

      {/* Product Name */}
      <h1
        className="
          text-2xl
          font-black
          leading-tight
          tracking-tight
          sm:text-3xl
        "
      >
        {product.name}
      </h1>

      {/* Price */}
      <div className="mt-5 flex items-center gap-3">

        <span className="text-xl font-bold">
          ${product.price.toFixed(2)}
        </span>

        <span className="text-sm text-gray-400 line-through">
          ${product.oldPrice.toFixed(2)}
        </span>

        <span
          className="
            bg-black
            px-2
            py-1
            text-[10px]
            font-bold
            uppercase
            text-white
          "
        >
          Sale
        </span>

      </div>

      {/* Description */}
      <p
        className="
          mt-5
          max-w-xl
          text-sm
          leading-6
          text-gray-600
        "
      >
        {product.description}
      </p>

      {/* Color */}
      <div className="mt-7 border-t border-gray-100 pt-6">

        <p className="mb-3 text-xs font-bold uppercase tracking-wide">
          Color
        </p>

        <div className="flex gap-3">

          {product.colors.map(
            (color, index) => (

              <button
                key={color}
                onClick={() =>
                  setSelectedColor(index)
                }
                className={`
                  h-8
                  w-8
                  rounded-full
                  border-2
                  ${
                    selectedColor === index
                      ? "border-black ring-2 ring-gray-200"
                      : "border-white ring-1 ring-gray-300"
                  }
                `}
                style={{
                  backgroundColor: color,
                }}
              />

            )
          )}

        </div>

      </div>

      {/* Quantity + Cart */}
      <div
        className="
          mt-7
          flex
          flex-wrap
          gap-3
        "
      >

        <Quantity
          quantity={quantity}
          setQuantity={setQuantity}
        />

        <button
          onClick={addToCart}
          className="
            flex
            h-12
            min-w-180px
            flex-1
            items-center
            justify-center
            gap-2
            bg-black
            px-5
            text-xs
            font-bold
            uppercase
            tracking-wide
            text-white
            transition
            hover:bg-gray-700
          "
        >

          <ShoppingBag size={17} />

          Add to Cart

        </button>

        {/* Wishlist */}
        <button
          onClick={() =>
            setLiked(!liked)
          }
          className={`
            flex
            h-12
            w-12
            items-center
            justify-center
            border
            ${
              liked
                ? "border-black bg-black text-white"
                : "border-gray-300"
            }
          `}
        >

          <Heart
            size={18}
            fill={
              liked
                ? "currentColor"
                : "none"
            }
          />

        </button>

      </div>

      {/* Buy Now */}
      <Link
        to="/checkout"
        className="
          mt-3
          flex
          h-12
          items-center
          justify-center
          border
          border-black
          text-xs
          font-bold
          uppercase
          tracking-wide
          transition
          hover:bg-black
          hover:text-white
        "
      >
        Buy It Now
      </Link>

      {/* Shipping Information */}
      <div
        className="
          mt-7
          grid
          grid-cols-2
          gap-4
          border-y
          border-gray-100
          py-5
        "
      >

        <div>

          <p className="text-xs font-bold">
            Free Shipping
          </p>

          <p className="mt-1 text-xs text-gray-500">
            On orders over $50
          </p>

        </div>

        <div>

          <p className="text-xs font-bold">
            Easy Returns
          </p>

          <p className="mt-1 text-xs text-gray-500">
            30 day return policy
          </p>

        </div>

      </div>

    </div>

  );
}

export default ProductInfo;