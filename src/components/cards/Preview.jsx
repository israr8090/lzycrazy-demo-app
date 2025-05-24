import { useState } from "react";
import { useParams } from "react-router-dom";
import { cards } from "../constans/card";
import { CreditCard, Star } from "lucide-react";

const Preview = () => {
  const { id } = useParams();
  const card = cards.find((card) => card._id === parseInt(id));

  // Fix: Initialize with the first image from the images array or mainImage
  const [mainImage, setMainImage] = useState(
    card?.images?.[0] || card?.mainImage || ""
  );

  if (!card)
    return <div className="text-center text-red-500">Item not found</div>;

  const allImages = [
    card.mainImage,
    ...card.images.filter((img) => img !== card.mainImage),
  ];
  const currentIndex = allImages.indexOf(mainImage);

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    setMainImage(allImages[newIndex]);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % allImages.length;
    setMainImage(allImages[newIndex]);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 container m-auto mt-5 p-3">
      {/* Left Section: Main Content */}
      <div className="lg:w-2/3">
        {/* Main Image Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="relative h-96 bg-gradient-to-r from-blue-400 to-purple-400">
            <img
              src={mainImage}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>

            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-3 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-3 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Image Thumbnails */}
          <div className="flex gap-2 p-4 bg-gray-50 overflow-x-auto">
            {card.mainImage && !card.images.includes(card.mainImage) && (
              <img
                key="main"
                src={card.mainImage}
                onClick={() => setMainImage(card.mainImage)}
                className={`h-16 w-20 flex-shrink-0 object-cover rounded-md cursor-pointer border-2 transition-all duration-200 ${
                  mainImage === card.mainImage
                    ? "border-blue-500 scale-105"
                    : "border-gray-200 hover:border-gray-400"
                }`}
                alt="Main property view"
              />
            )}
            {card.images.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setMainImage(img)}
                className={`h-16 w-20 flex-shrink-0 object-cover rounded-md cursor-pointer border-2 transition-all duration-200 ${
                  mainImage === img
                    ? "border-blue-500 scale-105"
                    : "border-gray-200 hover:border-gray-400"
                }`}
                alt={`Property view ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-5">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-row gap-2">
              <p className="font-bold">Type:</p>
              <p className="text-sm text-gray-500  font-semibold mt-1">
                {card.details.type}
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-bold">Bedrooms:</p>
              <p className="text-sm text-gray-500  font-semibold mt-1">
                {card.details.bedrooms}
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-bold">Super Built-up area sqft:</p>
              <p className="text-sm text-gray-500  font-semibold mt-1">
                {card.details.superBuiltUpArea}
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-bold">Bathrooms:</p>
              <p className="text-sm text-gray-500  font-semibold mt-1">
                {card.details.bathrooms}
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-bold">Furnishing:</p>
              <p className="text-sm text-gray-500  font-semibold mt-1">
                {card.details.furnishing}
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-bold">Project Status:</p>
              <p className="text-sm text-gray-500  font-semibold mt-1">
                {card.details.projectStatus}
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-bold">Listed By:</p>
              <p className="text-sm text-gray-500  font-semibold mt-1">
                Builder
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-bold">Facing:</p>
              <p className="text-sm text-gray-500  font-semibold mt-1">
                {card.details.facing}
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-bold">Carpet area sqft:</p>
              <p className="text-sm text-gray-500  font-semibold mt-1">
                {card.details.carpetArea}
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-bold">Car Parking:</p>
              <p className="text-sm text-gray-500  font-semibold mt-1">
                {card.details.carParking}
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-bold">Maintenance (Monthly):</p>
              <p className="text-sm text-gray-500  font-semibold mt-1">
                {card.details.maintenance}
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-bold">Total Floors:</p>
              <p className="text-sm text-gray-500  font-semibold mt-1">
                {card.details.totalFloors}
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-bold">Floor No:</p>
              <p className="text-sm text-gray-500  font-semibold mt-1">
                {card.details.floorNo}
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-bold">Project Name:</p>
              <p className="text-sm text-gray-500  font-semibold mt-1">
                {card.details.projectName}
              </p>
            </div>
          </div>
        </div>

        {/* Description & Pricing Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
          <p className="text-gray-700 mb-6">{card.description}</p>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Pricing & Sizes:
          </h3>
          <ul className="space-y-2">
            {card.pricingSizes.map((item, index) => (
              <li key={index} className="text-gray-700">
                <span className="font-semibold">{item.type}</span> ({item.size})
                – {item.price}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Section: Contact & Map */}
      <div className="lg:w-1/3 flex flex-col gap-6">
        {/* Title & Price */}
        <div className="border border-gray-200 bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex flex-col  mb-4">
            <div className="flex justify-between">
              <div>
                <p className="text-3xl font-bold text-green-600">
                  ₹ {card.price}
                </p>
                <p className="text-sm text-gray-500">
                  {card.details.bedrooms} BHK - {card.details.bathrooms}{" "}
                  Bathroom - {card.details.superBuiltUpArea} sqft
                </p>
              </div>
              <div className="flex gap-2 justify-end">
                <Star />
                <CreditCard />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {card.title}
              </h1>
              <p className="text-gray-600">{card.location}</p>
            </div>
          </div>
        </div>

        {/* Posted By */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Posted By
          </h3>
          <div className="mb-4">
            <p className="font-semibold text-lg">{card.postedBy}</p>
            <p className="text-gray-600 text-sm">
              Member since {card.memberSince} • {card.itemsListed}
            </p>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            Chat with seller
          </button>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Posted in
          </h3>
          <p className="text-blue-600 mb-4">{card.location}</p>

          <div className="rounded-lg overflow-hidden h-64 mb-4">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              className="rounded-lg"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                card.location
              )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              allowFullScreen
            ></iframe>
          </div>

          <button
            className="text-blue-600 hover:underline text-sm"
            onClick={() =>
              window.open(
                `https://maps.google.com/?q=${encodeURIComponent(
                  card.location
                )}`,
                "_blank"
              )
            }
          >
            View larger map
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
