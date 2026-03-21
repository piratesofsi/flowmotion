<div align="center">

<img src="public/logo.png" alt="FlowMotion" width="60" />

# FlowMotion

**Production-ready UI animations. Copy. Paste. Ship.**

[Live Demo](https://flowmotion-liard.vercel.app) · [Report Bug](https://github.com/piratesofsi/flowmotion/issues) · [Contribute an Animation](https://github.com/piratesofsi/flowmotion/blob/main/CONTRIBUTING.md)

![GitHub stars](https://img.shields.io/github/stars/piratesofsi/flowmotion?style=flat&color=7c3aed)
![GitHub forks](https://img.shields.io/github/forks/piratesofsi/flowmotion?style=flat&color=7c3aed)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-7c3aed)

</div>

---

## What is FlowMotion?

FlowMotion is an open-source library of copy-paste CSS animations for your UI. No dependencies, no config — just find the animation you need, copy the code, and drop it into your project.

Loaders, buttons, text effects, transitions — all in one place with live previews.

---

## Features

- **Live Preview** — see every animation in action before copying
- **One-Click Copy** — grab the raw CSS or JSX instantly
- **Search** — find animations by name
- **Category Filter** — browse by Loader, Button, Text, or Transition
- **Open Source** — built by the community, for the community

---

## Demo

> [flowmotion-liard.vercel.app](https://flowmotion-liard.vercel.app)

---

## Getting Started

```bash
git clone https://github.com/piratesofsi/flowmotion.git
cd flowmotion
npm install
npm run dev
```

---

## Contributing

Want to add your own animation? It takes 5 minutes.

All animations live in one file: **`src/data/animations.jsx`**

That's the only file you need to touch.

### Animation shape

```jsx
{
  id: "my-animation",       // unique kebab-case string
  title: "My Animation",    // display name shown on the card
  category: "Loader",       // Loader | Button | Text | Transition
  preview: (                // JSX shown as live preview on the card
    <div style={{ ... }} />
  ),
  cssCode: `                // raw CSS users will copy
    .my-animation {
      ...
    }
  `,
  jsCode: `                 // optional — React/JSX version
    const MyAnimation = () => <div className="..." />;
  `
}
```

### Steps

1. Fork the repo
2. Add your animation object to `src/data/animations.jsx`
3. Run locally and make sure the preview renders correctly
4. Open a pull request with the title: `feat: add [animation name]`

### Guidelines

- Preview must actually animate — no static elements
- CSS must be self-contained with `@keyframes` included
- No external dependencies
- Keep the `id` unique and in `kebab-case`

---

## Project Structure

```
src/
├── components/
│   ├── AnimationCard.jsx     # individual card UI
│   ├── AnimationDrawer.jsx   # slide-in detail drawer
│   ├── LibrarySection.jsx    # grid + search + filter logic
│   ├── HeroSection.jsx       # landing hero
│   └── Navbar.jsx
├── data/
│   └── animations.jsx        # ← all animation data lives here
```

---

## Tech Stack

- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)

---

## License

MIT — use it however you want.

---

<div align="center">

If FlowMotion saved you time, consider giving it a ⭐ — it helps others find it.

</div>
