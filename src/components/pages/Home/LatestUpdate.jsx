const LatestUpdate = () => {
    return (
        <div className="gallery_section flex flex-col lg:flex-row-reverse container mx-auto my-28 justify-center items-center" id="gallery">
        <div className="w-full lg:w-[50%] p-4 lg:text-right">
          <h1 className="text-5xl mb-8">Join our Newsletter</h1>
          <h1 className="text-2xl font-medium text-slate-500">
            Want to stay updated about our latest collections? Click on the button below and The joker will send you all the latest news about LegoMart and also exciting discounts! <br></br><br></br>Don't worry we notify only twice a month.
          </h1>
          <button className="btn h-full border-none bg-lime-900 mt-10 hover:bg-red-500">Newsletter</button>
        </div>
        <div className="w-full lg:w-[50%]  mx-auto border-4 border-red-200 shadow-xl">
            <img data-aos="flip-right" src="newsletter.png" alt="" />
        </div>
      </div>
    );
};

export default LatestUpdate;