# Tic-Tac-Toe Game (React + Vite)

## Description
This is a simple Tic-Tac-Toe game built using React and Vite. The game allows two players to take turns marking spaces in a 3×3 grid. The first player to align three marks in a row, column, or diagonal wins.

## Features
- Interactive Tic-Tac-Toe game board
- Player turn tracking
- Win detection using predefined winning combinations
- Game reset functionality
- Simple and clean UI
- Background patterns and game logo for an enhanced visual experience

## Project Structure
```
.
├── public/
│   ├── bg-pattern.png
│   ├── bg-pattern-dark.png
│   ├── game-logo.png
├── src/
│   ├── components/
│   │   ├── GameBoard.jsx
│   │   ├── GameOver.jsx
│   │   ├── Log.jsx
│   │   ├── Player.jsx
│   ├── App.jsx
│   ├── index.jsx
│   ├── index.css
│   ├── winning_combinations.js
├── package.json
├── vite.config.js
└── README.txt
```

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open your browser and go to:
   ```
   http://localhost:5173
   ```

## Technologies Used
- React
- Vite
- JavaScript (ES6+)
- CSS
- Image assets (game logo and background patterns)

## Game Logic
The game logic is implemented in `winning_combinations.js`, which contains an array of winning combinations for Tic-Tac-Toe. The game checks these combinations to determine if a player has won.

## Acknowledgments
Special thanks to **Academind by Maximilian Schwarzmüller** for providing an excellent React learning experience. Check out his Udemy course here: [React - The Complete Guide (incl. Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/?couponCode=LEARNNOWPLANS).

## License
This project is open-source and available for modification and distribution.

## Author
Developed by [Your Name]

