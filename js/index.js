const buildDom = (html) => {
  const main = document.querySelector(".container");
  main.innerHTML = html;
};

// First Screen => Splash Screen
const buildSplashScreen = () => {
  buildDom(`
  <main class="main">
  <img id="goalies" src="./images/goalieswhite.png"/>
    <img src="" alt="" style="width:50%;" />
    <br />
    <img src="./images/champions.png" alt="champions-trophy" id="champions"/>
    <button id="start-button">Start Game</button>
    <audio  autoplay>
    <source src="cl.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
  </audio>
    <div class = "rules">
  <span class ="rules-text"><img class = "img-rules" src="./images/rock.png"/> = -1 lives</span>
  <span class ="rules-text"><img class = "img-rules" src="./images/redBall.png"/> = +5 points</span>
  <span class ="rules-text"><img  class = "img-rules"src="./images/one.png"/> = +1 life</span>
    </div>
    </main>
    `);
  const startButton = document.getElementById("start-button");

  startButton.addEventListener("click", buildGameScreen);
};

// Second Screen => Game Screen
const buildGameScreen = () => {
  buildDom(`
  <header id="header">
  <h3 id="high-score-header: ">High score:  <span id="high-score">0</span></h3>
    <h3 class="score">Saved: <span id="score-span">0</span></h3>
    <h3> lives: <span id="lives-span">5</span></h3>
    </header>
    <div id="game-board">
    <canvas id="canvas" width="900" height="600" ></canvas>
    </div>  
    <audio  autoplay>
  <source src="motd.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
    `);
  if (myStorage.getItem("score") === null) {
    myStorage.setItem("score", "0");
  } else {
    document.querySelector("#high-score").innerHTML =
      myStorage.getItem("score");
  }

  const game = new Game();

  game.start();
};

// Third Screen => Game Over
const buildGameOver = (score) => {
  buildDom(`
  <section id="outer">
    <section class="game-over">
    <img  id="game-over-text" src= "/images/GO1.png"/>
    <div id="scores">
    <h3 id="final-highscore" ">High score:  <span id="final-highscore">${myStorage.getItem(
      "score"
    )}</span></h3>
    <h3 class="end-text">Score: <span id="final-score">${score}</span></h3>
    <button id = "game"> TRY AGAIN</button>
    </div>


    </section>
    </section>
    `);

  const restartButton = document.querySelector("button");
  restartButton.addEventListener("click", buildGameScreen);
};

// When the window loads, then we will run the "buildSplashScreen" function
// "load" waits for the html and JS
window.addEventListener("load", buildSplashScreen);
