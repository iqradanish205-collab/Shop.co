export default function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-7 rounded-2xl bg-[#101828] px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14">
        <h2 className="max-w-xl text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
          Stay up to date about our latest offers
        </h2>

        <form className="flex w-full flex-col gap-3 sm:max-w-md">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full rounded-full bg-white px-5 py-3 text-sm outline-none"
          />

          <button
            type="submit"
            className="w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-200"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </div>
    </section>
  );
}