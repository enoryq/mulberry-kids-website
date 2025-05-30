
const TeachersSection = () => {
  const teachers = [
    {
      name: "Sarah Johnson",
      bio: "Early childhood specialist with a passion for creative learning",
      experience: "8 years",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Emily Chen",
      bio: "Montessori trained educator focusing on child-led development", 
      experience: "6 years",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Maria Rodriguez",
      bio: "Bilingual educator specializing in inclusive learning environments",
      experience: "10 years", 
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-left mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Meet the teachers
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {teachers.map((teacher, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {teacher.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {teacher.bio}
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Experience: {teacher.experience}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
