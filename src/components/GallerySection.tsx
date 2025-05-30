
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

const GallerySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    {
      url: "/lovable-uploads/0c463ccf-579f-43fe-8f63-d2c98f845883.png",
      caption: "Outdoor Play Activities"
    },
    {
      url: "/lovable-uploads/8ae8916b-6e4b-4313-afbb-0a3bfbdedfa6.png",
      caption: "Creative Learning Adventures"
    },
    {
      url: "/lovable-uploads/964bf5ee-b7b0-47b3-aa24-d748ab43953b.png",
      caption: "Happy Learning Moments"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a peek into our vibrant learning environment and see the joy 
            of discovery in action through our photo gallery.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full" onSelect={(api) => {
            if (api) {
              setCurrentSlide(api.selectedScrollSnap());
            }
          }}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative overflow-hidden rounded-3xl shadow-xl">
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-96 object-cover"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-xl font-semibold">{image.caption}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
          
          {/* Pagination dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-purple-600' : 'bg-gray-300'
                }`}
                onClick={() => {
                  // This would need carousel API to programmatically go to slide
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
