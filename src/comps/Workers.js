import p1 from "../images/Danshwaraj-Chaudhary.jpg";
import p3 from "../images/Anuk-Shakya.png";
import p2 from "../images/Rama-Regmi.jpg";
const Workers = () => {
  return (
    <div className="my-10 text-center" id="workers">
      <p className="text-4xl  tracking-wide text-gray-600 text-center">
        Meet Our Workers
      </p>
      <div
        className="grid grid-cols-1
      justify-center
      items-center
      lg:grid-cols-3 lg:max-w-6xl mx-auto
      md:max-w-2xl
      text-center
      sm:max-w-xl
      lg:gap-5"
      >
        <Block3
          name="Danshwaraj Chaudhary"
          info="Before I became a worker, my family was in a financial crisis. My father, being an Ex-Army official, had no source of consistent income and could barely support my college fees. After I joined CloudFactory, I have been able to not only finance my education but also support my family for household expenses."
          img={p1}
          position="Nepal Cloud Worker"
        />
        <Block3
          name="Rama Regmi"
          info="

          Before joining CloudFactory, I lacked confidence to do anything. The root was my family problem. Thanks to CloudFactory I discovered my strengths and my ability to support the family boosted my confidence. Now I am able to fund my education as well as support my family members.
          "
          img={p2}
          position="Nepal Cloud Worker"
        />
        <Block3
          name="Anuk Shakya"
          info="Since joining CloudFactory I have started believing in myself and I know I can solve problems creatively. My life has changed without a doubt. I am living with hope and helping others."
          img={p3}
          position="Nepal Cloud Worker"
          classname="mt-16"
        />
      </div>
      <button className="btn border-blue-500 border-2 hover:bg-blue-600 hover:text-white">
        MORE STORIES
      </button>
    </div>
  );
};

export default Workers;

const Block3 = ({ name, info, img, position, classname }) => {
  return (
    <div
      className="
      lg:shadow-md
      border-b
      border-gray-300
      lg:border-none
      py-9
    flex items-center justify-center flex-col my-8 
    text-gray-600
    "
    >
      <div className="">
        <img src={img} alt="err" className={`rounded-full `} />
      </div>
      <div className="content flex flex-col items-center">
        <small className="lg:w-full text-base text-md text-gray-600 my-5 px-5 mx-auto text-justify">
          {info}
        </small>
        <p
          className={`text-blue-600 font-semibold text-lg uppercase my-2 ${classname}`}
        >
          {name}
        </p>
        <p className="">{position}</p>
      </div>
    </div>
  );
};
