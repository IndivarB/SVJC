
import { X } from "lucide-react";

interface ProgramModalProps {
  isOpen: boolean;
  onClose: () => void;
  program: {
    title: string;
    subtitle: string;
    description: string;
    subjects: string[];
    career: string[];
    duration: string;
    eligibility: string;
  };
}

const ProgramModal = ({ isOpen, onClose, program }: ProgramModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{program.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-orange-600 mb-2">Program Overview</h3>
              <p className="text-gray-700">{program.description}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-orange-600 mb-2">Duration</h3>
              <p className="text-gray-700">{program.duration}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-orange-600 mb-2">Eligibility</h3>
              <p className="text-gray-700">{program.eligibility}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-orange-600 mb-2">Core Subjects</h3>
              <ul className="space-y-2">
                {program.subjects.map((subject, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    <span className="text-gray-700">{subject}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-orange-600 mb-2">Career Opportunities</h3>
              <ul className="space-y-2">
                {program.career.map((career, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <span className="text-gray-700">{career}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramModal;
