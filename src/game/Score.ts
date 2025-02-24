export class Score {
    private score: number = 0;
    private scoreText: Phaser.GameObjects.Text;

    constructor(scene: Phaser.Scene) {
        this.scoreText = scene.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
    }

    public increaseScore(amount: number) {
        this.score += amount;
        this.scoreText.setText('Score: ' + this.score);
    }

    public getScore() {
        return this.score;
    }
}
