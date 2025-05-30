
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
    },
    {
      name: "Lisa Thompson",
      bio: "Play therapy specialist and arts integration enthusiast",
      experience: "5 years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Meet the Teachers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of experienced educators is committed to nurturing 
            each child's unique potential and fostering a love of learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute -bottom-2 -right-2 bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  {teacher.experience.split(' ')[0]}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {teacher.name}
              </h3>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {teacher.bio}
              </p>
              <p className="text-purple-600 font-semibold text-sm">
                {teacher.experience} experience
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
