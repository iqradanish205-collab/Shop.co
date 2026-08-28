import { useState } from "react";

function ProductGallery({ images }) {

  const [activeImage, setActiveImage] = useState(0);

  return (

    <div className="flex flex-col-reverse gap-4 md:flex-row">

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto md:w-80px md:flex-col md:overflow-visible">

        {images.map((image, index) => (

          <button
            key={image}
            onClick={() => setActiveImage(index)}
            className={`
              h-75px
              w-70px
              shrink-0
              overflow-hidden
              border
              bg-gray-50
              transition
              ${
                activeImage === index
                  ? "border-black"
                  : "border-gray-200"
              }
            `}
          >

            <img
              src={image}
              alt={`Product ${index + 1}`}
              className="h-full w-full object-cover"
            />

          </button>

        ))}

      </div>

      {/* Main Image */}
      <div className="min-w-0 flex-1 overflow-hidden bg-gray-50">

        <img
          src={images[activeImage]}
          alt="Product"
          className="
            aspect-4/5
            h-full
            w-full
            object-cover
          "
        />

      </div>

    </div>

  );
}

export default ProductGallery;