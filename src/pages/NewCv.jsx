import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Header from "../dynamic-components/Header";
import Button from "../components/Button";
import WorkExperience from "../dynamic-components/WorkExperience";
import Education from "../dynamic-components/Education";
import Contact from "../dynamic-components/Contact";
import AboutMe from "../dynamic-components/AboutMe";
import Skills from "../dynamic-components/Skills";
import Languages from "../dynamic-components/Languages";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

function NewCv() {
  const { docID } = useParams();
  const [animateOnLoad, setAnimateOnLoad] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Function to fetch data based on the document ID
    const fetchData = async () => {
      try {
        const docRef = doc(db, "resumes", docID); //
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          setData(docSnapshot.data());
          console.log("docsnap:", docSnapshot);
        } else {
          console.error("Document does not exist! docID:", docID);
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchData();
    console.log("docID:", docID);
  }, [docID]);

  return (
    <div className="object-cover bg-white relative w-full sm:max-w-screen-xl mx-auto box-border flex flex-col h-auto my-10 px-5 py-5 sm:px-11 sm:py-11">
      <Fade cascade direction="top" duration={2000} triggerOnce={animateOnLoad}>
        <Header
          fullName={data && data.fullName}
          currentPosition={data && data.currentPosition}
        />
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
              {data &&
                data.experiences.map((experience, index) => (
                  <li key={index}>
                    <WorkExperience
                      company={experience.company}
                      title={experience.title}
                      description={experience.description}
                      timeRange={experience.timeRange}
                    />
                  </li>
                ))}
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
              {data && data.education ? (
                data.education.map((education, index) => (
                  <li key={index}>
                    <Education
                      school={education.school}
                      degree={education.degree}
                      field={education.field}
                      year={education.year}
                    />
                  </li>
                ))
              ) : (
                <p>No education data available.</p>
              )}
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
            <Contact
              email={data && data.email}
              phoneNumber={data && data.phoneNumber}
            />
          </Fade>
          <Fade
            cascade
            direction="top"
            duration={1000}
            delay={1400}
            triggerOnce={animateOnLoad}
          >
            <AboutMe about={data && data.about} />
          </Fade>
          <Fade
            cascade
            direction="top"
            duration={1000}
            delay={1500}
            triggerOnce={animateOnLoad}
          >
            {data && data.softSkills && data.technicalSkills ? (
              <Skills
                technicalSkills={data.technicalSkills}
                softSkills={data.softSkills}
              />
            ) : (
              <p>No skills data available.</p>
            )}
          </Fade>
          <Fade
            cascade
            direction="top"
            duration={1000}
            triggerOnce={animateOnLoad}
          >
            {data && data.languages ? (
              <Languages languages={data.languages} />
            ) : (
              <p>No languages available.</p>
            )}
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default NewCv;
