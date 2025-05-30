
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GallerySection = () => {
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
    },
    {
      url: "/lovable-uploads/782262d4-fab7-431b-935a-8c5522e7a653.png",
      caption: "One-on-One Learning Support"
    },
    {
      url: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&fit=crop",
      caption: "Art and Creativity Time"
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
          <Carousel className="w-full">
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
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
