import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Header from "./components/Header";
import Button from "./components/Button";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Languages from "./components/Languages";

function App() {
  const [animateOnLoad, setAnimateOnLoad] = useState(true);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimateOnLoad(false);
    }, 1000);

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <div className="object-cover bg-white relative w-full sm:max-w-screen-xl mx-auto box-border flex flex-col h-auto my-10 px-5 py-5 sm:px-11 sm:py-11">
      <Fade cascade direction="top" duration={2000} triggerOnce={animateOnLoad}>
        <Header />
      </Fade>
      <Fade
        cascade
        direction="top"
        duration={1000}
        delay={200}
        triggerOnce={animateOnLoad}
      >
        <Button />
      </Fade>
      <div className="flex w-full sm:max-w-screen-xl mx-auto ">
        <div className="w-2/3">
          <Fade
            cascade
            direction="top"
            duration={1500}
            delay={400}
            triggerOnce={animateOnLoad}
          >
            <h2 className="text-[#948E8E] uppercase text-xl sm:text-2xl mt-20 tracking-wide mb-5 font-medium font-[montserrat]">
              Work experience
            </h2>
          </Fade>
          <Fade
            cascade
            direction="top"
            duration={1400}
            delay={600}
            triggerOnce={animateOnLoad}
          >
            <ul className="list-none">
              <li>
                <WorkExperience />
              </li>
            </ul>
          </Fade>

          <Fade
            cascade
            direction="top"
            duration={1300}
            delay={500}
            triggerOnce={animateOnLoad}
          >
            <h2 className="text-[#948E8E] uppercase text-xl sm:text-2xl mt-10  tracking-wide mb-5 font-medium font-[montserrat]">
              Education
            </h2>
          </Fade>
          <Fade
            cascade
            direction="top"
            duration={1200}
            delay={1000}
            triggerOnce={animateOnLoad}
          >
            <ul className="list-none">
              <li>
                <Education />
              </li>
            </ul>
          </Fade>
        </div>

        <div className="w-1/3 pl-4 sm:pl-20">
          <Fade
            cascade
            direction="top"
            duration={1000}
            delay={1200}
            triggerOnce={animateOnLoad}
          >
            <Contact />
          </Fade>
          <Fade
            cascade
            direction="top"
            duration={1000}
            delay={1400}
            triggerOnce={animateOnLoad}
          >
            <AboutMe />
          </Fade>
          <Fade
            cascade
            direction="top"
            duration={1000}
            delay={1500}
            triggerOnce={animateOnLoad}
          >
            <Skills />
          </Fade>
          <Fade
            cascade
            direction="top"
            duration={1000}
            triggerOnce={animateOnLoad}
          >
            <Languages />
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default App;
