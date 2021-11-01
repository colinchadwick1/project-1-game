"use strict";

const gloves = new Image ();
gloves.src = "/images/gloves.png"


class Player {
  constructor(canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.canvasHeight = 500;
    this.lives = lives;
    this.size = 100;
    this.x = 50;
    this.y = canvas.height / 2;
    this.direction = 0;
    this.speed = 25;
  }

  update() {
    this.x = this.x + this.speed;
    this.checkScreen();
  }

  setDirection(direction) {
    // +1 down  -1 up
    if (direction === "left") this.direction = -1;
    else if (direction === "right") this.direction = 1;
  }

  // Check if the player is out of the screen / canvas
  checkScreen() {
    if (this.x + this.size - this.size <= 140) {
      this.direction = 1;
    } else if (this.x + this.size >= 800) {
      this.direction = -1;
    }
  }

  draw() {
    this.ctx.fillStyle = "white";
    // fillRect(x, y, width, height)
    this.ctx.drawImage(gloves, this.x, this.y, this.size, this.size )
    


  }

  didCollide(obstacle) {
    if (
      this.x + this.size >= obstacle.x &&
      this.y + this.size > obstacle.y &&
      this.y < obstacle.y + obstacle.size &&
      this.x <= obstacle.x + obstacle.size &&
      this.y + this.size > obstacle.y &&
      this.y < obstacle.y + obstacle.size
    ) {
      return true;
    } else {
      return false;
    }
  }
}