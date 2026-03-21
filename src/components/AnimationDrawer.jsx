import { useState, useEffect } from "react";

const AnimationDrawer = ({ isOpen, onClose, animation }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("css");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleCopy = () => {
    const code = activeTab === "css" ? animation?.cssCode : animation?.jsCode;
    if (code) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!animation) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-xl bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{animation.title}</h2>
            <p className="text-xs text-gray-400 mt-0.5">{animation.category ?? "Animation"}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Live Preview */}
        <div className="px-6 py-6 border-b border-gray-100">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Live Preview</p>
          <div className="h-40 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center">
            {animation.preview}
          </div>
        </div>

        {/* Tabs */}
        <div className="px-6 pt-4 flex gap-2">
          {animation.cssCode && (
            <button
              onClick={() => setActiveTab("css")}
              className={`text-xs px-3 py-1.5 rounded-md font-medium transition-colors ${
                activeTab === "css"
                  ? "bg-purple-600 text-white"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              }`}
            >
              CSS
            </button>
          )}
          {animation.jsCode && (
            <button
              onClick={() => setActiveTab("js")}
              className={`text-xs px-3 py-1.5 rounded-md font-medium transition-colors ${
                activeTab === "js"
                  ? "bg-purple-600 text-white"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              }`}
            >
              JS / JSX
            </button>
          )}
        </div>

        {/* Code Block */}
        <div className="flex-1 overflow-hidden px-6 py-4 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">Code</p>
            <button
              onClick={handleCopy}
              className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md font-medium border transition-all duration-200 ${
                copied
                  ? "bg-green-50 border-green-200 text-green-600"
                  : "border-gray-200 text-gray-500 hover:border-purple-300 hover:text-purple-600"
              }`}
            >
              {copied ? (
                <>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <rect x="4" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M8 4V2.5A.5.5 0 007.5 2h-5a.5.5 0 00-.5.5v5a.5.5 0 00.5.5H4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  Copy Code
                </>
              )}
            </button>
          </div>

          <div className="flex-1 overflow-auto rounded-xl bg-gray-950 p-4">
            <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap break-all">
              <CodeHighlight code={activeTab === "css" ? animation.cssCode : animation.jsCode} lang={activeTab} />
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-xs text-gray-400">Press <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-500 font-mono">Esc</kbd> to close</p>
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            {copied ? "Copied ✓" : "Copy Code"}
          </button>
        </div>
      </div>
    </>
  );
};

// Minimal syntax highlighter — no deps needed
const CodeHighlight = ({ code, lang }) => {
  if (!code) return null;

  const tokens = tokenize(code, lang);

  return (
    <>
      {tokens.map((token, i) => (
        <span key={i} style={{ color: token.color }}>
          {token.text}
        </span>
      ))}
    </>
  );
};

const tokenize = (code, lang) => {
  const tokens = [];
  let remaining = code;

  const patterns =
    lang === "css"
      ? [
          { regex: /^(\/\*[\s\S]*?\*\/)/, color: "#6b7280" },           // comments
          { regex: /^(@[\w-]+)/, color: "#c084fc" },                    // at-rules
          { regex: /^([\w-]+)\s*(?=\{)/, color: "#7dd3fc" },           // selectors
          { regex: /^([\w-]+)(?=\s*:)/, color: "#86efac" },            // properties
          { regex: /^(:[\w-]+)/, color: "#fbbf24" },                    // pseudo
          { regex: /^("[^"]*"|'[^']*')/, color: "#fca5a5" },           // strings
          { regex: /^(#[0-9a-fA-F]{3,8})/, color: "#fca5a5" },        // hex colors
          { regex: /^([\d.]+(?:px|em|rem|%|s|ms|deg|vh|vw)?)/, color: "#fbbf24" }, // values
          { regex: /^([{}:;,])/, color: "#e2e8f0" },                   // punctuation
        ]
      : [
          { regex: /^(\/\/[^\n]*)/, color: "#6b7280" },                 // line comments
          { regex: /^(\/\*[\s\S]*?\*\/)/, color: "#6b7280" },           // block comments
          { regex: /^(import|export|from|const|let|var|return|function|=>) /, color: "#c084fc" }, // keywords
          { regex: /^(useState|useEffect|useRef)/, color: "#7dd3fc" },  // hooks
          { regex: /^("[^"]*"|'[^']*'|`[^`]*`)/, color: "#fca5a5" },   // strings
          { regex: /^(\d+)/, color: "#fbbf24" },                        // numbers
          { regex: /^([A-Z][a-zA-Z]+)/, color: "#7dd3fc" },            // components
          { regex: /^([a-zA-Z_$][\w$]*)/, color: "#e2e8f0" },          // identifiers
          { regex: /^([{}()[\];,.<>=!+\-*/])/, color: "#94a3b8" },     // operators
        ];

  while (remaining.length > 0) {
    let matched = false;

    for (const { regex, color } of patterns) {
      const match = remaining.match(regex);
      if (match) {
        tokens.push({ text: match[0], color });
        remaining = remaining.slice(match[0].length);
        matched = true;
        break;
      }
    }

    if (!matched) {
      tokens.push({ text: remaining[0], color: "#e2e8f0" });
      remaining = remaining.slice(1);
    }
  }

  return tokens;
};

export default AnimationDrawer;
