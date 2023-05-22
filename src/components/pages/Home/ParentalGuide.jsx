import { useState } from "react";
import { RiEyeCloseFill } from "react-icons/ri";
const ParentalGuide = () => {
  const [note, removeNote] = useState(false);
  return (
    <div>
        <div className="flex flex-col container lg:px-28 mx-auto py-20 mt-48 justify-center items-center bg-gradient-to-tr from-white via-slate-50 to-white" data-aos="fade-down">
        <h1 className="text-5xl mb-8">Parental Guide</h1>
          <h1 className="text-2xl font-medium text-slate-500 text-justify drop-shadow-sm">
            Unlocking Your Child&apos;s Potential Through LEGO: A Parent&apos;s Guide.
            Inspire creativity, problem-solving, and teamwork. Choose sets that
            ignite their imagination. Encourage storytelling and showcase their
            creations. Join their LEGO adventures, guiding them towards endless
            possibilities. Together, create cherished memories while nurturing
            their growth. Embrace the power of LEGO play!<br></br><br></br>
            {note || (

<span data-aos="slide-left" className="bg-yellow-100 shadow-md p-2 pl-0 text-red-700 font-semibold text-sm"><span onClick={()=>removeNote(true)} className="cursor-pointer pr-2 bg-yellow-400 p-2 mr-2"><RiEyeCloseFill className="inline-block text-2xl text"/></span>BTW! AOS works in this section only when you zoom/in out the page. GOD KNOWS WHY! Sorry for the incovenience.</span>
            )}
            
          </h1>
          </div>
      <div
        className="gallery_section flex flex-col lg:flex-row gap-6 container mx-auto lg:px-40 my-28 justify-center items-center"
        id="gallery"
      >
        <div className="w-full lg:w-[50%] mx-auto border-4 border-red-200 shadow-xl" data-aos="fade-right">
        <img className="w-[100%]" src="parents.jpg" alt="" />
        </div>
        <div className="w-full lg:w-[50%]  mx-auto border-4 border-red-200 shadow-xl" data-aos="fade-left" >
          <img className="w-[100%]" src="parents_real.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ParentalGuide;
