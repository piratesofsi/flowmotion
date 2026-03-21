import { useState } from "react";

const AnimationCard = ({ title, children, onCopy, onClick }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation(); // don't open drawer when clicking Copy
    onCopy?.();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 cursor-pointer"
    >
      {/* Preview Area */}
      <div className="h-40 flex items-center justify-center bg-gray-50 rounded-xl">
        {children}
      </div>

      {/* Title */}
      <h3 className="mt-4 font-semibold text-center text-gray-800">{title}</h3>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl flex flex-col items-center justify-center gap-3">
        <button
          onClick={handleCopy}
          className={`px-4 py-2 text-sm rounded-md font-medium shadow transition-all duration-200 ${
            copied
              ? "bg-green-500 text-white scale-95"
              : "bg-purple-600 text-white hover:scale-105 hover:bg-purple-700"
          }`}
        >
          {copied ? "Copied ✓" : "Copy Code"}
        </button>
        <button
          onClick={onClick}
          className="px-4 py-2 text-sm rounded-md font-medium border border-gray-300 text-gray-600 hover:border-purple-300 hover:text-purple-600 transition-colors"
        >
          View Details →
        </button>
      </div>
    </div>
  );
};

export default AnimationCard;
