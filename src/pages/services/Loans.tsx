import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Car, Home, GraduationCap, CheckCircle, Calculator, Clock, Shield } from 'lucide-react';

const Loans: React.FC = () => {
  const loanTypes = [
    {
      icon: <Car className="h-12 w-12 text-blue-600" />,
      name: 'Auto Loans',
      description: 'Finance your dream car with competitive rates and flexible terms',
      rate: 'Starting at 4.9% APR',
      features: ['New and used vehicles', 'Up to 84-month terms', 'No prepayment penalties', 'Quick approval process'],
      maxAmount: 'Up to $100,000',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: <DollarSign className="h-12 w-12 text-blue-600" />,
      name: 'Personal Loans',
      description: 'Unsecured loans for any personal need with fixed rates and payments',
      rate: 'Starting at 6.9% APR',
      features: ['No collateral required', 'Fixed monthly payments', 'Same-day funding available', 'Debt consolidation options'],
      maxAmount: 'Up to $50,000',
      image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: <Home className="h-12 w-12 text-blue-600" />,
      name: 'Home Equity Loans',
      description: 'Tap into your home\'s equity for major expenses with low rates',
      rate: 'Starting at 5.5% APR',
      features: ['Fixed interest rates', 'Tax-deductible interest', 'Large loan amounts', 'Flexible repayment terms'],
      maxAmount: 'Up to $500,000',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-blue-600" />,
      name: 'Student Loans',
      description: 'Invest in your education with competitive student loan options',
      rate: 'Starting at 3.9% APR',
      features: ['Undergraduate & graduate loans', 'Flexible repayment options', 'No origination fees', 'Cosigner release available'],
      maxAmount: 'Up to cost of attendance',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const loanProcess = [
    {
      step: 1,
      title: 'Apply Online',
      description: 'Complete our simple online application in just minutes',
      icon: <Calculator className="h-8 w-8 text-blue-600" />
    },
    {
      step: 2,
      title: 'Quick Review',
      description: 'Get a decision within 24 hours of submitting your application',
      icon: <Clock className="h-8 w-8 text-blue-600" />
    },
    {
      step: 3,
      title: 'Secure Funding',
      description: 'Once approved, receive your funds quickly and securely',
      icon: <Shield className="h-8 w-8 text-blue-600" />
    }
  ];

  const benefits = [
    'Competitive interest rates',
    'Flexible repayment terms',
    'No prepayment penalties',
    'Quick approval process',
    'Local decision making',
    'Personalized service'
  ];

  const requirements = [
    'Minimum credit score of 650',
    'Stable employment history',
    'Debt-to-income ratio below 40%',
    'Valid government-issued ID',
    'Proof of income',
    'Bank statements'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Loans That Fit Your Life
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Whether you're buying a car, consolidating debt, or funding a major purchase, we have competitive loan options to help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/open-account"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Apply for a Loan
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Speak with Loan Officer
            </Link>
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Loan Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of loan products designed to meet your specific financial needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {loanTypes.map((loan, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={loan.image}
                      alt={loan.name}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center mb-4">
                      {loan.icon}
                      <h3 className="text-2xl font-bold text-gray-900 ml-3">{loan.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{loan.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Interest Rate</p>
                        <p className="font-semibold text-green-600">{loan.rate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Max Amount</p>
                        <p className="font-semibold text-gray-900">{loan.maxAmount}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {loan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      to="/open-account"
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                    >
                      Apply Now →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple Loan Process
            </h2>
            <p className="text-xl text-gray-600">
              Getting a loan with SecureBank is quick, easy, and transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loanProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits and Requirements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Loans?</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  to="/open-account"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Apply Today
                </Link>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Loan Requirements</h3>
              <p className="text-gray-600 mb-6">
                To qualify for a loan with SecureBank, you'll typically need to meet these basic requirements:
              </p>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                >
                  Questions about requirements? Contact us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Calculator Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Calculate Your Loan Payment
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Use our loan calculator to estimate your monthly payments and find the loan that fits your budget.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto">
            <div className="text-center text-gray-900">
              <Calculator className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Loan Calculator</h3>
              <p className="text-gray-600 mb-6">
                Interactive loan calculator would be implemented here with real-time calculations for different loan amounts, terms, and interest rates.
              </p>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Get Personalized Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Apply for Your Loan?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Take the next step toward achieving your financial goals. Our loan specialists are here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/open-account"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Start Your Application
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Talk to a Specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loans;