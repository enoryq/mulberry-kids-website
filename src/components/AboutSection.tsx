
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About us
          </h2>
        </div>

        {/* Our School Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
            <img 
              src="/lovable-uploads/83eda8cf-d62f-4cdf-a0b2-2b08979dbb83.png" 
              alt="Children learning" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Our school</h3>
            <p className="text-gray-600 leading-relaxed">
              Founded in April 2003, <span className="text-purple-600 font-semibold">Mulberry Kids</span> is 
              more than just a nursery school – it's a warm, nurturing space where children can feel safe, 
              loved, and inspired every day. With a maximum of just <span className="font-semibold">35 children per year</span>, 
              we focus on <span className="font-semibold">individual attention</span>, holistic development, 
              and strong connections with each child and their family.
            </p>
            
            <div className="space-y-3">
              <p className="font-semibold text-gray-800">We Look after:</p>
              <ul className="space-y-2 text-gray-600">
                <li>• <span className="font-semibold">Babies</span> (4 - 12 months)</li>
                <li>• <span className="font-semibold">Toddlers</span> (13 months - 3 years)</li>
                <li>• <span className="font-semibold">Pre-school</span> (4-5 years)</li>
                <li>• <span className="font-semibold">Grade R</span> (6 Years)</li>
              </ul>
            </div>

            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8">
              Apply Now
            </Button>
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Our approach</h3>
            <p className="text-gray-600 leading-relaxed">
              At Mulberry Kids, we believe in creating a foundation for lifelong learning through 
              play-based education, social-emotional development, and creative expression. Our 
              experienced educators foster curiosity, independence, and confidence in every child.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We maintain small class sizes to ensure each child receives the attention they 
              deserve, while building strong partnerships with families to support each child's 
              unique journey of growth and discovery.
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
            <img 
              src="/lovable-uploads/0c463ccf-579f-43fe-8f63-d2c98f845883.png" 
              alt="Outdoor play activities" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
