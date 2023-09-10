import { Link } from "react-router-dom";
function CreateCvButton() {
  return (
    <Link to="/add-cv-data">
      <button className=" w-32  rounded-xl py-1 px-3 font-[montserrat] font-medium border  border-[#979191] bg-white text-[#979191] tracking-wide md:mr-80">
        Create Cv
      </button>
    </Link>
  );
}

export default CreateCvButton;
