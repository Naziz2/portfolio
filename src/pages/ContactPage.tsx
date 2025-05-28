import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, Calendar, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-300 mb-12">
              Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-indigo-400 mt-1 mr-3" />
                      <div>
                        <h3 className="text-sm font-medium text-gray-400">Email</h3>
                        <a href="mailto:nahedhaziz64@gmail.com" className="text-white hover:text-indigo-400 transition-colors">
                          nahedhaziz64@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-indigo-400 mt-1 mr-3" />
                      <div>
                        <h3 className="text-sm font-medium text-gray-400">Phone</h3>
                        <a href="tel:+21694895342" className="text-white hover:text-indigo-400 transition-colors">
                          +216-94895342
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-indigo-400 mt-1 mr-3" />
                      <div>
                        <h3 className="text-sm font-medium text-gray-400">Schedule a Meeting</h3>
                        <a href="#" className="text-white hover:text-indigo-400 transition-colors">
                          Book a consultation
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-indigo-400 mt-1 mr-3" />
                      <div>
                        <h3 className="text-sm font-medium text-gray-400">Location</h3>
                        <p className="text-white">Tunisia</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-700">
                    <h3 className="text-sm font-medium text-gray-400 mb-4">Connect with me</h3>
                    <div className="flex space-x-4">
                      <a 
                        href="#" 
                        className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-indigo-600 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-indigo-600 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={18} />
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-indigo-600 transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;