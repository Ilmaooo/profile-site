function Header({ fullName, currentPosition }) {
  return (
    <header>
      <div>
        <h1 className="text-[#948E8E] font-medium mb-2 mt-0 uppercase tracking-wide ml-[-0.02em] text-8xl font-[montserrat] ">
          {fullName}
        </h1>
        <h2 className="text-gray-700 text-3xl font-semibold mb-0">
          {currentPosition}
        </h2>
      </div>
    </header>
  );
}

export default Header;
