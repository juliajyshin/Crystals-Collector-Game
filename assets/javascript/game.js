
// Exexucte this code when DOM is fully loaded
$(document).ready(function () {
  // Setting up our target variables
  var wins = 0;
  var losses = 0;
  var myNumber = 0;
  var targetNumber = randomNumGen();
  // Generates random variables for our crystals
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
  // Function to create a random number between 19 and 120
  function randomNumGen() {
    return Math.floor(Math.random() * 102) + 19;
  };

  // Function that resets the game 
  var setGame = function () {
    // Make our current total number 0
    myNumber = 0;
    // Change tartget number everytime the game resets
    targetNumber = randomNumGen();
    // Display our target number on page
    $("#guessing-number").text(targetNumber);
  };

  // If the users number is larger than the target number (lose)
  var checkWin = function () {
    if (myNumber > targetNumber) {
      // Show victory message, restart the game, and render new number to guess
      alert("Sorry. You lost!");
      // Add 1 point to losing score
      losses++;
      $("#count-losses").text(losses);
      setGame();
    }
    // If the users number is equal to the target number (win)
    else if (myNumber === targetNumber) {
      // Show victory message, restart the game, and render new number to guess
      alert("Congratulations! You Won!");
      // Add 1 point to winning score
      wins++;
      $("#count-wins").text(wins);
      setGame();
    }
  };

  // Calls our functions to start the game
  setGame();

  // Grab random values add it to each crystal
  var addValues = function (clickedCrystal) {
    myNumber += clickedCrystal.value;
    $("#score-number").text(myNumber);
    checkWin();
  };

  $("#diamond").click(function () {
    addValues(crystal.diamond);
  });
  $("#ruby").click(function () {
    addValues(crystal.ruby);
  });
  $("#sapphire").click(function () {
    addValues(crystal.sapphire);
  });
  $("#zircon").click(function () {
    addValues(crystal.zircon);
  });

});