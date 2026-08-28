import {
  Minus,
  Plus,
} from "lucide-react";

function Quantity({
  quantity,
  setQuantity,
}) {

  return (

    <div className="flex h-12 w-125px items-center justify-between border border-gray-300">

      <button
        onClick={() =>
          setQuantity(
            Math.max(1, quantity - 1)
          )
        }
        className="flex h-full w-10 items-center justify-center"
      >
        <Minus size={15} />
      </button>

      <span className="text-sm font-medium">
        {quantity}
      </span>

      <button
        onClick={() =>
          setQuantity(quantity + 1)
        }
        className="flex h-full w-10 items-center justify-center"
      >
        <Plus size={15} />
      </button>

    </div>

  );
}

export default Quantity;