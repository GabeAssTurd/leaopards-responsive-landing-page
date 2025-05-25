import React from "react";
import { Link } from "react-router-dom";

function Upper() {
  return (
    <div className="bg-appYellow py-1 px-[5px] md:px-12 flex justify-between items-center">
      <div className=" flex items-center gap-1">
        {" "}
        <i class="fa-solid fa-earth-asia text-[#212529] bg-[#2125294b]  rounded-full text-[25px]  "></i>
        <span className="text-[16px] text-[#212529]">Pakistan</span>{" "}
      </div>
      <Link>
        <img
          className="h-7 w-10"
          src="https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740465581/Leo%20Pard%20Clone/fxyq1ualvaawfsw4xfej.svg"
          alt=""
        />
      </Link>
    </div>
  );
}
export default Upper;
