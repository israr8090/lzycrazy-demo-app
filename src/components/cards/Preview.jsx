import { useState } from "react";
import { useParams } from "react-router-dom";
import { cards } from "";

const Preview = () => {
  const { id } = useParams();
  const card = cards.find((card) => card._id === parseInt(id));


  const [mainImage, setMainImage] = useState(card.image); 
  if (!card)
    return <div className="text-center text-red-500">Item not found</div>;

  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-10 p-8 max-w-6xl mx-auto mt-12 bg-white rounded-lg shadow-lg">
      {/* Left Side Image */}
      <section className="w-full md:w-1/2 flex flex-col justify-center items-center">
        <img
          src={mainImage}
          alt={card.title}
          className="w-full max-w-md h-96 object-contain rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        />
        <div className="flex gap-2 mt-4">
          {[card.image, card.image1, card.image2, card.image3, card.image4].map(
            (img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setMainImage(img)}
                className={`h-14 w-14 object-cover rounded-md shadow cursor-pointer border-2 ${
                  mainImage === img ? "border-blue-500" : "border-transparent"
                }`}
                alt={`Not Available ${index + 1}`}
              />
            )
          )}
        </div>
      </section>

      {/* Right Side Details */}
      <section className="w-full md:w-1/2 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 underline">
          {card.title}
        </h1>
        <h2 className="text-xl font-semibold text-green-600">₹ {card.price}</h2>
        <div>
          <p className="text-lg font-semibold text-gray-700 mb-1">
            Description:
          </p>
          <p className="text-base text-gray-600 whitespace-pre-line leading-relaxed">
            {card.about}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Preview;
