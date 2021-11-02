const buildDom = (html) => {
  const main = document.querySelector(".container");
  main.innerHTML = html;
};

// First Screen => Splash Screen
const buildSplashScreen = () => {
  buildDom(`
    <img src="" alt="" style="width:50%;" />
    <br />
    <img src="/images/start-ball.png" alt="world-cup-ball" id="start-ball"/>
    <button id="start-button">Start Game</button>
    `);
  const startButton = document.getElementById("start-button");

  const startImage = document.getElementById("start-ball");
  startButton.addEventListener("click", buildGameScreen);
  startImage.addEventListener("click", buildGameScreen);
};

// Second Screen => Game Screen
const buildGameScreen = () => {
  buildDom(`
    <h3 class="score">Saved: <span id="score-span">0</span></h3>
    <h3> lives <span id="lives-span">5</span></h3>
    <div id="game-board">
    <canvas id="canvas" width="900" height="600" style="background: url('/images/goal.jpeg')"></canvas>
    </div>  
    <button id="end-button">End Game</button>
    `);

  const endButton = document.getElementById("end-button");
  endButton.addEventListener("click", buildGameOver);

  const game = new Game();
  game.start();
};

// Third Screen => Game Over
const buildGameOver = (score) => {
  buildDom(`
    <section class="game-over">
    <h1>Game Over</h1>
    <h3>Score:<span id="final-score">0</span></h3>
    <button id = "game"> TRY AGAIN</button>
    <div class= "pointer"> </div>
    </section>
    `);

  const restartButton = document.querySelector("button");
  restartButton.addEventListener("click", buildGameScreen);
  document.querySelector("#final-score").innerHTML = score;
};

// When the window loads, then we will run the "buildSplashScreen" function
// "load" waits for the html and JS
window.addEventListener("load", buildSplashScreen);
