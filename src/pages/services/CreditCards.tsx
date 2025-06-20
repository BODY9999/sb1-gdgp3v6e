import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Gift, Plane, Shield, CheckCircle, Star, DollarSign, Percent } from 'lucide-react';

const CreditCards: React.FC = () => {
  const creditCards = [
    {
      name: 'SecureBank Cashback Card',
      type: 'Cashback Rewards',
      image: 'https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&w=400',
      rewards: '2% cashback on all purchases',
      apr: '15.9% - 24.9% APR',
      annualFee: '$0',
      features: [
        '2% cashback on all purchases',
        'No annual fee',
        '0% intro APR for 12 months',
        'No foreign transaction fees',
        'Free credit score monitoring'
      ],
      benefits: [
        'Unlimited cashback earning',
        'Automatic cashback redemption',
        'Mobile wallet compatibility',
        'Fraud protection guarantee'
      ]
    },
    {
      name: 'SecureBank Travel Rewards Card',
      type: 'Travel Rewards',
      image: 'https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&w=400',
      rewards: '3x points on travel & dining',
      apr: '16.9% - 25.9% APR',
      annualFee: '$95',
      features: [
        '3x points on travel and dining',
        '1x points on all other purchases',
        'No foreign transaction fees',
        'Travel insurance included',
        'Airport lounge access'
      ],
      benefits: [
        'Flexible point redemption',
        'Transfer to airline partners',
        'Trip cancellation protection',
        'Concierge service'
      ]
    },
    {
      name: 'SecureBank Business Card',
      type: 'Business Rewards',
      image: 'https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&w=400',
      rewards: '3% cashback on business purchases',
      apr: '14.9% - 22.9% APR',
      annualFee: '$0',
      features: [
        '3% cashback on office supplies',
        '2% cashback on gas and restaurants',
        '1% cashback on all other purchases',
        'Employee cards at no cost',
        'Expense management tools'
      ],
      benefits: [
        'Quarterly and annual summaries',
        'Integration with accounting software',
        'Higher credit limits',
        'Business customer service'
      ]
    }
  ];

  const cardFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Fraud Protection',
      description: 'Advanced security features and zero liability protection for unauthorized transactions.'
    },
    {
      icon: <DollarSign className="h-8 w-8 text-blue-600" />,
      title: 'No Hidden Fees',
      description: 'Transparent pricing with no surprise fees or charges on your credit card account.'
    },
    {
      icon: <Percent className="h-8 w-8 text-blue-600" />,
      title: 'Competitive Rates',
      description: 'Low interest rates and promotional offers to help you save money on purchases.'
    },
    {
      icon: <Star className="h-8 w-8 text-blue-600" />,
      title: 'Reward Programs',
      description: 'Earn valuable rewards on every purchase with our flexible redemption options.'
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: 'Choose Your Card',
      description: 'Select the credit card that best fits your spending habits and lifestyle.'
    },
    {
      step: 2,
      title: 'Apply Online',
      description: 'Complete our secure online application in just a few minutes.'
    },
    {
      step: 3,
      title: 'Get Instant Decision',
      description: 'Receive an instant decision on your application in most cases.'
    },
    {
      step: 4,
      title: 'Start Using Your Card',
      description: 'Receive your card in 7-10 business days and start earning rewards.'
    }
  ];

  const benefits = [
    'No annual fee on select cards',
    'Competitive interest rates',
    'Flexible payment options',
    'Mobile app with account management',
    '24/7 customer service',
    'Contactless payment technology'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Credit Cards That Reward You
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Discover credit cards designed to fit your lifestyle. Earn rewards on every purchase while enjoying competitive rates and exceptional service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/open-account"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 text-center"
                >
                  Apply for a Card
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 text-center"
                >
                  Compare Cards
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Credit Cards"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <Gift className="h-6 w-6 text-green-500" />
                  <div>
                    <p className="font-semibold text-gray-900">Earn Rewards</p>
                    <p className="text-sm text-gray-600">On Every Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Credit Card Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our selection of credit cards, each designed to maximize your rewards and benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {creditCards.map((card, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {card.type}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{card.name}</h3>
                  <p className="text-lg font-semibold text-blue-600 mb-4">{card.rewards}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">APR</p>
                      <p className="font-semibold text-gray-900">{card.apr}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Annual Fee</p>
                      <p className="font-semibold text-green-600">{card.annualFee}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {card.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to="/open-account"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200 text-center block"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Card Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Credit Cards?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the benefits of banking with SecureBank credit cards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cardFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple Application Process
            </h2>
            <p className="text-xl text-gray-600">
              Getting your new credit card is quick and easy with our streamlined process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {applicationProcess.map((step, index) => (
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
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                More Than Just a Credit Card
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                When you choose a SecureBank credit card, you get access to exclusive benefits and services designed to enhance your financial experience.
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
                alt="Credit Card Benefits"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-6 -right-6 bg-green-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <Plane className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-bold">Travel</p>
                  <p className="text-sm">Benefits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Comparison */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compare Rewards Programs
            </h2>
            <p className="text-xl text-gray-600">
              See how much you could earn with each of our credit card options.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Card Type</th>
                    <th className="px-6 py-4 text-left">Cashback/Points</th>
                    <th className="px-6 py-4 text-left">Annual Fee</th>
                    <th className="px-6 py-4 text-left">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold">Cashback Card</td>
                    <td className="px-6 py-4">2% on all purchases</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">$0</td>
                    <td className="px-6 py-4">Everyday spending</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Travel Rewards</td>
                    <td className="px-6 py-4">3x points on travel & dining</td>
                    <td className="px-6 py-4">$95</td>
                    <td className="px-6 py-4">Frequent travelers</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Business Card</td>
                    <td className="px-6 py-4">3% on business purchases</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">$0</td>
                    <td className="px-6 py-4">Business owners</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Earning Rewards?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Apply for your SecureBank credit card today and start earning rewards on every purchase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/open-account"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Apply for a Card
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Compare All Cards
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreditCards;