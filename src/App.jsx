import React from 'react';
import Navbar from './Components/NavBar';
import HeroSection from './Components/Herosection';
import WhatIDoTestimonials from './Components/WhatIDoTestimonials ';
import Client from './Components/Client';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhatIDoTestimonials />
      <Client />
      <Footer />
      
    </div>
  );
}

export default App;
