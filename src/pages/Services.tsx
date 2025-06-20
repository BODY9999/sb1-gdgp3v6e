import React from 'react';
import { Link } from 'react-router-dom';
import { User, Building2, CreditCard, Home, TrendingUp, PiggyBank, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <User className="h-12 w-12 text-blue-600" />,
      title: 'Personal Banking',
      description: 'Comprehensive banking solutions for individuals and families, including checking, savings, and personal loans.',
      features: ['Free Checking Accounts', '24/7 Online Banking', 'Mobile Banking App', 'ATM Network Access'],
      link: '/services/personal-banking',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: <Building2 className="h-12 w-12 text-blue-600" />,
      title: 'Business Banking',
      description: 'Tailored financial solutions to help your business grow and succeed in today\'s competitive market.',
      features: ['Business Checking', 'Commercial Loans', 'Merchant Services', 'Cash Management'],
      link: '/services/business-banking',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: <PiggyBank className="h-12 w-12 text-blue-600" />,
      title: 'Loans & Credit',
      description: 'Flexible lending solutions for personal and business needs with competitive rates and terms.',
      features: ['Personal Loans', 'Auto Loans', 'Business Loans', 'Lines of Credit'],
      link: '/services/loans',
      image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: <CreditCard className="h-12 w-12 text-blue-600" />,
      title: 'Credit Cards',
      description: 'Reward credit cards with competitive rates, no annual fees, and exclusive benefits for cardholders.',
      features: ['Cashback Rewards', 'No Annual Fee', 'Travel Benefits', 'Fraud Protection'],
      link: '/services/credit-cards',
      image: 'https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: <Home className="h-12 w-12 text-blue-600" />,
      title: 'Mortgages',
      description: 'Home financing solutions with competitive rates and flexible terms for first-time and experienced buyers.',
      features: ['First-Time Buyer Programs', 'Refinancing Options', 'Jumbo Loans', 'Construction Loans'],
      link: '/services/mortgages',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      title: 'Investments & Retirement',
      description: 'Build wealth and secure your financial future with our comprehensive investment and retirement planning services.',
      features: ['Portfolio Management', 'Retirement Planning', 'IRAs & 401(k)s', 'Financial Advising'],
      link: '/services/investments',
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Banking Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover comprehensive financial solutions designed to meet your personal and business needs. From everyday banking to complex financial planning, we're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <h3 className="text-2xl font-bold text-gray-900 ml-3">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with personalized service to deliver exceptional banking experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Service</h3>
              <p className="text-gray-600">
                Our experienced team provides personalized advice and solutions tailored to your unique financial needs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Rates</h3>
              <p className="text-gray-600">
                Enjoy some of the most competitive rates in the industry on loans, mortgages, and deposit accounts.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Convenience</h3>
              <p className="text-gray-600">
                Access your accounts anytime, anywhere with our award-winning mobile and online banking platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our services and find the right banking solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/open-account"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Open an Account
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;