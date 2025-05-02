import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-4 py-12 md:py-24">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl">
        
        {/* Left: Profile Image */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-[10px] border-gray-700 overflow-hidden shadow-xl">
            <img
              src="./cesar-rincon-1024x1024.jpg" 
              alt="Alex Smith"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

    
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-gray-400 text-sm mb-2">Web Designer</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Alex Smith</h1>
          <p className="text-gray-300 mb-6">
            Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis,
            risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis
            purus ex eu mi.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition">
              Download CV
            </button>
            <button className="bg-transparent border border-gray-400 text-white px-6 py-2 rounded-full shadow hover:bg-gray-800 transition">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
