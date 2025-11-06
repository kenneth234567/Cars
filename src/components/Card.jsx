import React from "react";
import { Gauge, Sparkles, Zap } from "lucide-react";

export default function Card({ icon, title, description }) {
  const icons = {
    speed: <Gauge className="w-10 h-10 text-indigo-400" />,
    design: <Sparkles className="w-10 h-10 text-purple-400" />,
    power: <Zap className="w-10 h-10 text-pink-400" />,
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl hover:translate-y-[-5px] transition-all">
      <div className="mb-4">{icons[icon]}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}