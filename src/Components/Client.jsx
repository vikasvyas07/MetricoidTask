import React from 'react';

const Client = () => {
  return (
    <div>
    
<div class="bg-gray-900 text-white px-6 py-10">
  
  <div class="mb-16">
    <h2 class="text-2xl font-bold border-b-2 border-blue-500 inline-block mb-6">Clients</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
      <span class="text-gray-400 font-semibold">GOLDENGRID.</span>
      <span class="text-gray-400 font-semibold">SWEETY</span>
      <span class="text-gray-400 font-semibold">MAGIC<br />FURNITURES</span>
      <span class="text-gray-400 font-semibold">LIFEGUARD</span>
      {/* <span class="text-gray-400 font-semibold text-xl">{less}</span> */}
      <span class="text-gray-400 font-semibold">DESIGN<br />LOVERS</span>
    </div>
  </div>

  
  <div>
    <h2 class="text-2xl font-bold border-b-2 border-blue-500 inline-block mb-6">Fun Facts</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      <div class="bg-gray-800 p-6 rounded-lg text-center border border-gray-700">
        <div class="text-blue-500 text-3xl mb-2">❤️</div>
        <h3 class="font-semibold text-lg">Happy Clients</h3>
        <p class="text-4xl mt-2 font-light">578</p>
      </div>

      
      <div class="bg-gray-800 p-6 rounded-lg text-center border border-gray-700">
        <div class="text-blue-500 text-3xl mb-2">⌚</div>
        <h3 class="font-semibold text-lg">Working Hours</h3>
        <p class="text-4xl mt-2 font-light">4,780</p>
      </div>

    
      <div class="bg-gray-800 p-6 rounded-lg text-center border border-gray-700">
        <div class="text-blue-500 text-3xl mb-2">⭐</div>
        <h3 class="font-semibold text-lg">Awards Won</h3>
        <p class="text-4xl mt-2 font-light">15</p>
      </div>

    
      <div class="bg-gray-800 p-6 rounded-lg text-center border border-gray-700">
        <div class="text-blue-500 text-3xl mb-2">☕</div>
        <h3 class="font-semibold text-lg">Coffee Consumed</h3>
        <p class="text-4xl mt-2 font-light">1,286</p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default Client;
