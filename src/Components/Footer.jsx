const Footer = () => {
  return (
    <footer className="mt-12 border-t border-gray-200 pt-10">

      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

        <div>
          <h2 className="text-xl font-black">
            SHOP.CO
          </h2>

          <p className="mt-4 text-xs leading-6 text-gray-500">
            Find clothes that match your style and make every day special.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold">
            COMPANY
          </h3>

          <div className="space-y-3 text-xs text-gray-500">
            <p>About</p>
            <p>Features</p>
            <p>Works</p>
            <p>Career</p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold">
            HELP
          </h3>

          <div className="space-y-3 text-xs text-gray-500">
            <p>Customer Support</p>
            <p>Delivery Details</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold">
            FAQ
          </h3>

          <div className="space-y-3 text-xs text-gray-500">
            <p>Account</p>
            <p>Orders</p>
            <p>Payments</p>
            <p>Shipping</p>
          </div>
        </div>

      </div>

      <div className="mt-10 border-t border-gray-200 py-5 text-center text-xs text-gray-400">
        © 2026 SHOP.CO. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;