import React, { useState, useEffect } from "react";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: 2,
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: 3,
      text: "It is a long established fact that a reader will be distracted by readable content",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full bg-black/45 py-4 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="font-serif italic text-2xl text-yellow-200 font-light mb-2 cursive">
          Clients
        </h3>
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3 tracking-wider">
          TESTIMONIAL
        </h2>

        <div className="">
          <p className="text-white text-xl md:text-2xl font-normal mb-3 max-w-2xl mx-auto">
            {testimonials[currentIndex].text}
          </p>
        </div>

        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 w-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
