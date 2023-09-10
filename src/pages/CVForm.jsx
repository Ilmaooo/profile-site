import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDoc, doc, setDoc } from "firebase/firestore";

function CVForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [experiences, setExperiences] = useState([
    { title: "", subtitle: "", description: "", timeRange: "" },
  ]);

  const [educations, setEducations] = useState([
    { school: "", degree: "", fieldOfStudy: "", graduationYear: "" },
  ]);
  const [technicalSkills, setTechnicalSkills] = useState([""]);
  const [softSkills, setSoftSkills] = useState([""]);
  const [languages, setLanguages] = useState([""]);

  const addExperience = () => {
    setExperiences([
      ...experiences,
      { title: "", subtitle: "", description: "", timeRange: "" },
    ]);
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = value;
    setExperiences(updatedExperiences);
  };

  const removeExperience = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  };

  const addEducation = () => {
    setEducations([
      ...educations,
      { school: "", degree: "", fieldOfStudy: "", graduationYear: "" },
    ]);
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducations = [...educations];
    updatedEducations[index][field] = value;
    setEducations(updatedEducations);
  };

  const removeEducation = (index) => {
    const updatedEducations = [...educations];
    updatedEducations.splice(index, 1);
    setEducations(updatedEducations);
  };

  // Add a new technical skill to the skills array
  const addTechnicalSkill = () => {
    setTechnicalSkills([...technicalSkills, ""]);
  };

  // Handle changes in a specific technical skill input field
  const handleSkillChange = (index, value) => {
    const updatedTechnicalSkills = [...technicalSkills];
    updatedTechnicalSkills[index] = value;
    setTechnicalSkills(updatedTechnicalSkills);
  };

  // Remove a technical skill from the skills array
  const removeTechnicalSkill = (index) => {
    const updatedTechnicalSkills = [...technicalSkills];
    updatedTechnicalSkills.splice(index, 1);
    setTechnicalSkills(updatedTechnicalSkills);
  };

  // Add a new SOFT skill to the skills array
  const addSoftSkill = () => {
    setSoftSkills([...softSkills, ""]);
  };

  // Handle changes in a specific SOFT skill input field
  const handleSoftSkillChange = (index, value) => {
    const updatedSoftSkills = [...softSkills];
    updatedSoftSkills[index] = value;
    setSoftSkills(updatedSoftSkills);
  };

  // Remove a SOFT skill from the skills array
  const removeSoftSkill = (index) => {
    const updatedSoftSkills = [...softSkills];
    updatedSoftSkills.splice(index, 1);
    setSoftSkills(updatedSoftSkills);
  };

  // Add a new language
  const addLanguage = () => {
    setLanguages([...languages, ""]);
  };

  // Handle changes in a specific language input field
  const handleLanguagesChange = (index, value) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index] = value;
    setLanguages(updatedLanguages);
  };

  // Remove a langugage
  const removeLanguage = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages.splice(index, 1);
    setLanguages(updatedLanguages);
  };

  //send data to firebase
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const collectionRef = collection(db, "resumes");
      const fullName = e.target.fullName.value;

      const data = {
        fullName: e.target.fullName.value,
        email: e.target.email.value,
        currentPosition: e.target.currentPosition.value,
        phoneNumber: e.target.phoneNumber.value,
        experiences: experiences.map((experience) => ({
          title: experience.title,
          description: experience.description,
          timeRange: experience.timeRange,
        })),
        education: educations.map((education) => ({
          school: education.school,
          degree: education.degree,
          field: education.fieldOfStudy,
          year: education.graduationYear,
        })),
        technicalSkills: technicalSkills,
        softSkills: softSkills,
        languages: languages,
      };

      const docRef = doc(collectionRef, fullName);

      await setDoc(docRef, data);

      const docSnapshot = await getDoc(docRef);
      const docID = docSnapshot.id;
      e.target.reset();
      setSuccessMessage(`Data uploaded successfully! Document ID: ${docID}`);
      setErrorMessage(""); // Clear any previous error message
    } catch (error) {
      console.error("Error submitting the form:", error);
      setErrorMessage("Error uploading data. Please try again.");
      setSuccessMessage(""); // Clear any previous success message
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen min-w-screen  p-0 m-0">
      <form
        onSubmit={handleSubmit}
        className="container bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-[500px] mx-auto my-20"
      >
        {/*personal info*/}
        <div>
          <h1 className="text-[#948E8E] font-medium mb-2 mx-auto uppercase tracking-wide text-base font-[montserrat] ">
            Personal info
          </h1>
          <div className="mb-2">
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              size="small"
              name="fullName"
            />
          </div>
          <div className="mb-2">
            <TextField
              label="E-mail"
              variant="outlined"
              fullWidth
              size="small"
              name="email"
            />
          </div>
          <div className="mb-2">
            <TextField
              label="Current position"
              variant="outlined"
              fullWidth
              size="small"
              name="currentPosition"
            />
          </div>
          <div className="mb-2">
            <TextField
              label="Phone number"
              variant="outlined"
              fullWidth
              size="small"
              name="phoneNumber"
            />
          </div>
        </div>

        {/*work*/}
        <div>
          {experiences.map((experience, index) => (
            <div className="experience-fields" key={index}>
              <h1 className="text-[#948E8E] font-medium mb-2 mx-auto uppercase tracking-wide text-base font-[montserrat] ">
                Work experience
              </h1>
              <div className="mb-2">
                <TextField
                  label="Work Title"
                  variant="outlined"
                  fullWidth
                  name="title"
                  size="small"
                  value={experience.title}
                  onChange={(e) =>
                    handleExperienceChange(index, "title", e.target.value)
                  }
                />
              </div>
              <div className="mb-2">
                <TextField
                  label="Description"
                  variant="outlined"
                  fullWidth
                  multiline
                  name="description"
                  size="small"
                  rows={3}
                  value={experience.description}
                  onChange={(e) =>
                    handleExperienceChange(index, "description", e.target.value)
                  }
                />
              </div>
              <div className="mb-2">
                <TextField
                  label="Time Range"
                  variant="outlined"
                  fullWidth
                  name="timeRange"
                  size="small"
                  value={experience.timeRange}
                  onChange={(e) =>
                    handleExperienceChange(index, "timeRange", e.target.value)
                  }
                />
              </div>
              {index > 0 && (
                <IconButton
                  variant="outlined"
                  size="small"
                  sx={{
                    background: "white",
                    color: "#948E8E",
                    border: "#948E8E",
                  }}
                  onClick={() => removeExperience(index)}
                  aria-label="Delete"
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </div>
          ))}

          <IconButton
            size="small"
            sx={{ color: "#948E8E" }}
            onClick={addExperience}
          >
            <AddIcon />
          </IconButton>
        </div>
        {/* Education */}
        <div className="mb-2">
          <h1 className="text-[#948E8E] font-medium mb-2 mx-auto uppercase tracking-wide text-base font-[montserrat] ">
            Education
          </h1>
          {educations.map((education, index) => (
            <div key={index} className="mb-4">
              <div className="mb-2">
                <TextField
                  label="School/University Name"
                  variant="outlined"
                  fullWidth
                  name="school"
                  size="small"
                  value={education.school}
                  onChange={(e) =>
                    handleEducationChange(index, "school", e.target.value)
                  }
                />
              </div>
              <div className="mb-2">
                <TextField
                  label="Degree"
                  variant="outlined"
                  fullWidth
                  name="degree"
                  size="small"
                  value={education.degree}
                  onChange={(e) =>
                    handleEducationChange(index, "degree", e.target.value)
                  }
                />
              </div>
              <div className="mb-2">
                <TextField
                  label="Field of Study"
                  variant="outlined"
                  fullWidth
                  name="fieldOfStudy"
                  size="small"
                  value={education.fieldOfStudy}
                  onChange={(e) =>
                    handleEducationChange(index, "fieldOfStudy", e.target.value)
                  }
                />
              </div>
              <div className="mb-2">
                <TextField
                  label="Graduation Year"
                  variant="outlined"
                  fullWidth
                  name="graduationYear"
                  size="small"
                  value={education.graduationYear}
                  onChange={(e) =>
                    handleEducationChange(
                      index,
                      "graduationYear",
                      e.target.value
                    )
                  }
                />
              </div>
              {index > 0 && (
                <IconButton
                  variant="outlined"
                  size="small"
                  sx={{
                    background: "white",
                    color: "#948E8E",
                    border: "#948E8E",
                  }}
                  onClick={() => removeEducation(index)}
                  aria-label="Delete"
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </div>
          ))}
          <IconButton
            size="small"
            sx={{ color: "#948E8E" }}
            onClick={addEducation}
          >
            <AddIcon />
          </IconButton>
        </div>
        {/* technical Skills */}
        <div className="mb-2">
          <h1 className="text-[#948E8E] font-medium mb-2 mx-auto uppercase tracking-wide text-base font-[montserrat] ">
            key technical skills
          </h1>
          {technicalSkills.map((technicalSkill, index) => (
            <div key={index} className="mb-2">
              <TextField
                label={`Skill ${index + 1}`}
                variant="outlined"
                fullWidth
                size="small"
                value={technicalSkill}
                onChange={(e) => handleSkillChange(index, e.target.value)}
              />
              {index > 0 && (
                <IconButton
                  variant="outlined"
                  size="small"
                  sx={{
                    background: "white",
                    color: "#948E8E",
                    border: "#948E8E",
                  }}
                  onClick={() => removeTechnicalSkill(index)}
                  aria-label="Delete"
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </div>
          ))}
          <IconButton
            size="small"
            sx={{ color: "#948E8E" }}
            onClick={addTechnicalSkill}
          >
            <AddIcon />
          </IconButton>
        </div>
        {/*soft skills*/}
        <div className="mb-2">
          <h1 className="text-[#948E8E] font-medium mb-2 mx-auto uppercase tracking-wide text-base font-[montserrat] ">
            soft skills
          </h1>
          {softSkills.map((softSkill, index) => (
            <div key={index} className="mb-2">
              <TextField
                label={`Skill ${index + 1}`}
                variant="outlined"
                fullWidth
                size="small"
                value={softSkill}
                onChange={(e) => handleSoftSkillChange(index, e.target.value)}
              />
              {index > 0 && (
                <IconButton
                  variant="outlined"
                  size="small"
                  sx={{
                    background: "white",
                    color: "#948E8E",
                    border: "#948E8E",
                  }}
                  onClick={() => removeSoftSkill(index)}
                  aria-label="Delete"
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </div>
          ))}
          <IconButton
            size="small"
            sx={{ color: "#948E8E" }}
            onClick={addSoftSkill}
          >
            <AddIcon />
          </IconButton>
        </div>
        {/*languages*/}
        <div className="mb-2">
          <h1 className="text-[#948E8E] font-medium mb-2 mx-auto uppercase tracking-wide text-base font-[montserrat] ">
            languages
          </h1>
          {languages.map((language, index) => (
            <div key={index} className="mb-2">
              <TextField
                label={`Language ${index + 1}`}
                variant="outlined"
                fullWidth
                size="small"
                value={language}
                onChange={(e) => handleLanguagesChange(index, e.target.value)}
              />
              {index > 0 && (
                <IconButton
                  variant="outlined"
                  size="small"
                  sx={{
                    background: "white",
                    color: "#948E8E",
                    border: "#948E8E",
                  }}
                  onClick={() => removeLanguage(index)}
                  aria-label="Delete"
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </div>
          ))}
          <IconButton
            size="small"
            sx={{ color: "#948E8E" }}
            onClick={addLanguage}
          >
            <AddIcon />
          </IconButton>
        </div>
        {/*about you */}
        <div className="mb-2">
          <h1 className="text-[#948E8E] font-medium mb-2 mx-auto uppercase tracking-wide text-base font-[montserrat] ">
            tell us about yourself
          </h1>
          <TextField
            label="About you"
            variant="outlined"
            multiline
            rows={3}
            fullWidth
            size="small"
          />
        </div>

        {/* Success/Error Message */}
        {successMessage && (
          <div className="text-green-500 mb-2">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="text-red-500 mb-2">{errorMessage}</div>
        )}

        {/* Loading Indicator */}
        {isLoading && <div className="text-blue-500 mb-2">Uploading...</div>}

        <div className="flex items-center justify-between">
          <Button
            variant="outlined"
            sx={{ background: "#948E8E", color: "white", border: "#948E8E" }}
            type="submit"
          >
            Submit
          </Button>
          <Link to="/">
            <IconButton
              color="primary"
              aria-label="Go Back"
              sx={{ background: "#948E8E", color: "white" }}
            >
              <ArrowBackIcon />
            </IconButton>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default CVForm;
