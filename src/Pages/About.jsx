import Container from "../components/Container";
import img1 from "../assets/IMG_1118.PNG";
import img2 from "../assets/IMG_1117.PNG";
import img3 from "../assets/IMG_7586.JPG";

const About = () => {
  return (
    <section className="pt-24 pb-16 bg-white">
      <Container>
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT IMAGE */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="interior"
              className="w-full h-[350px] md:h-[450px] object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About UrbanKore
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              With over <strong>30 years of experience</strong>, we specialize
              in interior design and home renovation services across
              Punjab,Jalandhar. Chandigarh & Haryana. Our goal is to transform
              your space into something beautiful, functional, and long-lasting.
            </p>

            <p className="mt-3 text-gray-600">
              We have successfully completed <strong>500+ projects</strong> with
              a team of skilled professionals who focus on quality, detail, and
              timely delivery.
            </p>

            {/* Highlights */}
            <div className="mt-6 space-y-2 text-gray-700">
              <p>✔ 30+ Years Industry Experience</p>
              <p>✔ 500+ Successful Projects</p>
              <p>✔ Skilled & Professional Team</p>
              <p>✔ On-Time Project Delivery</p>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/918847405508"
              className="inline-block mt-6 bg-[#d4af37] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* STATS SECTION */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-[#d4af37]">30+</h3>
            <p className="text-gray-600 text-sm">Years Experience</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-[#d4af37]">500+</h3>
            <p className="text-gray-600 text-sm">Projects Completed</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-[#d4af37]">100%</h3>
            <p className="text-gray-600 text-sm">Client Satisfaction</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-[#d4af37]">24/7</h3>
            <p className="text-gray-600 text-sm">Support</p>
          </div>
        </div>

        {/* TEAM SECTION */}
        {/* TEAM SECTION */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Meet Our Team
            </h3>
            <p className="text-gray-600 mt-2">
              Experienced professionals behind our success
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                img: img1,
                name: "Mohd Aftab",
                role: "Project Manager",
                exp: "7+ years experience",
              },
              {
                img: img2,
                name: "Mohd Firoz",
                role: "Founder & Interior Expert",
                exp: "30+ years experience",
              },
              {
                img: img3,
                name: "Mohd Ashfak",
                role: "Site Engineer",
                exp: "3+ years experience",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              >
                {/* IMAGE FIX */}
                <div className="relative bg-gray-100 flex items-center justify-center h-72">
                  <img
                    src={member.img}
                    alt="team"
                    className="h-full w-auto object-contain transition duration-300 group-hover:scale-105"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition"></div>
                </div>

                {/* CONTENT */}
                <div className="p-5 text-center">
                  <h4 className="font-semibold text-lg text-gray-900">
                    {member.name}
                  </h4>

                  <p className="text-sm text-[#d4af37] mt-1">{member.role}</p>

                  <p className="text-xs text-gray-500 mt-1">{member.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900">Why Choose Us?</h3>

          <p className="mt-4 text-gray-600">
            We focus on delivering high-quality work with modern design, durable
            materials, and transparent pricing. Our experienced team ensures
            smooth execution from planning to completion.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;
