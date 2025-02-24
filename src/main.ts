import { Game, Types } from "phaser";
import { Boot } from './scenes/Boot';
import { Game as MainGame } from './scenes/Game';
import { GameOver } from './scenes/GameOver';
import { MainMenu } from './scenes/MainMenu';
import { Preloader } from './scenes/Preloader';

const config: Types.Core.GameConfig = {
    type: Phaser.AUTO,
    height: 1280,
    width: 720,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300, x: 0 },  
            debug: false
        }
    },
    scene: [
        Preloader,
        MainMenu,
        MainGame,
        GameOver
    ]
};

export default new Game(config);
