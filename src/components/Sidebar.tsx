import React, { useState } from 'react';
import { XIcon as Icon } from 'lucide-react';
import * as Icons from 'lucide-react';
import { navItems } from '../data/navItems';

interface SidebarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPath, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Dynamically get the icon component
  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<
      React.ComponentProps<Icon>
    >;
    return IconComponent ? <IconComponent size={20} /> : null;
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? 
          <Icons.X size={24} /> : 
          <Icons.Menu size={24} />
        }
      </button>
      
      {/* Sidebar for desktop */}
      <div className="hidden lg:flex fixed left-0 top-0 h-full w-64 bg-gray-900 text-white flex-col z-40">
        <div className="p-6 border-b border-gray-800">
          <h1 className="text-xl font-bold">Nahedh Mohamed Aziz</h1>
          <p className="text-gray-400 mt-1">Web & Software Developer</p>
        </div>
        
        <nav className="flex-1 py-6">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <button
                  onClick={() => onNavigate(item.path)}
                  className={`w-full text-left px-6 py-3 flex items-center space-x-3 transition-colors duration-200 ${
                    currentPath === item.path
                      ? 'bg-indigo-700 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <span className="flex-shrink-0">{getIcon(item.icon)}</span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-6 border-t border-gray-800">
          <div className="flex items-center space-x-3">
            <Icons.Mail size={18} className="text-gray-400" />
            <span className="text-sm text-gray-400">nahedhaziz64@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3 mt-2">
            <Icons.Phone size={18} className="text-gray-400" />
            <span className="text-sm text-gray-400">+216-94895342</span>
          </div>
        </div>
      </div>
      
      {/* Mobile sidebar (slide in) */}
      <div 
        className={`lg:hidden fixed inset-0 bg-gray-900 bg-opacity-80 z-30 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMobileMenu}
      />
      
      <div 
        className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-gray-900 text-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-gray-800">
          <h1 className="text-xl font-bold">Nahedh Mohamed Aziz</h1>
          <p className="text-gray-400 mt-1">Web & Software Developer</p>
        </div>
        
        <nav className="py-6">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <button
                  onClick={() => {
                    onNavigate(item.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-6 py-3 flex items-center space-x-3 transition-colors duration-200 ${
                    currentPath === item.path
                      ? 'bg-indigo-700 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <span className="flex-shrink-0">{getIcon(item.icon)}</span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-6 border-t border-gray-800">
          <div className="flex items-center space-x-3">
            <Icons.Mail size={18} className="text-gray-400" />
            <span className="text-sm text-gray-400">nahedhaziz64@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3 mt-2">
            <Icons.Phone size={18} className="text-gray-400" />
            <span className="text-sm text-gray-400">+216-94895342</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;