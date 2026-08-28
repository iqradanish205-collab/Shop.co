import Navbar from "../Components/Navbar";
import CartItem from "../Components/CartItem";
import OrderSummary from "../Components/OrderSummary";
import Footer from "../components/Footer";

import { ShoppingBag } from "lucide-react";
import { useCart } from "../Components/CartContext";
import { Link } from "react-router-dom";
import Newsletter from "../Components/Newsletter";


function CartPage() {

  const { cartItems } = useCart();

  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <main className="mx-auto max-w-1180px px-5 lg:px-8">

        {/* Breadcrumb */}
        <div className="py-5">

          <p className="text-[9px] uppercase text-gray-400">
            Home / Cart
          </p>

        </div>

        {/* Heading */}
        <h1
          className="
            mb-7
            text-[24px]
            font-black
            tracking-[-1px]
            sm:text-[27px]
          "
        >
          YOUR CART
        </h1>

        {cartItems.length > 0 ? (

          <div
            className="
              grid
              grid-cols-1
              gap-8
              lg:grid-cols-[1fr_330px]
              lg:gap-12
            "
          >

            {/* LEFT CART */}
            <section>

              {cartItems.map((item) => (
                <CartItem
                  key={`${item.id}-${item.size}-${item.color}`}
                  item={item}
                />
              ))}

            </section>

            {/* RIGHT SUMMARY */}
            <aside>

              <div className="lg:sticky lg:top-6">
                <OrderSummary />
              </div>

            </aside>

          </div>

        ) : (

          /* EMPTY CART */
          <div
            className="
              flex
              min-h-300px
              flex-col
              items-center
              justify-center
              rounded-xl
              bg-[#f7f7f7]
              px-5
              text-center
            "
          >

            <ShoppingBag
              size={35}
              strokeWidth={1.4}
            />

            <h2 className="mt-4 text-[16px] font-black uppercase">
              Your Cart Is Empty
            </h2>

            <p className="mt-2 max-w-300px text-[10px] text-gray-400">
              Looks like you haven't added anything to
              your cart yet.
            </p>

            <Link
              to="/category/casual"
              className="
                mt-6
                rounded-full
                bg-black
                px-7
                py-3
                text-[9px]
                font-bold
                uppercase
                text-white
              "
            >
              Continue Shopping
            </Link>

          </div>

        )}

        {/* Newsletter */}
        <Newsletter />

        {/* Footer */}
        <Footer />

      </main>

    </div>
  );
}

export default CartPage;