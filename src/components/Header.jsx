function Header() {
  return (
    <header>
      <div>
        <h1 className="text-[#948E8E] font-medium mb-2 mt-0 uppercase tracking-wide ml-[-0.02em] text-8xl font-[montserrat] ">
          john
          <br className="lg:hidden" /> {/* Line break for smaller screens */}
          doe
        </h1>
        <h2 className="text-gray-700 text-3xl font-semibold mb-0">
          Product designer and UI/UX Engineer
        </h2>
      </div>
    </header>
  );
}

export default Header;
