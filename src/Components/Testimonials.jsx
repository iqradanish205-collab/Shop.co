const testimonials = [
  {
    name: "Sarah M.",
    text: "The quality is amazing and the clothes fit perfectly. I will definitely shop here again.",
  },
  {
    name: "Alex K.",
    text: "Great collection, fast delivery and the products look exactly like the pictures.",
  },
  {
    name: "James R.",
    text: "I found exactly what I was looking for. The whole shopping experience was excellent.",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <h2 className="mb-10 text-3xl font-black uppercase tracking-tight sm:text-4xl">
        Our happy customers
      </h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="rounded-2xl border border-gray-200 p-6"
          >
            <div className="text-lg tracking-wide text-yellow-400">
              ★★★★★
            </div>

            <h3 className="mt-3 font-bold text-gray-900">
              {item.name}
              <span className="ml-1 text-green-500">✓</span>
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              "{item.text}"
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}