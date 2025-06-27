import { useState, useEffect } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="pt-16">
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl opacity-90">Have questions or need assistance? We're here to help!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="opacity-80">Sports Tech Hub, Innovation District, Mumbai, India</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <i className="fas fa-phone text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="opacity-80">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="opacity-80">support@zadsports.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <i className="fas fa-clock text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Business Hours</h4>
                    <p className="opacity-80">Mon-Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      className="w-full px-4 py-3 bg-white bg-opacity-20 rounded-lg placeholder-white placeholder-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-white"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      className="w-full px-4 py-3 bg-white bg-opacity-20 rounded-lg placeholder-white placeholder-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-white"
                      required
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white bg-opacity-20 rounded-lg placeholder-white placeholder-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-white bg-opacity-20 rounded-lg placeholder-white placeholder-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-white bg-opacity-20 rounded-lg placeholder-white placeholder-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-white resize-none"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-white text-primary-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                  >
                    <i className="fas fa-paper-plane mr-2"></i>Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
