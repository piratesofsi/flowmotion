import React from "react";

const AnimationCard = ({ title, children, onCopy }) => {
  return (
    <div className="group relative overflow-hidden p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">

      {/* Preview Area */}
      <div className="h-40 flex items-center justify-center bg-gray-50 rounded-xl">
        {children}
      </div>

      {/* Title */}
      <h3 className="mt-4 font-semibold text-center">{title}</h3>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl flex items-center justify-center">

        <button
          onClick={onCopy}
          className="px-4 py-2 cursor-pointer bg-purple-600 text-white text-sm rounded-md shadow hover:scale-105 transition"
        >
          Copy Code
        </button>

      </div>
    </div>
  );
};

export default AnimationCard;
