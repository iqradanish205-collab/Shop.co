import Stars from "./Stars";

const reviews = [
  {
    id: 1,
    name: "Sophie M.",
    rating: 5,
    text: "The fit is exactly what I wanted. Soft fabric and a really clean oversized shape.",
  },
  {
    id: 2,
    name: "James R.",
    rating: 5,
    text: "Great quality for the price. The black color looks even better in person.",
  },
  {
    id: 3,
    name: "Alex K.",
    rating: 4,
    text: "Comfortable and easy to style. Size up if you want a very loose fit.",
  },
  {
    id: 4,
    name: "Mia T.",
    rating: 5,
    text: "Fast delivery and the shirt feels premium. Will definitely order another color.",
  },
  {
    id: 5,
    name: "Noah P.",
    rating: 5,
    text: "Exactly like the photos. The material has a nice weight to it.",
  },
  {
    id: 6,
    name: "Emma L.",
    rating: 4,
    text: "Very comfortable everyday shirt with a modern silhouette.",
  },
];

function Reviews() {
  return (
    <section
      id="reviews"
      className="mt-20"
    >

      {/* Heading */}
      <div
        className="
          flex
          flex-col
          gap-3
          border-b
          border-gray-200
          pb-5
          sm:flex-row
          sm:items-end
          sm:justify-between
        "
      >

        <div>

          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-gray-500
            "
          >
            Customer Feedback
          </p>

          <h2
            className="
              mt-1
              text-xl
              font-black
              uppercase
            "
          >
            Reviews
          </h2>

        </div>

        <button
          className="
            w-fit
            border
            border-gray-300
            px-5
            py-2.5
            text-xs
            font-semibold
            transition
            hover:bg-black
            hover:text-white
          "
        >
          Write a Review
        </button>

      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2">

        {reviews.map((review) => (

          <article
            key={review.id}
            className="
              border-b
              border-gray-100
              py-6
              sm:pr-8
              lg:pr-12
            "
          >

            <Stars rating={review.rating} />

            <div className="mt-2 flex items-center gap-2">

              <h3 className="text-sm font-bold">
                {review.name}
              </h3>

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-green-500
                "
              />

              <span className="text-[10px] text-gray-500">
                Verified
              </span>

            </div>

            <p
              className="
                mt-3
                text-sm
                leading-6
                text-gray-600
              "
            >
              {review.text}
            </p>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Reviews;