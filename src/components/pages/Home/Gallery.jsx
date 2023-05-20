const Gallery = () => {
    return (
        <div className="gallery_section flex flex-col lg:flex-row container mx-auto my-28 justify-center items-center" id="gallery">
        <div className="w-full lg:w-[50%] p-4">
          <h1 className="text-6xl mb-8">Gallery</h1>
          <h1 className="text-2xl font-bold text-slate-500">
            Get exciting Toys for your kids<br></br>and help them grow their creativity
            through the world of Legos!
          </h1>
        </div>
        <div className="container carousel w-full lg:w-[50%]  mx-auto border-4 border-red-200 shadow-xl">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="gallery_1.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn bg-slate-900 rounded-none border-0">
                ❮
              </a>
              <a href="#slide2" className="btn bg-slate-900 rounded-none border-0">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="gallery_2.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn bg-slate-900 rounded-none border-0">
                ❮
              </a>
              <a href="#slide3" className="btn bg-slate-900 rounded-none border-0">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="gallery_3.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn bg-slate-900 rounded-none border-0">
                ❮
              </a>
              <a href="#slide4" className="btn bg-slate-900 rounded-none border-0">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="gallery_4.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn bg-slate-900 rounded-none border-0">
                ❮
              </a>
              <a href="#slide1" className="btn bg-slate-900 rounded-none border-0">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Gallery;