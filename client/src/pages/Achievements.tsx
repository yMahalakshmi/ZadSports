import { useEffect, useState } from "react";

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countersStarted, setCountersStarted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const timer = setTimeout(() => {
      setCountersStarted(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const achievements = [
    {
      number: "500+",
      title: "Grounds Successfully Onboarded",
      icon: "fas fa-map-marker-alt"
    },
    {
      number: "1000+",
      title: "Seamless Bookings Completed",
      icon: "fas fa-calendar-check"
    },
    {
      number: "2",
      title: "Dedicated User Portals",
      subtitle: "Owners & Players",
      icon: "fas fa-users"
    },
    {
      number: "100%",
      title: "Admin-Verified Listings",
      icon: "fas fa-shield-alt"
    },
    {
      number: "",
      title: "Growing Sports Community",
      subtitle: "Across Regions",
      icon: "fas fa-chart-line",
      isSpecial: true
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-blue mb-4">Our Growth and Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are proud to serve sports players and venue owners through a platform that prioritizes quality, trust, and ease of use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`text-center bg-gradient-to-br from-primary-blue to-secondary-blue rounded-2xl p-8 text-white hover-lift ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {achievement.isSpecial ? (
                  <div className="text-5xl font-bold mb-2">
                    <i className={achievement.icon}></i>
                  </div>
                ) : (
                  <div className={`text-5xl font-bold mb-2 ${countersStarted ? 'animate-bounce-custom' : ''}`}>
                    {achievement.number}
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                {achievement.subtitle && (
                  <p className="text-sm opacity-80 mb-2">{achievement.subtitle}</p>
                )}
                {!achievement.isSpecial && (
                  <i className={`${achievement.icon} text-3xl opacity-70`}></i>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
