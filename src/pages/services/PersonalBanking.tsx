import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Smartphone, Shield, DollarSign, Users, CheckCircle } from 'lucide-react';

const PersonalBanking: React.FC = () => {
  const accounts = [
    {
      name: 'Free Checking',
      description: 'No monthly fees, no minimum balance, unlimited transactions',
      features: ['No monthly maintenance fee', 'Free online & mobile banking', 'Free debit card', 'Unlimited check writing', 'ATM fee reimbursement'],
      rate: 'No fees',
      cta: 'Open Account'
    },
    {
      name: 'High-Yield Savings',
      description: 'Earn competitive interest on your savings with no minimum balance',
      features: ['2.5% APY', 'No minimum balance', 'Free online transfers', 'FDIC insured up to $250,000', 'Mobile deposit'],
      rate: '2.5% APY',
      cta: 'Start Saving'
    },
    {
      name: 'Premium Checking',
      description: 'Enhanced banking with premium benefits and personalized service',
      features: ['Dedicated relationship manager', 'Premium debit card', 'Free checks', 'Priority customer service', 'Travel benefits'],
      rate: '$15/month',
      cta: 'Upgrade Now'
    }
  ];

  const features = [
    {
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      title: 'Mobile Banking',
      description: 'Bank on the go with our award-winning mobile app featuring biometric login, mobile check deposit, and account alerts.'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Security & Protection',
      description: 'Your accounts are protected with advanced security features, fraud monitoring, and zero liability protection.'
    },
    {
      icon: <DollarSign className="h-8 w-8 text-blue-600" />,
      title: 'No Hidden Fees',
      description: 'Transparent pricing with no surprise fees. We believe in straightforward, honest banking relationships.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Personal Service',
      description: 'Get personalized advice from our experienced banking professionals who understand your unique needs.'
    }
  ];

  const benefits = [
    'Free ATM access at 55,000+ locations nationwide',
    'Mobile check deposit available 24/7',
    'Real-time account alerts and notifications',
    'Budgeting tools and spending insights',
    'Person-to-person payments',
    'Online bill pay with automatic scheduling'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Personal Banking Made Simple
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Experience banking designed around your life. From free checking to high-yield savings, we offer accounts that work as hard as you do.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/open-account"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 text-center"
                >
                  Open Account Today
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 text-center"
                >
                  Speak with an Expert
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Personal Banking"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <div>
                    <p className="font-semibold text-gray-900">FDIC Insured</p>
                    <p className="text-sm text-gray-600">Up to $250,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Account Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Account
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a range of personal banking accounts designed to meet your unique needs and financial goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accounts.map((account, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg border-2 border-gray-200 hover:border-blue-500 transition-colors duration-300">
                <div className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{account.name}</h3>
                    <p className="text-gray-600 mb-4">{account.description}</p>
                    <div className="text-3xl font-bold text-blue-600">{account.rate}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {account.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/open-account"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200 text-center block"
                  >
                    {account.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Banking Features You'll Love
            </h2>
            <p className="text-xl text-gray-600">
              Modern banking tools and services that make managing your money easier than ever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                More Than Just Banking
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                When you choose SecureBank for your personal banking needs, you get access to a comprehensive suite of financial tools and services.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Banking Benefits"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <CreditCard className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-bold">Free</p>
                  <p className="text-sm">Debit Card</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Banking Better?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made the switch to SecureBank personal banking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/open-account"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Open Your Account
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Questions? Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalBanking;