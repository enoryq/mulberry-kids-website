import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ClassesSection = () => {
  const classes = [
    {
      title: "👶 Tiny Explorers",
      description: "In this foundational stage, we support sensory exploration, physical development, and early communication through engaging, hands-on experiences which help infants develop key early skills in a warm and nurturing environment.",
      age: "0 - 2 Years",
      capacity: "15 Kids",
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&h=300&fit=crop"
    },
    {
      title: "🐿️ Little Acorns", 
      description: "As toddlers grow more curious and independent, we introduce guided activities that foster learning through joyful play and children begin laying the foundation for more structured learning ahead.",
      age: "2 - 3.5 Years",
      capacity: "10 Kids",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop"
    },
    {
      title: "🧠 Preschoolers",
      description: "At this stage, children are introduced to early academic concepts in a fun, creative ways. Play will always remains central, ensuring learning is both effective and enjoyable.",
      age: "1-6 Years", 
      capacity: "12 Kids",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Classes We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide age-appropriate programs designed to nurture each child's development 
            through play, exploration, and meaningful learning experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl overflow-hidden">
              <div className="relative">
                <img 
                  src={classItem.image} 
                  alt={classItem.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                  <span className="text-2xl">{classItem.title.split(' ')[0]}</span>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {classItem.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {classItem.description}
                </p>
                
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <p className="font-semibold text-purple-600">Age:</p>
                    <p className="text-gray-600">{classItem.age}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-600">Capacity:</p>
                    <p className="text-gray-600">{classItem.capacity}</p>
                  </div>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                  Enquire
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
