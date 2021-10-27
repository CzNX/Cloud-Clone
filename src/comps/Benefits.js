import reg from "../images/free_registration.jpg";
import wany from "../images/work_anytime.jpg";
import work from "../images/work.jpg";
import pay from "../images/payment.jpg";
import change from "../images/change.jpg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Benefits = ({ scrollState }) => {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, [scrollState]);

  return (
    <div
      id="WORK SMART"
      className={` text-gray-600 text-center  my-10 
${scrollState === "top" ? "invisible mt-60" : "mt-20"}
      z-0
    `}
    >
      <p className="text-4xl  tracking-wide">CloudFactory Worker Benefits</p>
      <div
        className="flex items-center justify-center flex-col
      lg:flex-row
      lg:flex-wrap
      lg:gap-x-40
      "
      >
        <Block
          Main_text="Free registration"
          info="Sign up, take the test and see if you have what it takes to join CloudFactory."
          img={reg}
        />
        <Block
          Main_text="WORK FROM ANYWHERE"
          info="If you’ve got the skills, all you need is a computer, web browser and reliable Internet access to work for CloudFactory."
          img={work}
        />
        <Block
          Main_text="WORK ANYTIME"
          info="Work when it’s most convenient for you. Perfect for students and those with family obligations."
          img={wany}
        />
        <Block
          Main_text="TIMELY PAYMENT"
          info="Our cloud workers are paid on a weekly basis via direct deposit."
          img={pay}
        />
        <Block
          Main_text="BE THE CHANGE"
          info="Develop personal leadership skills that will help you serve your community and the global economy."
          img={change}
        />
      </div>
    </div>
  );
};

export default Benefits;

const Block = ({ Main_text, info, img }) => {
  return (
    <div
      className="
      transition-transform 
      duration-400
      ease-in
    lg:w-2/12
    flex items-center justify-center flex-col my-8 
    cursor-pointer
    transform
    hover:scale-110
    "
    >
      <div className="" data-aos="fade-up">
        <img src={img} alt="" />
      </div>
      <div className="content flex flex-col" data-aos="fade-up">
        <p className="text-yellow-400 font-semibold text-lg uppercase my-2">
          {Main_text}
        </p>
        <small className=" max-w-xs lg:w-full text-base lg:mx-auto">
          {info}
        </small>
      </div>
    </div>
  );
};
