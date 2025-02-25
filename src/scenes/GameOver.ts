import { Scene } from 'phaser';

export class GameOver extends Scene {
    gameOverText: Phaser.GameObjects.Text;

    constructor() {
        super('GameOver');
    }

    create() {
        const { width, height } = this.cameras.main;

        this.gameOverText = this.add.text(width / 2, height / 2 - 100, 'Game Over', {
            fontFamily: 'Arial Black',
            fontSize: '64px',
            color: '#ff0000',
        }).setOrigin(0.5);

        
        window.postMessage({ action: 'showRestartButton' }, '*');

        // Listen for restart event
        window.addEventListener('message', (event) => {
            if (event.data.action === 'restart') {
                this.handleRestart();
            }
        });
    }

    handleRestart() {
        // Remove "Game Over" text
        this.gameOverText.destroy();

        // Clear the scene and start the Game scene
        this.scene.stop('GameOver');
        this.scene.start('Game');
    }
}
