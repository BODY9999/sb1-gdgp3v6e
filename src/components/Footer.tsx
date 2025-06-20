import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">SecureBank</span>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted financial partner for over 50 years. We provide secure, innovative banking solutions to help you achieve your financial goals.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-200" />
              <Twitter className="h-5 w-5 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-200" />
              <Linkedin className="h-5 w-5 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-200" />
              <Instagram className="h-5 w-5 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  News & Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/personal-banking" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Personal Banking
                </Link>
              </li>
              <li>
                <Link to="/services/business-banking" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Business Banking
                </Link>
              </li>
              <li>
                <Link to="/services/loans" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Loans
                </Link>
              </li>
              <li>
                <Link to="/services/mortgages" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Mortgages
                </Link>
              </li>
              <li>
                <Link to="/services/investments" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Investments
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">1-800-SECURE-1</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">support@securebank.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  123 Financial District<br />
                  New York, NY 10004
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms & Conditions</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Security</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Accessibility</a>
            </div>
            <div className="text-sm text-gray-300">
              © 2024 SecureBank. All rights reserved. FDIC Insured.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;