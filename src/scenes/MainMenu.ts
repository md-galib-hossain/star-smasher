import { Scene } from 'phaser';

export class MainMenu extends Scene {
    constructor() {
        super('MainMenu');
    }

    create() {
        const { width, height } = this.cameras.main;

        const sky = this.add.image(0, 0, 'sky').setOrigin(0, 0);
        sky.displayWidth = width;
        sky.displayHeight = height;

        // Show Start Game button
        window.postMessage({ action: 'showStartButton' }, '*');
    }
}
