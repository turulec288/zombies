class Bullets{
    constructor(ctx, canvasHeight, canvasWidth, playerSpriteObj, playerDirection){
        this.ctx = ctx,
        this.canvasHeight = canvasHeight,
        this.canvasWidth = canvasWidth
        this.playerSprite = playerSpriteObj
        this.playerDirection = playerDirection
        this.framesCounter = 0
        this.posXY = {
          x: undefined,
          y: undefined,
        };
        this.dimension = {
            w : 50,
            h: 50
        },
        this.sprite = {
            posXY: {
                x: undefined, 
                y: undefined
            }, 
            size: {
                w: this.dimension.w, 
                h: this.dimension.h
            }
        },
        this.vel = 3
        
        this.init()
    }
    init(){
        this.decidePos()
        this.create("hola")
    }
    create(imageName){
        this[imageName] = new Image();
        this[imageName].src = "img/bullet.png";
    // if (this.direction === "up") {
    //   this[imageName].src = "img/zombie/zombie_up.png";
    // } else if (this.direction === "down") {
    //   this[imageName].src = " img/zombie/zombie_down.png";
    // } else if (this.direction === "left") {
    //   this[imageName].src = " img/zombie/zombie_left.png";
    // } else if (this.direction === "right") {
    //   this[imageName].src = " img/zombie/zombie_right.png";
    // }
    this[imageName].frames = 4;
    this[imageName].framesIndex = 0;
    }
    draw(){
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(
          this.posXY.x ,
          this.posXY.y , 
          this.dimension.w, 
          this.dimension.h,
        );
        this.resetFramesCounter()
        this.move()
        this.drawSprite("hola")
    }
    drawSprite(imageName) {
    this.animateImage(this.framesCounter, this[imageName], 5)
     this.ctx.drawImage(
      this[imageName],
      (this[imageName].width / this[imageName].frames) * this[imageName].framesIndex,
      0,
      this[imageName].width / this[imageName].frames,
      this[imageName].height,
      this.posXY.x,
      this.posXY.y,
      this.dimension.w,
      this.dimension.h
    );
  }
  resetFramesCounter(){
    this.framesCounter > 1000 ? (this.framesCounter = 0) : this.framesCounter++
  }
  animateImage(framesCounter, image, speed) {
    if (framesCounter % speed === 0) {
      image.framesIndex++;
    }
    if (image.framesIndex >= image.frames) {
      image.framesIndex = 0;
    }
  }
    
    move(){
        if(this.playerDirection === "down"){
            this.posXY.y += this.vel
            this.sprite.posXY.y += this.vel
        }else if(this.playerDirection === "up"){
            this.posXY.y -= this.vel
            this.sprite.posXY.y -= this.vel
        }else if(this.playerDirection === "left"){
            this.posXY.x -= this.vel
            this.sprite.posXY.x -= this.vel
        }else if(this.playerDirection === "right"){
            this.posXY.x += this.vel
            this.sprite.posXY.x += this.vel
        }
    }
    decidePos(){
        
        if(this.playerDirection === "up"){
            this.isUp()
        }else if(this.playerDirection === "down"){
            this.isDown()
        }else if(this.playerDirection === "right"){
            this.isRight()
        }else if(this.playerDirection === "left"){
            this.isLeft()
        }
    }
    isUp(){
        this.posXY.y = this.playerSprite.posXY.y 
        this.posXY.x = this.playerSprite.posXY.x + this.playerSprite.size.w/2
        this.sprite.posXY.y = this.playerSprite.posXY.y 
        this.sprite.posXY.x = this.playerSprite.posXY.x + this.playerSprite.size.w/2
    }
    isDown(){ 
        this.posXY.y = this.playerSprite.posXY.y + this.playerSprite.size.h
        this.posXY.x = this.playerSprite.posXY.x + this.playerSprite.size.w/2
        this.sprite.posXY.y = this.playerSprite.posXY.y + this.playerSprite.size.h
        this.sprite.posXY.x = this.playerSprite.posXY.x + this.playerSprite.size.w/2
        
    }
    isLeft(){
        this.posXY.y = this.playerSprite.posXY.y + this.playerSprite.size.h/2
        this.posXY.x = this.playerSprite.posXY.x 
        this.sprite.posXY.y = this.playerSprite.posXY.y + this.playerSprite.size.h/2
        this.sprite.posXY.x = this.playerSprite.posXY.x 
    }
    isRight(){ 
        this.posXY.x = this.playerSprite.posXY.x + this.playerSprite.size.w
        this.posXY.y = this.playerSprite.posXY.y + this.playerSprite.size.h/2
        this.sprite.posXY.x = this.playerSprite.posXY.x + this.playerSprite.size.w
        this.sprite.posXY.y = this.playerSprite.posXY.y + this.playerSprite.size.h/2
    }
    
}