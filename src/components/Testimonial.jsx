import Container from "./Container";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Punjab",
    project: "2BHK Renovation",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "I hired them for full home renovation. The work quality is excellent and they completed everything on time. Very reliable team.",
  },
  {
    name: "Priya Verma",
    location: "Haryana",
    project: "Modular Kitchen",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "My kitchen looks amazing now. Finishing is very clean and design suggestions were really helpful.",
  },
  {
    name: "Amit Gupta",
    location: "Chandigarh",
    project: "Living Room Interior",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    review:
      "Professional work and good behavior. They explained everything clearly and delivered as promised.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Real Client Experiences
          </h2>
          <p className="text-gray-600 mt-2">
            Trusted by homeowners across Punjab,Jalandhar. Chandigarh & Haryana
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              {/* Top: Avatar + Info */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    {item.location} • {item.project}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex text-[#d4af37] mb-3">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#d4af37" />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-700 text-sm leading-relaxed">
                “{item.review}”
              </p>
            </div>
          ))}
        </div>

        {/* Trust Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            ⭐ Rated 4.9/5 by 500+ homeowners
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
