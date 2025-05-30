
import { Phone, MapPin, Clock } from "lucide-react";

const TopNavBar = () => {
  return (
    <div className="bg-purple-600 text-white py-2 px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between text-sm">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>Mon–Fri: 6:30 AM – 6:00 PM</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>071 893 9198</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>26 Mulberry Street, Brackendowns, Alberton</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
