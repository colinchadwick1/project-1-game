"use strict";
let myStorage = window.localStorage;
class Game {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.obstacles = [];
    this.player = null;
    this.gameIsOver = false;
    this.score = 0;
    this.lives = 5;
  }

  start() {
    // Append canvas to the DOM, create a Player and start the Canvas loop
    // Save reference to canvas and Create ctx
    this.canvas = document.querySelector("canvas");
    this.ctx = canvas.getContext("2d");

    // Create a new player for the current game
    this.player = new Player(this.canvas, 5);

    // Add event listener for moving the player
    this.handleKeyDown = (event) => {
      if (event.code === "ArrowLeft") {
        this.player.x -= this.player.speed;
      } else if (event.code === "ArrowRight") {
        this.player.x += this.player.speed;
      } else if (event.code === "ArrowUp") {
        this.player.y -= this.player.speed;
      } else if (event.code === "ArrowDown") {
        this.player.y += this.player.speed;
      } else if (event.code === "ArrowDown" && event.code === "ArrowLeft") {
        this.player.y += this.player.speed;
        this.player.x -= this.player.speed;
      } else if (event.code === "ArrowDown" && event.code === "ArrowRight") {
        this.player.y += this.player.speed;
        this.player.x += this.player.speed;
      } else if (event.code === "ArrowUp" && event.code === "ArrowLeft") {
        this.player.y -= this.player.speed;
        this.player.x -= this.player.speed;
      } else if (event.code === "ArrowUp" && event.code === "ArrowRight") {
        this.player.y -= this.player.speed;
        this.player.x += this.player.speed;
      }
    };
    this.handleMouseMove = (e) => {
      this.player.update(e.x, e.y);
    };

    // Any function provided to eventListener
    document.body.addEventListener("keydown", this.handleKeyDown);
    document.body.addEventListener("mousemove", this.handleMouseMove);

    // Start the canvas requestAnimationFrame loop
    this.startLoop();
  }

  startLoop() {
    const loop = () => {
      // We create the obstacles with random y
      if (this.score < 20) {
        if (Math.random() > 0.99) {
          const y = Math.random() * this.canvas.height;
          const x = this.canvas.width - 20;
          let randomX = Math.random() * (5 - -5) + -5;
          this.obstacles.push(new Obstacle(this.ctx, x, y, 1, randomX));
          if (Math.random() > 0.9) {
            let randomX = Math.random() * (5 - -5) + -5;
            this.obstacles.push(new RedBall(this.ctx, x, y, 1, randomX));
          }
          if (Math.random() > 0.9) {
            let randomX = Math.random() * (5 - -5) + -5;
            this.obstacles.push(new Rock(this.ctx, x, y, 1, randomX));
          }
          if (Math.random() > 0.9) {
            let randomX = Math.random() * (5 - -5) + -5;
            this.obstacles.push(new One(this.ctx, x, y, 1, randomX));
          }
        }
      } else if (this.score >= 20 && this.score < 50) {
        if (Math.random() > 0.97) {
          const y = Math.random() * this.canvas.height;
          const x = this.canvas.width - 20;
          let randomX = Math.random() * (5 - -5) + -5;
          this.obstacles.push(new Obstacle(this.ctx, x, y, 1, randomX));
          if (Math.random() > 0.9) {
            let randomX = Math.random() * (5 - -5) + -5;
            this.obstacles.push(new RedBall(this.ctx, x, y, 1, randomX));
          }
          if (Math.random() > 0.9) {
            let randomX = Math.random() * (5 - -5) + -5;
            this.obstacles.push(new Rock(this.ctx, x, y, 1, randomX));
          }
          if (Math.random() > 0.9) {
            let randomX = Math.random() * (5 - -5) + -5;
            this.obstacles.push(new One(this.ctx, x, y, 1, randomX));
          }
        }
      } else if (this.score >= 50) {
        if (Math.random() > 0.97) {
          const y = Math.random() * this.canvas.height;
          const x = this.canvas.width - 20;
          let randomX = Math.random() * (5 - -5) + -5;
          this.obstacles.push(new Obstacle(this.ctx, x, y, 1, randomX));
          if (Math.random() > 0.9) {
            let randomX = Math.random() * (5 - -5) + -5;
            this.obstacles.push(new RedBall(this.ctx, x, y, 1, randomX));
          }
          if (Math.random() > 0.85) {
            let randomX = Math.random() * (5 - -5) + -5;
            this.obstacles.push(new Rock(this.ctx, x, y, 1, randomX));
          }
          if (Math.random() > 0.99) {
            let randomX = Math.random() * (5 - -5) + -5;
            this.obstacles.push(new One(this.ctx, x, y, 1, randomX));
          }
        }
      }

      // 1. UPDATE THE STATE OF PLAYER AND WE MOVE THE OBSTACLES
      //this.player.update();

      this.checkCollisions();

      // 2. CLEAR THE CANVAS
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // 3. UPDATE THE CANVAS
      // Draw the player
      this.player.draw();

      // Draw the enemies
      this.obstacles.forEach((obstacle, index) => {
        obstacle.move();
        if (obstacle.y <= 180) {
          if (obstacle.type !== "Rock" && obstacle.type !== "One")
            this.lives -= 1;
          this.obstacles.splice(index, 1);
        }
      });

      this.obstacles.forEach((obstacle) => {
        obstacle.draw();
      });

      // UPDATE GAME STATS
      document.querySelector("#lives-span").innerHTML = this.lives;
      document.querySelector("#score-span").innerHTML = this.score;
      if (this.lives <= 0) this.gameIsOver = true;

      // 4. TERMINATE LOOP IF GAME IS OVER
      if (!this.gameIsOver) {
        window.requestAnimationFrame(loop);
      } else {
        this.updateHighScore();
        buildGameOver(this.score);
      }
    };

    // As loop function will be continuously invoked by
    // the `window` object- `window.requestAnimationFrame(loop)`
    // we need to `start an infinitive loop` till the game is over
    window.requestAnimationFrame(loop);
  }

  checkCollisions() {
    this.obstacles.forEach((obstacle, index) => {
      if (this.player.didCollide(obstacle)) {
        if (obstacle.type === "ball") {
          this.score += 1;
          this.obstacles.splice(index, 1);
        }
        if (obstacle.type === "RedBall") {
          this.score += 5;
          this.obstacles.splice(index, 1);
        }
        if (obstacle.type === "Rock") {
          this.lives -= 1;
          this.obstacles.splice(index, 1);
        }
        if (obstacle.type === "One") {
          this.lives += 1;
          this.obstacles.splice(index, 1);
        }
      }
    });
  }
  updateHighScore() {
    const highScore = myStorage.getItem("score");
    if (this.score > highScore) myStorage.setItem("score", String(this.score));
  }
}
