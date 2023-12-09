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
        // Background
        this.add.sprite(0, 0, 'bg').setOrigin(0, 0)

        // Game Start
        this.gameStarted = false;
        this.add.text(game.config.width/2, game.config.height/2, 'START')
            .setOrigin(0.5, 0.5)
            .setStyle({ fontSize: 10 })
            .setInteractive()
            .on('pointerdown', () => {
                this.gameStarted = true
            });

        // add art sprites here! (use prefab)
        this.art1a = new Art(this, 135, 95, 'p1').setOrigin(0,0)
        this.art1b = new Art(this, 150, 200, 'p1').setOrigin(0,0)
        this.art1c = new Art(this, 20, 200, 'p1').setOrigin(0,0)
        this.art1d = new Art(this, 40, 95, 'p1').setOrigin(0,0)

        this.art2a = new Art(this, 45, 70, 'p2').setOrigin(0,0.5)
        this.art2b = new Art(this, 180, 115, 'p2').setOrigin(0,0.5)
        this.art2c = new Art(this, 30, 150, 'p2').setOrigin(0,0.5)

        this.art3a = new Art(this, 100, 200, 'p3').setOrigin(0,0.5)
        this.art3a = new Art(this, 220, 100, 'p3').setOrigin(0,0.5)

        this.art4a = new Art(this, 90, 80, 'p4').setOrigin(0.5,0.5)
        this.art4a = new Art(this, 190, 70, 'p4').setOrigin(0.5,0.5)
        this.art4a = new Art(this, 180, 160, 'p4').setOrigin(0.5,0.5)
        this.art4a = new Art(this, 80, 160, 'p4').setOrigin(0.5,0.5)

            
        //add the rest and update placement
        this.add.sprite(0,0, 'fence').setOrigin(0,0)

        this.flashlight = 
        this.add.sprite(game.config.width/2, game.config.height/2, 'light')
                .setOrigin(0.5, 0.5)
                              
                              
    }
  
    update() {
      
        if(this.input.x >= 0 &&
           this.input.x <= game.config.width && 
           this.gameStarted == true){
            this.flashlight.x=this.input.x;
        }
     
      if(this.input.y >= 0 &&
         this.input.y <= game.config.height &&
         this.gameStarted == true){
             this.flashlight.y=this.input.y;      
      }
      
      
    }
  }
  