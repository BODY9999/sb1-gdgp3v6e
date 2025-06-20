import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Calculator, CheckCircle, Key, TrendingDown, Shield, Users, Clock } from 'lucide-react';

const Mortgages: React.FC = () => {
  const mortgageTypes = [
    {
      name: 'Conventional Loans',
      description: 'Traditional mortgages with competitive rates and flexible terms',
      rate: 'Starting at 6.5% APR',
      downPayment: 'As low as 3%',
      features: [
        'Fixed and adjustable rate options',
        'Loan amounts up to $766,550',
        'Terms from 15 to 30 years',
        'No mortgage insurance with 20% down'
      ],
      bestFor: 'Borrowers with good credit and stable income'
    },
    {
      name: 'FHA Loans',
      description: 'Government-backed loans with lower down payment requirements',
      rate: 'Starting at 6.2% APR',
      downPayment: 'As low as 3.5%',
      features: [
        'Lower credit score requirements',
        'Down payment as low as 3.5%',
        'Assumable mortgages',
        'Streamlined refinancing options'
      ],
      bestFor: 'First-time homebuyers and those with limited savings'
    },
    {
      name: 'VA Loans',
      description: 'Exclusive benefits for eligible veterans and service members',
      rate: 'Starting at 6.0% APR',
      downPayment: '$0 down payment',
      features: [
        'No down payment required',
        'No private mortgage insurance',
        'Competitive interest rates',
        'Reusable benefit'
      ],
      bestFor: 'Eligible veterans, active duty, and surviving spouses'
    },
    {
      name: 'Jumbo Loans',
      description: 'Financing for high-value properties above conforming limits',
      rate: 'Starting at 6.8% APR',
      downPayment: 'As low as 10%',
      features: [
        'Loan amounts above $766,550',
        'Competitive rates for large loans',
        'Flexible underwriting',
        'Portfolio lending options'
      ],
      bestFor: 'Luxury home purchases and high-cost areas'
    }
  ];

  const mortgageProcess = [
    {
      step: 1,
      title: 'Get Pre-approved',
      description: 'Start with a free pre-approval to understand your budget and strengthen your offer',
      icon: <Calculator className="h-8 w-8 text-blue-600" />
    },
    {
      step: 2,
      title: 'Find Your Home',
      description: 'Shop for homes within your budget with confidence knowing you\'re pre-approved',
      icon: <Home className="h-8 w-8 text-blue-600" />
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Complete your full mortgage application with our dedicated loan officers',
      icon: <Users className="h-8 w-8 text-blue-600" />
    },
    {
      step: 4,
      title: 'Close on Your Home',
      description: 'Finalize your loan and get the keys to your new home',
      icon: <Key className="h-8 w-8 text-blue-600" />
    }
  ];

  const benefits = [
    'Local underwriting and decision making',
    'Dedicated loan officers throughout the process',
    'Competitive rates and flexible terms',
    'First-time homebuyer programs available',
    'Online application and document upload',
    'Fast approval and closing times'
  ];

  const refinanceOptions = [
    {
      type: 'Rate & Term Refinance',
      description: 'Lower your interest rate or change your loan term',
      benefits: ['Reduce monthly payments', 'Pay off loan faster', 'Switch from ARM to fixed rate']
    },
    {
      type: 'Cash-Out Refinance',
      description: 'Access your home\'s equity for major expenses',
      benefits: ['Home improvements', 'Debt consolidation', 'Investment opportunities']
    },
    {
      type: 'Streamline Refinance',
      description: 'Quick refinancing with minimal documentation',
      benefits: ['Faster processing', 'Reduced paperwork', 'Lower closing costs']
    }
  ];

  const currentRates = [
    { term: '30-Year Fixed', rate: '6.75%', apr: '6.85%' },
    { term: '15-Year Fixed', rate: '6.25%', apr: '6.35%' },
    { term: '5/1 ARM', rate: '5.95%', apr: '7.15%' },
    { term: 'FHA 30-Year', rate: '6.50%', apr: '6.65%' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Your Dream Home Awaits
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Make homeownership a reality with our competitive mortgage rates, flexible terms, and personalized service. From first-time buyers to seasoned investors, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/open-account"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 text-center"
                >
                  Get Pre-approved
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 text-center"
                >
                  Speak with Loan Officer
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dream Home"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <TrendingDown className="h-6 w-6 text-green-500" />
                  <div>
                    <p className="font-semibold text-gray-900">Low Rates</p>
                    <p className="text-sm text-gray-600">Starting at 6.0%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Rates */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Today's Mortgage Rates
            </h2>
            <p className="text-xl text-gray-600">
              Competitive rates updated daily to help you make informed decisions.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Loan Type</th>
                    <th className="px-6 py-4 text-left">Interest Rate</th>
                    <th className="px-6 py-4 text-left">APR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {currentRates.map((rate, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{rate.term}</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">{rate.rate}</td>
                      <td className="px-6 py-4 text-gray-700">{rate.apr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 px-6 py-4">
              <p className="text-sm text-gray-600">
                *Rates shown are for qualified borrowers and subject to change. APR includes fees and other loan costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mortgage Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mortgage Options for Every Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a first-time homebuyer or looking to refinance, we have mortgage solutions tailored to your situation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mortgageTypes.map((mortgage, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{mortgage.name}</h3>
                <p className="text-gray-600 mb-4">{mortgage.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Starting Rate</p>
                    <p className="font-semibold text-green-600">{mortgage.rate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Down Payment</p>
                    <p className="font-semibold text-blue-600">{mortgage.downPayment}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {mortgage.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-1">Best For:</p>
                  <p className="text-sm text-gray-700">{mortgage.bestFor}</p>
                </div>
                
                <Link
                  to="/open-account"
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mortgage Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Path to Homeownership
            </h2>
            <p className="text-xl text-gray-600">
              We make the mortgage process simple and transparent every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {mortgageProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refinancing Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Refinancing Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Already own a home? Explore our refinancing options to potentially lower your payments or access your home's equity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {refinanceOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{option.type}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="space-y-2">
                    {option.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose SecureBank for Your Mortgage?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience the difference of working with a local lender who understands your market and is committed to your success.
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
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Happy Homeowners"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-6 -right-6 bg-green-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <Clock className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-bold">Fast</p>
                  <p className="text-sm">30-Day Close</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mortgage Calculator */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Calculate Your Monthly Payment
            </h2>
            <p className="text-xl text-gray-600">
              Use our mortgage calculator to estimate your monthly payments and see what you can afford.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <div className="text-center">
              <Calculator className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mortgage Calculator</h3>
              <p className="text-gray-600 mb-6">
                Interactive mortgage calculator would be implemented here with real-time calculations for different loan amounts, terms, and interest rates.
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
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Home Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step toward homeownership with a free pre-approval. Our mortgage specialists are ready to help you find the perfect loan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/open-account"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Get Pre-approved Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Talk to Loan Officer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mortgages;