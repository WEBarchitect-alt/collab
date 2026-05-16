import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Register", path: "/register" },
    { name: "Login", path: "/login" },
  ];

  return (
    <div className="absolute top-0 left-0 w-full z-50 pt-4">
      <nav className="relative flex items-center justify-between border border-slate-800 mx-4 px-6 py-4 rounded-full text-white text-sm bg-rose-300/50 backdrop-blur-lg">

        {/* Logo */}
        <Link to="/">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
            <circle cx="16.001" cy="4.706" r="4.706" fill="#D9D9D9" />
            <circle cx="16.001" cy="27.294" r="4.706" fill="#D9D9D9" />
            <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
          </svg>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="hover:text-black transition duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
            Contact
          </button>

          <Link to="/register">
            <button className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-20 left-0 w-full bg-black rounded-2xl py-6 flex-col items-center gap-4 text-base transition-all duration-300 md:hidden ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="hover:text-indigo-500"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
            Contact
          </button>

          <Link to="/register">
            <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;