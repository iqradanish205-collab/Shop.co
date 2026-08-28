import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  UserRound,
  Heart,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-100 bg-white">

      <div className="mx-auto flex h-70px max-w-1180px items-center justify-between px-5">

        {/* Mobile Menu */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="text-[20px] font-black tracking-[-1px]"
        >
          SHOP.CO
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">

          <Link
            to="/"
            className="text-[10px] font-semibold uppercase"
          >
            Home
          </Link>

          <Link
            to="/category/casual"
            className="text-[10px] font-semibold uppercase"
          >
            Shop
          </Link>

          <a
            href="#footer"
            className="text-[10px] font-semibold uppercase"
          >
            Contact
          </a>

        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">

          <Search
            size={17}
            strokeWidth={1.7}
          />

          <UserRound
            size={17}
            strokeWidth={1.7}
            className="hidden sm:block"
          />

          <Heart
            size={17}
            strokeWidth={1.7}
            className="hidden sm:block"
          />

          <ShoppingBag
            size={17}
            strokeWidth={1.7}
          />

        </div>

      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="border-t border-gray-100 lg:hidden">

          <Link
            to="/"
            className="block border-b border-gray-100 px-5 py-4 text-[10px] font-bold uppercase"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/category/casual"
            className="block border-b border-gray-100 px-5 py-4 text-[10px] font-bold uppercase"
            onClick={() => setOpen(false)}
          >
            Casual
          </Link>

          <a
            href="#footer"
            className="block px-5 py-4 text-[10px] font-bold uppercase"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>

        </nav>
      )}

    </header>
  );
}

export default Navbar;