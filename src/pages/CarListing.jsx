import React, { useState } from "react";

const cars = [
  {
    model: "Honda Civic GT",
    image: "/images/Civic.jpg",
    description: "Sleek, efficient, and reliable — perfect for city driving.",
    price: "$6.5 Million",
  },
  {
    model: "Tesla Model Supra",
    image: "/images/Tesla.jpg",
    description: "Luxury electric sedan with cutting-edge technology.",
    price: "$7.5 Million",
  },
  {
    model: "BMW V1000",
    image: "/images/BMW.jpg",
    description: "Sporty performance combined with timeless design.",
    price: "$8.5 Million",
  },
];

export default function CarListing() {
  const [current, setCurrent] = useState(0);
  const [search, setSearch] = useState("");

  // Filter cars based on search input
  const filteredCars = cars.filter((car) =>
    car.model.toLowerCase().includes(search.toLowerCase())
  );

  const nextSlide = () => {
    setCurrent((prev) => (prev === filteredCars.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? filteredCars.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a091a] via-[#121027] to-[#08080f] pt-24 px-4 sm:px-6 md:px-12 text-white font-sans flex flex-col items-center">

      {/* === PAGE TITLE === */}
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-center mb-6 sm:mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-[0_0_20px_rgba(99,102,241,0.5)]">
        Featured Cars
      </h1>

      {/* === SEARCH BAR === */}
      <div className="w-full max-w-md mb-8">
        <input
          type="text"
          placeholder="Search by model..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrent(0); // reset carousel to first item when searching
          }}
          className="w-full px-4 py-3 rounded-xl bg-white/10 placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 text-white transition-all"
        />
      </div>

      {/* === CAROUSEL CONTAINER === */}
      {filteredCars.length > 0 ? (
        <div className="relative w-full max-w-4xl overflow-hidden">
          {/* SLIDES */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {filteredCars.map((car, index) => (
              <div
                key={index}
                className="min-w-full flex-shrink-0 flex justify-center px-2 sm:px-4"
              >
                <div className="group bg-gradient-to-br from-[#1a162b]/90 to-[#241b3b]/90 border border-white/10 backdrop-blur-xl shadow-[0_0_25px_rgba(99,102,241,0.25)] hover:shadow-[0_0_45px_rgba(139,92,246,0.6)] rounded-3xl overflow-hidden transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] w-full max-w-md">
                  {/* IMAGE */}
                  <div className="relative overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.model}
                      className="w-full h-64 sm:h-72 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* DETAILS */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-2xl font-bold text-indigo-300 tracking-tight">
                      {car.model}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{car.description}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-lg font-semibold text-indigo-400">
                        {car.price}
                      </span>
                      <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold text-white hover:from-indigo-600 hover:to-purple-600 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transform hover:scale-105 transition-all duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* === NAV BUTTONS === */}
          {filteredCars.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/10 border border-white/20 backdrop-blur-lg p-3 rounded-full hover:bg-white/20 transition"
              >
                ❮
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/10 border border-white/20 backdrop-blur-lg p-3 rounded-full hover:bg-white/20 transition"
              >
                ❯
              </button>
            </>
          )}
        </div>
      ) : (
        <p className="text-gray-400 text-lg mt-8">No cars found.</p>
      )}

      {/* === INDICATORS === */}
      {filteredCars.length > 1 && (
        <div className="flex justify-center gap-3 mt-6">
          {filteredCars.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current
                  ? "bg-purple-500 w-6"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
}
