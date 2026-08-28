export default function Hero() {
  return (
    <section className="bg-[#f2f0ed]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center px-4 sm:px-6 md:grid-cols-2 lg:px-8">

        <div className="py-14 md:py-20 lg:py-24">
          <h1 className="max-w-xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">
            Find clothes
            <br />
            that matches
            <br />
            your style
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-6 text-gray-600 sm:text-base">
            Browse through our diverse range of meticulously crafted
            garments, designed to bring out your individuality and cater
            to your sense of style.
          </p>

          <button className="mt-8 rounded-full bg-[#111827] px-9 py-3.5 text-sm font-semibold text-white transition hover:bg-black">
            Shop Now
          </button>

          <div className="mt-12 grid grid-cols-3 gap-5">
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl">200+</h3>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                International Brands
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold sm:text-3xl">2,000+</h3>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                High-Quality Products
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold sm:text-3xl">30,000+</h3>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Happy Customers
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex min-h-420px items-end justify-center overflow-hidden md:min-h-570px">
          <div className="absolute right-4 top-16 text-5xl font-black">
            ✦
          </div>

          <div className="absolute left-5 top-40 text-3xl">
            ✦
          </div>

          <img
            src="/images/hero.png"
            alt="Fashion collection"
            className="h-full w-full object-cover object-center md:absolute md:inset-0"
          />
        </div>
      </div>
    </section>
  );
}