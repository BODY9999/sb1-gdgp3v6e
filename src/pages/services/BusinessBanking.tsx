import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, TrendingUp, Shield, Users, CheckCircle, CreditCard, Calculator, Briefcase } from 'lucide-react';

const BusinessBanking: React.FC = () => {
  const businessAccounts = [
    {
      name: 'Business Checking',
      description: 'Essential banking for small businesses and startups',
      features: ['200 free transactions per month', 'Free online banking', 'Mobile deposit', 'Debit card included', 'No minimum balance'],
      monthlyFee: '$10',
      cta: 'Open Business Account'
    },
    {
      name: 'Business Savings',
      description: 'Earn interest on your business funds',
      features: ['1.8% APY on balances', 'No monthly fees', 'Online transfers', 'FDIC insured', 'Automatic savings plans'],
      monthlyFee: 'No fees',
      cta: 'Start Earning Interest'
    },
    {
      name: 'Commercial Banking',
      description: 'Advanced solutions for established businesses',
      features: ['Dedicated relationship manager', 'Cash management services', 'Commercial lending', 'Treasury services', 'International banking'],
      monthlyFee: 'Custom pricing',
      cta: 'Contact Us'
    }
  ];

  const services = [
    {
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
      title: 'Merchant Services',
      description: 'Accept payments anywhere with our comprehensive merchant solutions including credit card processing, POS systems, and online payments.'
    },
    {
      icon: <Calculator className="h-8 w-8 text-blue-600" />,
      title: 'Cash Management',
      description: 'Optimize your cash flow with automated clearing house (ACH), wire transfers, and remote deposit capture services.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: 'Business Lending',
      description: 'Fuel your growth with flexible financing options including lines of credit, term loans, and equipment financing.'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Fraud Protection',
      description: 'Protect your business with advanced security features, positive pay services, and real-time fraud monitoring.'
    }
  ];

  const lendingOptions = [
    {
      type: 'Business Line of Credit',
      amount: 'Up to $500,000',
      rate: 'Starting at 6.5% APR',
      description: 'Flexible access to funds when you need them most'
    },
    {
      type: 'Term Loans',
      amount: 'Up to $2,000,000',
      rate: 'Starting at 5.9% APR',
      description: 'Fixed-rate financing for major business investments'
    },
    {
      type: 'Equipment Financing',
      amount: 'Up to $1,000,000',
      rate: 'Starting at 6.2% APR',
      description: 'Finance equipment purchases with competitive rates'
    },
    {
      type: 'Commercial Real Estate',
      amount: 'Up to $5,000,000',
      rate: 'Starting at 5.5% APR',
      description: 'Purchase or refinance commercial properties'
    }
  ];

  const benefits = [
    'Dedicated business banking specialists',
    'Online and mobile banking with business features',
    'Integration with popular accounting software',
    'Same-day ACH processing available',
    'Business credit cards with rewards',
    'Payroll services and employee benefits'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Banking Solutions That Grow With Your Business
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                From startups to established enterprises, we provide comprehensive business banking solutions designed to help your business thrive and succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/open-account"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 text-center"
                >
                  Open Business Account
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 text-center"
                >
                  Speak with Specialist
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Business Banking"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <Building2 className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">SBA Preferred</p>
                    <p className="text-sm text-gray-600">Lender</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Accounts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Business Banking Accounts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of business accounts designed to meet the unique needs of your company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessAccounts.map((account, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg border-2 border-gray-200 hover:border-blue-500 transition-colors duration-300">
                <div className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{account.name}</h3>
                    <p className="text-gray-600 mb-4">{account.description}</p>
                    <div className="text-2xl font-bold text-blue-600">{account.monthlyFee}</div>
                    {account.monthlyFee !== 'No fees' && account.monthlyFee !== 'Custom pricing' && (
                      <p className="text-sm text-gray-500">per month</p>
                    )}
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
                    to={account.cta === 'Contact Us' ? '/contact' : '/open-account'}
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

      {/* Business Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Business Services
            </h2>
            <p className="text-xl text-gray-600">
              Everything your business needs to operate efficiently and grow successfully.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Lending */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Business Lending Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access the capital you need to grow your business with our competitive lending options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lendingOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{option.type}</h3>
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Loan Amount:</span>
                    <span className="font-semibold text-gray-900">{option.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Interest Rate:</span>
                    <span className="font-semibold text-green-600">{option.rate}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <Link
                  to="/contact"
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                >
                  Learn More →
                </Link>
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
                Why Choose SecureBank for Business?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We understand that every business is unique. That's why we offer personalized service and tailored solutions to help your business succeed.
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
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Business Success"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-6 -right-6 bg-green-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-bold">50,000+</p>
                  <p className="text-sm">Business Customers</p>
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
            Ready to Take Your Business to the Next Level?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our business banking specialists help you find the right solutions for your company's unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/open-account"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Open Business Account
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessBanking;