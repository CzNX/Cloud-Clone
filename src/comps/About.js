import about from "../images/About-us-cloudfactory-nepal.jpg";
const About = () => {
  return (
    <div className="my-10 w-full" id="ABOUT">
      <div className="relative w-full ">
        <img
          src={about}
          alt="err"
          className="
          filter brightness-50
        object-cover h-screen w-full"
        />
        <p
          className="absolute top-14 left-1/4 transform 
        md:left-1/3
        sm:translate-x-6
        lg:left-2/4
        lg:-translate-x-32
        text-center
        -translate-x-10 text-white text-4xl font-extralight"
        >
          About CloudFactory
        </p>

        <div
          className="bg-blue-600 opacity-80 absolute bottom-24  px-5 py-9  mx-5
        lg:mx-14
        w-11/12
        
        "
        >
          <p
            className="text-white text-justify
          max-w-5xl
        
        
          "
          >
            CloudFactory is changing the way the world works by providing an
            on-demand, digital workforce for scaling critical business processes
            in the cloud. We’re also on a mission to create meaningful work for
            as many people as possible.
          </p>
          <p className=" my-2 inline-block text-blue-900 cursor-pointer">
            Learn More
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
