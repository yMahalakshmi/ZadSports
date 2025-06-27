import { useEffect, useState } from "react";

const NewReleases = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: "fas fa-sync-alt",
      color: "bg-green-500",
      title: "Real-Time Booking Updates",
      description: "Ground availability is now updated instantly to ensure accurate scheduling."
    },
    {
      icon: "fas fa-tachometer-alt",
      color: "bg-blue-500",
      title: "Enhanced Owner Dashboard",
      description: "New tools for ground owners to manage bookings, track revenue, and update ground details with ease."
    },
    {
      icon: "fas fa-layer-group",
      color: "bg-purple-500",
      title: "Multi-Ground Management",
      description: "Owners can now list and control multiple grounds under a single account."
    },
    {
      icon: "fas fa-mobile-alt",
      color: "bg-orange-500",
      title: "Improved User Interface",
      description: "Faster navigation, simplified search, and an enhanced booking flow for users."
    },
    {
      icon: "fas fa-bell",
      color: "bg-red-500",
      title: "Push Notification Alerts",
      description: "Get instant updates on booking confirmations, cancellations, and special offers."
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 gradient-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-blue mb-4">What's New on ZadSports?</h2>
            <p className="text-xl text-gray-600">Latest features and updates to enhance your experience</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.slice(0, 4).map((feature, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover-lift ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center`}>
                      <i className={`${feature.icon} text-white`}></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-blue mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Feature 5 spans full width */}
            <div className={`bg-white rounded-2xl p-8 shadow-lg hover-lift lg:col-span-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 ${features[4].color} rounded-full flex items-center justify-center`}>
                    <i className={`${features[4].icon} text-white`}></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-blue mb-2">{features[4].title}</h3>
                  <p className="text-gray-600">{features[4].description}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold">
              <i className="fas fa-rocket mr-2"></i>Discover the Latest Features
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewReleases;
