import Container from "../components/Container";
import { Home, Paintbrush, Wrench, Layers } from "lucide-react";

const services = [
  {
    title: "Interior Design",
    description:
      "Modern and luxury interior solutions tailored to your lifestyle and space.",
    icon: <Home size={32} />,
  },
  {
    title: "Home Renovation",
    description:
      "Complete home renovation with high-quality materials and expert team.",
    icon: <Wrench size={32} />,
  },
  {
    title: "Modular Kitchen",
    description:
      "Smart, stylish kitchens with optimized storage and premium finish.",
    icon: <Layers size={32} />,
  },
  {
    title: "False Ceiling & Painting",
    description:
      "Elegant ceiling designs and smooth painting for a perfect finish.",
    icon: <Paintbrush size={32} />,
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="text-gray-600 mt-2">
            30+ years of experience delivering quality work
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-4 text-[#d4af37] group-hover:scale-110 transition">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-2">
                {service.description}
              </p>

              {/* CTA */}
              <button className="mt-4 text-[#d4af37] font-medium text-sm">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/918847405508"
            className="bg-[#d4af37] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Get Free Consultation
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Services;
