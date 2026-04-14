import Container from "../components/Container";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="interior"
          className="w-full h-full object-cover"
        />

        {/* Premium Overlay (Balanced) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white/40"></div>

        {/* Subtle Dark Layer for contrast */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <Container>
        <div className="relative text-center max-w-3xl mx-auto">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight drop-shadow-sm">
            30+ Years of Interior & Renovation Excellence
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-gray-800 text-base sm:text-lg">
            We design and transform homes with premium quality work, trusted by
            hundreds of clients in Delhi & Noida.
          </p>

          {/* Trust Badges (Glass Effect) */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow">
              ✔ 800+ Projects Completed
            </span>
            <span className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow">
              ✔ 30+ Years Experience
            </span>
            <span className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow">
              ✔ On-Time Delivery
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918847405508"
              className="bg-[#d4af37] text-white px-6 py-3 rounded-lg w-full sm:w-auto hover:opacity-90 transition shadow-lg"
            >
              Get Free Consultation
            </a>

            <a
              href="/projects"
              className="bg-white/80 backdrop-blur-md border border-gray-300 px-6 py-3 rounded-lg w-full sm:w-auto hover:bg-white transition"
            >
              View Projects
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

// import Container from "../components/Container";

// const Hero = () => {
//   return (
//     <section className="pt-24 pb-16 bg-white">
//       <Container>
//         <div className="grid md:grid-cols-2 gap-10 items-center">
//           {/* LEFT CONTENT */}
//           <div>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
//               Transform Your Home with Expert Interior & Renovation
//             </h1>

//             <p className="mt-4 text-gray-600 text-base sm:text-lg">
//               30+ years of experience delivering premium interior design and
//               renovation services across Delhi & Noida.
//             </p>

//             {/* Trust Points */}
//             <div className="mt-6 space-y-2 text-sm text-gray-700">
//               <p>✔ 500+ Projects Completed</p>
//               <p>✔ Skilled Professional Team</p>
//               <p>✔ On-Time Delivery Guarantee</p>
//             </div>

//             {/* Buttons */}
//             <div className="mt-8 flex flex-col sm:flex-row gap-4">
//               <a
//                 href="https://wa.me/91XXXXXXXXXX"
//                 className="bg-[#d4af37] text-white px-6 py-3 rounded-lg text-center hover:opacity-90 transition"
//               >
//                 Get Free Consultation
//               </a>

//               <a
//                 href="/projects"
//                 className="border border-gray-300 px-6 py-3 rounded-lg text-center hover:bg-gray-100 transition"
//               >
//                 View Projects
//               </a>
//             </div>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="relative">
//             <img
//               src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
//               alt="interior"
//               className="w-full h-[350px] md:h-[450px] object-cover rounded-xl shadow-lg"
//             />

//             {/* Floating Card */}
//             <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
//               <p className="text-sm font-semibold text-gray-900">
//                 30+ Years Experience
//               </p>
//               <p className="text-xs text-gray-600">
//                 Trusted by hundreds of clients
//               </p>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Hero;