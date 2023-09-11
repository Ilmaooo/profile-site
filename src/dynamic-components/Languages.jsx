function Languages({ languages }) {
  return (
    <div>
      <h2 className="text-[#948E8E] uppercase text-xl sm:text-2xl mt-10  tracking-wide mb-5 font-medium font-[montserrat]">
        languages
      </h2>
      <ul className="text-[#484545] font-medium">
        {languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
    </div>
  );
}

export default Languages;
