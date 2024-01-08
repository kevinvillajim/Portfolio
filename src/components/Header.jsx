function Header() {
  return (
    <div className="w-screen h-[6rem] bg-[black] flex items-center justify-between px-[10rem] mb-[0.5rem]">
      <div className="w-[5rem] text-[white]">
        <img
          src="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/logo.png"
          className=" w-[85%]"
          alt="logo"
        />
      </div>
      <div>
        <ul className="text-[white] text-[18px] flex direction-row space-x-10">
          <li>About</li>
          <li>Code Portfolio</li>
          <li>Design Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
