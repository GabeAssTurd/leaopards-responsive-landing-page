import React from "react";
import bg from "../../assets/bg-career-success.jpg";

function Vissions() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className="min-h-[70vh] h-auto w-full bg-gray-500 pb-24"
      >
        {/* Heading */}
        <div className="flex pt-16 justify-center items-center flex-col">
          <div className="h-2 w-[100px] bg-white rounded-full"></div>
          <h2 className="md:text-5xl text-3xl md:mt-1 mt-3  text-appGray font-[500]">
            Vision and Mission
          </h2>
        </div>

        {/* Cards */}
        <div className=" flex justify-center  md:flex-row flex-col items-center gap-8 pt-9">
          {cards.map((card , idx) => (
            <Cards id= {card.id} paragraph={card.paragraph} headin={card.headin} img={card.img} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Vissions;

function Cards({id , paragraph ,headin , img}) {
  return (
    <>
      <div key={id} className="md:h-[450px] relative md:max-w-[45%] md:w-[460px] w-[80%] h-[440px] bg-white rounded-lg hover:shadow-2xl duration-300 hover:-translate-y-2 border-b-[10px] border-b-appYellow">
        {/* image */}

        <div
          style={{
            backgroundImage:
            `url(${img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="h-[70%] w-full rounded-t-lg"
        ></div>
        {/* TExt */}

        <div className="h-[30%] w-full mt-2 flex justify-center items-start  px-3 flex-col gap-4">
          <h1 className=" md:text-3xl text-2xl font-normal">{headin}</h1>
          <p className="md:text-[16px] text-sm">
            {paragraph}
          </p>

          {/* Cirlce */}
        </div>

        <div className="md:h-[75px] md:w-[75px] h-[55px] w-[55px] rounded-full bg-white absolute  left-[50%] -translate-x-[50%] top-[75%] -translate-y-[75%] md:p-[5px] p-[3px]">
          <img
            className="rounded-full"
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

let cards = [
  {
    id: 0,
    img: "https://res.cloudinary.com/dwvr054ck/image/upload/v1748184316/vision-min_chyfu3.jpg",
    headin : "Vision 2030",
    paragraph  :"To be the Ultimate Choice of our Supply Chain Stakeholders.",
  }, {
    id: 1,
    img: "https://res.cloudinary.com/dwvr054ck/image/upload/v1748184316/mission-min_y8wv0r.jpg",
    headin : "Our Mission",
    paragraph  :"Creating Impact & Delivering Value Through Excellence Drive and Innovation for our Stakeholders.",
  },
];
