const DressStyle = () => {
  const styles = [
    {
      name: "Casual",
      image: "/images/casual.png"
    },
    {
      name: "Formal",
      image: "/images/formal.png"
    },
    {
      name: "Party",
      image: "/images/party.png"
    },
    {
      name: "Gym",
      image: "/images/gym.png"
    }
  ];

  return (
    <section className="mt-20">

      <h2 className="text-center text-2xl font-black uppercase sm:text-3xl">
        Browse By Dress Style
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">

        {styles.map((style) => (
          <div
            key={style.name}
            className="relative h-220px overflow-hidden rounded-2xl bg-gray-100"
          >

            <img
              src={style.image}
              alt={style.name}
              className="h-full w-full object-cover"
            />

            <div className="absolute left-6 top-6">
              <h3 className="text-2xl font-black">
                {style.name}
              </h3>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default DressStyle;