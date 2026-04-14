import { useState } from "react";
import Container from "../components/Container";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, service, message } = form;

    const whatsappMessage = encodeURIComponent(
      `Hi, I am ${name}
Phone: ${phone}
Service: ${service}
Requirement: ${message}`,
    );

    window.open(`https://wa.me/918847405508?text=${whatsappMessage}`, "_blank");

    setForm({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <section className="pt-24 pb-16 bg-gray-50">
      <Container>
        {/* SEO Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Contact Interior & Renovation Experts in Punjab,Jalandhar.
            Chandigarh & Haryana
          </h1>
          <p className="text-gray-600 mt-3">
            Get a free consultation for home renovation, modular kitchen, and
            interior design services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* Info Card */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold text-gray-900">
                Get in Touch
              </h2>

              <div className="mt-4 space-y-3 text-gray-700 text-sm">
                <p>
                  📞 <strong>+91 8847405508</strong>
                </p>
                <p>📍 Punjab</p>
                <p>⏱ 30+ Years Experience</p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-5 flex gap-3">
                <a
                  href="tel:8847405508"
                  className="flex-1 text-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100"
                >
                  Call Now
                </a>

                <a
                  href="https://wa.me/918847405508"
                  className="flex-1 text-center bg-[#d4af37] text-white py-2 rounded-lg"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Trust Section */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-gray-900">Why Choose Us?</h3>

              <ul className="mt-3 text-sm text-gray-600 space-y-2">
                <li>✔ 30+ Years Experience</li>
                <li>✔ 800+ Projects Completed</li>
                <li>✔ On-Time Delivery</li>
                <li>✔ Affordable Pricing</li>
              </ul>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Request a Free Quote
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                placeholder="Your Name"
                required
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-[#d4af37]"
              />

              <input
                type="tel"
                name="phone"
                value={form.phone}
                placeholder="Phone Number"
                required
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-[#d4af37]"
              />

              <select
                name="service"
                value={form.service}
                required
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              >
                <option value="">Select Service</option>
                <option>Interior Design</option>
                <option>Home Renovation</option>
                <option>Modular Kitchen</option>
                <option>False Ceiling</option>
              </select>

              <textarea
                name="message"
                value={form.message}
                placeholder="Describe your requirement"
                rows="4"
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-[#d4af37]"
              />

              <button className="w-full bg-[#d4af37] text-white py-3 rounded-lg hover:opacity-90 transition">
                Send on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
