function Skills({ technicalSkills, softSkills }) {
  return (
    <div>
      <div>
        <h2 className="text-[#948E8E] uppercase text-xl sm:text-2xl  mt-10  tracking-wide mb-5 font-medium font-[montserrat]">
          key technical skills
        </h2>
        <ul className="text-[#484545] font-medium">
          {technicalSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-[#948E8E] uppercase text-xl sm:text-2xl  mt-10  tracking-wide mb-5 font-medium font-[montserrat]">
          soft skills
        </h2>
        <ul className="text-[#484545] font-medium">
          {softSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
