# 💌 Cute Apology Website

> Website permintaan maaf yang lucu, romantis, dan interaktif — dilindungi passcode tanggal spesial.

Built with **React + Vite + Framer Motion**, deployable to Vercel in minutes.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [https://cute-apology.vercel.app/](https://cute-apology.vercel.app/) 

---

## Customization

**Edit isi surat** → `src/components/ApologyLetter.jsx`
```js
const LETTER_CONTENT = {
  greeting: "Hi Vedansh,",
  paragraphs: [
    "I am so proud of you if you reached here by cracking the code!",
    "I was unsure earlier, but I am completely sure about us now."
  ],
  closing: "Forever yours,",               // Removed "Selamanya untukmu,"
  signature: "With all my love ❤️"          // Removed "Aku yang selalu sayang kamu ❤️"
};
```

**Ganti passcode** → `src/components/PasscodeScreen.jsx`
```js
const CORRECT_CODE = '20251203' // 
```

---

## Tech Stack

`React 18` · `Vite` · `Framer Motion` · `CSS Animations`

---

Made with ❤️
