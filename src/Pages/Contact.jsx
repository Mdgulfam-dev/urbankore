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

    const whatsappMessage = `Hi, I am ${name}%0A
Phone: ${phone}%0A
Service: ${service}%0A
Requirement: ${message}`;

    const url = `https://wa.me/918847405508?text=${whatsappMessage}`;

    window.open(url, "_blank");
  };

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT INFO */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Get Free Consultation
            </h2>

            <p className="text-gray-600 mt-3">
              Share your requirements and our team will contact you within 24
              hours.
            </p>

            <div className="mt-6 space-y-3 text-sm text-gray-700">
              <p>📞 +91 XXXXX XXXXX</p>
              <p>📍 Delhi & Noida</p>
              <p>⏱ 30+ Years Experience</p>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />

              {/* Service Dropdown */}
              <select
                name="service"
                required
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:outline-none"
              >
                <option value="">Select Service</option>
                <option>Interior Design</option>
                <option>Home Renovation</option>
                <option>Modular Kitchen</option>
                <option>False Ceiling</option>
              </select>

              <textarea
                name="message"
                placeholder="Describe your requirement"
                rows="4"
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />

              <button className="w-full bg-[#d4af37] text-white py-3 rounded-lg hover:opacity-90 transition">
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
