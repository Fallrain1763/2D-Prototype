let config = {
	type: Phaser.WEBGL,
	scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 256,
        height: 256
    },
	backgroundColor: '#000000',
    pixelArt: true,
	scene: [Play]
}

let game = new Phaser.Game(config);