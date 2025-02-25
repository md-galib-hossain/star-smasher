import { Game, Types } from "phaser";
import { Preloader } from "./scenes/Preloader";
import { MainMenu } from "./scenes/MainMenu";
import { Game as MainGame } from "./scenes/Game";
import { GameOver } from "./scenes/GameOver";

const config: Types.Core.GameConfig = {
  type: Phaser.AUTO,
  height: 1280,
  width: 720,
  parent: "game-container",
  backgroundColor: "#028af8",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300, x: 0 },
      debug: false,
    },
  },
  scene: [Preloader, MainMenu, MainGame, GameOver],
};

const game = new Game(config);

const buttonConfig = {
  buttonText: "Start Game",
  buttonStyle: {
    color: "#FFFFFF",
    backgroundColor: "#A953FF",
    position: "absolute",
    borderRadius: "8px",
    fontSize: "24px",
    display: "none",
    border: "none", 
    cursor: "pointer",
  },
};

// Create and style button
const button = document.createElement("button");
button.textContent = buttonConfig.buttonText;
Object.assign(button.style, buttonConfig.buttonStyle);

const gameContainer = document.getElementById("game-container");
if (gameContainer) {
  gameContainer.appendChild(button);
}

button.addEventListener("click", () => {
  const action = button.textContent === "Start Game" ? "start" : "restart";
  window.postMessage({ action }, "*");
});

// Listen for scene changes
window.addEventListener("message", (event) => {
  if (event.data.action === "start") {
    game.scene.start("Game");
    hideButton();
  } else if (event.data.action === "restart") {
    game.scene.start("Game");
    hideButton();
  } else if (event.data.action === "showStartButton") {
    showButton("Start Game");
  } else if (event.data.action === "showRestartButton") {
    showButton("Restart");
  }
});

function showButton(text: string) {
  button.textContent = text;
  button.style.display = "block";
}

function hideButton() {
  button.style.display = "none";
}

// dynamicly position the button based on canvas
function positionButton() {
  const canvas = document.querySelector("#game-container canvas");
  if (!canvas) return;

  const canvasRect = canvas.getBoundingClientRect();

  gameContainer.style.position = "relative";
  button.style.position = "absolute";

  // Position the button inside the canvas
  button.style.top = `${canvasRect.top + canvasRect.height * 0.75}px`;
  button.style.left = "50%";
  button.style.transform = "translateX(-50%)";

  // Scale the button width relative to the canvas
  button.style.width = `${canvasRect.width * 0.7}px`;

  // Dynamically adjust font size based on canvas size
  const baseFontSize = Math.max(1, canvasRect.width * 0.0703);
  const basePadding = Math.max(1, canvasRect.width * 0.03);
  const baseBorderRadius = Math.max(1, canvasRect.width * 0.03);
  button.style.fontSize = `${baseFontSize}px`;
  button.style.paddingTop = `${basePadding}px`;
  button.style.paddingBottom = `${basePadding}px`;
  button.style.borderRadius = `${baseBorderRadius}px`;
}

window.addEventListener("resize", positionButton);
positionButton();
