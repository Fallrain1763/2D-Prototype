class Art extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture){
        super(scene, x, y, texture)
        scene.add.existing(this);
        this.scene = scene;
    }

    update(){
        if((this.x > this.scene.input.x + 32 || this.x<this.scene.input.x -32)&&(this.y>this.scene.input.y+32||this.y<this.scene.input.y - 32)){
            let decider = Phaser.Math.Between(1, 500)
            if(decider==50||decider==51){
                this.setVisible(false);
            }else if(decider==25){
                this.setVisible(true);
            }
        }
    }
}
