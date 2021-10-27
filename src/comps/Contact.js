import contact_img from "../images/contact_back.jpg";
import con_cloud from "../images/cloud.png";
import {
  PhoneIcon,
  MailIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";

const Contact = () => {
  return (
    <div className="my-10 my_color w-full" id="CONTACT">
      <div
        className="h-screen w-full bg-center bg-no-repeat object-cover flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${contact_img})` }}
      >
        <p className="text-4xl text-gray-700 font-extralight mt-20 lg:mt-0">
          Contact Us
        </p>
        {/* box combo */}
        <div className="my-10 w-full flex flex-col lg:flex-row justify-center lg:items-center items-center">
          {/* box1 */}
          <div className="max-w-md  w-full ">
            <div
              className="flex flex-col items-center justify-center
        mx-3
        lg:mx-0
          bg-white h-60 "
            >
              <img
                src={con_cloud}
                alt="err"
                className="object-contain h-24 w-24"
              />
              <p className="text-lg text-center text-gray-500 font-extralight">
                CloudFactory Nepal
              </p>
            </div>
          </div>
          {/* box2 */}
          <div className="max-w-md  w-full">
            <div
              className="flex flex-col justify-center
        mx-3
        lg:mx-0
        pl-10
        space-y-1
          bg-blue-700 h-60 "
            >
              <Info Icon={PhoneIcon} title="+977 01-5592701" />
              <Info Icon={MailIcon} title="hello@cloudfactory.com" />
              <Info
                Icon={LocationMarkerIcon}
                title="Bhaisepati Lalitpur, Nepal"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

const Info = ({ Icon, title }) => (
  <div className="flex text-white items-center space-x-3 ">
    <Icon className="h-5 " /> <span className="">{title}</span>
  </div>
);
