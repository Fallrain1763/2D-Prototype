class Play extends Phaser.Scene {
    constructor() {
      super("playScene");
    }
  
    preload() {
      //load images
      this.load.image("bg", "./assets/museumbg.png");
      this.load.image("p1", "./assets/MuseumSprites1.png");
      this.load.image("p2", "./assets/MuseumSprites2.png");
      this.load.image("p3", "./assets/MuseumSprites3.png");
      this.load.image("p4", "./assets/MuseumSprites4.png");
      this.load.image("light", "./assets/flashlight.png");
      this.load.image("fence", "./assets/museumfence.png");
    }
    create() {
        this.gameStarted = false;
        this.add.sprite(0, 0, 'bg').setOrigin(0, 0)
        //add art sprites here! (use prefab)
        this.art1a = new Art(this, 0, 0, 'p1').setOrigin(0,0)
        //add the rest and update placement
        this.add.sprite(0,0, 'fence').setOrigin(0,0)
        this.flashlight = this.add.sprite(game.config.width/2, game.config.height/2, 'light').setOrigin(0.5, 0.5)
    }
  
    update() {
      this.flashlight.x=this.input.x;
      this.flashlight.y=this.input.y;
    }
  }
  