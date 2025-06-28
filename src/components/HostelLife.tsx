
import { useState } from "react";

const HostelLife = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const hostelImages = [
    {
      src: "IMG-20250627-WA0014.jpg",
      title: "Comfortable Living Spaces"
    },
    {
      src: "IMG-20250627-WA0026.jpg",
      title: "Peaceful Environment"
    },
    {
      src: "Scenic.jpg",
      title: "Scenic Campus Views"
    },
    {
      src: "Lab_2.jpg",
      title: "Modern Lab Facilities"
    },
    {
      src: "IMG-20250627-WA0025.jpg",
      title: "Perfect Study Spaces"
    },
    {
      src: "zoo.jpg",
      title: "Zoological Lab Facilities"
    }
  ];

  const hostelFeatures = [
    {
      title: "Nutritious Meals",
      description: "Freshly prepared, balanced meals with local and traditional flavors",
      icon: "🍽️"
    },
    {
      title: "Safe Accommodation",
      description: "24/7 security and supervision ensuring complete safety for students",
      icon: "🏠"
    },
    {
      title: "Economical Cost",
      description: "Affordable fees making quality education accessible to all families",
      icon: "💰"
    },
    {
      title: "Study Environment",
      description: "Quiet study rooms and dedicated spaces for academic excellence",
      icon: "📚"
    }
  ];

  const openImagePreview = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImagePreview = () => {
    setSelectedImage(null);
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hostel Life
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Home Away From Home
          </p>
        </div>

        {/* Main Description */}
        <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-12 mb-16 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Healthy Living at Affordable Costs
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
              At Vivekananda Junior College, we believe that a nurturing living environment is crucial for academic success. 
              We provide healthy food and comfortable accommodation to our students at economical costs, ensuring that 
              quality education remains accessible to families from all backgrounds.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
              Our hostel is designed exclusively for young women, providing a safe, secure, and supportive environment 
              where students can focus on their studies while building lifelong friendships. With round-the-clock supervision 
              and care, parents can have peace of mind knowing their daughters are in safe hands.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              The hostel facilities include well-ventilated rooms, nutritious meal plans prepared by experienced cooks, 
              recreational areas for relaxation, and study halls for academic pursuits. We maintain the highest standards 
              of hygiene and cleanliness throughout the premises, creating an environment that promotes both physical 
              and mental well-being.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {hostelFeatures.map((feature, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Gallery Section */}
        <div className="bg-gray-900 rounded-2xl p-12 animate-fade-in">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Campus Gallery
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hostelImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => openImagePreview(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <h4 className="font-semibold text-lg mb-2">{image.title}</h4>
                    <p className="text-sm">Click to view larger</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={closeImagePreview}>
          <div className="relative max-w-6xl max-h-[95vh] w-full">
            <img
              src={selectedImage}
              alt="Campus Gallery"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={closeImagePreview}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-all text-xl"
            >
              ✕
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
              <p className="text-sm opacity-75">Click anywhere to close</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HostelLife;
