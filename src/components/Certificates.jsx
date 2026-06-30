const certificates = [
  "NPTEL - DSA Using Java Development",
  "Oracle AI Foundation",
  "HackerRank Certificate (SQL Basic)",
  "MERN Workshop Certificate",
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="bg-[#161B22] text-white py-24 px-8 md:px-8"
    >
      <h2 className="text-4xl font-bold text-center text-blue-400">
        Certifications
      </h2>

      <div className="w-24 h-1 bg-blue-500 mx-auto mt-3 mb-12 rounded"></div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="
              bg-[#0D1117]
              p-6
              rounded-xl
              hover:border
              hover:border-blue-500
              hover:shadow-lg
              hover:shadow-blue-500/20
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            <h3 className="text-xl font-semibold">
              {certificate}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;