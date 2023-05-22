const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("cover.jpg")`,
      }}
      data-aos="fade-down"
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="motto mb-5 text-5xl font-bold drop-shadow-md animate-bounce">Build Your World</h1>
          <p className="mb-5 drop-shadow-md text-xl">
            We got the best collections of Lego sets with the greatest deals you can get. 
          </p>
          <a href="#gallery"><button className="p-4 hover:p-4 bg-red-600 hover:bg-yellow-500 text-3xl hover:text-5xl border-0 rounded-none shadow-md transition-all duration-200 ease-in">Explore</button></a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
