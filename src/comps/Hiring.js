import app from "../images/fb_laptop_normal.png";
import app_hover from "../images/fb_laptop_hover.png";
import assesment from "../images/assessment.png";
import assesment_hover from "../images/assessment_hover.png";
import team from "../images/team_normal.png";
import team_hover from "../images/team_hover.png";
import train from "../images/training.png";
import train_hover from "../images/training_hover.png";
import start from "../images/enrolled.png";
import start_hover from "../images/enrolled_hover.png";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { useWindowSize } from "../c_hooks/useWindowSize";

const Hiring = ({ scrollState }) => {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, [scrollState]);
  return (
    <div
      id="HIRING PROCESS"
      className="my_color text-gray-600 text-center py-10"
    >
      <p className="text-4xl tracking-wide">Our Hiring Process</p>
      <div
        className="
       max-w-5xl mx-auto
       flex-col
       lg:flex-row
      flex items-center justify-center
      my-5
      lg:my-0
        "
      >
        <Block2
          Main_text="APPLICATION"
          info="Fill out the application form to apply"
          img={app}
          img2={app_hover}
          number="1"
          color="text-yellow-600"
        />
        <hr className="w-full bg-green-600 h-1 hidden lg:block" />
        <Block2
          Main_text="ONBOARDING ASSESSMENT"
          info="Take our onboarding test to assess your raw skills"
          img={team}
          img2={team_hover}
          number="2"
          color="text-red-600"
          classname="mt-10"
        />
        <hr className="w-full bg-green-600 h-1 hidden lg:block" />

        <Block2
          Main_text="ASSESSMENT AND INTERVIEW"
          info="Once you’ve passed the test, we’ll invite you for an interview"
          img={assesment}
          img2={assesment_hover}
          number="3"
          color="text-yellow-600"
          classname="mt-16"
        />
        <hr className="w-full bg-green-600 h-1 hidden lg:block" />

        <Block2
          Main_text="TRAINING"
          info="Receive hands-on training and grow your skillset for a new digital age"
          img={train}
          img2={train_hover}
          number="4"
          color="text-blue-600"
          classname="mt-7"
        />
        <hr className="w-full bg-green-600 h-1 hidden lg:block" />

        <Block2
          Main_text="START WORKING"
          info="You’re ready to go! Log on to the CloudFactory platform and start earning!"
          img={start}
          img2={start_hover}
          number="5"
          color="text-green-600"
          classname="mt-20"
        />
      </div>
      {/* apply */}
      <div>
        <p className="text-3xl mt-12 lg:px-10 px-2">
          Fill out the application form to become a cloud worker
        </p>
        {/* <button
          className="btn text-white rounded-sm
        my-5 bg-blue-600"
        >
          APPLY NOW
          <span>
            <ChevronRightIcon />
          </span>
        </button> */}

        <div
          className="btn text-white rounded-md
          my-5 bg-blue-600 flex items-center  
          justify-center
          space-x-2 
          mx-auto
          w-52
          px-0
          
          transition-all duration-300 ease-in-out"
        >
          <span className="">APPLY NOW</span>
          <ChevronRightIcon className="h-5  " />
        </div>
      </div>
    </div>
  );
};

export default Hiring;

const Block2 = ({ Main_text, info, img, img2, number, classname, color }) => {
  const [hover, sethover] = useState(false);

  const size = useWindowSize();

  return (
    <div
      onMouseOver={() => sethover(true)}
      onMouseOut={() => sethover(false)}
      className="
      transition-all 
      duration-400
      ease-in
    flex
    items-center
    flex-col
    cursor-pointer
    group
    transform
    md:hover:scale-105
    "
    >
      <div
        className={`
        bg-yellow-600
        md:bg-transparent
        md:group-hover:bg-red-700 px-7 py-7 rounded-full
        ${classname}
        `}
        data-aos="fade-up"
      >
        <div
          style={{
            backgroundImage: `url(${hover || size.width < 770 ? img2 : img})`,
            // backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            height: "60px",
            width: "60px",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
          className=""
        />
      </div>
      <div
        className=" flex 
        items-center flex-col"
        data-aos="fade-up"
      >
        <p className="border-2 my-8 flex items-center justify-center  text-3xl w-14 h-14 rounded-full border-gray-400 group-hover:text-green-500">
          {number}
        </p>
        <p className=" group-hover:text-gray-800 text-blue-600 font-semibold leading-tight text-lg uppercase my-2 ">
          {Main_text}
        </p>

        <small
          className={`
        max-w-xs  lg:w-full  text-base lg:mx-auto
    
        group-hover:${color}
        `}
        >
          {info}
        </small>
      </div>
    </div>
  );
};
