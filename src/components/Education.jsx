const Education = () => {
  return (
    <section
      id="education"
      className="bg-[#0D1117] text-white py-20 px-4 sm:px-6 md:px-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-12">
        Education
      </h2>

      <div className="max-w-4xl mx-auto bg-[#161B22] p-5 md:p-8 rounded-xl hover:border hover:border-blue-500 mb-8">
        <h3 className="text-xl md:text-2xl font-bold">
          B.E. Computer Engineering
        </h3>

        <p className="text-gray-400 mt-2 text-sm md:text-base">
          RMD Sinhgad Technical Institute, Pune
        </p>

        <p className="text-gray-400 text-sm md:text-base">
          2024 - 2027
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-[#161B22] p-5 md:p-8 rounded-xl hover:border hover:border-blue-500">
        <h3 className="text-xl md:text-2xl font-bold">
          Diploma in Computer Engineering
        </h3>

        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Karmaveer Bhaurao Patil Polytechnic, Satara
        </p>

        <p className="text-gray-400 text-sm md:text-base">
          2021 - 2024
        </p>
      </div>
    </section>
  );
};

export default Education;