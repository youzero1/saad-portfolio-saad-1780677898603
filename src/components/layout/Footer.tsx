import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-gray-400">© {new Date().getFullYear()} Saad. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://github.com/saad" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/saad" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:saad@example.com" className="hover:text-blue-400 transition">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
