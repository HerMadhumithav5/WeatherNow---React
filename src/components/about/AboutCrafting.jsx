// components/AboutCrafting.jsx
import React from 'react';
import { Zap, MapPin, Globe } from 'lucide-react';

const AboutCrafting = () => {
  const cards = [
    {
      icon: Zap,
      title: "Instant Updates",
      description: "Real-time alerts for lightning and sudden weather shifts."
    },
    {
      icon: MapPin,
      title: "Smart Insights",
      description: "AI analyzes routines and suggests ideal outdoor times."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with weather stations worldwide."
    }
  ];

  return (
    <section className="bg-[#0b1120] py-24 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-3 text-white">Crafting the Future</h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          We combine global satellite networks with proprietary AI to predict
          micro-climates that others miss.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:scale-105 transition-all hover:border-yellow-400/30">
              <card.icon className="text-yellow-400 mb-3 mx-auto" size={32} />
              <h4 className="font-semibold text-white">{card.title}</h4>
              <p className="text-gray-400 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCrafting;