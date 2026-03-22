// ─────────────────────────────────────────────────────────────
//  FlowMotion — Animation Library
//  To contribute, add your animation object to this array.
//
//  Shape:
//  {
//    id:       "unique-kebab-case-id",
//    title:    "Display Name",
//    category: "Loader" | "Button" | "Text" | "Transition",
//    preview:  <JSX element shown on the card>,
//    cssCode:  `raw CSS string users will copy`,
//    jsCode:   `optional JSX/React snippet`,
//  }
// ─────────────────────────────────────────────────────────────

export const animations = [

  // ── LOADERS ────────────────────────────────────────────────
  {
    id: "spinner",
    title: "Spinner Loader",
    category: "Loader",
    preview: (
      <div style={{
        width: 40, height: 40, borderRadius: "50%",
        border: "4px solid #e9d5ff", borderTopColor: "#9333ea",
        animation: "spin 0.8s linear infinite"
      }} />
    ),
    cssCode: `.spinner {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid #e9d5ff;
  border-top-color: #9333ea;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}`,
    jsCode: `const Spinner = () => (
  <div className="w-10 h-10 rounded-full border-4 border-purple-200 border-t-purple-600 animate-spin" />
);`,
  },

  {
    id: "dots",
    title: "Dots Loader",
    category: "Loader",
    preview: (
      <div style={{ display: "flex", gap: 8 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: 12, height: 12, borderRadius: "50%", background: "#9333ea",
            animation: `bounce 1s ease-in-out ${i * 0.15}s infinite`
          }} />
        ))}
      </div>
    ),
    cssCode: `.dots-loader { display: flex; gap: 8px; }

.dot {
  width: 12px; height: 12px;
  border-radius: 50%; background: #9333ea;
  animation: bounce 1s ease-in-out infinite;
}

.dot:nth-child(2) { animation-delay: 0.15s; }
.dot:nth-child(3) { animation-delay: 0.3s; }

@keyframes bounce {
  0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
  40%           { transform: scale(1.2); opacity: 1; }
}`,
  },

  {
    id: "ring-pulse",
    title: "Ring Pulse Loader",
    category: "Loader",
    preview: (
      <div style={{
        width: 44, height: 44, borderRadius: "50%",
        border: "3px solid #9333ea",
        animation: "ringPulse 1.2s ease-out infinite"
      }} />
    ),
    cssCode: `.ring-pulse {
  width: 44px; height: 44px;
  border-radius: 50%;
  border: 3px solid #9333ea;
  animation: ringPulse 1.2s ease-out infinite;
}

@keyframes ringPulse {
  0%   { transform: scale(0.6); opacity: 1; }
  100% { transform: scale(1.4); opacity: 0; }
}`,
  },

  {
    id: "bar-wave",
    title: "Bar Wave Loader",
    category: "Loader",
    preview: (
      <div style={{ display: "flex", gap: 5, alignItems: "flex-end", height: 36 }}>
        {[0, 1, 2, 3, 4].map(i => (
          <div key={i} style={{
            width: 6, height: 36, borderRadius: 3, background: "#9333ea",
            animation: `barWave 1s ease-in-out ${i * 0.12}s infinite`,
          }} />
        ))}
      </div>
    ),
    cssCode: `.bar-wave { display: flex; gap: 5px; align-items: flex-end; height: 36px; }

.bar {
  width: 6px; height: 36px;
  border-radius: 3px; background: #9333ea;
  animation: barWave 1s ease-in-out infinite;
}

.bar:nth-child(2) { animation-delay: 0.12s; }
.bar:nth-child(3) { animation-delay: 0.24s; }
.bar:nth-child(4) { animation-delay: 0.36s; }
.bar:nth-child(5) { animation-delay: 0.48s; }

@keyframes barWave {
  0%, 100% { transform: scaleY(0.4); opacity: 0.5; }
  50%       { transform: scaleY(1);   opacity: 1; }
}`,
  },

  {
    id: "orbit",
    title: "Orbit Loader",
    category: "Loader",
    preview: (
      <div style={{ position: "relative", width: 44, height: 44 }}>
        <div style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          border: "2px dashed #d8b4fe",
          animation: "orbitSpin 3s linear infinite"
        }} />
        <div style={{
          position: "absolute", top: -4, left: "50%",
          transform: "translateX(-50%)",
          width: 10, height: 10, borderRadius: "50%", background: "#9333ea",
          animation: "orbitSpin 3s linear infinite"
        }} />
        <div style={{ position: "absolute", inset: "30%", borderRadius: "50%", background: "#e9d5ff" }} />
      </div>
    ),
    cssCode: `.orbit-loader { position: relative; width: 44px; height: 44px; }

.orbit-track {
  position: absolute; inset: 0; border-radius: 50%;
  border: 2px dashed #d8b4fe;
  animation: orbitSpin 3s linear infinite;
}

.orbit-dot {
  position: absolute; top: -4px; left: 50%;
  transform: translateX(-50%);
  width: 10px; height: 10px;
  border-radius: 50%; background: #9333ea;
  animation: orbitSpin 3s linear infinite;
}

.orbit-core { position: absolute; inset: 30%; border-radius: 50%; background: #e9d5ff; }

@keyframes orbitSpin { to { transform: rotate(360deg); } }`,
  },

  {
    id: "bounce-dots",
    title: "Bounce Dots",
    category: "Loader",
    preview: (
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: 12, height: 12, borderRadius: "50%", background: "#9333ea",
            animation: `bounceDot 0.9s ease-in-out ${i * 0.2}s infinite alternate`
          }} />
        ))}
      </div>
    ),
    cssCode: `.bounce-dots { display: flex; gap: 8px; align-items: center; }

.bounce-dot {
  width: 12px; height: 12px;
  border-radius: 50%; background: #9333ea;
  animation: bounceDot 0.9s ease-in-out infinite alternate;
}

.bounce-dot:nth-child(2) { animation-delay: 0.2s; }
.bounce-dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes bounceDot {
  from { transform: translateY(0);     opacity: 1; }
  to   { transform: translateY(-16px); opacity: 0.4; }
}`,
  },

  {
    id: "skeleton",
    title: "Skeleton Loader",
    category: "Loader",
    preview: (
      <div style={{ width: "100%", maxWidth: 200, display: "flex", flexDirection: "column", gap: 10 }}>
        {[100, 75, 90].map((w, i) => (
          <div key={i} style={{
            height: 12, width: `${w}%`, borderRadius: 6,
            background: "linear-gradient(90deg, #e9d5ff 25%, #f3e8ff 50%, #e9d5ff 75%)",
            backgroundSize: "200% 100%",
            animation: `shimmer 1.5s infinite ${i * 0.2}s`
          }} />
        ))}
      </div>
    ),
    cssCode: `.skeleton-line {
  height: 12px; border-radius: 6px;
  background: linear-gradient(90deg, #e9d5ff 25%, #f3e8ff 50%, #e9d5ff 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}`,
  },

  {
    id: "flip-loader",
    title: "Flip Square",
    category: "Loader",
    preview: (
      <div style={{
        width: 36, height: 36, background: "#9333ea", borderRadius: 6,
        animation: "flipSquare 1.2s ease-in-out infinite"
      }} />
    ),
    cssCode: `.flip-square {
  width: 36px; height: 36px;
  background: #9333ea; border-radius: 6px;
  animation: flipSquare 1.2s ease-in-out infinite;
}

@keyframes flipSquare {
  0%   { transform: perspective(120px) rotateX(0deg)    rotateY(0deg); }
  50%  { transform: perspective(120px) rotateX(-180deg) rotateY(0deg); }
  100% { transform: perspective(120px) rotateX(-180deg) rotateY(-180deg); }
}`,
  },

  {
    id: "gradient-spinner",
    title: "Gradient Spinner",
    category: "Loader",
    preview: (
      <div style={{ position: "relative", width: 44, height: 44 }}>
        <div style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          background: "conic-gradient(#9333ea, #e9d5ff, #9333ea)",
          animation: "spin 1s linear infinite",
          WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))"
        }} />
      </div>
    ),
    cssCode: `.gradient-spinner {
  width: 44px; height: 44px; border-radius: 50%;
  background: conic-gradient(#9333ea, #e9d5ff, #9333ea);
  animation: spin 1s linear infinite;
  mask: radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px));
}

@keyframes spin { to { transform: rotate(360deg); } }`,
  },

  {
    id: "typing-indicator",
    title: "Typing Indicator",
    category: "Loader",
    preview: (
      <div style={{
        display: "inline-flex", gap: 5, alignItems: "center",
        background: "#f3e8ff", borderRadius: 20, padding: "10px 16px"
      }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: 8, height: 8, borderRadius: "50%", background: "#9333ea",
            animation: `typingBounce 1.2s ease-in-out ${i * 0.2}s infinite`
          }} />
        ))}
      </div>
    ),
    cssCode: `.typing-indicator {
  display: inline-flex; gap: 5px; align-items: center;
  background: #f3e8ff; border-radius: 20px; padding: 10px 16px;
}

.typing-dot {
  width: 8px; height: 8px;
  border-radius: 50%; background: #9333ea;
  animation: typingBounce 1.2s ease-in-out infinite;
}

.typing-dot:nth-child(2) { animation-delay: 0.2s; }
.typing-dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes typingBounce {
  0%, 60%, 100% { transform: translateY(0); }
  30%           { transform: translateY(-6px); }
}`,
  },

  // ── BUTTONS ────────────────────────────────────────────────
  {
    id: "glow-button",
    title: "Glow Hover Button",
    category: "Button",
    preview: (
      <button style={{
        padding: "10px 20px", background: "#9333ea", color: "white",
        fontSize: 14, fontWeight: 500, border: "none", borderRadius: 8, cursor: "pointer",
        boxShadow: "0 0 15px rgba(147,51,234,0.5)"
      }}>
        Hover Me
      </button>
    ),
    cssCode: `.glow-button {
  padding: 10px 20px;
  background: #9333ea; color: white;
  font-size: 14px; font-weight: 500;
  border: none; border-radius: 8px; cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
}

.glow-button:hover {
  box-shadow: 0 0 25px rgba(147, 51, 234, 0.7);
  transform: translateY(-1px);
}`,
  },

  {
    id: "fill-slide-button",
    title: "Fill Slide Button",
    category: "Button",
    preview: (
      <button
        style={{
          position: "relative", overflow: "hidden",
          padding: "10px 24px", border: "2px solid #9333ea",
          background: "transparent", color: "#9333ea",
          fontSize: 14, fontWeight: 500, borderRadius: 8, cursor: "pointer",
          transition: "color 0.3s ease",
        }}
        onMouseEnter={e => {
          e.currentTarget.querySelector(".fill-bg").style.transform = "translateX(0)";
          e.currentTarget.style.color = "white";
        }}
        onMouseLeave={e => {
          e.currentTarget.querySelector(".fill-bg").style.transform = "translateX(-100%)";
          e.currentTarget.style.color = "#9333ea";
        }}
      >
        <span className="fill-bg" style={{
          position: "absolute", inset: 0, background: "#9333ea",
          transform: "translateX(-100%)", transition: "transform 0.3s ease", zIndex: 0,
        }} />
        <span style={{ position: "relative", zIndex: 1 }}>Hover Me</span>
      </button>
    ),
    cssCode: `.fill-slide-btn {
  position: relative; overflow: hidden;
  padding: 10px 24px;
  border: 2px solid #9333ea;
  background: transparent; color: #9333ea;
  font-size: 14px; font-weight: 500;
  border-radius: 8px; cursor: pointer;
  transition: color 0.3s ease;
}

.fill-slide-btn::before {
  content: "";
  position: absolute; inset: 0;
  background: #9333ea;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 0;
}

.fill-slide-btn:hover { color: white; }
.fill-slide-btn:hover::before { transform: translateX(0); }
.fill-slide-btn span { position: relative; z-index: 1; }`,
  },

  {
    id: "pulse-ring-button",
    title: "Pulse Ring Button",
    category: "Button",
    preview: (
      <button style={{
        position: "relative", padding: "10px 24px",
        background: "#9333ea", color: "white",
        fontSize: 14, fontWeight: 500, border: "none", borderRadius: 8, cursor: "pointer",
      }}>
        <span style={{
          position: "absolute", inset: -4, borderRadius: 12,
          border: "2px solid #9333ea",
          animation: "pulseRing 1.5s ease-out infinite",
        }} />
        Click Me
      </button>
    ),
    cssCode: `.pulse-ring-btn {
  position: relative;
  padding: 10px 24px;
  background: #9333ea; color: white;
  font-size: 14px; font-weight: 500;
  border: none; border-radius: 8px; cursor: pointer;
}

.pulse-ring-btn::after {
  content: "";
  position: absolute; inset: -4px; border-radius: 12px;
  border: 2px solid #9333ea;
  animation: pulseRing 1.5s ease-out infinite;
}

@keyframes pulseRing {
  0%   { transform: scale(1);    opacity: 1; }
  100% { transform: scale(1.25); opacity: 0; }
}`,
  },

  {
    id: "shimmer-button",
    title: "Shimmer Button",
    category: "Button",
    preview: (
      <button style={{
        position: "relative", overflow: "hidden",
        padding: "10px 24px", background: "#9333ea", color: "white",
        fontSize: 14, fontWeight: 500, border: "none", borderRadius: 8, cursor: "pointer",
      }}>
        <span style={{
          position: "absolute", top: 0, left: "-75%",
          width: "50%", height: "100%",
          background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent)",
          animation: "shimmerBtn 2s infinite",
        }} />
        Get Started
      </button>
    ),
    cssCode: `.shimmer-btn {
  position: relative; overflow: hidden;
  padding: 10px 24px;
  background: #9333ea; color: white;
  font-size: 14px; font-weight: 500;
  border: none; border-radius: 8px; cursor: pointer;
}

.shimmer-btn::after {
  content: "";
  position: absolute; top: 0; left: -75%;
  width: 50%; height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent);
  animation: shimmerBtn 2s infinite;
}

@keyframes shimmerBtn {
  0%   { left: -75%; }
  100% { left: 125%; }
}`,
  },

  {
    id: "jelly-button",
    title: "Jelly Button",
    category: "Button",
    preview: (
      <button
        style={{
          padding: "10px 24px", background: "#9333ea", color: "white",
          fontSize: 14, fontWeight: 500, border: "none", borderRadius: 8, cursor: "pointer",
        }}
        onMouseDown={e => {
          e.currentTarget.style.animation = "none";
          requestAnimationFrame(() => {
            e.currentTarget.style.animation = "jellyPop 0.4s ease";
          });
        }}
        onAnimationEnd={e => e.currentTarget.style.animation = ""}
      >
        Press Me
      </button>
    ),
    cssCode: `.jelly-btn {
  padding: 10px 24px;
  background: #9333ea; color: white;
  font-size: 14px; font-weight: 500;
  border: none; border-radius: 8px; cursor: pointer;
}

.jelly-btn:active { animation: jellyPop 0.4s ease; }

@keyframes jellyPop {
  0%   { transform: scale(1); }
  25%  { transform: scale(0.92, 1.08); }
  50%  { transform: scale(1.08, 0.92); }
  75%  { transform: scale(0.96, 1.04); }
  100% { transform: scale(1); }
}`,
  },

  // ── TEXT ───────────────────────────────────────────────────
  {
    id: "typewriter",
    title: "Typewriter Text",
    category: "Text",
    preview: (
      <p style={{
        color: "#9333ea", fontWeight: 500, fontSize: 14,
        overflow: "hidden", whiteSpace: "nowrap",
        borderRight: "2px solid #9333ea",
        animation: "typing 3s steps(30,end) infinite, blink 0.75s step-end infinite",
        width: "fit-content", maxWidth: "100%",
      }}>
        FlowMotion brings your UI to life.
      </p>
    ),
    cssCode: `.typewriter {
  overflow: hidden; white-space: nowrap;
  border-right: 2px solid #9333ea;
  color: #9333ea; font-weight: 500;
  width: 0;
  animation: typing 3s steps(35, end) forwards, blink 0.75s step-end infinite;
}

@keyframes typing { from { width: 0; } to { width: 100%; } }
@keyframes blink  { 50% { border-color: transparent; } }`,
  },

  {
    id: "gradient-text",
    title: "Gradient Text",
    category: "Text",
    preview: (
      <p style={{
        fontSize: 22, fontWeight: 700,
        background: "linear-gradient(90deg, #9333ea, #ec4899, #9333ea)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
        animation: "gradientShift 3s linear infinite",
      }}>
        FlowMotion
      </p>
    ),
    cssCode: `.gradient-text {
  font-size: 22px; font-weight: 700;
  background: linear-gradient(90deg, #9333ea, #ec4899, #9333ea);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s linear infinite;
}

@keyframes gradientShift { to { background-position: 200% center; } }`,
  },

  {
    id: "word-reveal",
    title: "Word Reveal",
    category: "Text",
    preview: (
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center" }}>
        {["Craft", "Smooth", "UI", "Motion"].map((word, i) => (
          <span key={word} style={{
            display: "inline-block", fontSize: 18, fontWeight: 600, color: "#9333ea",
            animation: `wordReveal 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.12}s both`,
          }}>
            {word}
          </span>
        ))}
      </div>
    ),
    cssCode: `.word-reveal span {
  display: inline-block;
  animation: wordReveal 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.word-reveal span:nth-child(2) { animation-delay: 0.12s; }
.word-reveal span:nth-child(3) { animation-delay: 0.24s; }
.word-reveal span:nth-child(4) { animation-delay: 0.36s; }

@keyframes wordReveal {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}`,
  },

  {
    id: "glitch-text",
    title: "Glitch Text",
    category: "Text",
    preview: (
      <p style={{
        fontSize: 20, fontWeight: 700, color: "#9333ea",
        animation: "glitch 2.5s infinite", letterSpacing: 2,
      }}>
        GLITCH
      </p>
    ),
    cssCode: `.glitch {
  font-size: 20px; font-weight: 700;
  color: #9333ea; letter-spacing: 2px;
  animation: glitch 2.5s infinite;
}

@keyframes glitch {
  0%, 90%, 100% { text-shadow: none; transform: none; }
  91% { text-shadow: -2px 0 #ec4899, 2px 0 #06b6d4; transform: skewX(-1deg); }
  93% { text-shadow:  2px 0 #ec4899,-2px 0 #06b6d4; transform: skewX(1deg); }
  95% { text-shadow: -2px 0 #ec4899, 2px 0 #06b6d4; transform: skewX(0deg); }
}`,
  },

  {
    id: "letter-bounce",
    title: "Letter Bounce",
    category: "Text",
    preview: (
      <div style={{ display: "flex", gap: 1 }}>
        {"BOUNCE".split("").map((l, i) => (
          <span key={i} style={{
            fontSize: 20, fontWeight: 700, color: "#9333ea", display: "inline-block",
            animation: `letterBounce 1s ease-in-out ${i * 0.08}s infinite`,
          }}>
            {l}
          </span>
        ))}
      </div>
    ),
    cssCode: `.letter-bounce span {
  display: inline-block;
  animation: letterBounce 1s ease-in-out infinite;
}

.letter-bounce span:nth-child(2) { animation-delay: 0.08s; }
.letter-bounce span:nth-child(3) { animation-delay: 0.16s; }
.letter-bounce span:nth-child(4) { animation-delay: 0.24s; }
.letter-bounce span:nth-child(5) { animation-delay: 0.32s; }
.letter-bounce span:nth-child(6) { animation-delay: 0.40s; }

@keyframes letterBounce {
  0%, 60%, 100% { transform: translateY(0); }
  30%           { transform: translateY(-10px); }
}`,
  },

  // ── TRANSITIONS ────────────────────────────────────────────
  {
    id: "fade-up",
    title: "Fade Up",
    category: "Transition",
    preview: (
      <div style={{
        padding: "12px 20px", background: "#f3e8ff", borderRadius: 10,
        color: "#9333ea", fontWeight: 500, fontSize: 14,
        animation: "fadeUp 1s cubic-bezier(0.22,1,0.36,1) infinite alternate",
      }}>
        Fade Up Element
      </div>
    ),
    cssCode: `.fade-up {
  animation: fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}`,
  },

  {
    id: "scale-in",
    title: "Scale In",
    category: "Transition",
    preview: (
      <div style={{
        width: 64, height: 64, borderRadius: 16, background: "#9333ea",
        animation: "scaleIn 1s cubic-bezier(0.34,1.56,0.64,1) infinite alternate",
      }} />
    ),
    cssCode: `.scale-in {
  animation: scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.5); }
  to   { opacity: 1; transform: scale(1); }
}`,
  },

  {
    id: "flip-in",
    title: "Flip In",
    category: "Transition",
    preview: (
      <div style={{
        width: 72, height: 72, borderRadius: 16,
        background: "linear-gradient(135deg, #9333ea, #ec4899)",
        animation: "flipIn 1.5s ease-in-out infinite alternate",
      }} />
    ),
    cssCode: `.flip-in {
  animation: flipIn 0.6s ease-in-out both;
}

@keyframes flipIn {
  from { opacity: 0; transform: perspective(400px) rotateY(90deg); }
  to   { opacity: 1; transform: perspective(400px) rotateY(0deg); }
}`,
  },

  {
    id: "slide-in-right",
    title: "Slide In Right",
    category: "Transition",
    preview: (
      <div style={{
        padding: "12px 20px", background: "#f3e8ff", borderRadius: 10,
        color: "#9333ea", fontWeight: 500, fontSize: 14,
        animation: "slideInRight 1s cubic-bezier(0.22,1,0.36,1) infinite alternate",
      }}>
        Slides In →
      </div>
    ),
    cssCode: `.slide-in-right {
  animation: slideInRight 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(40px); }
  to   { opacity: 1; transform: translateX(0); }
}`,
  },

  {
    id: "blur-in",
    title: "Blur In",
    category: "Transition",
    preview: (
      <p style={{
        fontSize: 18, fontWeight: 700, color: "#9333ea",
        animation: "blurIn 1.5s ease infinite alternate",
      }}>
        FlowMotion
      </p>
    ),
    cssCode: `.blur-in {
  animation: blurIn 0.6s ease both;
}

@keyframes blurIn {
  from { opacity: 0; filter: blur(12px); transform: scale(1.05); }
  to   { opacity: 1; filter: blur(0);    transform: scale(1); }
}`,
  },


  {
    id: "ripple-button",
    title: "Ripple Button",
    category: "Button",
    preview: (
      <>
        <style>{`
        @keyframes ripple {
          to { transform: translate(-50%,-50%) scale(3); opacity: 0; }
        }
      `}</style>
        <button style={{
          position: "relative", overflow: "hidden",
          padding: "10px 24px", background: "#9333ea", color: "white",
          fontSize: 14, fontWeight: 500, border: "none", borderRadius: 8, cursor: "pointer",
        }}>
          <span style={{
            position: "absolute", width: 80, height: 80,
            borderRadius: "50%", background: "rgba(255,255,255,0.3)",
            top: "50%", left: "50%",
            transform: "translate(-50%,-50%) scale(0)",
            animation: "ripple 1.5s ease-out infinite"
          }} />
          Click Me
        </button>
      </>
    ),
    cssCode: `.ripple-btn {
  position: relative; overflow: hidden;
  padding: 10px 24px; background: #9333ea; color: white;
  border: none; border-radius: 8px; cursor: pointer;
}
.ripple-btn::after {
  content: "";
  position: absolute; width: 80px; height: 80px;
  border-radius: 50%; background: rgba(255,255,255,0.3);
  top: 50%; left: 50%;
  transform: translate(-50%,-50%) scale(0);
  animation: ripple 1.5s ease-out infinite;
}
@keyframes ripple {
  to { transform: translate(-50%,-50%) scale(3); opacity: 0; }
}`,
  },
];
