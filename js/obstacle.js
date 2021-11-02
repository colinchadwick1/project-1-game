
    const ball = new Image ();
    ball.src = "/images/soccer.png"








class Obstacle {
    constructor(ctx, x, y, speed, direction) {
      this.ctx = ctx;
      this.x = canvas.width / 2;
      this.y = canvas.height;
      this.color = "white";
      this.speed = speed;
      this.size = 30;
      this.direction = direction

    }



    
  
    draw() {
      // We will first draw squares
      this.ctx.fillStyle = this.color;
      console.log()


      this.ctx.drawImage(ball, this.x , this.y, this.size, this.size,)
      this.x += this.direction
    
    }



    move() {

   

      this.y += this.speed * -6;

      
    }
  }