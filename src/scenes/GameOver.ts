import { Scene, GameObjects } from 'phaser';

export class GameOver extends Scene {
    constructor() {
        super('GameOver');
    }

    create() {
        const { width, height } = this.cameras.main;

        this.add.text(width / 2, height / 2 - 100, 'Game Over', {
            fontFamily: 'Arial Black',
            fontSize: 64,
            color: '#ff0000',
        }).setOrigin(0.5);

        const restartButton = this.add.text(width / 2, height / 2, 'Restart', {
            fontFamily: 'Arial Black',
            fontSize: 38,
            color: '#ffffff',
            backgroundColor: '#000000',
            padding: { left: 20, right: 20, top: 10, bottom: 10 },
        })
        .setOrigin(0.5)
        .setInteractive();

        restartButton.on('pointerdown', () => {
            this.scene.start('Game');
        });
    }
}
