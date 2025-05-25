import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef=  useRef(null)
  const navRef=  useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        navRef.current && 
        !navRef.current.contains(event.target) && 
        btnRef.current && 
        !btnRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Close menu when clicking outside
      }
    }
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <nav className="px-4 md:px-16 shadow-lg md:h-[80px] h-[60px] flex items-center justify-between">

        {/* Logos Section */}
        <Link href="/" className="flex items-center gap-5 md:py-2 py-1">
          <img
            className="md:h-16 h-12 max-w-[130px]"
            src="https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740466850/Leo%20Pard%20Clone/wpopvozz8juuhzbpi05z.png"
            alt="Logo 1"
          />
          <img
            className="md:h-14 h-12 w-auto max-w-[120px]"
            src="https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740466851/Leo%20Pard%20Clone/xdjh2jlbncl7lx7y9mih.png"
            alt="Logo 2"
          />
        </Link>

        {/* Links Section Desktop */}
        <div className="flex-1 Desktop-nav-bar h-full">
          {/* Socila Media Icons 1/2 */}
          <div className="h-1/2 flex items-center justify-end pr-8">

            <Icons />
          </div>
          {/* Links Senctions */}
          <div className="w-full h-1/2  flex justify-end items-end">
            <Links />
          </div>
        </div>
        {/*  Mobile Menue Btn */}

        <button
        ref={btnRef}
          onClick={() => setIsOpen((prev) => !prev)}
          className=" mobie-nav-btn text-[#000000a8] flex h-10 w-12 text-[23px] border justify-center items-center rounded-lg ]"
        >
          <i class={`fa-solid fa-${isOpen ? "xmark" : "bars"}`}></i>
        </button>
      </nav>
      {/* Mobile Nav Bar */}
      {isOpen && (
        <div className="fixed z-30 flex items-start pt-3 justify-center left-0 w-full h-auto  mobile-nav">
          <MobileLinks navRef ={navRef} isOpen={isOpen} />
        </div>
      )}
    </>
  );
}

export default Nav;

function Icons() {
  const icons = [
    {
      id: 0,
      icon: "fa-brands fa-linkedin",
      onHoverEffect: "hover-linkedin",
      to: "",
    },
    {
      id: 1,
      icon: "fa-brands fa-facebook",
      textColor: "text-[#1877F2]",
      onHoverEffect: "hover-facebook",
      to: "",
    },
    {
      id: 2,
      icon: "fa-brands fa-instagram",
      onHoverEffect: "hover-instagram",
      to: "/",
    },
    {
      id: 3,
      icon: "fa-brands fa-whatsapp",
      onHoverEffect: "hover-whatsapp",
      to: "",
    },
    {
      id: 4,
      icon: "fa-brands fa-youtube",
      onHoverEffect: "hover-youtube",
      to: "",
    },
  ];
  return (
    
    <div className="flex gap-2">
      {icons.map((icon) => (
        <Link
          key={icon.id}
          to={icon.to}
          target="_blank"
          rel="noopener noreferrer"
          className="text-halfBlack"
        >
          <div className={` ${icon.onHoverEffect}`}>
            <i className={`${icon.icon} text-[20px] `}></i>
          </div>
        </Link>
      ))}
    </div>
  );
}
function Links() {
  return (
    <nav className="relative h-full flex justify-end items-end ">
      <div className="flex h-full items-center text-[15px] ">
        {/* Home Link */}
        {links.map(
          (link) => (
            <NavLink
              key={link.text}
              to={link.to}
              className={({ isActive }) =>
                `hover:text-black ${
                  isActive
                    ? "bg-appYellow text-[#000000a3] duration-150 hover:text-black"
                    : "hover:bg-appYellow"
                } text-[#000000a3] duration-150  py-[10px]  px-2 font-normal transition"`
          
              }
            >
              {link.text}
            </NavLink>
          )
          // </li>
        )}
        <Link
          className={`bg-appYellow  hover:text-black text-[#000000a3] duration-150  py-[10px]  px-2 font-normal transition"`}
        >
          Ecom Login
        </Link>
      </div>
    </nav>
  );
}

function MobileLinks({ isOpen , navRef}) {

  return (
    <>
      <div
      ref={navRef}
        className={`w-[90%] absolute min-w-[200px] bg-white py-2 flex flex-col h-[300px] overflow-hidden text-halfBlack transition-all duration-300 ${
          isOpen ? "open-nav block" : "close-nav"
        }`}
      >
        {links.map((link) => (
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              `${
                isActive ? "bg-appYellow " : ""
              } flex items-center hover:bg-appYellow duration-200 text-black h-full w-full text-halfBlack py-2 px-4`
            }
          >
            {link.text}
          </NavLink>
        ))}
               <Link className={`bg-appYellow  hover:text-black text-[#000000a3] duration-150  py-[10px]  px-2 font-normal transition"`}>
            Ecom Login
          </Link>
      </div>
    </>
  );
}
const links = [
  {
    id: 0,
    to: "/",
    text: "Home",
  },
  {
    id: 1,
    to: "/about",
    text: "About Us",
  },
  {
    id: 2,
    to: "/business",
    text: "Business",
  },
  {
    id: 3,
    to: "/open-account",
    text: "Open An Account",
  },
  {
    id: 4,
    to: "/contact",
    text: "Contact",
  },
];
