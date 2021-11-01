const buildDom = (html) => {
    const main = document.querySelector(".container");
    main.innerHTML = html;
  };
  
  // First Screen => Splash Screen
  const buildSplashScreen = () => {
    buildDom(`
    <img src="" alt="" style="width:50%;" />
    <br />
    <button id="start-button">Start Game</button>
    `);
    const startButton = document.getElementById("start-button");
    startButton.addEventListener("click", buildGameScreen);
    startButton.addEventListener("keypress", buildGameScreen);


  };
  
  // Second Screen => Game Screen
  const buildGameScreen = () => {
    buildDom(`
    <h3 class="score">Score: 0</h3>
    <h3> lives 5</h3>
    <div id="game-board">
    <canvas id="canvas" width="800" height="500" style="background: url('/images/goal.jpeg')"></canvas>
    </div>  
    <button id="end-button">End Game</button>
    `);
  
    const endButton = document.getElementById("end-button");
    endButton.addEventListener("click", buildGameOver);
  
    const game = new Game();
    game.start();
  };
  
  // Third Screen => Game Over
  const buildGameOver = () => {
    buildDom(`
    <section class="game-over">
    <h1>Game Over</h1>
    <button id = "game"> TRY AGAIN</button>
    <div class= "pointer"> </div>
    </section>
    `);
  
    const restartButton = document.querySelector("button");
    restartButton.addEventListener("click", buildGameScreen);
  };
  
  // When the window loads, then we will run the "buildSplashScreen" function
  // "load" waits for the html and JS
  window.addEventListener("load", buildSplashScreen);