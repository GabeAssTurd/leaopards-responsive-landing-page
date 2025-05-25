import React from "react";
import bg from "../../assets/bg-career-success.jpg";

function Vissions() {
  return ( <>
    <div
  style={{

    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  }}
  className="min-h-[70vh] h-auto w-full bg-gray-500"
>
{/* Heading */}
    <div className="flex pt-16 justify-center items-center flex-col">
        <div className="h-2 w-[100px] bg-white rounded-full"></div>
        <h2 className="text-5xl mt-1  text-appGray font-[500]" >Vision and Mission</h2>
    </div>

{/* Cards */}
<div className="">
    
</div>

</div>
    </>
  );
}

export default Vissions;
