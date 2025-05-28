import React from 'react';
import { ArrowRight, Code, Server, Database, Layout } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:min-h-[80vh] flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Web & App <span className="text-indigo-500">Development</span> Services
              </h1>
              
              <p className="mt-6 text-xl text-gray-300 leading-relaxed max-w-2xl">
                I help clients and companies build scalable websites and mobile apps using modern tools like React, Node.js, Supabase, and Flutter.
              </p>
              
              <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-5">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-indigo-400">20+</p>
                  <p className="text-gray-400 mt-1">Completed Projects</p>
                </div>
                
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-indigo-400">3+</p>
                  <p className="text-gray-400 mt-1">Years Experience</p>
                </div>
                
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-indigo-400">MERN</p>
                  <p className="text-gray-400 mt-1">& Mobile Stack</p>
                </div>
              </div>
              
              <button className="mt-10 inline-flex items-center bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 group">
                Get in Touch
                <ArrowRight size={18} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
            
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Placeholder for profile image */}
                <div className="w-full aspect-[3/4] bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white text-xl font-medium">Profile Photo</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -right-4 -bottom-4 w-2/3 h-2/3 border-2 border-indigo-500 rounded-2xl -z-10"></div>
                <div className="absolute -left-4 -top-4 w-2/3 h-2/3 border-2 border-indigo-500 rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">My Expertise</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Focused on delivering responsive, performant, and user-friendly digital solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10">
              <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center text-indigo-500 mb-4">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Frontend Development</h3>
              <p className="text-gray-400">
                Building responsive and interactive user interfaces with modern frameworks like React and Vue.
              </p>
            </div>
            
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10">
              <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center text-indigo-500 mb-4">
                <Server size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Backend Development</h3>
              <p className="text-gray-400">
                Creating robust and scalable server-side applications with Node.js, Express, and MongoDB.
              </p>
            </div>
            
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10">
              <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center text-indigo-500 mb-4">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Database Design</h3>
              <p className="text-gray-400">
                Designing and implementing efficient database structures with SQL and NoSQL solutions.
              </p>
            </div>
            
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10">
              <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center text-indigo-500 mb-4">
                <Layout size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">UI/UX Design</h3>
              <p className="text-gray-400">
                Creating intuitive and visually appealing user experiences with a focus on usability.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to start your project?</h2>
              <p className="text-indigo-100 mb-8 text-lg">
                Let's collaborate to bring your ideas to life with cutting-edge web and mobile solutions.
              </p>
              <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;