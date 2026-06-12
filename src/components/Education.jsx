const Education = () => {
  return (
    <section
      id="education"
      className="bg-[#0D1117] text-white py-24 px-8"
    >
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
        Education
      </h2>

   


     <div className="max-w-4xl mx-auto bg-[#161B22] p-8 rounded-xl hover:border hover:border-blue-500 mb-8">
        <h3 className="text-2xl font-bold">
          B.E. Computer Engineering
        </h3>

        <p className="text-gray-400 mt-2">
          RMD Sinhgad Technical Institute Pune.
        </p>

        <p className="text-gray-400">
          2024 - 2027
        </p>

        </div>

       <div className="max-w-4xl mx-auto bg-[#161B22] p-8 rounded-xl hover:border hover:border-blue-500">
          <h3 className="text-2xl font-bold">
            Diploma in Computer Engineering
          </h3>

          <p className="text-gray-400">
            Karmaveer Bhaurao Patil Polytechnic,satara.
          </p>

          <p className="text-gray-400">
            2021-2024
          </p>
        </div>
        
    </section>
  );
};

export default Education;