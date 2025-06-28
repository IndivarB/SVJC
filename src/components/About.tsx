
import { useState, useEffect, useRef } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    students: 0,
    successRate: 0,
    experience: 0,
  });
  
  const sectionRef = useRef<HTMLDivElement>(null);

  const targetValues = {
    students: 10000,
    successRate: 95,
    experience: 25,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animateCount = (key: keyof typeof targetValues) => {
        const target = targetValues[key];
        const duration = 4000; // Increased to 4 seconds for slower counting
        const steps = 80; // More steps for smoother animation
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, duration / steps);
      };

      animateCount('students');
      setTimeout(() => animateCount('successRate'), 500);
      setTimeout(() => animateCount('experience'), 1000);
    }
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            About Vivekananda Junior College
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            The Famous Junior College in Anantapur Region
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <img
              src="IMG-20250627-WA0020.jpg"
              alt="Vivekananda Junior College Campus"
              className="rounded-lg shadow-xl w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-bold text-gray-900">
              Empowering Young Women Through Education
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Vivekananda Junior College, we follow the timeless principles of Swami Vivekananda, 
              believing that education is the manifestation of perfection already in man. Our residential 
              campus is exclusively designed for young women, providing a safe, nurturing environment 
              where they can flourish academically and personally.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our dedicated faculty members are not just teachers but mentors who inspire, guide, and 
              support each student on their journey toward excellence. We believe in holistic development, 
              combining academic rigor with character building and practical life skills.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Located in the heart of Anantapur, our college has been a beacon of quality education, 
              preparing young women to face the challenges of tomorrow with confidence and competence.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
            <div className="text-5xl font-bold text-orange-600 mb-2">
              {counts.students.toLocaleString()}+
            </div>
            <div className="text-xl font-semibold text-gray-900 mb-2">Happy Students</div>
            <div className="text-gray-600">Educated and empowered over the years</div>
          </div>
          
          <div className="text-center bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
            <div className="text-5xl font-bold text-orange-600 mb-2">
              {counts.successRate}%+
            </div>
            <div className="text-xl font-semibold text-gray-900 mb-2">Success Rate</div>
            <div className="text-gray-600">Students achieving their academic goals</div>
          </div>
          
          <div className="text-center bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
            <div className="text-5xl font-bold text-orange-600 mb-2">
              {counts.experience}+
            </div>
            <div className="text-xl font-semibold text-gray-900 mb-2">Years of Excellence</div>
            <div className="text-gray-600">Committed to quality education</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
