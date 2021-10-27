import logo from "../images/logo.png";
import { MenuIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
const Header = ({ scrollState, setScrollState }) => {
  // states
  const [click, setClick] = useState(true);

  // navbar label-generate function
  const labelGenerator = (name, state) => (
    <li className="no-underline">
      <a
        href={`#${name}`}
        // href={`${scrollState === "top" ? "#" + name + "2" : "#" + name}`}
        className={`text-sm hover:text-blue-600 hover:no-underline 
        text-gray-400
        transition-all duration-200 ease-in-out

${scrollState === "top" && "text-blue-50 hover:text-blue-600"}

        ${state && scrollState === "top" && "hidden "}

        ${
          state &&
          scrollState === "amir" &&
          "border-2 border-blue-500 px-1 py-1   xl:inline-flex rounded-md "
        }
${state && "hover:bg-blue-800 text_white"}

        `}
      >
        {name}
      </a>
    </li>
  );

  // navbar menu click to open / close
  const changeLabel_Direction = () => setClick(!click);

  //   flexible height navbar on scroll
  let listener = null;
  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 20) {
        if (scrollState !== "amir") {
          setScrollState("amir");
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  // hide mobile menu on click
  const clicker = () => setClick(true);

  // main return

  return (
    <div
      className={`
    z-20
    sticky
    top-0
${scrollState === "top" ? "absolute top-0" : "bg-white"}
    w-full
    transition-all duration-500 ease-in-out

    `}
    >
      <div
        className={`flex items-center justify-between px-3 lg:max-w-6xl mx-auto
        transition-all duration-500 ease-in-out
border-b-2
lg:border-none

      ${scrollState === "top" ? "h-24" : "h-12"}`}
      >
        {/* left  */}
        <div
          onClick={() => window.scroll(0, 0)}
          className={`left cursor-pointer 

          transition-all duration-500 ease-in-out

      ${scrollState === "amir" ? "h-8" : ""}`}
        >
          <img src={logo} alt="err" className="h-full w-full" />
        </div>
        {/* right on small to medium screen */}
        <div className="lg:hidden">
          <MenuIcon
            className="h-6  text-blue-700 cursor-pointer mr-4 "
            onClick={changeLabel_Direction}
          />
        </div>

        {/* right on large screen */}
        <div
          className={`hidden lg:inline-flex  
        `}
        >
          <ul
            className={`list-none flex space-x-5 items-center justify-center 
    
          `}
          >
            {labelGenerator("WORK SMART")}
            {labelGenerator("HIRING PROCESS")}
            {labelGenerator("ABOUT")}
            {labelGenerator("SOCIAL MISSION")}
            {labelGenerator("FAQ")}
            {labelGenerator("CONTACT")}
            {labelGenerator("BLOG")}
            {labelGenerator("BECOME A WORKER", "dynamic")}
          </ul>
        </div>
      </div>
      {/* mobile menu */}
      <div
        className={`  
        lg:hidden
        absolute
        w-full
        bg-white
        transform
        text-gray-700
        z-0
        transition-all duration-300 ease-in-out
py-3
        ${click && "-translate-y-96 "}

        `}
      >
        <ul
          className={`

          text-xs
          space-y-2
          list-none
          ml-3
          mt-4
font-semibold    
md:flex
md:space-x-5
md:items-center
md:space-y-0
md:mt-0
          `}
        >
          <li onClick={clicker}>
            <a
              className="mobile_menu"
              href="#WORK SMART"
              // href={`${scrollState === "top" ? "#WORK SMART2" : "#WORK SMART"}`}
            >
              WORK SMART
            </a>
          </li>
          <li className="no-underline" onClick={clicker}>
            <a className="mobile_menu" href="#HIRING PROCESS">
              HIRING PROCESS
            </a>
          </li>
          <li className="no-underline" onClick={clicker}>
            <a className="mobile_menu" href="#ABOUT">
              ABOUT
            </a>
          </li>
          <li className="no-underline" onClick={clicker}>
            <a className="mobile_menu" href="#">
              SOCIAL MISSION
            </a>
          </li>
          <li className="no-underline" onClick={clicker}>
            <a className="mobile_menu" href="#FAQ">
              FAQ
            </a>
          </li>
          <li className="no-underline" onClick={clicker}>
            <a className="mobile_menu" href="#CONTACT">
              CONTACT
            </a>
          </li>
          <li className="no-underline" onClick={clicker}>
            <a className="mobile_menu" href="#">
              BLOG
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
