import { Scene } from 'phaser';

export class Platforms {
    private scene: Scene;
    private platforms: Phaser.Physics.Arcade.StaticGroup;

    constructor(scene: Scene) {
        this.scene = scene;
        this.createPlatforms();
    }

    private createPlatforms() {
        this.platforms = this.scene.physics.add.staticGroup();
        const ground = this.platforms.create(0, this.scene.cameras.main.height, 'ground').setScale(3).setOrigin(0, 0.5).refreshBody();
        ground.displayWidth = this.scene.cameras.main.width;

        let firstGround = this.platforms.create(600, 1000, 'ground').setScale(0.9, 1).refreshBody();
        let secondGround = this.platforms.create(50, 800, 'ground').setScale(0.9, 1).refreshBody();
        let thirdGround = this.platforms.create(550, 600, 'ground').setScale(0.9, 1).refreshBody();
    }

    public getPlatforms() {
        return this.platforms;
    }
}
