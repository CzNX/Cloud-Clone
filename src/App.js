import { useState } from "react";
import About from "./comps/About";
import Banner from "./comps/Banner";
import Benefits from "./comps/Benefits";
import Contact from "./comps/Contact";
import Faq from "./comps/Faq";
import Header from "./comps/Header";
import Hiring from "./comps/Hiring";
import Workers from "./comps/Workers";
import mini_banner from "./images/cloudfactory-clients.webp";

const App = () => {
  const [scrollState, setScrollState] = useState("top");

  return (
    <div className="relative">
      {/* header */}
      <Header scrollState={scrollState} setScrollState={setScrollState} />

      {/* Banner */}
      <Banner scrollState={scrollState} setScrollState={setScrollState} />

      {/* mini_banner */}
      <div
        className={`
        max-w-7xl
        px-16
        mx-auto
        relative hidden lg:block ${
          scrollState === "top" ? "mini_banner " : ""
        } `}
      >
        <p className="text-gray-700 mt-3 uppercase">Trusted By</p>
        <img src={mini_banner} alt="" />
      </div>

      {/* Benefits */}
      <Benefits scrollState={scrollState} />

      {/* Hiring */}
      <Hiring scrollState={scrollState} />

      {/* workers */}
      <Workers />

      {/* About */}
      <About />

      {/* Faqs */}
      <Faq />

      {/* Contact us*/}
      <Contact />
    </div>
  );
};

export default App;
