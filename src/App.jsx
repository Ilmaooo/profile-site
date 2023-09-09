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
  return (
    <div
      id="report"
      className="object-cover bg-white relative w-full sm:max-w-screen-xl mx-auto box-border flex flex-col h-auto my-10 px-5 "
    >
      <Fade cascade direction="top" duration={1000}>
        <Header />
      </Fade>
      <Fade cascade direction="top" duration={1000} delay={200}>
        <Button />
      </Fade>
      <div className="flex w-full sm:max-w-screen-xl mx-auto ">
        <div className="w-2/3">
          <Fade cascade direction="top" duration={1000} delay={400}>
            <h2 className="text-[#948E8E] uppercase text-xl sm:text-2xl md:text-3xl mt-10 sm:mt-20 tracking-wide mb-5 font-medium font-[montserrat]">
              Work experience
            </h2>
          </Fade>
          <Fade cascade direction="top" duration={1000} delay={600}>
            <ul className="list-none">
              <li>
                <WorkExperience />
              </li>
            </ul>
          </Fade>

          <Fade cascade direction="top" duration={1000} delay={800}>
            <h2 className="text-[#948E8E] uppercase text-xl sm:text-2xl md:text-3xl mt-10 sm:mt-20 tracking-wide mb-5 font-medium font-[montserrat]">
              Education
            </h2>
          </Fade>
          <Fade cascade direction="top" duration={1000} delay={1000}>
            <ul className="list-none">
              <li>
                <Education />
              </li>
            </ul>
          </Fade>
        </div>

        <div className="w-1/3 pl-4 sm:pl-20">
          <Fade cascade direction="top" duration={1000} delay={1200}>
            <Contact />
          </Fade>
          <Fade cascade direction="top" duration={1000} delay={1400}>
            <AboutMe />
          </Fade>
          <Fade cascade direction="top" duration={1000} delay={1600}>
            <Skills />
          </Fade>
          <Fade cascade direction="top" duration={1000} delay={1800}>
            <Languages />
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default App;
