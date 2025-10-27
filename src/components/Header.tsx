import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#f4acb7] w-full shadow-md">
      <div className=" flex justify-between items-center py-4 px-6">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="text-2xl font-bold text-black hover:text-black"
        >
          Shorttt
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center gap-6 font-semibold text-black">
          <Link
            to="/"
            className="text-black hover:text-black hover:font-extrabold transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-black hover:text-black hover:font-extrabold transition-all duration-300"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
