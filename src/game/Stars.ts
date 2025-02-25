import { Scene } from 'phaser';

export class Stars {
    private scene: Scene;
    private stars: Phaser.Physics.Arcade.Group;

    constructor(scene: Scene) {
        this.scene = scene;
        this.createStars();
    }

    private createStars() {
        this.stars = this.scene.physics.add.group({
            key: 'star',
            repeat: 9,
            setXY: { x: 12, y: 0, stepX: 70 },
        });

        this.stars.children.iterate((child: Phaser.Physics.Arcade.Sprite) => {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });
    }

    public getStars() {
        return this.stars;
    }
}
