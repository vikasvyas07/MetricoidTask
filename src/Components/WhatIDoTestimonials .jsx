import React from 'react';
import { PenTool, Monitor, Store, Megaphone, Quote } from 'lucide-react';

const services = [
  {
    icon: <PenTool className="text-blue-500 w-8 h-8" />,
    title: 'Copywrite',
    desc: 'Mauris neque libero, aliquet vel mollis nec, euismod sed tellus...',
  },
  {
    icon: <Store className="text-blue-500 w-8 h-8" />,
    title: 'Ecommerce',
    desc: 'Mauris neque libero, aliquet vel mollis nec, euismod sed tellus...',
  },
  {
    icon: <Monitor className="text-blue-500 w-8 h-8" />,
    title: 'Web Design',
    desc: 'Mauris neque libero, aliquet vel mollis nec, euismod sed tellus...',
  },
  {
    icon: <Megaphone className="text-blue-500 w-8 h-8" />,
    title: 'Marketing',
    desc: 'Mauris neque libero, aliquet vel mollis nec, euismod sed tellus...',
  },
];

const testimonials = [
  {
    img: '/images/testimonial1.jpg',
    name: 'Billy Adams',
    position: 'Rolling Thunder',
    text: 'Donec eu est vel metus consequat volutpat. Nunc aliquet euismod mauris, a feugiat urna ullamcorper non.',
  },
  {
    img: '/images/testimonial2.jpg',
    name: 'Gary Johnson',
    position: 'Locost Accessories',
    text: 'Nam tempor commodo mi id sodales. Aenean sit amet nibh nec sapien consequat porta a sit amet diam.',
  },
];

const WhatIDoTestimonials = () => {
  return (
    <div className="bg-[#111] text-white px-4 py-12 md:px-16 space-y-16">
      {/* What I Do */}
      <div>
        <h2 className="text-2xl font-bold border-b-4 inline-block border-blue-500 mb-8">What I Do</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((item, index) => (
            <div key={index} className="flex space-x-4">
              {item.icon}
              <div>
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div>
        <h2 className="text-2xl font-bold border-b-4 inline-block border-blue-500 mb-8">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="flex items-start space-x-4 bg-[#1b1b1b] rounded-lg p-6 border border-gray-700 relative">
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="italic text-gray-300 mb-4">“{t.text}”</p>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-sm text-gray-400">{t.position}</p>
              </div>
              <Quote className="absolute bottom-4 right-4 text-gray-700 opacity-30 w-8 h-8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDoTestimonials;
