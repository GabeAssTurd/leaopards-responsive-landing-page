import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ItemsCarousel() {
  const sliderRef = React.useRef(null); // Reference for slider

  var settings = {
    dots: false, // Removed dots
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "This is card 1",
      img: "https://source.unsplash.com/400x300/?nature",
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is card 2",
      img: "https://source.unsplash.com/400x300/?tech",
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is card 3",
      img: "https://source.unsplash.com/400x300/?city",
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is card 4",
      img: "https://source.unsplash.com/400x300/?food",
    },
    {
      id: 5,
      title: "Card 5",
      description: "This is card 5",
      img: "https://source.unsplash.com/400x300/?travel",
    },
  ];

  return (
    <section className="py-8 bg-[#f9f9f9] relative">

      <div className="w-[90%] mx-auto  relative">
        <Slider ref={sliderRef} {...settings}>
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </Slider>

        <div className="h-3 mx-auto flex justify-center items-center gap-5 mt-4">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="text-black text-[20px] hover:text-appYellow"
          >
            <i class="fa-solid fa-angle-left"></i>
          </button>

          <button
            onClick={() => sliderRef.current.slickNext()}
            className="text-black text-[20px] hover:text-appYellow"
          >
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>

      </div>
    </section>
  );
}
export default ItemsCarousel;

function Card({ card }) {
  return (
    <div className="md:h-[220px] h-[120px] md:w-[260px] relative cursor-pointer w-[160px]  mx-auto rounded-lg  z-10 duration-300 ease-in-out ">
      <img
        className="h-full w-full rounded-lg"
        src="https://www.leopardscourier.com/images/card-images/Giftwift.jpg"
        alt=""
      />
      {/* Card Title */}
      <div className="h-full items-card-title-div rounded-lg w-full absolute z-50 bottom-0 left-0 bg-transparent duration-200 hover:bg-[#ffffff93]">
        {/*  */}
        <div className="py-1 pr-1  absolute bottom-4 flex items-center">
        <div className="h-6 min-w-20 w-auto  text-white px-2 bg-[#212529] flex justify-center text-center ">
<span>Internationl</span></div>
        </div>

      </div>

    </div>
  );
}
