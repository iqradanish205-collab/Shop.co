import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="overflow-hidden rounded-xl bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-260px w-full object-contain transition duration-300 group-hover:scale-105 sm:h-300px"
        />
      </div>

      <h3 className="mt-3 text-sm font-bold">
        {product.name}
      </h3>

      <div className="mt-1 flex items-center gap-2">
        <span className="text-yellow-400">
          ★★★★★
        </span>

        <span className="text-xs text-gray-500">
          {product.rating}/5
        </span>
      </div>

      <div className="mt-2 flex items-center gap-2">
        <span className="text-base font-black">
          ${product.price}
        </span>

        {product.oldPrice && (
          <span className="text-sm text-gray-400 line-through">
            ${product.oldPrice}
          </span>
        )}

        {product.discount && (
          <span className="rounded-full bg-red-100 px-2 py-1 text-[9px] font-bold text-red-500">
            -{product.discount}%
          </span>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;