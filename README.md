# Bordle!

Welcome to **Bordle!** (Bilingual Wordle) game! This is a web-based game where you try to guess a sequence of letters within a limited number of attempts. It's built with modern web technologies for a fast and seamless user experience.

## 📝 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Gameplay Instructions](#gameplay-instructions)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## 📖 About the Project

**Bordle!** is a fun and challenging game where players attempt to guess a secret sequence of letters. The game provides feedback after each guess to help players deduce the correct sequence. It's inspired by classic code-breaking games like Wordle but with a numerical twist.

## ✨ Features

- **Interactive Gameplay**: Guess letters using on-screen buttons or your keyboard.
- **Dynamic Feedback**: Receive color-coded hints after each guess.
- **Responsive Design**: Enjoy a seamless experience on both desktop and mobile devices.
- **Keyboard Support**: Use keyboard letters, Enter, and Backspace for faster gameplay.
- **State Management**: Efficient state handling using Zustand for smooth performance.
- **Modern Styling**: Styled with Tailwind CSS for a sleek and modern look.

## 🛠 Built With

- **Vite** - Next Generation Frontend Tooling
- **React** - A JavaScript library for building user interfaces
- **TypeScript** - Typed JavaScript at Any Scale
- **SWC** - Speedy Web Compiler for faster builds
- **Zustand** - A small, fast, and scalable bearbones state-management solution
- **Tailwind CSS** - A utility-first CSS framework for rapid UI development
- **pnpm** - Fast, disk space efficient package manager

## 🏁 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- **Node.js** (version 14 or above)
- **pnpm** installed globally. If you don't have it, install via npm:

  ```bash
  npm install -g pnpm
  ```

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/HessamSadeghi/Bordle.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd Bordle
   ```

3. **Install dependencies**

   ```bash
   pnpm install
   ```

4. **Start the development server**

   ```bash
   pnpm run dev
   ```

5. **Open the application**

   Visit [http://localhost:5173/](http://localhost:5173/) in your browser to see the game in action.

## 🎮 Usage

### Gameplay Instructions

1. **Objective**: Guess the secret sequence of five unique letters.

2. **Making a Guess**:

   - **On-Screen Buttons**: Click on the letters to input your guess.
   - **Keyboard Input**: Use the letter keys on your keyboard to input your guess.

3. **Editing Your Guess**:

   - **Delete**: Use the **Delete** button or press **Backspace** on your keyboard to remove the last letter entered.

4. **Submitting Your Guess**:

   - **Submit**: Click the **Submit** button or press **Enter** on your keyboard to submit your guess.

5. **Feedback**:

   - After submitting, each letter in your guess will be marked with a color:

     - **Green (Correct)**: The letter is correct and in the correct position.
     - **Yellow (Present)**: The letter is correct but in the wrong position.
     - **Gray (Absent)**: The letter is not in the sequence.

   - Use this feedback to refine your next guess.

6. **Winning the Game**:

   - Correctly guess the entire sequence within five attempts to win the game.

7. **Game Over**:

   - If you fail to guess the sequence in five attempts, the game is over.

8. **Restarting**:

   - Refresh the page or use the reset button to start a new game.

## 🤝 Contributing

Contributions are welcome! Follow these steps to contribute:

1. **Fork the repository**

2. **Create a new branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**

4. **Commit your changes**

   ```bash
   git commit -m "Add your message"
   ```

5. **Push to the branch**

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Community** for the robust UI library.
- **Vite** for providing fast and efficient tooling.
- **Zustand** for simple and effective state management.
- **Tailwind CSS** for utility-first CSS that accelerates styling.
- **SWC** for blazing-fast compilation.

---
