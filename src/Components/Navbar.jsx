
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    about: false,
    portfolio: false,
    blog: false,
  });

  const handleDropdown = (key, value) => {
    setDropdowns(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <nav className="bg-gray-900 text-white relative">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 text-white font-bold text-xl rounded-full flex items-center justify-center">
            A
          </div>
          <span className="font-semibold text-lg">Alex Smith</span>
        </div>

        
        <ul className="hidden md:flex space-x-6 items-center text-gray-300 relative">
    
          <li
            className="hover:text-white relative cursor-pointer"
            onMouseEnter={() => handleDropdown('about', true)}
            onMouseLeave={() => handleDropdown('about', false)}
          >
            <div className="flex items-center gap-1">
              About Me <ChevronDown size={16} />
            </div>
            {dropdowns.about && (
              <ul className="absolute left-0 mt-2 w-48 bg-gray-800 text-sm rounded-lg shadow-lg py-2 z-10">
                {['About Me 1', 'About Me 2', 'About Me 3', 'About Me 4', 'About Me 5', 'About Me 6', 'Home 1', 'Home 2'].map(item => (
                  <li key={item} className="px-4 py-2 hover:bg-gray-700 text-gray-300 hover:text-white cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>

          
          <li className="hover:text-white">Resume</li>

          
          <li
            className="hover:text-white relative cursor-pointer"
            onMouseEnter={() => handleDropdown('portfolio', true)}
            onMouseLeave={() => handleDropdown('portfolio', false)}
          >
            <div className="flex items-center gap-1">
              Portfolio <ChevronDown size={16} />
            </div>
            {dropdowns.portfolio && (
              <ul className="absolute left-0 mt-2 w-48 bg-gray-800 text-sm rounded-lg shadow-lg py-2 z-10">
                {['Portfolio 1', 'Portfolio 2', 'Portfolio 3'].map(item => (
                  <li key={item} className="px-4 py-2 hover:bg-gray-700 text-gray-300 hover:text-white cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>

          
          <li
            className="hover:text-white relative cursor-pointer"
            onMouseEnter={() => handleDropdown('blog', true)}
            onMouseLeave={() => handleDropdown('blog', false)}
          >
            <div className="flex items-center gap-1">
              Blog <ChevronDown size={16} />
            </div>
            {dropdowns.blog && (
              <ul className="absolute left-0 mt-2 w-48 bg-gray-800 text-sm rounded-lg shadow-lg py-2 z-10">
                {['Blog Grid', 'Blog List', 'Blog Single'].map(item => (
                  <li key={item} className="px-4 py-2 hover:bg-gray-700 text-gray-300 hover:text-white cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>

          
          <li className="hover:text-white">Contact</li>
          <li className="hover:text-white">Extra</li>
          <li className="hover:text-white">Get it Now</li>
        </ul>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col px-4 pb-4 space-y-2 text-gray-300">
          <li className="hover:text-white">About Me</li>
          <li className="hover:text-white">Resume</li>
          <li className="hover:text-white">Portfolio</li>
          <li className="hover:text-white">Blog</li>
          <li className="hover:text-white">Contact</li>
          <li className="hover:text-white">Extra</li>
          <li className="hover:text-white">Get it Now</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
