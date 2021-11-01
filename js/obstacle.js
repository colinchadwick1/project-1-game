class Obstacle {
    constructor(ctx, x, y, speed) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.color = "white";
      this.speed = speed;
      this.size = 30;
    }
  
    draw() {
      // We will first draw squares
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x, this.y, this.size, this.size);
      
      
    }
  
    move() {
      this.x += this.speed * -6;
    }
  }