
import { useState } from "react";
import ProgramModal from "./ProgramModal";

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const programs = [
    {
      title: "Intermediate (MPC)",
      subtitle: "Mathematics, Physics, Chemistry",
      description: "Perfect foundation for engineering and technology careers with comprehensive understanding of mathematical principles, physical laws, and chemical processes.",
      icon: "🔬",
      subjects: ["Advanced Mathematics", "Physics Principles", "Chemistry Fundamentals", "Laboratory Practices"],
      career: ["IIT and JEE preparation", "Technology", "Research & Development", "Architecture"],
      duration: "2 Years (11th & 12th Grade)",
      eligibility: "Successful completion of 10th grade with minimum 60% marks",
      backgroundImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Intermediate (BiPC)",
      subtitle: "Biology, Physics, Chemistry",
      description: "Ideal preparation for medical and life sciences with focus on biological systems, physical principles, and chemical interactions in living organisms.",
      icon: "🧬",
      subjects: ["Biological Sciences", "Physics Applications", "Organic Chemistry", "NEET Preparation"],
      career: ["Medicine", "Pharmacy", "Biotechnology", "Nursing", "Veterinary Science", "Life Sciences Research"],
      duration: "2 Years (11th & 12th Grade)",
      eligibility: "Successful completion of 10th grade with minimum 60% marks",
      backgroundImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Intermediate (CEC)",
      subtitle: "Civics, Economics, Commerce",
      description: "Strong base for business and social sciences with comprehensive understanding of civic responsibilities, economic principles, and commercial practices.",
      icon: "📊",
      subjects: ["Civic Studies", "Economic Principles", "Commerce Fundamentals", "Business Applications"],
      career: ["Business Administration", "Economics", "Law", "Banking & Finance", "Public Administration", "Accounting"],
      duration: "2 Years (11th & 12th Grade)",
      eligibility: "Successful completion of 10th grade with minimum 50% marks",
      backgroundImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const features = [
    {
      title: "Expert Faculty",
      description: "Highly qualified and experienced teachers committed to student success",
      icon: "👩‍🏫"
    },
    {
      title: "Modern Curriculum",
      description: "Updated curriculum as per Andhra Pradesh latest syllabus requirements",
      icon: "📚"
    },
    {
      title: "Career Support",
      description: "Comprehensive guidance for higher education and career planning",
      icon: "🎯"
    }
  ];

  const openModal = (program: any) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProgram(null);
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Academic Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive intermediate programs designed to build a strong foundation for your future
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <div key={index} className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group">
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${program.backgroundImage})` }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">{program.icon}</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                  {program.title}
                </h3>
                <p className="text-orange-600 font-semibold text-center mb-4">
                  {program.subtitle}
                </p>
                <p className="text-gray-700 text-center mb-6">
                  {program.description.substring(0, 100)}...
                </p>
                <div className="text-center">
                  <button
                    onClick={() => openModal(program)}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gray-900 rounded-2xl p-12 animate-fade-in">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Sri Vivekananda Junior College?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProgramModal
        isOpen={isModalOpen}
        onClose={closeModal}
        program={selectedProgram || programs[0]}
      />
    </div>
  );
};

export default Programs;
