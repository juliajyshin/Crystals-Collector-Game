$(document).ready(function() {

var  wins = 0;
var losses = 0;
var myNumber = 0;
var targetNumber = randomNumGen();

var crystal = {
        diamond: {
            name: "Diamond",
            value: Math.floor(Math.random() * 12) + 1,
        },
        ruby: {
            name: "Ruby",
            value: Math.floor(Math.random() * 12) + 1,
        },
        sapphire: {
            name: "Sapphire",
            value: Math.floor(Math.random() * 12) + 1,
        },
        zircon: {
            name: "Zircon",
            value: Math.floor(Math.random() * 12) + 1,
        }
    };

  function randomNumGen() {
      return Math.floor(Math.random() * 102) + 19;
      $("guess-number").text(targetNumber);
    };

  var setGame = function() {
      myNumber = 0;
      targetNumber = randomNumGen();
      $("guess-number").text(targetNumber);
    };

  console.log("Score Number: " + myNumber);
  console.log("TARGET NUMBER " + targetNumber);

var checkWin = function() {
  if (myNumber > targetNumber) {
    alert("Sorry. You lost!");
    losses++;
    $("#count-losses").text(losses);
    setGame();
  }

  else if (myNumber === targetNumber) {
    alert("Congratulations! You Won!");
    wins++;
    $("#count-wins").text(wins);
    setGame();
  }
};

setGame();


var addValues = function(clickedCrystal) {
  myNumber += clickedCrystal.value;
  $("#score-number").text(myNumber);
  checkWin();
};



  $("#diamond").click(function() {
    addValues(crystal.diamond);
  });
  $("#ruby").click(function() {
    addValues(crystal.ruby);
  });
  $("#sapphire").click(function() {
    addValues(crystal.sapphire);
  });
  $("#zircon").click(function() {
    addValues(crystal.zircon);
  });

});