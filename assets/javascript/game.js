// create the targetNumber(game) which should be random
var myNumber = 0;
var targetNumber = targetNumberGen();
var wins = 0;
var losses = 0;
var crystals;

function numberBehindCrystals() {
    return {
        diamomd: {
            points: Math.floor(Math.random() * 12) +1,
            // imageUrl: "assets/images/diamomd.png"
        },
        ruby: {
            points: Math.floor(Math.random() * 12) +1,
            // imageUrl: "assets/images/ruby.png"
        },
        sapphire: {
            points: Math.floor(Math.random() * 12) +1,
            // imageUrl: "assets/images/sapphire.png"
        },
        zircon: {
            points: Math.floor(Math.random() * 12) +1,
            // imageUrl: "assets/images/zircon.png"
        }
    };
}


// RANDOM NUMBER GENERATOR
function targetNumberGen(){
    return Math.floor(Math.random() * 120) + 19;
}

function setupGame() {
    myNumber = 0;
    crystals = numberBehindCrystals;
    targetNumber = targetNumberGen();
    $("#random-number").text(targetNumber);
}

// Function that handles updating the page.
function updateDom(didUserWin) {
$("#score-area").empty();

if (didUserWin === true) {
  // Show victory message, restart the game, and render the new "current guess" number.
  $("#score-area").append($("<p>").text("You won!!"));
  setupGame();
  showMyNumber();
}
else if (didUserWin === false) {
  // Show defeat message, restart the game, and render the new "current guess" number.
  $("#score-area").append($("<p>").text("You lost!!"));
  setupGame();
  showMyNumber();
}

// GAMES WON AND GAMES LOST AREA TEXT ONLY
var winsTextArea = $("<span>").text(wins);
var lossesTextArea = $("<span>").text(losses);
// Create Text Area that says games Won and games Lost 
var pWins = $("<p>").text("Games Won: ");
var pLosses = $("<p>").text("Games Lost: ");
// The the number of scores go win 0 and lose 0
pWins.append(winsTextArea);
pLosses.append(lossesTextArea);
// write the (wins and loses in html)
$("#score-area").append(pWins);
$("#score-area").append(pLosses);
}

function renderCrystals() {
for (var key in crystals) {
  var crystalDiv = $("<div class='crystal-buttons-area' data-name='" + key + "'>");
  var crystalImg = $("<img alt='image' class='crystal-area'>").attr("src", crystals[key].imageUrl);
  crystalDiv.append(crystalImg);
  $("#crystal-area").append(crystalDiv);
}
}

function updateMyNumber(crystal) {
// Update our "current guess" number based on which crystal was clicked.
myNumber += crystals[crystal.attr("data-name")].points;
 }

function showMyNumber() {
    var scoreNum = $("<div id='bottom-area'>").text(myNumber);
    $("#score-number").html();
    $("#score-number").html(scoreNum);
}

// Call our functions to start the game!
setupGame();
updateDom();
renderCrystals();
showMyNumber();


// Here we created an on-click event(js) that responds to button clicks of the crystal image(html)
$(".crystal-image").on("click", function(event) {

   updateMyNumber($(this));
   showMyNumber();

// vvvv DONT TOUCH BELOW IT STAYED THE SAME DONT TOUCH BELOW IT STAYED THE SAME vvvv

// logic to check if my number matches the targetNumber
// this click event will be triggered with each click
// with each click my number will increase by random and be re-evaluated against the target
if (myNumber === targetNumber) {
    //if i win, add a score to the win and restart the page
    wins++;
    setupGame();
    updateDom(true);
}
// else if the my number exceeds the targetNumber...
else if (myNumber > targetNumber) {
    //if i lose, add a score to the losses and restart the page
    losses++;
    setupGame();
    updateDom(false);
}

});
