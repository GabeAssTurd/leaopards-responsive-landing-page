import React from "react";

function Search() {
  return (
    <>
      <div className="md:hidden mt-10  block w-[80%] mx-auto  mb-2">
        {/* Serch Form */}

        <form className="w-full h-[40px] flex">

          {/* Input takes remaining space */}
          <input
            required
            type="text"
            placeholder="Enter Your Tracking Number"
            className="flex-1 bg-white opacity-50  rounded-tl-lg rounded-bl-lg h-full px-4 outline-none 
             focus:shadow-[rgba(255,200,0,0.5)_-3px_0px_3px_0px,rgba(255,200,0,0.5)_0px_-5px_5px_0px,rgba(255,200,0,0.5)_0px_3px_3px_0px]
             placeholder:text-[#0000003f] placeholder:font-semibold border-[2px]  text-sm duration-200"

        
          />

          {/* Button has fixed width */}
          <button
            type="submit"
            className="bg-appYellow h-full te w-[80px] text-halfBlack rounded-tr-lg rounded-br-lg"
          >
            Tracing
          </button>
        </form>

        {/* Cards */}
     <div className="grid grid-cols-3 gap-3 mt-2">
  {cards.map((card) => (
    <div
      key={card.text}
      className="h-[90px] w-full 
      rounded-lg shadow-md 
      transition-all duration-300 ease-in-out 
      border-t-4
      border-t-[#444444]
      hover:border-t-appYellow
      hover:scale-105
      cursor-pointer
      p-1
      flex items-center flex-col
      SerACH-cARDs
      hover:text-white
      text-halfBlack"
    >
      <img className="h-[40px] w-[50px]" src={card?.img} alt="" />
      <p className="text-[11px] mt-1 text-center font-[600] uppercase">
        {card.text}
      </p>
    </div>
  ))}
</div>

      </div>
    </>
  );
}

export default Search;

const cards = [
  {
    id: 0,
    img: "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740494393/Leo%20Pard%20Clone/gtbuefjie9tikjbqzgph.svg",
    text: "Locate us",
  },
  {
    id: 1,
    img: "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740494379/Leo%20Pard%20Clone/revx6di4hmldsmx6eek9.svg",
    text: "dunamic calculator",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740494393/Leo%20Pard%20Clone/tuxitvmaoplqunxzm0bg.svg",
    text: "leopards pulao",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740494393/Leo%20Pard%20Clone/xn9asuju8j2dalcqvepa.svg",
    text: "tracking",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740494388/Leo%20Pard%20Clone/niyzxxjv76yaxz02n0ps.svg",
    text: "uplicate slip",
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740494378/Leo%20Pard%20Clone/emhmwmytsumvhgs8f6vr.svg",
    text: "e-com login",
  },
];
