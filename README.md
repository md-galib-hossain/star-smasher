# Star Smasher - Phaser 3 Game

Welcome to **Star Smasher**, a game built with **Phaser 3**, **React**, and **TypeScript**. In this project, I developed a responsive game with a start button that adapts to different screen sizes.

You can play the game live here: [Star Smasher](https://star-smasher.netlify.app/)

## Table of Contents

- [Installation](#installation)
- [Run the Project](#run-the-project)
- [Development Approach](#development-approach)
- [Challenges Faced](#challenges-faced)
- [Conclusion](#conclusion)

## Installation

Follow the steps below to clone and set up the project:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/md-galib-hossain/star-smasher
    cd star-smasher
    ```

2.  **Install dependencies:**

    Make sure you have **Node.js** installed. Then, run the following command to install the necessary dependencies:

    ```bash
    npm install
    ```

## Run the Project

1.  **Start the development server:**

    Run the following command to launch the game:

    ```bash
    npm run dev
    ```

    This will open the game in your default web browser.

## Development Approach

The development of **Star Smasher** followed a systematic approach using the following steps:

### 1. **Creating the Game with React and Phaser**

First, I created a React app as the base for the project, which will house the Phaser game. I followed this [guide from Phaser](https://phaser.io/tutorials/create-game-app) that recommends using React for building the app and integrating Phaser into it. Additionally, I used TypeScript for better developer experience.

### 2. **Building the Game Mechanics**

I followed the tutorial on creating a basic Phaser 3 game from the official documentation: [Making Your First Phaser 3 Game](https://phaser.io/tutorials/making-your-first-phaser-3-game/part1). This tutorial guided me through setting up the core game mechanics, including player movements, collisions, and basic animations.

### 3. **Responsive Design**

After completing the game mechanics, I focused on making the game responsive. The challenge came when trying to position the start game button, which would move incorrectly depending on the viewport size.

I noticed that the canvas used for the Phaser game had a dynamic width and height. This gave me the idea to base the position of the button on the canvas size, rather than the viewport. However, this led to a few iterations and debugging before I finally found a solution that made the button fully responsive.

The solution involved adjusting the start button's position based on the canvas' dimensions and updating it when the viewport changes. This ensured that the button remained in the correct position regardless of the screen size.

## Challenges Faced

### 1. **Responsive Design of the Start Button**

The biggest challenge was positioning the start game button responsively. Initially, the button would move unpredictably when resizing the viewport. After inspecting the DOM and analyzing the canvas element, I realized that the canvas size could be used to calculate the button’s position.

Despite several failed attempts, including trying different viewport-based solutions, I eventually debugged the issue by basing the button's position on the canvas' height and width, making it responsive.

## Conclusion

**Star Smasher** is a responsive Phaser 3 game that I built by following official guides, troubleshooting, and iterating on designs. The project allowed me to gain hands-on experience with Phaser and TypeScript, and it was a valuable exercise in making web-based games more responsive and user-friendly.

Feel free to clone the repo and explore the game. Contributions and feedback are welcome!

---

Happy coding! 🎮🚀
