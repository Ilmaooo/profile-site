function Button() {
  const generatePDF = () => {
    window.print();
  };

  return (
    <button
      onClick={generatePDF}
      className="absolute top-20 right-10 rounded-xl py-1 px-3 font-[montserrat] font-medium border-solid border-[#979191] bg-[#979191] text-white tracking-wide md:mr-80"
    >
      Print Cv
    </button>
  );
}

export default Button;
