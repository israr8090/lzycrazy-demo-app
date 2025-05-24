const BannerTwo = ({ data }) => {
  return (
    <div
      className="relative w-full max-h-[40vh] text-white overflow-hidden flex flex-col md:flex-row items-center gap-8 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${data.backgroundImage})`,
      }}
    >
      {/* Left image */}
      <div
        className="hidden md:block w-full md:w-1/3 relative overflow-hidden rounded-tr-full border-r-4"
        style={{ borderColor: data.primaryColor }}
      >
        <img
          src={data.image}
          alt="Happy diners"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 py-4">
        <h2
          className="text-3xl md:text-5xl font-extrabold uppercase mb-4 leading-tight"
          style={{ color: data.primaryColor }}
        >
          {data.header}
        </h2>
        <p className="text-white text-sm md:text-lg mb-4">{data.description}</p>
        <span
          className="text-white font-bold px-5 py-2 text-xl md:text-3xl rounded"
          style={{ backgroundColor: data.primaryColor }}
        >
          {data.offer} <span>off</span>
        </span>
      </div>
    </div>
  );
};

export default BannerTwo;
