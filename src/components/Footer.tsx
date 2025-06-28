
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Facilities", href: "/facilities" },
    { name: "Hostel Life", href: "/hostel-life" },
    { name: "Contact", href: "/contact" },
  ];

  const programs = [
    "Intermediate (MPC)",
    "Intermediate (BiPC)",
    "Intermediate (CEC)",
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* College Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="Sri_Vivekananda_Junior_College_Logo.png" 
                alt="Vivekananda Logo" 
                className="h-8 w-8 rounded-full mr-3"
              />
              <h3 className="text-2xl font-bold text-orange-400">
                Sri Vivekananda Junior College
              </h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Igniting Minds, Shaping Futures
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Empowering young women through quality education, following the timeless principles 
              of Swami Vivekananda. Our residential campus provides a safe, nurturing environment 
              for academic excellence and personal growth.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-orange-400" />
                <a href="tel:7386748675" className="text-gray-300 hover:text-orange-400 transition-colors">
                  7386748675
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-orange-400" />
                <a href="mailto:info.vivekanandajuniorcollege@gmail.com" className="text-gray-300 hover:text-orange-400 transition-colors">
                  info.vivekanandajuniorcollege@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-orange-400 mt-1" />
                <span className="text-gray-300">
                  Beside Anatha Township, Akuthotapalli, Anantapur
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program}>
                  <span className="text-gray-300">{program}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h5 className="font-semibold mb-3 text-orange-400">Campus Visit</h5>
              <div className="text-sm text-gray-400">
                <p>Monday - Saturday: 9:00 AM - 5:00 PM</p>
                <p>Sunday: 9:00 AM - 12:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Vivekananda Junior College. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm text-center md:text-right">
                Famous Junior College in Anantapur Region<br />
                Residential Campus for Women Students Only
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
