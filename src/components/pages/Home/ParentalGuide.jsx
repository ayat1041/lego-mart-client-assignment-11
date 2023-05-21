const ParentalGuide = () => {
  return (
    <div>
        <div data-aos="fade-down" className="flex flex-col container mx-auto my-28 mt-48 justify-center items-center">
        <h1 className="text-5xl mb-8">Parental Guide</h1>
          <h1 className="text-2xl font-medium text-slate-500 text-center">
            Unlocking Your Child's Potential Through LEGO: A Parent's Guide.
            Inspire creativity, problem-solving, and teamwork. Choose sets that
            ignite their imagination. Encourage storytelling and showcase their
            creations. Join their LEGO adventures, guiding them towards endless
            possibilities. Together, create cherished memories while nurturing
            their growth. Embrace the power of LEGO play!
          </h1>
          </div>
      <div
        className="gallery_section flex flex-col lg:flex-row gap-6 container mx-auto lg:px-40 my-28 justify-center items-center"
        id="gallery"
      >
        <div className="w-full lg:w-[50%] mx-auto border-4 border-red-200 shadow-xl">
        <img data-aos="zoom-in" className="w-[100%]" src="parents.jpg" alt="" />
        </div>
        <div className="w-full lg:w-[50%]  mx-auto border-4 border-red-200 shadow-xl">
          <img data-aos="zoom-in" className="w-[100%]" src="parents_real.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ParentalGuide;
