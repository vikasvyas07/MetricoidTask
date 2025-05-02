import React from 'react';

const Footer = () => {
  return (
    <footer class="bg-gray-900 text-gray-300 px-6 py-4">
  <div class="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
    
    <div class="flex space-x-6">
      <a href="#" class="hover:text-white">Twitter</a>
      <a href="#" class="hover:text-white">Facebook</a>
      <a href="#" class="hover:text-white">Instagram</a>
    </div>

    
    <div class="text-sm text-gray-400">
      © 2024 All rights reserved.
    </div>
  </div>
</footer>

  );
}

export default Footer;
