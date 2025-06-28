import { useState, memo } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactInfo = memo(() => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    email: false,
    message: false,
  });

  const contactDetails = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Number",
      content: "7386748675",
      link: "tel:7386748675",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "info.vivekanandajuniorcollege@gmail.com",
      link: "mailto:info.vivekanandajuniorcollege@gmail.com",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      content: "Beside Anatha Township, Akuthotapalli, Anantapur",
      link: "https://maps.app.goo.gl/iW3NKdxPqmYNWWMn9",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setFormErrors((prev) => ({ ...prev, [id]: !value }));
  };

  const validateForm = () => {
    const errors = {
      firstName: !formData.firstName,
      email: !formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      message: !formData.message,
    };
    setFormErrors(errors);
    return !errors.firstName && !errors.email && !errors.message;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const subject = encodeURIComponent("Contact Form Submission");
      const body = encodeURIComponent(
        `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
      );
      window.location.href = `mailto:info.vivekanandajuniorcollege@gmail.com?subject=${subject}&body=${body}`;
      setIsModalOpen(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error generating mailto link:", error);
      alert("Failed to open email client. Please try again or contact us directly at info.vivekanandajuniorcollege@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-blue-900"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ animation: "fadeIn 0.5s ease-in forwards" }}
          >
            Contact Information
          </h2>
          <p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
            style={{ animation: "fadeIn 0.5s ease-in 0.2s forwards" }}
          >
            Get in touch with us to start your journey towards a better tomorrow
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Contact Details */}
          <div className="space-y-6">
            <div
              className="bg-white rounded-lg p-6 shadow-md"
              style={{ animation: "fadeIn 0.5s ease-in 0.4s forwards" }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
                Get In Touch
              </h3>
              <div className="space-y-4">
                {contactDetails.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white">
                      {detail.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">
                        {detail.title}
                      </h4>
                      <a
                        href={detail.link}
                        target={detail.title === "Address" ? "_blank" : undefined}
                        rel={detail.title === "Address" ? "noopener noreferrer" : undefined}
                        className="text-gray-700 hover:text-orange-600 transition-colors duration-200 text-sm sm:text-base"
                      >
                        {detail.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Campus Visit Information */}
            <div
              className="bg-orange-600 rounded-lg p-6 text-white"
              style={{ animation: "fadeIn 0.5s ease-in 0.6s forwards" }}
            >
              <div className="flex items-center mb-3">
                <Clock className="w-5 h-5 mr-2" />
                <h3 className="text-lg sm:text-xl font-bold">Campus Visit Hours</h3>
              </div>
              <div className="space-y-3 text-sm sm:text-base">
                <div className="flex justify-between">
                  <span>Monday - Saturday:</span>
                  <span>9:00 AM - 05:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>9:00 AM - 12:00 PM</span>
                </div>
                <div className="text-orange-100 text-xs sm:text-sm mt-3">
                  * Please call ahead to schedule your visit
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-white rounded-lg p-6 shadow-md"
            style={{ animation: "fadeIn 0.5s ease-in 0.8s forwards" }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
              Send Us a Message
            </h3>
            {isModalOpen ? (
              <div className="text-center py-8">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Thank you for messaging us!
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Our Supervisor will contact you soon.
                </p>
                <button
                  onClick={closeModal}
                  className="mt-6 bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base"
                  aria-label="Send another message"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border ${
                        formErrors.firstName ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base`}
                      placeholder="Enter your first name"
                      required
                      aria-required="true"
                    />
                    {formErrors.firstName && (
                      <p className="text-red-500 text-xs mt-1">First Name is required</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${
                      formErrors.email ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base`}
                    placeholder="Enter your email address"
                    required
                    aria-required="true"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-xs mt-1">Valid email is required</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-3 py-2 border ${
                      formErrors.message ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base`}
                    placeholder="Tell us how we can help you"
                    required
                    aria-required="true"
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-red-500 text-xs mt-1">Message is required</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm sm:text-base ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                  aria-label="Send message"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div
          className="mt-12"
          style={{ animation: "fadeIn 0.5s ease-in 1s forwards" }}
        >
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Visit Our Campus
            </h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Located beside Anatha Township, Akuthotapalli, Anantapur
            </p>
            <a
              href="https://maps.app.goo.gl/iW3NKdxPqmYNWWMn9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base"
              aria-label="View campus location on Google Maps"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Feedback Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          role="dialog"
          aria-labelledby="feedback-title"
          tabIndex={-1}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              e.preventDefault();
              closeModal();
            }
          }}
        >
          <div
            className="relative max-w-md w-full bg-white bg-opacity-90 rounded-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              id="feedback-title"
              className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center"
            >
              Thank You!
            </h3>
            <p className="text-gray-700 mb-6 text-center text-sm sm:text-base">
              Thank you for messaging us. Our Supervisor will contact you soon.
            </p>
            <button
              onClick={closeModal}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm sm:text-base"
              aria-label="Send another message"
            >
              Send another message
            </button>
          </div>
        </div>
      )}

      
    </section>
  );
});

export default ContactInfo;