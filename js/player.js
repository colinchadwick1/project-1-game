"use strict";

class Player {
  constructor(canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.canvasHeight = 500;
    this.lives = lives;
    this.size = 50;
    this.x = 50;
    this.y = canvas.height / 2;
    this.direction = 0;
    this.speed = 1;
  }

  update() {
    this.y = this.y + this.direction * this.speed;
    this.checkScreen();
  }

  setDirection(direction) {
    // +1 down  -1 up
    if (direction === "up") this.direction = -5;
    else if (direction === "down") this.direction = 5;
  }

  // Check if the player is out of the screen / canvas
  checkScreen() {
    if (this.y + this.size - this.size <= 0) {
      this.direction = 1;
    } else if (this.y + this.size >= 500) {
      this.direction = -1;
    }
  }

  draw() {
    this.ctx.fillStyle = "black";
    // fillRect(x, y, width, height)
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
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