class Player {
  constructor(ctx, canvasHeight, canvasWidth) {
    (this.ctx = ctx),
      (this.canvasHeight = canvasHeight),
      (this.canvasWidth = canvasWidth),
      (this.playerImage = undefined);
    this.size = {
      w: 100,
      h: 200,
    };
    this.health = 100, 
    this.bullets = []
    this.direction = "down",
    (this.posX = this.canvasWidth / 2 - this.size.w / 2),
      (this.posY = this.canvasHeight / 2 - this.size.h / 2),
      (this.key = {
        up: 38,
        down: 40,
        left: 37,
        right: 39,
        space: 32,
      });
    this.init();
  }
  init() {
    this.createAll();
    this.listen();
  }
  createAll() {
    this.createImage("up", "img/main-character/gun_up.png");
    this.createImage("down", "img/main-character/gun_down.png");
    this.createImage("left", "img/main-character/gun_left.png");
    this.createImage("right", "img/main-character/gun_right.png");
  }
  createImage(imageName, imagePath) {
    this[imageName] = new Image();
    this[imageName].src = imagePath;
  }
  draw() {
    if (this.direction === "down") {
      this.drawSprite("down");
    } else if (this.direction === "left") {
      this.drawSprite("left");
    } else if (this.direction === "right") {
      this.drawSprite("right");
    } else if (this.direction === "up") {
      this.drawSprite("up");
    }

  }
  drawSprite(imageName) {
      let width = this.size.w
      let height = this.size.h;
    if (imageName === "left" || imageName === "right"){
        width = this.size.h
        height = this.size.w;
    }
      this.ctx.drawImage(
        this[imageName],
        this.posX,
        this.posY,
        width,
        height
      );
  }
  listen() {
    document.addEventListener("keydown", (e) => {
      console.log(e.keyCode);
      if(e.keyCode === this.key.up){
        this.direction = "up";
      } else if(e.keyCode === this.key.down){
        this.direction ="down"
      }else if(e.keyCode === this.key.left){
        this.direction = "left"
      }else if(e.keyCode === this.key.right){
        this.direction = "right"
      }
    });
  }
}
