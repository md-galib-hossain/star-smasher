import { Game as MainGame } from './scenes/Game';
import { GameOver } from './scenes/GameOver';
import { MainMenu } from './scenes/MainMenu';
import { Preloader } from './scenes/Preloader';

import { Game, Types } from "phaser";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Types.Core.GameConfig = {
    type: Phaser.AUTO,
    height: 1280,
    width: 720,
    // width: 1280,
    // height: 720,
    // width: 800,
    // height: 600,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Phaser.Scale.FIT,
     
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 300,
                x: 0
            },
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
