import { Facebook, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold">Oyster Employment & Learning</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Creating opportunities and unlocking success in specialized fields. Your trusted partner for career growth and talent acquisition.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="/health-sector" className="text-gray-400 hover:text-white transition-colors">Health Sector</a></li>
              <li><a href="/engineering" className="text-gray-400 hover:text-white transition-colors">Engineering</a></li>
              <li><a href="/information-technology" className="text-gray-400 hover:text-white transition-colors">Information Technology</a></li>
              <li><a href="/hospitality" className="text-gray-400 hover:text-white transition-colors">Hospitality</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/news" className="text-gray-400 hover:text-white transition-colors">Latest News</a></li>
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Oyster Employment. All rights reserved. | 
            <a href="/privacy-policy" className="hover:text-white transition-colors ml-1">Privacy Policy</a> | 
            <a href="/terms-conditions" className="hover:text-white transition-colors ml-1">Terms & Conditions</a> | 
            <a href="/cookie-policy" className="hover:text-white transition-colors ml-1">Cookie Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
