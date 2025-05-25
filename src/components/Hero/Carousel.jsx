import React, { useEffect, useState } from "react";

function Carousel({ children }) {

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % poster.length);
  };
  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + poster.length) % poster.length);
  };
  useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, 4000);
  }, [index]);



  return (
    <>
      <div className="md:h-[400px] h-[150px] relative  w-full bg-appYellow">
        {/* Left */}
        {/* <div onClick={prevSlide} className="h-[50%] top-0 flex justify-end items-end cursor-pointer hover:text-white text-3xl  text-[#ffffffaa] w-20  absolute left-0">
<i class="fa-solid fa-chevron-left"></i>
</div> */}
        <img
          key={index}
          className="h-full w-full duration-200"
          src={poster[index]}
          alt=""
        />
        {/* <div onClick={nextSlide} className="h-[50%] top-0 flex justify-start items-end cursor-pointer hover:text-white text-3xl  text-[#ffffffaa] w-20  absolute right-0">
<i class="fa-solid fa-chevron-right"></i>
</div> */}

        {/* Serach div */}
        <div className="h-full hidden md:flex w-full  absolute top-0  justify-center items-end left-0 right-0 bottom-0 bg-transparent">

          <div className="h-[150px] w-[550px] mb-2">
            {/* Serch Form */}

            <form className="w-full h-[50px] flex">
              {/* Input takes remaining space */}
              <input
                required
                type="text"
                placeholder="Enter Your Tracking Number"
                className="flex-1 bg-white opacity-50 rounded-tl-lg rounded-bl-lg h-full px-4 outline-none 
             focus:shadow-[rgba(255,200,0,0.5)_-5px_0px_5px_0px,rgba(255,200,0,0.5)_0px_-5px_5px_0px,rgba(255,200,0,0.5)_0px_5px_5px_0px]
             placeholder:text-[#0000003f] placeholder:font-semibold text-sm duration-200"
              />

              {/* Button has fixed width */}
              <button
                type="submit"
                className="bg-appYellow h-full w-[130px] text-halfBlack rounded-tr-lg rounded-br-lg"
              >
                Track Shipment
              </button>
            </form>
            {/* Cards */}
            <div className="h-[90px] w-full flex gap-3 mt-2">
              {cards.map((card) => (
                <div
                key={card.text}
                  className="h-[90px] w-[80px] 
  rounded-lg shadow-md 
  transition-all duration-300 ease-in-out 
  border-t-4
  border-t-[#444444]
  hover:border-t-appYellow
  hover:scale-105
  cursor-pointer
  p-1
   flex items-center  flex-col
   SerACH-cARDs
   hover:text-white
   text-halfBlack
  "
                >
                  <img
                    className="h-[40px] w-[50px] "
                    src={card?.img}
                    alt=""
                  />
                  <p className="text-[11px] mt-1 text-center  font-[600] uppercase">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Carousel;

const poster = [
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740483622/Leo%20Pard%20Clone/tgbbtepif2vkdt6kr5xz.jpg",
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740483621/Leo%20Pard%20Clone/jrktcdmlgewkbni6zdzs.jpg",
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740483621/Leo%20Pard%20Clone/b62qxyxpmc0soirwzgam.jpg",
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740483621/Leo%20Pard%20Clone/c2ymnsxccyjkxifqjjfa.jpg",
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740483747/Leo%20Pard%20Clone/ibxg5lorgzjfnfeuzn6j.jpg",
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740483621/Leo%20Pard%20Clone/neo0l1ddgox1eft2jixs.jpg",
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740483887/Leo%20Pard%20Clone/epqxbof0tqra54pzcx12.jpg",
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740483621/Leo%20Pard%20Clone/tpvpb22rbtf46dipvbzk.jpg",
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740483622/Leo%20Pard%20Clone/m6dgwy04jqdlnuxexsjm.jpg",
];

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