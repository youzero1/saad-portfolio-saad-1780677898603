import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-brand">
          Saad
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-brand transition">
            Home
          </Link>
          <Link to="/projects" className="text-gray-700 hover:text-brand transition">
            Projects
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-brand transition">
            Contact
          </Link>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">
          <Link to="/" className="block text-gray-700 hover:text-brand" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/projects" className="block text-gray-700 hover:text-brand" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link to="/contact" className="block text-gray-700 hover:text-brand" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
