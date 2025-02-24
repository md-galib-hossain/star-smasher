import { Scene } from 'phaser';

export class Bombs {
    private scene: Scene;
    private bombs: Phaser.Physics.Arcade.Group;

    constructor(scene: Scene) {
        this.scene = scene;
        this.createBombs();
    }

    private createBombs() {
        this.bombs = this.scene.physics.add.group({
            bounceX: 1,
            bounceY: 1,
            collideWorldBounds: true
        });
    }

    public createBomb(x: number, y: number) {
        console.log(`Creating bomb at x: ${x}, y: ${y}`); // Ensure this logs

        const bomb = this.bombs.create(x, y, 'bomb');
        if (bomb) {
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 300);
            bomb.allowGravity = true;
        } else {
            console.warn('Failed to create bomb.');
        }
    }

    public getBombs() {
        return this.bombs;
    }
}
