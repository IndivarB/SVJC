import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  
  const slides = [
    {
      image: "/IMG-20250627-WA0026.jpg",
      title: "Empowering Young Women",
      subtitle: "Creating Tomorrow's Leaders"
    },
    {
      image: "/classroom.jpg",
      title: "Excellence in Education",
      subtitle: "Modern Learning for Future Success"
    },
    {
      image: "/IMG-20250627-WA0025.jpg",
      title: "Igniting Minds, Shaping Futures",
      subtitle: "Where Dreams Take Flight"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.image})`,
            }}
          />
        </div>
      ))}
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-scale-in">
            Sri Vivekananda Junior College
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-light text-orange-200">
            Igniting Minds, Shaping Futures
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            {slides[currentSlide].subtitle}
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <button
              onClick={() => navigate('/about')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg w-full md:w-auto"
            >
              Discover Excellence
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg w-full md:w-auto"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;