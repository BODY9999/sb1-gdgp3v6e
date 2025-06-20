import React from 'react';
import { Award, Users, Shield, TrendingUp, Target, Heart, Clock } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Trust & Security',
      description: 'We prioritize the security of your financial information and maintain the highest standards of data protection.'
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: 'Customer First',
      description: 'Our customers are at the center of everything we do. We listen, understand, and deliver solutions that matter.'
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Innovation',
      description: 'We continuously evolve our services and technology to provide you with the best banking experience.'
    }
  ];

  const leaders = [
    {
      name: 'Robert Johnson',
      position: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Robert brings over 25 years of banking experience and has led SecureBank to new heights of customer satisfaction.'
    },
    {
      name: 'Sarah Martinez',
      position: 'Chief Financial Officer',
      image: 'https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Sarah oversees our financial strategy and has been instrumental in maintaining our strong financial performance.'
    },
    {
      name: 'Michael Chen',
      position: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Michael leads our digital transformation initiatives and ensures our technology remains cutting-edge.'
    }
  ];

  const achievements = [
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      title: 'Best Digital Bank 2024',
      description: 'Banking Innovation Awards'
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: 'Customer Choice Award',
      description: 'Financial Services Excellence'
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      title: 'Top Performing Bank',
      description: 'Regional Banking Excellence'
    }
  ];

  const stats = [
    { number: '500,000+', label: 'Happy Customers' },
    { number: '$2.5B+', label: 'Assets Under Management' },
    { number: '50+', label: 'Years of Experience' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About SecureBank
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            For over five decades, we've been committed to providing exceptional banking services with a personal touch. Learn about our journey, values, and the team that makes it all possible.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 1974, SecureBank began as a small community bank with a simple mission: to provide honest, reliable financial services to hardworking families and businesses in our community.
                </p>
                <p>
                  Over the years, we've grown from a single branch to a full-service financial institution, but our core values remain unchanged. We believe in building lasting relationships with our customers, understanding their unique needs, and providing personalized solutions that help them achieve their financial goals.
                </p>
                <p>
                  Today, SecureBank serves over 500,000 customers across the region, offering everything from basic checking accounts to complex business financing solutions. Despite our growth, we maintain the personal touch that has made us a trusted name in banking for generations.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our History"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="h-6 w-6" />
                  <div>
                    <p className="font-bold text-lg">50+</p>
                    <p className="text-sm">Years Serving</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're guided by principles that put our customers first and drive us to excellence in everything we do.
            </p>
          </div>
          
          <div className="bg-blue-600 text-white rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-center mb-4">Our Mission</h3>
            <p className="text-lg text-center text-blue-100 max-w-4xl mx-auto">
              To empower individuals and businesses to achieve their financial goals through innovative banking solutions, exceptional service, and unwavering commitment to their success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              By the Numbers
            </h2>
            <p className="text-xl text-blue-100">
              Our track record speaks for itself
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the experienced professionals who lead SecureBank
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{leader.position}</p>
                  <p className="text-gray-600 text-sm">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600">
              We're proud to be recognized for our excellence in banking
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="flex justify-center mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;