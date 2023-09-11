function AboutMe({ about }) {
  return (
    <div>
      <h2 className="text-[#948E8E] uppercase text-xl sm:text-2xl  mt-10  tracking-wide mb-5 font-medium font-[montserrat]">
        About me
      </h2>
      <p className="font-normal text-[#484545] text-sm">{about}</p>
    </div>
  );
}

export default AboutMe;
