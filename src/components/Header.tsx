import { Link } from "react-router-dom";
import { ShieldCheck, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-green-800 text-white text-sm py-1 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <span>Papua New Guinea National Agriculture Quarantine & Inspection Authority</span>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-yellow-400">Careers</a>
            <Link to="/contact" className="hover:text-yellow-400">Contact Us</Link>
            <a href="#" className="hover:text-yellow-400">Staff Portal</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <div className="bg-green-700 p-2 rounded-full text-white">
            <ShieldCheck size={32} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-green-800 leading-tight">PNG Biosecurity</h1>
            <h2 className="text-sm text-gray-600 font-medium">Authority</h2>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700 items-center">
          <Link to="/" className="hover:text-green-700 transition-colors">Home</Link>
          
          {/* About Us Dropdown */}
          <div className="relative group">
            <Link to="/about" className="hover:text-green-700 transition-colors flex items-center py-2">
              About Us <ChevronDown size={16} className="ml-1" />
            </Link>
            <div className="absolute left-0 top-full w-48 bg-white border border-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link to="/about" className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 border-b border-gray-50">About NAQIA</Link>
              <Link to="/contact" className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">Contact Us</Link>
            </div>
          </div>

          <Link to="/services" className="hover:text-green-700 transition-colors">Services</Link>
          <Link to="/import-export" className="hover:text-green-700 transition-colors">Import & Export</Link>
          <Link to="/news" className="hover:text-green-700 transition-colors">News & Alerts</Link>
          
          <div className="flex items-center space-x-3 ml-4 border-l pl-6 border-gray-200">
            <Link to="/login" className="text-green-800 hover:text-green-600 font-bold transition-colors">
              Login
            </Link>
            <Link to="/register" className="bg-yellow-500 hover:bg-yellow-400 text-green-900 px-5 py-2 rounded-md font-bold transition-colors shadow-sm">
              Register
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4 space-y-4 shadow-inner">
          <Link to="/" className="block text-gray-700 hover:text-green-700 font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
          
          {/* Mobile About Us Dropdown */}
          <div>
            <button 
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              className="flex items-center justify-between w-full text-gray-700 hover:text-green-700 font-medium"
            >
              About Us <ChevronDown size={16} className={`transform transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
            </button>
            {isAboutOpen && (
              <div className="pl-4 mt-2 space-y-3 border-l-2 border-green-100">
                <Link to="/about" className="block text-gray-600 hover:text-green-700 text-sm" onClick={() => setIsMenuOpen(false)}>About NAQIA</Link>
                <Link to="/contact" className="block text-gray-600 hover:text-green-700 text-sm" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
              </div>
            )}
          </div>

          <Link to="/services" className="block text-gray-700 hover:text-green-700 font-medium" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/import-export" className="block text-gray-700 hover:text-green-700 font-medium" onClick={() => setIsMenuOpen(false)}>Import & Export</Link>
          <Link to="/news" className="block text-gray-700 hover:text-green-700 font-medium" onClick={() => setIsMenuOpen(false)}>News & Alerts</Link>
          <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
            <Link to="/login" className="block text-green-800 text-center font-bold py-2 rounded-md border border-green-800" onClick={() => setIsMenuOpen(false)}>Login</Link>
            <Link to="/register" className="block bg-yellow-500 text-green-900 text-center font-bold py-2 rounded-md" onClick={() => setIsMenuOpen(false)}>Register</Link>
          </div>
        </div>
      )}
    </header>
  );
}
