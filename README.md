# FlowMotion

Production-ready UI animations you can copy and ship instantly.

![FlowMotion Preview](https://flowmotion-liard.vercel.app)

## What is it?

FlowMotion is an open-source library of ready-to-use CSS animations — loaders, buttons, text effects, and transitions. Find what you need, copy the code, done.

## Features

- **One-click copy** — grab the CSS or JSX instantly
- **Live preview** — see every animation before you copy
- **Search** — find animations by name
- **Category filter** — browse Loaders, Buttons, Text, Transitions
- **Open source** — add your own animations via PR

## Demo

[flowmotion-liard.vercel.app](https://flowmotion-liard.vercel.app)

## Tech Stack

- React
- Tailwind CSS
- Vite

## Run Locally

```bash
git clone https://github.com/piratesofsi/flowmotion.git
cd flowmotion
npm install
npm run dev
```

## Contributing

Want to add an animation? It's simple — each animation is just one object in the array.

```js
{
  id: "my-animation",        // unique kebab-case id
  title: "My Animation",     // display name
  category: "Loader",        // Loader | Button | Text | Transition
  preview: (                 // JSX preview shown on the card
    <div style={{ ... }} />
  ),
  cssCode: `                 // raw CSS snippet users will copy
    .my-animation { ... }
  `,
  jsCode: `                  // optional JSX version
    const MyAnimation = () => <div className="..." />;
  `
}
```

Steps:
1. Fork the repo
2. Add your animation object to `src/components/LibrarySection.jsx`
3. Test it locally — make sure the preview renders and the code is clean
4. Open a pull request with the title `feat: add [animation name]`

## License

MIT