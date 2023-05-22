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
          <p className="mb-5 drop-shadow-md">
            We got the best collections of Lego sets with the greatest deals you can get. 
          </p>
          <a href="#gallery"><button className="btn bg-red-600 border-0 rounded-none shadow-md">Explore</button></a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
