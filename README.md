# howardguoui.github.io

Howard Guo's personal site: https://howardguoui.github.io/

React 19 + TypeScript + Vite + Tailwind CSS v4. IBM Plex is self-hosted through Fontsource.

## Edit the content

Everything the page says (intro, projects, experience, skills, questions, links) lives in
`src/data/profile.ts`. The resume PDF is `public/Hao_Guo_Resume.pdf`; the photo is in `public/images/`.

## Run and deploy

```bash
npm install
npm run dev      # http://localhost:5173/
npm run lint
npm run build    # type-check + production build into dist/
npm run deploy   # builds, then publishes dist/ to the gh-pages branch
```

`public/og-image.png` is the link preview shown on LinkedIn, Slack and X. Regenerate it
with a 1200×630 screenshot of the hero after changing the headline.
