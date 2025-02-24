import { Scene, GameObjects } from 'phaser';

export class MainMenu extends Scene {
    background: GameObjects.Image;
    startButton: GameObjects.Text;

    constructor() {
        super('MainMenu');
    }

    create() {
        const { width, height } = this.cameras.main;

 

        this.startButton = this.add.text(width / 2, height / 2, 'Start Game', {
            fontFamily: 'Arial Black',
            fontSize: '38px',
            color: '#ffffff',
            backgroundColor: '#000000',
            padding: { left: 20, right: 20, top: 10, bottom: 10 },
            align: 'center'
        })
        .setOrigin(0.5, 0.5)
        .setInteractive(); // Make it clickable

        this.startButton.on('pointerdown', () => {
            this.scene.start('Game');
        });

        // Hover effects
        this.startButton.on('pointerover', () => {
            this.startButton.setStyle({ fill: '#f39c12' });
        });

        this.startButton.on('pointerout', () => {
            this.startButton.setStyle({ fill: '#ffffff' });
        });
    }
}
