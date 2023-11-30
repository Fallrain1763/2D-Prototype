class S1 extends Phaser.Scene {
    constructor() {
        super('S1');
    }
    preload() {
        this.load.path = './assets/';
    }
    create() {
        
    }
    update() {

    }
}

let config = {
	type: Phaser.WEBGL,
	scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1280,
        height: 720
    },
	backgroundColor: '#000000',
	scene: [S1]
}

let game = new Phaser.Game(config);