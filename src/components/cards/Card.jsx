import { useState } from "react";
import { cards } from "../constans/card";

import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
const Card = () => {
  const [likedCards, setLikedCards] = useState([]);

  const toggleLike = (id) => {
    setLikedCards((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {cards.map((card) => (
        <div
          key={card._id}
          className="relative border rounded shadow p-3 hover:scale-95 transition-all bg-white w-full sm:w-[300px] md:w-[250px] lg:w-[250px] "
        >
          {/* Heart Icon */}
          <button
            className="absolute top-2 right-2 z-10"
            onClick={() => toggleLike(card._id)}
          >
            {likedCards.includes(card._id) ? (
              <HeartSolid className="h-8 w-8 p-1 text-red-500 bg-white rounded-full shadow" />
            ) : (
              <HeartOutline className="h-8 w-8 p-1 text-gray-400 hover:text-red-400 bg-white rounded-full shadow" />
            )}
          </button>

          {/* Card Content */}
          <a
            href={`/preview/${card._id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full h-40 overflow-hidden rounded">
              <img
                src={card.mainImage}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="font-bold text-lg mt-2 text-black">{card.price}</h3>

            <p className="text-sm text-gray-600">
              {card.title.length < 30
                ? card.title + ".".repeat(30 - card.title.length)
                : card.title.slice(0, 27) + "..."}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Card;
