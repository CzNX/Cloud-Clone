import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Faqs } from "../data";

const Faq = () => {
  return (
    <div id="FAQ" className="my_color text-gray-600 my-5 py-20">
      <p className="text-4xl text-center font-extralight tracking-wide">
        Frequently Asked Questions
      </p>
      {/* faqs */}
      <div
        className="my-10 space-y-5 px-5 md:grid md:grid-cols-2 lg:max-w-4xl mx-auto lg:gap-5 
      lg:space-y-0
      
      "
      >
        {Faqs.map((item, index) => (
          <SingleFaq q={item.q} a={item.a} i={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Faq;

const SingleFaq = ({ q, a, i }) => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="group">
      <div
        className="flex  items-center  space-x-3 cursor-pointer "
        onClick={() => toggle(i)}
      >
        <QuestionMarkCircleIcon
          className="h-5   self-start 
        
        group-hover:text-green-500"
        />
        <span className="flex-1">{q}</span>
      </div>
      <p
        className={`text-sm px-10 max-h-0 
        overflow-hidden
        transition-all duration-300 ease-in-out
        lg:px-0
        lg:pl-10
        text-justify: ;


      ${
        selected === i &&
        "h-auto max-h-screen  transition-all duration-300 ease-in-out"
      }
      `}
      >
        {a}
      </p>
    </div>
  );
};
