import React from 'react';
import { Zap, Leaf, Shield, ChevronRight, Car, Users, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
      >
        <div className="text-center text-white p-8">
          <h1 className="text-5xl font-bold mb-4">Driving the Future Forward</h1>
          <p className="text-xl max-w-2xl mx-auto">Leading the electric vehicles revolution with innovative solutions and sustainable mobility for all</p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Vision</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">Committed to a zero-emission future through innovative electric mobility solutions.</p>
            </div>
            <div className="p-6 hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">Pushing boundaries with cutting-edge technology and forward-thinking solutions.</p>
            </div>
            <div className="p-6 hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-gray-600">Building trust through dependable products and exceptional service.</p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Our Mission</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <p className="text-lg text-gray-700 leading-relaxed">
                We're on a mission to accelerate the world's transition to sustainable energy through accessible electric vehicle solutions. By providing cutting-edge technology and comprehensive support, we empower individuals, businesses, and institutions to embrace the electric future.
              </p>
              {/* <button className="mt-6 inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300">
                Learn More <ChevronRight className="ml-2 w-4 h-4" />
              </button> */}
            </div>
            <div className="flex-1">
              <img 
                src="https://res.cloudinary.com/dxorxllhb/image/upload/v1734323838/Buggy_fnp5jz_y2shp0.png" 
                alt="Electric Vehicle Charging"
                className="rounded-lg "
              />
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-6 bg-white rounded-xl hover:shadow-xl transition-all duration-300">
              <Car className="w-12 h-12 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-3">Premium Fleet</h3>
              <p className="text-gray-600">Access to the latest electric vehicles with cutting-edge technology and features.</p>
            </div>
            <div className="group p-6 bg-white rounded-xl hover:shadow-xl transition-all duration-300">
              <Users className="w-12 h-12 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-gray-600">Dedicated team of professionals providing comprehensive assistance and guidance.</p>
            </div>
            <div className="group p-6 bg-white rounded-xl hover:shadow-xl transition-all duration-300">
              <Award className="w-12 h-12 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-3">Quality Assured</h3>
              <p className="text-gray-600">Rigorous quality control and maintenance standards for all our vehicles.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <button onClick={() => window.open("https://forms.gle/cdY7pErDE2RTG8mb6", "_blank")}
             className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-flex items-center">
              Join Our Network <ChevronRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;