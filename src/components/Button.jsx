function Button() {
  const generatePDF = () => {
    window.print();
  };
  return (
    <button
      onClick={generatePDF}
      className="absolute top-10 right-10 rounded-xl py-1 px-2 font-[montserrat] font-medium border-solid border-[#979191] bg-[#979191] text-white resize-block transition duration-400ms"
    >
      Print Cv
    </button>
  );
}

export default Button;
