import { Trash2, Minus, Plus } from "lucide-react";
import { useCart } from "./CartContext";

function CartItem({ item }) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useCart();

  return (
    <div className="flex gap-4 border-b border-gray-100 py-5">

      {/* Product Image */}
      <div className="h-105px w-85px shrink-0 overflow-hidden bg-[#f5f5f5] sm:h-125px sm:w-105px">

        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
        />

      </div>

      {/* Product Information */}
      <div className="flex min-w-0 flex-1 flex-col justify-between">

        <div className="flex justify-between gap-3">

          <div>

            <h3 className="text-[11px] font-black uppercase leading-4 sm:text-[12px]">
              {item.name}
            </h3>

            <p className="mt-1 text-[9px] text-gray-500">
              Size:{" "}
              <span className="font-semibold text-black">
                {item.size}
              </span>
            </p>

            <p className="mt-1 text-[9px] text-gray-500">
              Color:{" "}
              <span className="font-semibold text-black">
                {item.color}
              </span>
            </p>

          </div>

          {/* Delete */}
          <button
            onClick={() => removeItem(item.id)}
            className="text-red-500 transition hover:text-red-700"
          >
            <Trash2 size={15} />
          </button>

        </div>

        <div className="mt-4 flex items-center justify-between">

          {/* Price */}
          <span className="text-[13px] font-black">
            ${item.price}
          </span>

          {/* Quantity */}
          <div className="flex items-center gap-3 rounded-full bg-[#f5f5f5] px-3 py-2">

            <button
              onClick={() =>
                decreaseQuantity(item.id)
              }
              className="text-gray-600 hover:text-black"
            >
              <Minus size={12} />
            </button>

            <span className="min-w-12px text-center text-[10px] font-bold">
              {item.quantity}
            </span>

            <button
              onClick={() =>
                increaseQuantity(item.id)
              }
              className="text-gray-600 hover:text-black"
            >
              <Plus size={12} />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CartItem;