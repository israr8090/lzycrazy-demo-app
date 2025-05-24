const BannerOne = ({ data }) => {
  return (
    <div
      className="py-8 flex flex-col gap-8 md:gap-4 md:flex-row items-center justify-between px-8  text-white"
      style={{ backgroundColor: data.backgroundColor }}
    >
      <div className="md:w-1/2 space-y-3 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-black">{data.header}</h2>
        <p className="text-base md:text-xl opacity-90">{data.description}</p>
        <button className="bg-black text-white text-base px-3 py-1 rounded mt-3 hover:opacity-90">
          {data.buttonText}
        </button>
      </div>

      {/* Image Section */}
      <div className="relative flex-1 overflow-hidden">
        <div
          className="w-full h-full overflow-hidden rounded-md md:rounded-none md:[clip-path:ellipse(100%_90%_at_100%_50%)]"
        >
          <span className="hidden md:block w-full h-full absolute bg-gray-900 z-20"></span>
          <img
            src={data.image}
            alt="Restaurant"
            className="w-full md:w-[95%] max-h-[40vh] object-cover md:-right-[5%] relative z-30 md:[clip-path:ellipse(100%_100%_at_100%_50%)]"
          />
        </div>
      </div>
    </div>
  );
};
export default BannerOne;
