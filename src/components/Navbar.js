import logo from "../images/logo.png"
function Navbar() {
  return (
    <header className="flex flex-wrap items-center justify-center w-full px-6 py-2 bg-gray-darker md:w-10/12 lg:px-4 lg:py-3">
      <img src={logo} style={{ verticalAlign: "middle" }} className="pr-2" />
      <h1 className="hidden text-xl font-medium text-white md:inline xl:text-2xl">
        poutingemoji's Song Timeline
      </h1>
    </header>
  );
}

export default Navbar;