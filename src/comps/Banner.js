import banner_logo from "../images/cf-nepal-banner.jpg";
import { PlayIcon, ChevronDownIcon } from "@heroicons/react/solid";

const Banner = ({ scrollState, setScrollState }) => {
  return (
    <div
      className={`
      z-10
w-full
    ${scrollState === "top" ? "absolute top-24  lg:top-0" : "relative"}`}
    >
      {/* image comp */}
      <div className="h-full w-full relative ">
        <img
          src={banner_logo}
          alt="err"
          className=" w-full h-full image object-cover"
        />
        {/* overlay */}
        <div
          className="overlay absolute   flex 
        text-center
        w-full
        top-0
        px-3
        flex-col items-center my-28 text-white"
        >
          <p className="text-3xl lg:text-5xl lg:max-w-2xl lg:leading-relaxed font-light">
            Work online and gain skills for the digital age.
          </p>
          <p className="text-md leading-relaxed mt-3 max-w-sm lg:max-w-2xl lg:text-lg">
            CloudFactory offers flexible, part-time online work as well as
          </p>
          <p className="text-md">
            an opportunity to positively impact your community
          </p>
          <p className="text-md leading-relaxed ">
            {" "}
            while contributing to the global economy.
          </p>
          <div
            className="btns flex flex-col sm:flex-row
          items-center sm:space-y-0 sm:space-x-4 space-y-4 my-10
          sm:flex-wrap
          "
          >
            <div
              className="btn flex items-center  space-x-2 
              transition-all duration-300 ease-in-out
              
"
            >
              <PlayIcon className="h-5  " />
              <span className="flex-1">Watch Video</span>
            </div>
            <button
              className="btn 
              transition-all duration-300 ease-in-out
              
 hover:bg-green-700 "
            >
              Become a Worker
            </button>
            <a
              href="#WORK SMART"
              // href={`${scrollState === "top" ? "#WORK SMART2" : "#WORK SMART"}`}
              className="w-full"
            >
              <ChevronDownIcon
                className=" 
              transition-transform duration-300 ease-in-out
              transform
              translate-y-5
              -translate-x-10
            hover:translate-y-10
            hidden  sm:inline-flex h-16 w-full cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
