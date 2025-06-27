import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <i className="fas fa-futbol mr-2"></i>ZadSports
            </h3>
            <p className="text-lg opacity-80 mb-4">Your Ultimate Sports Ground Booking App</p>
            <p className="opacity-70 leading-relaxed">
              Connecting sports enthusiasts with quality grounds while empowering owners to showcase their venues. ZadSports makes ground booking simple, secure, and seamless.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="opacity-70 hover:opacity-100 transition-opacity duration-300">Home</Link></li>
              <li><Link href="/about" className="opacity-70 hover:opacity-100 transition-opacity duration-300">About Us</Link></li>
              <li><Link href="/blog" className="opacity-70 hover:opacity-100 transition-opacity duration-300">Blog</Link></li>
              <li><Link href="/achievements" className="opacity-70 hover:opacity-100 transition-opacity duration-300">Achievements</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <i className="fas fa-envelope text-sm"></i>
                <span className="opacity-70 text-sm">support@zadsports.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-phone text-sm"></i>
                <span className="opacity-70 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt text-sm"></i>
                <span className="opacity-70 text-sm">Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center">
          <p className="opacity-70">&copy; 2024 ZadSports. All rights reserved. | Developed with ❤️ for the sports community</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
