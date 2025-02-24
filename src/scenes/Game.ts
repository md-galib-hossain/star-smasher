// import { Scene } from 'phaser';

// var score = 0;
// var gameOver = false;

// export class Game extends Scene {
//     camera: Phaser.Cameras.Scene2D.Camera;
//     background: Phaser.GameObjects.Image;
//     msg_text: Phaser.GameObjects.Text;
//     scoreText: Phaser.GameObjects.Text;
//     platforms: Phaser.Physics.Arcade.StaticGroup;
//     player: Phaser.Physics.Arcade.Sprite;
//     cursors: Phaser.Types.Input.Keyboard.CursorKeys;
//     stars: Phaser.Physics.Arcade.Group;
//     bombs: Phaser.Physics.Arcade.Group;

//     constructor() {
//         super('Game');
//     }

//     create() {
//         // Background
//         const sky = this.add.image(0, 0, 'sky').setOrigin(0, 0);
//         sky.displayWidth = this.cameras.main.width;
//         sky.displayHeight = this.cameras.main.height;

//         // Platforms
//         this.platforms = this.physics.add.staticGroup();
//         const ground = this.platforms.create(0, this.cameras.main.height, 'ground').setScale(3).setOrigin(0, 0.5).refreshBody();
//         ground.displayWidth = this.cameras.main.width;

//         // Score board
//         this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });

//         // Grounds
//         let firstGround = this.platforms.create(600, 1000, 'ground').setScale(0.9, 1).refreshBody();;
   
//         let secondGround = this.platforms.create(50, 800, 'ground').setScale(0.9, 1).refreshBody();
//         let thirdGround = this.platforms.create(550, 600, 'ground').setScale(0.9, 1).refreshBody();

//         // Player
//         this.player = this.physics.add.sprite(100, 450, 'dude');
//         this.player.setBounce(0.2);
//         this.player.setCollideWorldBounds(true);

//         // Player animations
//         this.anims.create({
//             key: 'left',
//             frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
//             frameRate: 10,
//             repeat: -1
//         });

//         this.anims.create({
//             key: 'turn',
//             frames: [{ key: 'dude', frame: 4 }],
//             frameRate: 20
//         });

//         this.anims.create({
//             key: 'right',
//             frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
//             frameRate: 10,
//             repeat: -1
//         });

//         // Keyboard input
//         this.cursors = this.input.keyboard.createCursorKeys();

//         // Stars
//         this.stars = this.physics.add.group({
//             key: 'star',
//             repeat: 11,
//             setXY: { x: 12, y: 0, stepX: 70 }
//         });

//         this.stars.children.iterate((child: Phaser.Physics.Arcade.Sprite) => {
//             child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
//         });

//         // Bombs group
//         this.bombs = this.physics.add.group();

//         // Collisions
//         this.physics.add.collider(this.player, this.platforms);
//         this.physics.add.collider(this.stars, this.platforms);
//         this.physics.add.collider(this.bombs, this.platforms);
//         this.physics.add.collider(this.player, this.bombs, this.hitBomb, null, this);

//         // Overlap for collecting stars
//         this.physics.add.overlap(this.player, this.stars, this.collectStar, undefined, this);
//     }

//     update() {
//         if (this.cursors.left.isDown) {
//             this.player.setVelocityX(-160);
//             this.player.anims.play('left', true);
//         } else if (this.cursors.right.isDown) {
//             this.player.setVelocityX(160);
//             this.player.anims.play('right', true);
//         } else {
//             this.player.setVelocityX(0);
//             this.player.anims.play('turn');
//         }

//         if (this.cursors.up.isDown && this.player.body.touching.down) {
//             // increase the velocity of the player
//             this.player.setVelocityY(-400); 
//         }
//     }

//     collectStar(player, star) {
//         star.disableBody(true, true);
    
//         score += 10;
//         this.scoreText.setText('Score: ' + score);
    
//         if (this.stars.countActive(true) === 0) {
//             this.stars.children.iterate((child) => {
//                 child.enableBody(true, child.x, 0, true, true);
//             });
    
//             let x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
    
//             // Set the bomb's spawn y-coordinate to a lower value like 500 or 600 to ensure visibility
//             let bomb = this.bombs.create(x, 500, 'bomb');  // Spawn further down, so it's visible
//             bomb.setBounce(1);
//             bomb.setCollideWorldBounds(true);
    
//             // Modify the bomb velocity to ensure it falls with correct speed
//             bomb.setVelocity(Phaser.Math.Between(-200, 200), 300);  // Ensure the bomb falls downwards
//             bomb.allowGravity = true;  // Make sure gravity is applied
//         }
//     }
    
    
    
//     hitBomb(player, bomb) {
//         console.log('Player hit a bomb!');
//         this.physics.pause();
//         player.setTint(0xff0000);  // Change color on hit
//         player.anims.play('turn');
//         gameOver = true;
    
//         // Make sure that the bomb is correctly deactivated
//         bomb.disableBody(true, true);
    
//         // Switch to the GameOver scene
//         this.scene.start('GameOver');
//     }
    
    
// }
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

        // Collisions and overlap
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

            let x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
            this.bombs.createBomb(x, 500); // Create a bomb
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

