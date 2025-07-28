import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-bold mb-4">SHOPIFY</h3>
          <p>Your go-to destination for fashion that speaks louder than words.</p>
          <div className="flex space-x-4 mt-4">
            <Link to="#" className="hover:text-red-500 transition-colors">
              {/* Facebook Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link to="#" className="hover:text-red-500 transition-colors">
              {/* Twitter Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.007-.532..." />
              </svg>
            </Link>
            <Link to="#" className="hover:text-red-500 transition-colors">
              {/* GitHub Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42..."
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-red-500">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/menu" className="hover:text-red-300 flex items-center">
                Menu <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </li>
            <li>
              <Link to="/categories" className="hover:text-red-300 flex items-center">
                Categories <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-300 flex items-center">
                About Us <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-300 flex items-center">
                Contact <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-red-300 flex items-center">
                FAQ <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-red-500">Contact Info</h4>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Phone className="w-4 h-4 mr-2" /> +1 (123) 456-7890
            </li>
            <li className="flex items-center">
              <Mail className="w-4 h-4 mr-2" /> info@fashionhub.com
            </li>
            <li className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" /> 123 Style Ave, Fashion City
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p>© {new Date().getFullYear()} Shopify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
