import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, PieChart, Shield, Target, CheckCircle, DollarSign, BarChart3, Users } from 'lucide-react';

const Investments: React.FC = () => {
  const investmentServices = [
    {
      icon: <PieChart className="h-12 w-12 text-blue-600" />,
      name: 'Portfolio Management',
      description: 'Professional portfolio management tailored to your risk tolerance and goals',
      features: [
        'Diversified investment strategies',
        'Regular portfolio rebalancing',
        'Tax-efficient investing',
        'Quarterly performance reviews'
      ],
      minimumInvestment: '$25,000',
      managementFee: '0.75% - 1.25%'
    },
    {
      icon: <Target className="h-12 w-12 text-blue-600" />,
      name: 'Retirement Planning',
      description: 'Comprehensive retirement planning to help secure your financial future',
      features: [
        'IRA and Roth IRA accounts',
        '401(k) rollover services',
        'Retirement income planning',
        'Social Security optimization'
      ],
      minimumInvestment: '$1,000',
      managementFee: 'No advisory fees'
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-blue-600" />,
      name: 'Investment Advisory',
      description: 'Personalized investment advice from certified financial planners',
      features: [
        'One-on-one consultations',
        'Financial goal planning',
        'Risk assessment',
        'Investment education'
      ],
      minimumInvestment: '$10,000',
      managementFee: '$150/hour consultation'
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      name: 'Trust Services',
      description: 'Estate planning and trust services to protect and transfer wealth',
      features: [
        'Revocable and irrevocable trusts',
        'Estate administration',
        'Wealth transfer strategies',
        'Tax planning services'
      ],
      minimumInvestment: '$100,000',
      managementFee: 'Custom pricing'
    }
  ];

  const investmentOptions = [
    {
      type: 'Conservative Portfolio',
      riskLevel: 'Low',
      expectedReturn: '4-6% annually',
      allocation: '70% Bonds, 30% Stocks',
      description: 'Ideal for investors seeking steady income with minimal risk'
    },
    {
      type: 'Moderate Portfolio',
      riskLevel: 'Medium',
      expectedReturn: '6-8% annually',
      allocation: '50% Stocks, 50% Bonds',
      description: 'Balanced approach for long-term growth with moderate risk'
    },
    {
      type: 'Growth Portfolio',
      riskLevel: 'Medium-High',
      expectedReturn: '8-10% annually',
      allocation: '70% Stocks, 30% Bonds',
      description: 'Focused on capital appreciation for long-term investors'
    },
    {
      type: 'Aggressive Portfolio',
      riskLevel: 'High',
      expectedReturn: '10-12% annually',
      allocation: '90% Stocks, 10% Bonds',
      description: 'Maximum growth potential for risk-tolerant investors'
    }
  ];

  const retirementAccounts = [
    {
      name: 'Traditional IRA',
      description: 'Tax-deductible contributions with tax-deferred growth',
      benefits: ['Tax-deductible contributions', 'Tax-deferred growth', 'Wide investment options'],
      contribution: '$6,500 annually (2024)'
    },
    {
      name: 'Roth IRA',
      description: 'After-tax contributions with tax-free withdrawals in retirement',
      benefits: ['Tax-free withdrawals', 'No required distributions', 'Estate planning benefits'],
      contribution: '$6,500 annually (2024)'
    },
    {
      name: '401(k) Rollover',
      description: 'Transfer your employer 401(k) to an IRA for more investment options',
      benefits: ['More investment choices', 'Lower fees', 'Consolidated accounts'],
      contribution: 'No annual limits'
    }
  ];

  const advisoryProcess = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Meet with our certified financial planners to discuss your goals and current situation'
    },
    {
      step: 2,
      title: 'Risk Assessment',
      description: 'Complete a comprehensive risk tolerance questionnaire to determine your investment profile'
    },
    {
      step: 3,
      title: 'Custom Strategy',
      description: 'Receive a personalized investment strategy tailored to your specific needs and timeline'
    },
    {
      step: 4,
      title: 'Implementation',
      description: 'Execute your investment plan with ongoing monitoring and regular reviews'
    }
  ];

  const benefits = [
    'SIPC insured investment accounts',
    'No account maintenance fees',
    'Access to institutional-quality investments',
    'Dedicated investment advisors',
    'Online portfolio tracking',
    'Tax-loss harvesting strategies'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Invest in Your Future
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Build wealth and secure your financial future with our comprehensive investment and retirement planning services. From portfolio management to retirement accounts, we're here to help you grow your money.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/open-account"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 text-center"
                >
                  Start Investing
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 text-center"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Investment Growth"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                  <div>
                    <p className="font-semibold text-gray-900">SIPC Insured</p>
                    <p className="text-sm text-gray-600">Up to $500,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Investment & Wealth Management Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of investment services designed to help you build and preserve wealth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {investmentServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-gray-900 ml-3">{service.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Minimum Investment</p>
                    <p className="font-semibold text-blue-600">{service.minimumInvestment}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Management Fee</p>
                    <p className="font-semibold text-gray-900">{service.managementFee}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
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

      {/* Investment Portfolios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Investment Portfolio Options
            </h2>
            <p className="text-xl text-gray-600">
              Choose a portfolio strategy that aligns with your risk tolerance and investment timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{option.type}</h3>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    option.riskLevel === 'Low' ? 'bg-green-100 text-green-800' :
                    option.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    option.riskLevel === 'Medium-High' ? 'bg-orange-100 text-orange-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {option.riskLevel} Risk
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Expected Return</p>
                    <p className="font-semibold text-green-600">{option.expectedReturn}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Asset Allocation</p>
                    <p className="font-semibold text-gray-900">{option.allocation}</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">{option.description}</p>
                
                <Link
                  to="/open-account"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200 text-center block text-sm"
                >
                  Select Portfolio
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retirement Accounts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Retirement Account Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Secure your retirement with tax-advantaged accounts designed to help your money grow over time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {retirementAccounts.map((account, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{account.name}</h3>
                <p className="text-gray-600 mb-4">{account.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Annual Contribution Limit</p>
                  <p className="font-semibold text-blue-600">{account.contribution}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {account.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to="/open-account"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200 text-center block"
                >
                  Open Account
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Process */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Investment Advisory Process
            </h2>
            <p className="text-xl text-gray-600">
              We take a personalized approach to help you achieve your financial goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {advisoryProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
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
                Why Invest with SecureBank?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our investment services combine professional expertise with personalized attention to help you build long-term wealth.
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
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Investment Success"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-6 -right-6 bg-green-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-bold">25,000+</p>
                  <p className="text-sm">Investors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See Your Investment Potential
            </h2>
            <p className="text-xl text-gray-600">
              Use our investment calculator to see how your money could grow over time.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <div className="text-center">
              <DollarSign className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Investment Calculator</h3>
              <p className="text-gray-600 mb-6">
                Interactive investment calculator would be implemented here showing compound growth projections based on different contribution amounts and time horizons.
              </p>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Get Investment Projection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Building Wealth?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take control of your financial future with our comprehensive investment and retirement planning services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/open-account"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Open Investment Account
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investments;