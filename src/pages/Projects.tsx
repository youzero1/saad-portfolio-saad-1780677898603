import type { Project } from "@/types";

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory and payment integration.",
    tech: ["React", "Node.js", "Stripe", "MongoDB"],
    link: "https://example.com/ecommerce",
  },
  {
    title: "Task Manager",
    description: "A collaborative task management app with drag-and-drop, real-time updates, and team workflows.",
    tech: ["React", "Socket.io", "Express", "PostgreSQL"],
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays forecasts and historical data using OpenWeatherMap API.",
    tech: ["TypeScript", "Chart.js", "API"],
    link: "https://example.com/weather",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                Live Demo →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
