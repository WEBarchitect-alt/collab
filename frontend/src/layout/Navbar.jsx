import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-wide cursor-pointer">
          Cafe
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Menu</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white hover:text-black transition">
            Reserve
          </button>
          <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition">
            Order Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <button className="mt-2 px-4 py-2 border border-white/20 rounded-lg">
            Reserve
          </button>
          <button className="px-4 py-2 bg-white text-black rounded-lg">
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;