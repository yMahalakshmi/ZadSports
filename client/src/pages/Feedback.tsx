import { useState, useEffect } from "react";

const Feedback = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    userType: '',
    feedback: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: "Raj Sports Complex",
      role: "Ground Owner",
      initials: "RS",
      rating: 5,
      testimonial: "ZadSports has transformed how we manage our sports complex. The admin approval process gives us credibility, and the booking system is seamless."
    },
    {
      name: "Arjun Sharma",
      role: "Cricket Player",
      initials: "AS",
      rating: 5,
      testimonial: "Finding quality cricket grounds used to be a hassle. ZadSports made it so easy! I can book grounds in real-time and never worry about quality."
    },
    {
      name: "Phoenix Academy",
      role: "Sports School",
      initials: "PA",
      rating: 5,
      testimonial: "As a sports academy, we needed reliable ground booking. ZadSports' multi-ground management feature helps us coordinate all our training sessions efficiently."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFeedbackForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your feedback! Your input helps us improve ZadSports.');
    setFeedbackForm({
      name: '',
      email: '',
      userType: '',
      feedback: ''
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i key={index} className={`fas fa-star ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}></i>
    ));
  };

  return (
    <div className="pt-16">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-blue mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Real feedback from ground owners and players</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`bg-light-blue rounded-2xl p-8 hover-lift ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-secondary-blue rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-primary-blue">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700">"{testimonial.testimonial}"</p>
              </div>
            ))}
          </div>

          {/* Feedback Form */}
          <div className={`max-w-2xl mx-auto bg-gradient-to-r from-primary-blue to-secondary-blue rounded-2xl p-8 text-white ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold mb-6 text-center">Share Your Feedback</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={feedbackForm.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={feedbackForm.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
              </div>
              <select
                name="userType"
                value={feedbackForm.userType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                required
              >
                <option value="">I am a...</option>
                <option value="ground-owner">Ground Owner</option>
                <option value="player">Player/User</option>
                <option value="sports-school">Sports School</option>
              </select>
              <textarea
                name="feedback"
                value={feedbackForm.feedback}
                onChange={handleInputChange}
                rows={4}
                placeholder="Your feedback..."
                className="w-full px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-white text-primary-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                <i className="fas fa-paper-plane mr-2"></i>Send Feedback
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
