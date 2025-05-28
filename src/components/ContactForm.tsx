import React, { useState } from 'react';
import { Send, Plane as PaperPlane } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setIsAnimating(true);
      
      // Simulate form submission with random success/failure
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Randomly determine success or failure (80% success rate)
      const isSuccess = Math.random() < 0.8;
      setSubmitSuccess(isSuccess);
      setIsSubmitting(false);
      
      if (isSuccess) {
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }
      
      // Reset animation and success states after animation completes
      setTimeout(() => {
        setIsAnimating(false);
        if (isSuccess) {
          setSubmitSuccess(null);
        }
      }, isSuccess ? 2000 : 1500);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      {submitSuccess === true && (
        <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 animate-fade-in">
          Your message has been sent successfully! I'll get back to you soon.
        </div>
      )}
      
      {submitSuccess === false && (
        <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 animate-fade-in">
          Failed to send message. Please try again.
        </div>
      )}
      
      <div className="mb-5">
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg bg-gray-800 text-white border ${
            errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-700 focus:border-indigo-500'
          } outline-none transition-colors`}
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>
      
      <div className="mb-5">
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg bg-gray-800 text-white border ${
            errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-700 focus:border-indigo-500'
          } outline-none transition-colors`}
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>
      
      <div className="mb-5">
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg bg-gray-800 text-white border ${
            errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-700 focus:border-indigo-500'
          } outline-none transition-colors resize-none`}
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className={`send-button w-full py-3 px-6 rounded-lg flex justify-center items-center space-x-2 text-white font-medium ${
          isSubmitting 
            ? 'bg-indigo-700 cursor-not-allowed'
            : submitSuccess === true
            ? 'bg-green-600 hover:bg-green-500'
            : submitSuccess === false
            ? 'bg-red-600 hover:bg-red-500'
            : 'bg-indigo-600 hover:bg-indigo-500'
        }`}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Sending...</span>
          </>
        ) : (
          <>
            <PaperPlane 
              size={18} 
              className={`icon ${isAnimating ? (submitSuccess ? 'animate-fly-success' : 'animate-fly-fail') : ''}`}
            />
            <span>Send Message</span>
          </>
        )}
      </button>
      
      <div className="mt-6 text-center text-gray-400 text-sm">
        Prefer email? Contact me directly at <a href="mailto:nahedhaziz64@gmail.com" className="text-indigo-400 hover:underline">nahedhaziz64@gmail.com</a>
      </div>
    </form>
  );
};

export default ContactForm;