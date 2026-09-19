# 🎮 Pokédex Game – Pokémon Quiz

A fun Pokémon quiz game built with **React JS**. Guess the Pokémon correctly, score points, and try to reach **1000 points** before you run out of lives!

Pokémon data is fetched live from the [PokéAPI](https://pokeapi.co/).

---

## 🕹️ How to Play

- The game shows you a Pokémon and you have to guess the right answer.
- Your goal is to reach a score of **1000**.
- You start with **3 lives**.

### Scoring Rules

| Action            | Score | Lives |
| ----------------- | :---: | :---: |
| ✅ Correct answer | +100  |   –   |
| ❌ Wrong answer   |  -50  |  -1   |
| ⏭️ Skip           |  -50  |   –   |
| ⏭️ Skip (at the very start of the game) | -50 | -1 |

> ⚠️ **Note:** If you use the Skip button right from the start of the game, you get a **-50 score penalty and you also lose 1 life**.

- **Win:** Reach a score of 1000.
- **Game Over:** All 3 lives are lost.

---

## ✨ Features

- Pokémon quiz with random Pokémon from PokéAPI
- Score system with target of 1000 points
- 3 lives system
- Skip button (-50 score; skipping right at the start also costs 1 life)
- Global state management using **Context API + useReducer**
- Fast development and build with **Vite**
- Responsive, clean UI with **Tailwind CSS**

---

## 🛠️ Tech Stack

- HTML5
- [React JS](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- Context API + `useReducer` (state management)
- [PokéAPI](https://pokeapi.co/) (data source)

---

## 📁 Project Structure

```
pokedex-game/
├── public/
├── src/
│   ├── components/     # UI components
│   ├── context/        # Game context & provider
│   ├── reducer/        # Game reducer (score, lives, skip logic)
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

> Folder names may differ slightly; update this section according to your project.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or above)
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Yaasir-786/Pokedex-Game.git

# 2. Go to the project folder
cd pokedex-game

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🧠 State Management

The game state is handled using `useReducer` and shared across components with Context API.

Example actions:

- `CORRECT_ANSWER` → score + 100
- `WRONG_ANSWER` → score - 50, lives - 1
- `SKIP` → score - 50 (and lives - 1 if skipped at the start of the game)
- `RESET_GAME` → restart the game

---

## 🔮 Future Improvements

- High score saving (localStorage)
- Difficulty levels
- Sound effects and animations
- Pokémon type / generation filters

---

## 👤 Author

**Yaasir Sheikh**
GitHub: [@Yaasir-786](https://github.com/Yaasir-786)

---

⭐ If you like this project, don't forget to give it a star!
