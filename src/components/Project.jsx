




import { useState } from "react";
import Container from "../components/Container";

const projects = [
  {
    id: 1,
    title: "Luxury Living Room",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 2,
    title: "Modern Kitchen Setup",
    category: "Modular Kitchen",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  },
  {
    id: 3,
    title: "Full Home Renovation",
    category: "Renovation",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e",
  },
  {
    id: 4,
    title: "Bedroom Interior",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
  },
  {
    id: 5,
    title: "False Ceiling Design",
    category: "Ceiling",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",
  },
  {
    id: 6,
    title: "Office Interior",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
  },
];



const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">
            Our Recent Projects
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 sm:h-60 object-cover"
              />

              {/* CONTENT (VISIBLE ON MOBILE) */}
              <div className="p-4">
                <span className="text-[#d4af37] text-sm">
                  {project.category}
                </span>

                <h3 className="text-gray-900 font-semibold mt-1">
                  {project.title}
                </h3>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-3 bg-[#d4af37] text-white px-4 py-2 rounded-md text-sm"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-4 sm:p-6 relative">
            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-500 text-xl"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 sm:h-56 object-cover rounded-lg"
            />

            {/* Content */}
            <h3 className="text-lg sm:text-xl font-bold mt-4">
              {selectedProject.title}
            </h3>

            <p className="text-sm text-[#d4af37]">{selectedProject.category}</p>

            <p className="text-gray-600 mt-2 text-sm">
              {selectedProject.description ||
                "High-quality interior project completed with premium materials and expert craftsmanship."}
            </p>

            {/* CTA */}
            <a
              href="https://wa.me/918847405508"
              className="block mt-4 bg-[#d4af37] text-white text-center py-2 rounded-lg"
            >
              Get Similar Work
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
