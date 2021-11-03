//const ball = new Image();
//ball.src = "/images/soccer.png";

class Obstacle {
  constructor(ctx, x, y, speed, direction) {
    this.ctx = ctx;
    this.x = canvas.width / 2;
    this.y = canvas.height;
    this.color = "white";
    this.speed = speed;
    this.size = 30;
    this.direction = direction;
    this.imageSrc = "/images/soccer.png";
    this.type = "ball";
  }

  draw() {
    this.ctx.fillStyle = this.color;
    console.log();

    const ball = new Image();
    ball.src = this.imageSrc;
    this.ctx.drawImage(ball, this.x, this.y, this.size, this.size);
    this.x += this.direction;
  }

  move() {
    if (this.y > 180) this.y += this.speed * -6;
  }
}

class RedBall extends Obstacle {
  constructor(ctx, x, y, speed, direction) {
    super(ctx, x, y, speed, direction);

    this.imageSrc = "/images/redBall.png";
    this.size = 60;
    this.type = "RedBall";
  }
}

class Rock extends Obstacle {
  constructor(ctx, x, y, speed, direction) {
    super(ctx, x, y, speed, direction);

    this.imageSrc = "/images/rock.png";
    this.size = 30;
    this.type = "Rock";
  }
}
class One extends Obstacle {
  constructor(ctx, x, y, speed, direction) {
    super(ctx, x, y, speed, direction);

    this.imageSrc = "/images/one.png";
    this.size = 30;
    this.type = "One";
  }
}
