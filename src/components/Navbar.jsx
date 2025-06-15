import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="px-4 lg:px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          NexoNite
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`transition-colors ${
              isActive("/")
                ? "text-indigo-600 font-semibold"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Home
          </Link>
          <Link
            to="/templates"
            className={`transition-colors ${
              isActive("/templates")
                ? "text-indigo-600 font-semibold"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Templates
          </Link>
          <Link
            to="/portfolio"
            className={`transition-colors ${
              isActive("/portfolio")
                ? "text-indigo-600 font-semibold"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Portfolio
          </Link>
          <Link
            to="/about-us"
            className={`transition-colors ${
              isActive("/about-us")
                ? "text-indigo-600 font-semibold"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            About Us
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="hidden md:block px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
            Contact Us
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t">
          <nav className="flex flex-col space-y-4 pt-4">
            <Link
              to="/"
              className={`transition-colors ${
                isActive("/")
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Home
            </Link>
            <Link
              to="/templates"
              className={`transition-colors ${
                isActive("/templates")
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Templates
            </Link>
            <Link
              to="/portfolio"
              className={`transition-colors ${
                isActive("/portfolio")
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/about-us"
              className={`transition-colors ${
                isActive("/about-us")
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              About Us
            </Link>

            <button className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors w-fit">
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
