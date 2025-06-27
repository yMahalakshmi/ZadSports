import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="pt-16">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" alt="Modern sports facility with multiple courts" className="rounded-2xl shadow-lg w-full h-auto" />
            </div>
            
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-4xl font-bold text-primary-blue mb-6">About ZadSports</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At ZadSports, our mission is to connect sports enthusiasts with the best available grounds quickly and easily, while also empowering ground owners to promote their spaces seamlessly.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We recognized that booking sports grounds was often time-consuming, fragmented, and unreliable. ZadSports was built to solve these challenges by creating a secure, organized platform where quality is guaranteed through admin approval and both owners and users enjoy a smooth digital experience.
              </p>

              <div className="bg-light-blue rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-primary-blue mb-4">Our Unique System</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-arrow-right text-secondary-blue mt-1"></i>
                    <span>Ground Owners can register, list, and manage their grounds</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-arrow-right text-secondary-blue mt-1"></i>
                    <span>Admins carefully review and approve each listing for quality and safety</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-arrow-right text-secondary-blue mt-1"></i>
                    <span>Players can explore verified grounds, check availability, and book instantly</span>
                  </li>
                </ul>
              </div>

              <p className="text-xl font-semibold text-primary-blue">
                ZadSports – Bridging the gap between sports lovers and their perfect playing field.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
