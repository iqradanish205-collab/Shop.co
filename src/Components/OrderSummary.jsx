import { ArrowRight } from "lucide-react";
import { useCart } from "./CartContext";

function OrderSummary() {

  const { cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const discount = subtotal * 0.2;

  const delivery = subtotal > 0 ? 15 : 0;

  const total =
    subtotal - discount + delivery;

  return (
    <div className="rounded-xl bg-[#f7f7f7] p-5 sm:p-6">

      <h2 className="text-[14px] font-black uppercase">
        Order Summary
      </h2>

      {/* Subtotal */}
      <div className="mt-6 flex justify-between">

        <span className="text-[10px] text-gray-500">
          Subtotal
        </span>

        <span className="text-[11px] font-bold">
          ${subtotal.toFixed(2)}
        </span>

      </div>

      {/* Discount */}
      <div className="mt-3 flex justify-between">

        <span className="text-[10px] text-gray-500">
          Discount
        </span>

        <span className="text-[11px] font-bold text-red-500">
          -${discount.toFixed(2)}
        </span>

      </div>

      {/* Delivery */}
      <div className="mt-3 flex justify-between">

        <span className="text-[10px] text-gray-500">
          Delivery
        </span>

        <span className="text-[11px] font-bold">
          ${delivery.toFixed(2)}
        </span>

      </div>

      {/* Divider */}
      <div className="my-5 border-t border-gray-200" />

      {/* Total */}
      <div className="flex items-center justify-between">

        <span className="text-[11px] font-bold uppercase">
          Total
        </span>

        <span className="text-[18px] font-black">
          ${total.toFixed(2)}
        </span>

      </div>

      {/* Promo */}
      <div className="mt-5 flex gap-2">

        <input
          type="text"
          placeholder="Add promo code"
          className="
            min-w-0
            flex-1
            rounded-full
            border
            border-gray-200
            bg-white
            px-4
            py-3
            text-[9px]
            outline-none
          "
        />

        <button
          className="
            rounded-full
            bg-black
            px-5
            text-[9px]
            font-bold
            uppercase
            text-white
          "
        >
          Apply
        </button>

      </div>

      {/* Checkout */}
      <button
        disabled={cartItems.length === 0}
        className="
          mt-4
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-full
          bg-[#111827]
          py-4
          text-[10px]
          font-bold
          uppercase
          text-white
          transition
          hover:bg-black
          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        Go to Checkout

        <ArrowRight size={14} />

      </button>

    </div>
  );
}

export default OrderSummary;