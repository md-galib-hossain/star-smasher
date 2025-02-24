import { Scene } from 'phaser';

export class Bombs {
    private scene: Scene;
    private bombs: Phaser.Physics.Arcade.Group;

    constructor(scene: Scene) {
        this.scene = scene;
        this.createBombs();
    }

    private createBombs() {
        this.bombs = this.scene.physics.add.group();
    }

    public createBomb(x: number, y: number) {
        let bomb = this.bombs.create(x, y, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 300);
        bomb.allowGravity = true;
    }

    public getBombs() {
        return this.bombs;
    }
}
