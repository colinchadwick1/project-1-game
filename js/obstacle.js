
    const ball = new Image ();
    ball.src = "/images/soccer.png"






class Obstacle {
    constructor(ctx, x, y, speed) {
      this.ctx = ctx;
      this.x = canvas.width / 2;
      this.y = canvas.height;
      this.color = "white";
      this.speed = speed;
      this.size = 30;

    }



    
  
    draw() {
      // We will first draw squares
      this.ctx.fillStyle = this.color;
      this.ctx.drawImage(ball, this.x, this.y, this.size, this.size )
    
      
    }

    move() {
   

      this.y += this.speed * -6;
      
    }
  }