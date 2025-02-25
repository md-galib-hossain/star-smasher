import { Scene } from 'phaser';
import { Player } from '../game/Player';
import { Platforms } from '../game/Platforms';
import { Stars } from '../game/Stars';
import { Bombs } from '../game/Bombs';
import { Score } from '../game/Score';

var gameOver = false;

export class Game extends Scene {
    private player: Player;
    private platforms: Platforms;
    private stars: Stars;
    private bombs: Bombs;
    private score: Score;

    constructor() {
        super('Game');
    }

    create() {
        const sky = this.add.image(0, 0, 'sky').setOrigin(0, 0);
        sky.displayWidth = this.cameras.main.width;
        sky.displayHeight = this.cameras.main.height;

        this.player = new Player(this);
        this.platforms = new Platforms(this);
        this.stars = new Stars(this);
        this.bombs = new Bombs(this);
        this.score = new Score(this);

        this.physics.add.collider(this.player.getPlayer(), this.platforms.getPlatforms());
        this.physics.add.collider(this.stars.getStars(), this.platforms.getPlatforms());
        this.physics.add.collider(this.bombs.getBombs(), this.platforms.getPlatforms());
        this.physics.add.collider(this.player.getPlayer(), this.bombs.getBombs(), this.hitBomb, null, this);
        this.physics.add.overlap(this.player.getPlayer(), this.stars.getStars(), this.collectStar, undefined, this);
    }

    update() {
        this.player.update();
    }

    collectStar(player: Phaser.Physics.Arcade.Sprite, star: Phaser.Physics.Arcade.Sprite) {
        star.disableBody(true, true);
        this.score.increaseScore(10);
    
        if (this.stars.getStars().countActive(true) === 0) {
            this.stars.getStars().children.iterate((child: Phaser.Physics.Arcade.Sprite) => {
                child.enableBody(true, child.x, 0, true, true);
            });
    
            const x = (player.x < this.cameras.main.width / 2)
                ? Phaser.Math.Between(this.cameras.main.width / 2, this.cameras.main.width)
                : Phaser.Math.Between(0, this.cameras.main.width / 2);
    
            const y = this.cameras.main.height * 0.2; // 20% of screen height
            console.log('Creating bomb at:', x, y); 
            this.bombs.createBomb(x, y);
        }
    }
    

    hitBomb(player: Phaser.Physics.Arcade.Sprite, bomb: Phaser.Physics.Arcade.Sprite) {
        console.log('Player hit a bomb!');
        this.physics.pause();
        player.setTint(0xff0000);
        player.anims.play('turn');
        gameOver = true;
        bomb.disableBody(true, true);
        this.scene.start('GameOver');
    }
}