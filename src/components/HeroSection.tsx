
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-pink-50 to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Welcome to{" "}
              <span className="text-purple-600">Mulberry Kids</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A warm, nurturing space where children can feel safe, loved, and 
              inspired every day. We focus on individual attention and holistic 
              development for each child.
            </p>
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg"
            >
              Book a Visit
            </Button>
          </div>
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1607696862698-6ac573cebda2?w=600&h=400&fit=crop" 
                alt="Happy children playing" 
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3">
                <span className="text-2xl">⭐</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
