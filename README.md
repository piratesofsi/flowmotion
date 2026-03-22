<div align="center">

# ⚡ FlowMotion

**Production-ready UI animations. Copy. Paste. Ship.**

[![Stars](https://img.shields.io/github/stars/piratesofsi/flowmotion?style=flat-square&color=7c3aed)](https://github.com/piratesofsi/flowmotion/stargazers)
[![Forks](https://img.shields.io/github/forks/piratesofsi/flowmotion?style=flat-square&color=7c3aed)](https://github.com/piratesofsi/flowmotion/network/members)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-7c3aed?style=flat-square)](https://github.com/piratesofsi/flowmotion/pulls)
[![License](https://img.shields.io/badge/license-MIT-7c3aed?style=flat-square)](LICENSE)

<br />

![FlowMotion Preview](public/preview.png)

<br />

**[flowmotion-liard.vercel.app](https://flowmotion-liard.vercel.app)**

</div>

---

## What is FlowMotion?

Stop writing animation CSS from scratch. FlowMotion is an open-source library of production-ready UI animations — loaders, buttons, text effects, and transitions — with live previews and one-click copy.

Find it. Preview it. Copy it. Done.

---

## Features

| | |
|---|---|
| 🔍 **Search** | Find any animation by name instantly |
| 🏷️ **Category Filter** | Browse Loaders, Buttons, Text, Transitions |
| 👁️ **Live Preview** | See every animation before you copy |
| 📋 **One-Click Copy** | Grab raw CSS or JSX in one click |
| 🎨 **Code Drawer** | Full code view with syntax highlighting |
| 🌍 **Open Source** | Add your own animations via PR |

---

## Running Locally

```bash
git clone https://github.com/piratesofsi/flowmotion.git
cd flowmotion
npm install
npm run dev
```

---

## Project Structure

```
src/
├── components/
│   ├── AnimationCard.jsx     # card UI with hover overlay
│   ├── AnimationDrawer.jsx   # slide-in code drawer
│   ├── LibrarySection.jsx    # grid, search & filter logic
│   ├── HeroSection.jsx       # landing hero
│   └── Navbar.jsx
│
└── data/
    └── animations.jsx        # ← ALL animation data lives here
```

---

## Contributing

Want to add an animation? You only need to touch **one file**: `src/data/animations.jsx`

No touching `index.css`, no touching any component. Just add your object to the array and you're done.

### Animation template

```jsx
{
  id: "my-animation",        // unique kebab-case id
  title: "My Animation",     // name shown on the card
  category: "Loader",        // Loader | Button | Text | Transition
  preview: (
    <>
      <style>{`
        @keyframes myAnim {
          /* your keyframes here */
        }
      `}</style>
      <div style={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: "#9333ea",
        animation: "myAnim 1s infinite"
      }} />
    </>
  ),
  cssCode: `.my-animation {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #9333ea;
  animation: myAnim 1s infinite;
}

@keyframes myAnim {
  /* your keyframes */
}`,
  jsCode: `// optional React version
const MyAnimation = () => <div className="..." />;`,
}
```

> **Note:** Put `@keyframes` inside the `<style>` tag in `preview` — this makes the card animate. The `@keyframes` in `cssCode` is what users copy. No other files need to be touched.

### Steps

```
1. Fork this repo
2. Add your object to src/data/animations.jsx
3. Run npm run dev — make sure the preview renders and animates
4. Open a PR titled: feat: add [animation name]
```

### Rules

- Preview must actually animate — no static elements
- Put `@keyframes` inside `<style>` in the preview, not in any external CSS file
- No external libraries or dependencies
- `id` must be unique and in `kebab-case`
- CSS in `cssCode` must be self-contained and copy-paste ready

---

## Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

---

## License

MIT — use it however you want, personal or commercial.

---

<div align="center">

If FlowMotion saved you time, a ⭐ goes a long way.

</div>