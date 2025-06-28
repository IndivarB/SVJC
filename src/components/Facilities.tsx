
import { useState } from "react";

const Facilities = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const facilities = [
    {
      title: "Advanced Laboratories",
      description: "State-of-the-art science labs equipped with modern instruments and safety equipment for hands-on learning experience",
      icon: "🔬",
      features: ["Physics Lab", "Chemistry Lab", "Biology Lab", "Computer Lab"]
    },
    {
      title: "Hygienic Classrooms",
      description: "Spacious, well-ventilated classrooms with modern teaching aids and comfortable seating arrangements",
      icon: "🏫",
      features: ["Smart Boards", "Air Conditioning", "Natural Lighting", "Ergonomic Furniture"]
    },
    {
      title: "Hostel",
      description: "Safe and comfortable residential facilities designed specifically for young women students",
      icon: "🏡",
      features: ["24/7 Security", "Nutritious Meals", "Study Rooms", "Recreation Areas"]
    }
  ];

  const campusImages = [
    {
      src: "IMG-20250627-WA0026.jpg",
      title: "Main Campus Building"
    },
    {
      src: "IMG-20250627-WA0025.jpg",
      title: "Library & Study Area"
    },
    {
      src: "lab.jpg",
      title: "Science Laboratory"
    }
  ];

  const openImagePreview = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImagePreview = () => {
    setSelectedImage(null);
  };

  const openMapLink = () => {
    window.open("https://maps.app.goo.gl/iW3NKdxPqmYNWWMn9", "_blank");
  };

  return (
    <div className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Facilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience excellence through our modern infrastructure and well-equipped facilities
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="text-5xl mb-6 text-center">{facility.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {facility.title}
              </h3>
              <p className="text-gray-700 mb-6 text-center leading-relaxed">
                {facility.description}
              </p>
              <div className="space-y-3 mb-6">
                {facility.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Campus Preview Images */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8 animate-fade-in">Campus Preview</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {campusImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in" onClick={() => openImagePreview(image.src)}>
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-semibold text-lg">Click to view larger</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Campus Tour Section */}
        <div className="bg-white rounded-2xl p-12 shadow-lg animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Visit Our Campus
            </h3>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Visit our campus to experience our facilities firsthand and meet our faculty and students. 
              We welcome prospective students and their families to explore our beautiful campus, 
              interact with our dedicated staff, and get a feel for the vibrant learning environment 
              we provide. Our guided tours will give you insights into our teaching methodologies, 
              infrastructure, and the holistic development opportunities we offer.
            </p>
            
            <div className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Campus Location"
                className="w-64 h-48 mx-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={openMapLink}
              />
              <p className="mt-4 text-sm text-gray-600">Click image to view location on maps</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl p-8 text-white text-center">
              <h4 className="text-2xl font-bold mb-4">Visit Timings</h4>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-lg">Monday - Saturday</div>
                  <div className="text-orange-100">9:00 AM - 5:00 PM</div>
                </div>
                <div>
                  <div className="font-semibold text-lg">Sunday</div>
                  <div className="text-orange-100">9:00 AM - 12:00 PM</div>
                </div>
                <div className="text-sm text-orange-100 mt-4">
                  * Please call ahead to schedule your visit
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-gray-900">What You'll See:</h4>
              <div className="space-y-3">
                {[
                  "Modern classrooms and laboratories",
                  "Library and study areas",
                  "Hostel facilities and dining hall",
                  "Sports and recreation facilities",
                  "Meet our experienced faculty",
                  "Interact with current students"
                ].map((item, index) => (
                  <div key={index} className="flex items-center hover:scale-105 transition-transform duration-200">
                    <span className="w-3 h-3 bg-orange-600 rounded-full mr-4"></span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={closeImagePreview}>
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Campus Preview"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={closeImagePreview}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Facilities;
