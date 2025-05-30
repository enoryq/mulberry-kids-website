
const TeachersSection = () => {
  const teachers = [
    {
      name: "Helen",
      bio: "Early childhood specialist with a passion for creative learning",
      experience: "20 years",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Janet",
      bio: "Montessori trained educator focusing on child-led development", 
      experience: "20 years",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Elizabeth",
      bio: "Bilingual educator specializing in inclusive learning environments",
      experience: "20 years", 
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Meet the teachers
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-32 h-32 rounded-full object-cover shadow-md"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {teacher.name}
                </h3>
                
                <p className="text-purple-600 font-semibold text-sm mb-4">
                  {teacher.experience} experience
                </p>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {teacher.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
