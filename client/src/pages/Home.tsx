import { useEffect, useState } from "react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg text-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Welcome to <span className="text-yellow-300">ZadSports</span>
              </h1>
              <p className="text-xl md:text-2xl mb-6 opacity-90">
                Your Ultimate Sports Ground Booking App
              </p>
              <p className="text-lg mb-8 opacity-80 leading-relaxed">
                Whether you're a sports enthusiast looking for the perfect ground or an owner wanting to showcase your venue, ZadSports is your go-to digital platform. We simplify the process of finding, booking, and managing sports grounds in real-time.
              </p>
              
              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-green-400 text-xl"></i>
                  <span className="text-lg">Verified Grounds</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-green-400 text-xl"></i>
                  <span className="text-lg">Instant Booking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-green-400 text-xl"></i>
                  <span className="text-lg">Seamless Experience for Both Owners & Users</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                  <i className="fas fa-search mr-2"></i>Start Exploring Now
                </button>
                <button className="bg-transparent border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-blue transition-all duration-300">
                  <i className="fas fa-plus mr-2"></i>Register Your Ground
                </button>
              </div>
            </div>

            <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" alt="Modern sports ground with players" className="rounded-2xl shadow-2xl w-full h-auto animate-pulse-custom" />
            </div>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-blue mb-4">Who We Serve</h2>
            <p className="text-xl text-gray-600">ZadSports is where players and grounds meet. Anytime. Anywhere.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Ground Owners */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-blue to-secondary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-building text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-primary-blue">For Ground Owners</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <i className="fas fa-user-plus text-secondary-blue"></i>
                  <span>Easy Registration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fas fa-list text-secondary-blue"></i>
                  <span>Quick Ground Listing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fas fa-shield-alt text-secondary-blue"></i>
                  <span>Secure Admin Approval</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fas fa-eye text-secondary-blue"></i>
                  <span>Visibility to Thousands of Users</span>
                </li>
              </ul>
            </div>

            {/* Players */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-blue to-secondary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-primary-blue">For Players and Users</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <i className="fas fa-search text-secondary-blue"></i>
                  <span>Discover Quality-Checked Grounds</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fas fa-clock text-secondary-blue"></i>
                  <span>Real-Time Availability</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fas fa-calendar-check text-secondary-blue"></i>
                  <span>Hassle-Free Booking Experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
