import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";

import DotGroup from "./components/DotGroup";
import Landing from "./components/Landing";
import LineGradient from "./components/shared/LineGradient";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <div id="section" className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}

        <Landing setSelectedPage={setSelectedPage} />
      </div>

      <LineGradient />

      <div id="section" className="w-5/6 mx-auto 2xl:h-full">
        <MySkills setSelectedPage={setSelectedPage} />
      </div>

      <LineGradient />

      <div id="section" className="w-5/6 mx-auto">
        <Projects setSelectedPage={setSelectedPage} />
      </div>

      <LineGradient />

      <div id="section" className="w-5/6 mx-auto 2xl:h-full">
        <Testimonials />
      </div>

      <LineGradient />

      <div id="section" className="w-5/6 mx-auto">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
